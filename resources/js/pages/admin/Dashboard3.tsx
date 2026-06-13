import { Head } from '@inertiajs/react';

export default function Dashboard3() {
    return (
        <>
            <Head>
                <title>Fiscal Sentinel - AI Budget Integrity</title>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{
                __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    display: inline-block;
                    vertical-align: middle;
                }
                body {
                    background-color: #131315;
                }
            `}} />

            <div className="font-body-md text-on-surface bg-[#131315] min-h-screen">
                {/* Side Navigation */}
                <aside
                    className="fixed left-0 top-0 h-full flex flex-col z-40 h-screen w-64 border-r border-[#2D2D32] bg-[#1A1A1E] dark:bg-[#1A1A1E] font-['Space_Grotesk'] text-sm tracking-tight">
                    <div className="p-6">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#DF2225] text-2xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                            <div>
                                <h1 className="text-[#DF2225] font-bold tracking-tighter text-xl">FISCAL SENTINEL</h1>
                                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">AI Budget Integrity</p>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 mt-4">
                        <div className="px-3 space-y-1">
                            {/* Active Tab: Dashboard */}
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="dashboardv1">
                                <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                                <span>Dashboard V1</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="dashboardv2">
                                <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                                <span>Dashboard V2</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="dashboardv3">
                                <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                                <span>Dashboard V3</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="#">
                                <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                                <span>Audits</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="#">
                                <span className="material-symbols-outlined" data-icon="school">school</span>
                                <span>Schools</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="#">
                                <span className="material-symbols-outlined" data-icon="description">description</span>
                                <span>Reports</span>
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-sm text-gray-400 hover:text-white transition-colors hover:bg-[#2D2D32] group"
                                href="#">
                                <span className="material-symbols-outlined" data-icon="settings">settings</span>
                                <span>Settings</span>
                            </a>
                        </div>
                    </nav>
                    <div className="p-6 border-t border-[#2D2D32]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#2D2D32] flex items-center justify-center">
                                <span className="material-symbols-outlined text-xs">shield_person</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold truncate">ADMIN_ALPHA</p>
                                <p className="text-[10px] text-gray-500">Tier 1 Access</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Top Navigation */}
                <header
                    className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b border-[#2D2D32] bg-[#0D0D0F]/80 backdrop-blur-md flex items-center justify-between px-8 z-30 font-['Space_Grotesk'] font-medium">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-label-mono text-gray-500 uppercase tracking-widest">System Status: <span
                            className="text-green-500">Vigilant</span></span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">search</span>
                            <input
                                className="bg-[#0D0D0F] border border-[#2D2D32] rounded text-sm pl-10 pr-4 py-1.5 focus:outline-none focus:border-[#DF2225] transition-colors w-64"
                                placeholder="Search budget ID..." type="text" />
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                            <button className="hover:text-[#DF2225] transition-opacity opacity-80 hover:opacity-100">
                                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                            </button>
                            <button className="hover:text-[#DF2225] transition-opacity opacity-80 hover:opacity-100">
                                <span className="material-symbols-outlined" data-icon="settings">settings</span>
                            </button>
                            <div className="w-8 h-8 rounded-full border border-[#2D2D32] overflow-hidden">
                                <img alt="User" className="w-full h-full object-cover"
                                    data-alt="professional portrait of a government official in a dark suit with a neutral background"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrtzMEQVgbAZQ4yN0Ln13o2rJkvk0wldK6etp8bJS16GrI9x2xNMgoYAtwKDOlhTMpTB8q57V-w2wX1T5gjTjps-H9s_cn2PZAMfc5dtACPuVXERgZevB6Y0ha6JZvZ1VNQ_7jpa-q2hmXzqjM4A0iwjjwHWZvMsLxORvMXVaXBxjMFUGRz374JvIptVe-4G0mcbGiWe2BTpjPOYBJBf4-jrnfCHG1ez9Q2I8VoFDvIUb0cbZzVmOrn04IFYgnfptcJoQS3OH0UYx" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="ml-64 mt-16 p-8 min-h-screen bg-[#0D0D0F]">
                    {/* Hero Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Total Budget Audited */}
                        <div className="bg-[#1A1A1E] border border-[#2D2D32] p-6 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#DF2225]"></div>
                            <p className="text-xs font-label-mono text-gray-500 uppercase tracking-widest mb-1">Total Budget Audited</p>
                            <h2 className="text-headline-lg font-headline-lg text-on-surface">$1.2B</h2>
                            <div className="flex items-center gap-2 mt-2 text-green-500">
                                <span className="material-symbols-outlined text-xs">trending_up</span>
                                <span className="text-xs font-bold">+12.4% vs LY</span>
                            </div>
                            <div
                                className="absolute right-[-10px] bottom-[-10px] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                <span className="material-symbols-outlined text-8xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            </div>
                        </div>
                        {/* Anomalies Detected */}
                        <div className="bg-[#1A1A1E] border border-[#2D2D32] p-6 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#DF2225]"></div>
                            <p className="text-xs font-label-mono text-gray-500 uppercase tracking-widest mb-1">Anomalies Detected</p>
                            <h2 className="text-headline-lg font-headline-lg text-[#DF2225]">42</h2>
                            <div className="flex items-center gap-2 mt-2 text-[#DF2225]">
                                <span className="material-symbols-outlined text-xs">warning</span>
                                <span className="text-xs font-bold">14 CRITICAL</span>
                            </div>
                            <div
                                className="absolute right-[-10px] bottom-[-10px] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                <span className="material-symbols-outlined text-8xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                            </div>
                        </div>
                        {/* Funds Recovered */}
                        <div className="bg-[#1A1A1E] border border-[#2D2D32] p-6 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#DF2225]"></div>
                            <p className="text-xs font-label-mono text-gray-500 uppercase tracking-widest mb-1">Funds Recovered</p>
                            <h2 className="text-headline-lg font-headline-lg text-on-surface">$4.2M</h2>
                            <div className="flex items-center gap-2 mt-2 text-green-500">
                                <span className="material-symbols-outlined text-xs">payments</span>
                                <span className="text-xs font-bold">ROI: 8.2x</span>
                            </div>
                            <div
                                className="absolute right-[-10px] bottom-[-10px] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                <span className="material-symbols-outlined text-8xl"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>currency_exchange</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        {/* Real-time Anomaly Detection Chart */}
                        <div className="col-span-12 lg:col-span-8 bg-[#1A1A1E] border border-[#2D2D32] p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <span
                                        className="text-[10px] font-label-mono text-[#DF2225] border border-[#DF2225]/30 px-2 py-1 uppercase tracking-tighter">AI
                                        Precision: 99.8%</span>
                                    <h3 className="text-headline-md font-headline-md mt-2">Real-time Anomaly Detection</h3>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="text-xs bg-[#2D2D32] px-3 py-1 text-on-surface hover:bg-primary-container hover:text-white transition-colors">24H</button>
                                    <button className="text-xs border border-[#2D2D32] px-3 py-1 text-gray-400">7D</button>
                                    <button className="text-xs border border-[#2D2D32] px-3 py-1 text-gray-400">30D</button>
                                </div>
                            </div>
                            <div className="h-[300px] w-full relative flex items-end justify-between gap-1">
                                {/* Mock Chart Visualization */}
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[40%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[35%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[45%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[60%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div className="flex-1 bg-[#DF2225] h-[90%] rounded-t-sm relative group cursor-crosshair">
                                    <div
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#2D2D32] border border-[#DF2225] px-2 py-1 text-[10px] font-bold hidden group-hover:block whitespace-nowrap z-10">
                                        SPIKE: $1.2M Outlier
                                    </div>
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[55%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[40%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[30%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[45%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[50%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div className="flex-1 bg-[#DF2225] h-[75%] rounded-t-sm relative group cursor-crosshair"></div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[35%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[40%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[55%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                <div
                                    className="flex-1 bg-[#2D2D32] h-[45%] rounded-t-sm relative group hover:bg-[#DF2225]/40 transition-all cursor-crosshair">
                                </div>
                                {/* Baseline Gray Axis */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2D2D32]"></div>
                            </div>
                            <div className="flex justify-between mt-4 text-[10px] font-label-mono text-gray-500">
                                <span>00:00</span>
                                <span>04:00</span>
                                <span>08:00</span>
                                <span>12:00</span>
                                <span>16:00</span>
                                <span>20:00</span>
                                <span>23:59</span>
                            </div>
                        </div>
                        {/* Critical Alerts Panel */}
                        <div className="col-span-12 lg:col-span-4 bg-[#1A1A1E] border border-[#2D2D32] p-6">
                            <h3 className="text-headline-md font-headline-md mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#DF2225]"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
                                Critical Alerts
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-[#DF2225]/5 border-l-2 border-[#DF2225]">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] font-bold text-[#DF2225] uppercase tracking-widest">High
                                            Risk</span>
                                        <span className="text-[10px] text-gray-500">2m ago</span>
                                    </div>
                                    <p className="text-sm font-bold">Unusual vendor activity detected in District 7</p>
                                    <p className="text-xs text-gray-400 mt-1">Duplicated invoice entry for #V-99812 ($450,000)</p>
                                </div>
                                <div className="p-4 bg-[#2D2D32]/20 border-l-2 border-gray-600">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Medium
                                            Risk</span>
                                        <span className="text-[10px] text-gray-500">14m ago</span>
                                    </div>
                                    <p className="text-sm font-bold">Budget threshold exceeded: Tech Supplies</p>
                                    <p className="text-xs text-gray-400 mt-1">Variance of +22% detected in current procurement cycle.
                                    </p>
                                </div>
                                <div className="p-4 bg-[#2D2D32]/20 border-l-2 border-gray-600">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Medium
                                            Risk</span>
                                        <span className="text-[10px] text-gray-500">1h ago</span>
                                    </div>
                                    <p className="text-sm font-bold">Audit trail mismatch: School Lunch Program</p>
                                    <p className="text-xs text-gray-400 mt-1">Discrepancy in beneficiary counts vs supply requisition.
                                    </p>
                                </div>
                            </div>
                            <button
                                className="w-full mt-6 py-3 border border-[#2D2D32] text-xs font-bold text-gray-400 hover:bg-[#2D2D32] hover:text-white transition-all uppercase tracking-widest">
                                View All Security Events
                            </button>
                        </div>
                        {/* Recent Correction Actions */}
                        <div className="col-span-12 bg-[#1A1A1E] border border-[#2D2D32] overflow-hidden">
                            <div className="p-6 border-b border-[#2D2D32] flex items-center justify-between bg-[#1A1A1E]">
                                <h3 className="text-headline-md font-headline-md">Recent Correction Actions</h3>
                                <button
                                    className="bg-[#DF2225] text-white px-4 py-2 text-xs font-bold hover:bg-[#c00014] transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    Export Audit Logs
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr
                                            className="text-[10px] font-label-mono text-gray-500 uppercase tracking-widest border-b border-[#2D2D32]">
                                            <th className="px-6 py-4">Action ID</th>
                                            <th className="px-6 py-4">Entity/District</th>
                                            <th className="px-6 py-4">Amount Affected</th>
                                            <th className="px-6 py-4">Detection Method</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4 text-right">Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#2D2D32]">
                                        <tr className="hover:bg-[#2D2D32]/30 transition-colors">
                                            <td className="px-6 py-4 font-label-mono text-xs text-white">#FS-A7721</td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-bold">Northview High School</p>
                                                <p className="text-[10px] text-gray-500">Capital Improvements</p>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[#DF2225]">$122,500.00</td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className="bg-[#2D2D32] px-2 py-1 text-[10px] font-bold rounded">NEURAL_SCAN_V4</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="text-xs">Resolved</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-xs text-gray-500">Oct 24, 09:12 AM</td>
                                        </tr>
                                        <tr className="hover:bg-[#2D2D32]/30 transition-colors">
                                            <td className="px-6 py-4 font-label-mono text-xs text-white">#FS-A7722</td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-bold">Unified School District 12</p>
                                                <p className="text-[10px] text-gray-500">Payroll Disbursement</p>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[#DF2225]">$14,200.00</td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className="bg-[#2D2D32] px-2 py-1 text-[10px] font-bold rounded">PATTERN_RECOGNITION</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                    <span className="text-xs">Pending</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-xs text-gray-500">Oct 24, 08:45 AM</td>
                                        </tr>
                                        <tr className="hover:bg-[#2D2D32]/30 transition-colors">
                                            <td className="px-6 py-4 font-label-mono text-xs text-white">#FS-A7723</td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-bold">Riverside Tech Academy</p>
                                                <p className="text-[10px] text-gray-500">IT Infrastructure</p>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[#DF2225]">$302,110.00</td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className="bg-[#2D2D32] px-2 py-1 text-[10px] font-bold rounded">NEURAL_SCAN_V4</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="text-xs">Resolved</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-xs text-gray-500">Oct 23, 04:33 PM</td>
                                        </tr>
                                        <tr className="hover:bg-[#2D2D32]/30 transition-colors">
                                            <td className="px-6 py-4 font-label-mono text-xs text-white">#FS-A7724</td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-bold">District-wide Maintenance</p>
                                                <p className="text-[10px] text-gray-500">Operational Expenses</p>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[#DF2225]">$45,000.00</td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className="bg-[#2D2D32] px-2 py-1 text-[10px] font-bold rounded">MANUAL_TRIGGER</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                    <span className="text-xs">Pending</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right text-xs text-gray-500">Oct 23, 01:10 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Contextual FAB */}
                <button
                    className="fixed bottom-8 right-8 bg-[#DF2225] text-white w-14 h-14 rounded-sm flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-50">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                    <span className="sr-only">Initiate New Audit</span>
                </button>
            </div>
        </>
    );
}
