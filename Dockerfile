# Gunakan base image PHP dengan FPM (FastCGI Process Manager)
FROM php:8.4-fpm

# Set direktori kerja di dalam container
WORKDIR /var/www

# Install dependensi sistem yang dibutuhkan oleh ekstensi PHP
# (libpng, libzip, dll) dan bersihkan cache apt untuk mengurangi ukuran image
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql zip gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer secara global
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Set permission untuk folder storage dan cache agar bisa ditulisi oleh Nginx/PHP
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]