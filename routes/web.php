<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Welcome Page
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('auth/Signup');
})->name('register');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Protected Routes (Hanya untuk user login dan terverifikasi)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboardv1', function () {
        return Inertia::render('admin/Dashboard', [
            'user' => Auth::user(),
        ]);
    })->name('dashboard1');
    
    Route::get('/dashboardv2', function () {
        return Inertia::render('dashboard', [
            'user' => Auth::user(),
        ]);
    })->name('dashboard2');
});

// Contoh route lain dengan Inertia
Route::get('/features', function () {
    return Inertia::render('Features');
})->name('features');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');