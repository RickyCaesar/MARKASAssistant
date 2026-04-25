# 🚀 MARKASAssistant

[![Laravel](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=flat-square&logo=laravel)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.4-777BB4?style=flat-square&logo=php)](https://php.net)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=mysql)](https://mysql.com)
[![Docker](https://img.shields.io/badge/Docker-29.x-2496ED?style=flat-square&logo=docker)](https://docker.com)

**MARKASAssistant** adalah aplikasi web berbasis **Laravel 13.x** yang berjalan sepenuhnya di dalam lingkungan **Docker Desktop** menggunakan arsitektur multi-container (Nginx, PHP 8.4-FPM, MySQL 8.0).

---

## 📑 Daftar Isi

- [Prasyarat](#-prasyarat)
- [Instalasi Cepat](#-instalasi-cepat)
- [Struktur Proyek](#-struktur-proyek)
- [Konfigurasi](#-konfigurasi)
- [Perintah Sehari-hari](#-perintah-sehari-hari)
- [Kredensial Default](#-kredensial-default)
- [Pembersihan Total](#-pembersihan-total)

---

## 💻 Prasyarat

Pastikan software berikut sudah terinstal di sistem Anda:

| Software                  | Versi Minimal | Cek Instalasi              |
| :------------------------ | :------------ | :------------------------- |
| **Docker Desktop**        | 4.30+         | `docker --version`         |
| **Docker Compose**        | 2.20+         | `docker compose version`   |
| **WSL2** *(Windows only)* | Kernel 5.10+  | `wsl --status`             |
| **Git** *(opsional)*      | 2.30+         | `git --version`            |

---

## ⚡ Instalasi Cepat

### Step 1: Clone Proyek

```bash
git clone https://github.com/RickyCaesar/MARKASAssistant.git
cd MARKASAssistant
```

---

### Step 2: Download Laravel via Docker

**Linux / macOS / Git Bash:**

```bash
docker run --rm -v "$(pwd):/app" -w /app composer:latest create-project laravel/laravel .
```

**Windows PowerShell:**

```powershell
docker run --rm -v "${PWD}:/app" -w /app composer:latest create-project laravel/laravel .
```

> ⚠️ **Catatan:** Di Windows PowerShell, gunakan `${PWD}` bukan `$(pwd)`. Perintah `$(pwd)` akan menyebabkan error `invalid reference format`.

---

### Step 3: Setup Docker

#### 📄 Dockerfile

```dockerfile
FROM php:8.4-fpm

WORKDIR /var/www

# Install dependensi sistem + Node.js 20.x LTS
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql zip gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Verifikasi instalasi Node.js (opsional)
RUN node -v && npm -v

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy seluruh kode aplikasi
COPY . .

# Set permission untuk folder storage dan cache
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
EXPOSE 5173  # Port untuk Vite dev server

CMD ["php-fpm"]
```

---

#### 📄 docker-compose.yml

```yaml

version: '3.8'

services:
  # Layanan 1: Web Server (Nginx)
  webserver:
    image: nginx:alpine
    container_name: laravel_nginx_desktop
    restart: unless-stopped
    ports:
      - "80:80" # Port di Komputer : Port di Container
    volumes:
      - .:/var/www
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - app
    networks:
      - laravel_net

  # Layanan 2: PHP Processor (Aplikasi Laravel)
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: laravel_php_desktop
    restart: unless-stopped
    working_dir: /var/www
    volumes:
      - .:/var/www
    depends_on:
      - db
    networks:
      - laravel_net

  # Layanan 3: Database (MySQL)
  db:
    image: mysql:8.0
    container_name: laravel_mysql_desktop
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: laravel_docker_db
      MYSQL_USER: docker_user
      MYSQL_PASSWORD: rahasia123
      MYSQL_ROOT_PASSWORD: root_password_kuat
    ports:
      - "3307:3306" # Gunakan port 3307 agar tidak bentrok dengan MySQL lokal di Windows/Mac
    volumes:
      - db_data_desktop:/var/lib/mysql
    networks:
      - laravel_net

  # Layanan 4: Vite (Frontend Development)
  vite:
    image: node:20
    container_name: laravel_vite_desktop
    working_dir: /var/www
    volumes:
      - .:/var/www
    ports:
      - "5173:5173"
    networks:
      - laravel_net
    command: sh -c "npm install && npm run dev -- --host"

networks:
  laravel_net:
    driver: bridge

volumes:
  db_data_desktop:
    driver: local

```

---

#### 📄 nginx/default.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /var/www/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php index.html;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass app:9000;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

---

### Step 4: Jalankan Container

```bash
docker-compose up -d --build
```

---

### Step 5: Setup Laravel

```bash
docker exec -it laravel_php_desktop bash
cp .env.example .env
composer install
php artisan key:generate
chmod -R 775 /var/www/storage /var/www/bootstrap/cache
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
exit
```

---

### Step 6: Konfigurasi Database

Edit file `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel_docker_db
DB_USERNAME=docker_user
DB_PASSWORD=rahasia123
```

---

### Step 7: Migrasi & Seed Database

```bash
docker exec -it laravel_php_desktop php artisan migrate
docker exec -it laravel_php_desktop php artisan db:seed
```

---

### Step 8: Akses Aplikasi

Buka browser dan kunjungi:

```
http://localhost
```

---

## 📁 Struktur Proyek

```
MARKASAssistant/
├── Dockerfile
├── docker-compose.yml
├── .env
├── nginx/
│   └── default.conf
├── app/
├── bootstrap/
├── config/
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── database.sqlite
├── public/
├── resources/
├── routes/
├── storage/
├── tests/
├── composer.json
└── README.md
```

---

## 🔧 Konfigurasi

| Key             | Value             |
| --------------- | ----------------- |
| `APP_NAME`      | MARKASAssistant   |
| `APP_ENV`       | local             |
| `APP_DEBUG`     | true              |
| `DB_CONNECTION` | mysql             |
| `DB_HOST`       | db                |
| `DB_PORT`       | 3306              |
| `DB_DATABASE`   | laravel_docker_db |

---

## 📋 Perintah Sehari-hari

### Docker

```bash
docker-compose up -d          # Jalankan semua container
docker-compose down            # Hentikan semua container
docker-compose logs -f         # Lihat log secara realtime
docker-compose ps              # Lihat status container
docker-compose restart         # Restart semua container
```

### Laravel (Artisan)

```bash
docker exec -it laravel_php_desktop php artisan migrate        # Jalankan migrasi
docker exec -it laravel_php_desktop php artisan migrate:fresh   # Reset & migrasi ulang
docker exec -it laravel_php_desktop php artisan db:seed         # Jalankan seeder
docker exec -it laravel_php_desktop php artisan route:list      # Lihat daftar route
docker exec -it laravel_php_desktop php artisan tinker          # Buka REPL interaktif
docker exec -it laravel_php_desktop php artisan cache:clear     # Bersihkan cache
```

### Composer

```bash
docker exec -it laravel_php_desktop composer install            # Install dependensi
docker exec -it laravel_php_desktop composer update             # Update dependensi
docker exec -it laravel_php_desktop composer require <package>  # Tambah package baru
```

---

## 🔐 Kredensial Default

| Parameter     | Nilai               |
| ------------- | ------------------- |
| **Host**      | `127.0.0.1`         |
| **Port**      | `3307`              |
| **Database**  | `laravel_docker_db` |
| **Username**  | `docker_user`       |
| **Password**  | `rahasia123`        |
| **Root Pass** | `root_password_kuat`|

> ⚠️ **Penting:** Ganti semua password default sebelum deploy ke production!

---

## 🧹 Pembersihan Total

```bash
# Hentikan container & hapus volume database
docker-compose down -v

# Hapus volume yang tidak terpakai
docker volume prune

# Build ulang dari awal
docker-compose up -d --build
```

---

## 📊 Monitoring

Gunakan **Docker Desktop** untuk:

- 📦 Melihat status container
- 📈 Monitoring penggunaan resource (CPU, RAM)
- 💻 Akses terminal container langsung
- 📋 Melihat log secara realtime

Atau via CLI:

```bash
docker stats                   # Monitoring resource realtime
docker-compose logs -f app     # Log khusus service app
docker-compose logs -f db      # Log khusus service database
```

---

## 🐛 Troubleshooting

| Masalah | Solusi |
| ------- | ------ |
| `invalid reference format` di PowerShell | Gunakan `${PWD}` bukan `$(pwd)` |
| Port 80 sudah dipakai | Ganti port di `docker-compose.yml` (misal: `"8080:80"`) |
| Port 3307 sudah dipakai | Ganti port mapping di service `db` |
| Permission denied pada `storage/` | `docker exec -it laravel_php_desktop chmod -R 775 storage` |
| Container app gagal start | Cek log: `docker-compose logs app` |

---

## 📝 Catatan

- Edit file langsung di folder project (bukan di dalam container), karena volume di-mount secara bind mount
- Data database tersimpan di Docker volume `db_data_desktop` dan akan persist meski container dihentikan
- Port MySQL eksternal menggunakan `3307` agar tidak bentrok dengan MySQL lokal
- File `.env` **tidak** di-commit ke Git (sudah ada di `.gitignore`)

---

## 📄 Lisensi

Proyek ini digunakan untuk pengembangan internal MARKASAssistant.

---

<p align="center">Dibuat dengan ❤️ Oleh Ricky C.A.T menggunakan Laravel & Docker</p>