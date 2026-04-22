// resources/js/Layouts/AuthenticatedLayout.tsx
import { PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function AuthenticatedLayout({ 
    children 
}: PropsWithChildren) {
    const { user } = usePage().props as { user?: User };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold text-indigo-600">
                                🚀 MARKASAssistant
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    <span className="text-gray-700">{user.name}</span>
                                    <Link 
                                        href="/logout" 
                                        method="post" 
                                        as="button"
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                                        Login
                                    </Link>
                                    <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}