<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', config('app.name', 'MARKASAssistant'))</title>
    
    {{-- Vite Assets --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-50 antialiased">
    
    {{-- Navbar Component --}}
    @include('partials.navbar')
    
    {{-- Main Content --}}
    <main class="pt-16">
        @yield('content')
    </main>
    
    {{-- Optional Footer --}}
    @include('partials.footer')
    
    {{-- Alpine.js untuk mobile menu --}}
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</body>
</html>