// resources/js/Pages/Dashboard.tsx
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

interface Props {
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export default function Dashboard({ user }: Props) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-semibold mb-4">
                                Welcome back, {user.name}!
                            </h2>
                            <p className="text-gray-600">
                                You're logged in to your dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}