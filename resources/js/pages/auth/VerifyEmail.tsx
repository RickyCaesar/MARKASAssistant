import { Link, useForm, Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/email/verification-notification');
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <Head title="Email Verification" />

            <div className="w-full sm:max-w-md mt-6 px-6 py-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="text-center pb-2">
                        <div className="flex justify-center mb-4">
                            <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <CardTitle className="text-2xl text-indigo-600">Verifikasi Email Anda</CardTitle>
                        <CardDescription className="pt-2 text-base">
                            Terima kasih telah mendaftar! Sebelum memulai, mohon verifikasi alamat email Anda dengan mengeklik tautan yang baru saja kami kirimkan kepada Anda.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-4">
                        {status === 'verification-link-sent' && (
                            <div className="mb-6 font-medium text-sm text-green-600 bg-green-50 p-4 rounded-md border border-green-200 text-center">
                                Tautan verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.
                            </div>
                        )}

                        <form onSubmit={submit} className="flex flex-col space-y-4">
                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing ? 'Mengirim Ulang...' : 'Kirim Ulang Email Verifikasi'}
                            </Button>

                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="text-sm text-gray-600 hover:text-gray-900 underline text-center"
                            >
                                Keluar (Logout)
                            </Link>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
