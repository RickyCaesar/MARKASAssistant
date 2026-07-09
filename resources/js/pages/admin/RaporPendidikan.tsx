import AdminLayout from "@/layouts/admin/AdminLayout";
import Dialog from "@/components/die_dump/dialog2";
import { useState } from "react";

export default function RaporPendidikan() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                    <button
                        className="h-10 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Buka Dialog
                    </button>
                </div>
                <Dialog
                    isOpen={isDialogOpen}
                    icon="info"
                    onClose={() => setIsDialogOpen(false)}
                    link="/dashboardv3"
                    title="Informasi Rapor Pendidikan"
                    message="Ini adalah informasi terkait rapor pendidikan."
                    type="redirect"
                />
            </AdminLayout>
        </>
    );
}
