@extends('layouts.app')

@section('title', 'Home - MARKASAssistant')

@section('content')
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to <span class="text-indigo-600">MARKASAssistant</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your ultimate assistant for managing tasks efficiently and effectively.
        </p>
        
        @guest
            <div class="mt-10 flex justify-center space-x-4">
                <a href="{{ route('register') }}" class="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-md text-lg font-medium shadow-md transition">
                    Get Started
                </a>
                <a href="{{ route('login') }}" class="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-3 rounded-md text-lg font-medium border border-indigo-600 shadow-sm transition">
                    Login
                </a>
            </div>
        @endguest
        
        @auth
            <div class="mt-10">
                <a href="{{ route('dashboard') }}" class="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-md text-lg font-medium shadow-md transition">
                    Go to Dashboard
                </a>
            </div>
        @endauth
    </div>
</div>
@endsection