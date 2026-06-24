import AdminLayout from "@/layouts/admin/AdminLayout";

export default function RaporPendidikan() {
    return (
        <>
            <AdminLayout>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-white">
                        Rapor Pendidikan
                    </h1>
                    <p className="text-white">
                        Halaman ini menampilkan informasi terkait rapor
                        pendidikan.
                    </p>
                </div>
            </AdminLayout>
        </>
    );
}
