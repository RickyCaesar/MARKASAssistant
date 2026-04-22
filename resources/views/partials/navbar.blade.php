{{-- resources/views/partials/navbar.blade.php --}}
<nav x-data="{ mobileMenuOpen: false }" class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">

            {{-- Logo / Brand --}}
            <div class="flex-shrink-0 flex items-center">
                <a href="{{ url('/') }}" class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition">
                    🚀 MARKASAssistant
                </a>
            </div>

            {{-- Desktop Navigation Menu --}}
            <div class="hidden md:flex md:items-center md:space-x-4">
                <a href="{{ url('/') }}"
                    class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition {{ request()->is('/') ? 'text-indigo-600 font-semibold' : '' }}">
                    Home
                </a>
                <a href="{{ url('/features') }}"
                    class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition">
                    Features
                </a>
                <a href="{{ url('/pricing') }}"
                    class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition">
                    Pricing
                </a>

                {{-- Desktop: Login & Register Buttons --}}
                @guest
                    <div class="flex items-center space-x-2 ml-4">
                        <a href="{{ route('login') }}"
                            class="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-indigo-300 transition">
                            Login
                        </a>
                        <a href="{{ route('register') }}"
                            class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition">
                            Register
                        </a>
                    </div>
                @endguest

                {{-- Desktop: User Dropdown (Jika Sudah Login) --}}
                @auth
                    <div class="relative ml-3" x-data="{ userMenuOpen: false }">
                        <button @click="userMenuOpen = !userMenuOpen"
                            class="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none">
                            <span class="text-sm font-medium">{{ Auth::user()->name }}</span>
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>

                        {{-- Dropdown Menu --}}
                        <div x-show="userMenuOpen" @click.away="userMenuOpen = false"
                            x-transition:enter="transition ease-out duration-200"
                            x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-150"
                            x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95"
                            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200"
                            style="display: none;">

                            <a href="{{ route('dashboard') }}"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Dashboard
                            </a>
                            <a href="{{ route('profile') }}"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Profile
                            </a>
                            <hr class="my-1 border-gray-200">

                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit"
                                    class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                @endauth
            </div>

            {{-- Mobile Menu Button --}}
            <div class="md:hidden flex items-center">
                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="text-gray-700 hover:text-indigo-600 focus:outline-none">
                    <svg x-show="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg x-show="mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" style="display: none;">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    {{-- Mobile Menu --}}
    <div x-show="mobileMenuOpen" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
        x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0"
        x-transition:leave-end="opacity-0 -translate-y-2" class="md:hidden bg-white border-t border-gray-200"
        style="display: none;">

        <div class="px-4 py-3 space-y-2">
            <a href="{{ url('/') }}"
                class="block text-gray-700 hover:text-indigo-600 py-2 {{ request()->is('/') ? 'text-indigo-600 font-semibold' : '' }}">
                Home
            </a>
            <a href="{{ url('/features') }}" class="block text-gray-700 hover:text-indigo-600 py-2">
                Features
            </a>
            <a href="{{ url('/pricing') }}" class="block text-gray-700 hover:text-indigo-600 py-2">
                Pricing
            </a>

            {{-- Mobile: Login & Register --}}
            @guest
                <hr class="my-2 border-gray-200">
                <a href="{{ route('login') }}"
                    class="block w-full text-center text-gray-700 hover:text-indigo-600 py-2 border border-gray-300 rounded-md">
                    Login
                </a>
                <a href="{{ route('register') }}"
                    class="block w-full text-center bg-indigo-600 text-white hover:bg-indigo-700 py-2 rounded-md shadow-sm">
                    Register
                </a>
            @endguest

            {{-- Mobile: User Menu (Jika Login) --}}
            @auth
                <hr class="my-2 border-gray-200">
                <div class="text-sm text-gray-500 py-2">Signed in as <strong>{{ Auth::user()->name }}</strong></div>
                <a href="{{ route('dashboard') }}" class="block text-gray-700 hover:text-indigo-600 py-2">
                    Dashboard
                </a>
                <a href="{{ route('profile') }}" class="block text-gray-700 hover:text-indigo-600 py-2">
                    Profile
                </a>
                <form method="POST" action="{{ route('logout') }}" class="py-2">
                    @csrf
                    <button type="submit" class="block w-full text-left text-red-600 hover:text-red-700">
                        Logout
                    </button>
                </form>
            @endauth
        </div>
    </div>
</nav>
