import { Head } from "@inertiajs/react";
import AdminLayout from "@/layouts/admin/AdminLayout";

// ponytail: static help page, no props/state needed

const sections = [
    {
        title: "Getting Started",
        icon: "rocket_launch",
        content:
            "MARKAS Assistant helps you monitor and audit budget integrity across your organization. Navigate using the sidebar to access dashboards and reports.",
    },
    {
        title: "Dashboard Overview",
        icon: "dashboard",
        content:
            "Each dashboard provides a different perspective on your data. Use the filters and time ranges to drill down into specific metrics.",
    },
    {
        title: "Rapor Pendidikan",
        icon: "school",
        content:
            "View and analyze educational performance indicators. Track progress across districts and identify areas needing attention.",
    },
    {
        title: "Reports & Export",
        icon: "description",
        content:
            "Generate detailed audit reports and export data in various formats for further analysis or compliance documentation.",
    },
];

export default function Help() {
    return (
        <AdminLayout>
            <Head title="Help" />

            <div className="max-w-4xl mx-auto space-y-8">
                <div className="border-b border-[#2D2D32] pb-6">
                    <h1 className="text-headline-xl font-headline-xl text-on-surface mb-2">
                        Help Center
                    </h1>
                    <p className="text-body-lg font-body-lg text-on-surface-variant">
                        Documentation and guidance for using MARKAS Assistant
                    </p>
                </div>

                <div className="grid gap-6">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="bg-[#1A1A1E] border border-[#2D2D32] p-6 hover:border-[#DF2225]/30 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-[#DF2225] text-2xl flex-shrink-0 mt-0.5">
                                    {section.icon}
                                </span>
                                <div>
                                    <h2 className="text-headline-md font-headline-md text-on-surface mb-2">
                                        {section.title}
                                    </h2>
                                    <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
