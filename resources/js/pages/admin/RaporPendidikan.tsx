import AdminLayout from "@/layouts/admin/AdminLayout";

export default function RaporPendidikan() {
    return (
        <>
            <Header />
            <main className="ml-64 p-8">
                <h1 className="text-2xl font-bold text-white">
                    Rapor Pendidikan
                </h1>
                <p className="text-gray-400">
                    Ini adalah halaman untuk melihat laporan pendidikan.
                </p>
            </main>
        </>
    );
}
