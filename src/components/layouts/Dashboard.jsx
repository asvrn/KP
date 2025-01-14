import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import "../../index.css";

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Welcome Card */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold mb-2">Selamat Datang, Ahmad Fauzi</h1>
                        <p className="text-gray-600">Mahasiswa Magang - Teknik Informatika</p>
                    </div>
                    <div className="text-right">
                        <div className="text-gray-600">Masa Magang</div>
                        <div className="text-red-500 text-xl font-medium">20 Hari Tersisa</div>
                    </div>
                </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <img src="/api/placeholder/200/200" alt="QR Code" className="mb-4" />
                        <p className="text-gray-600">QR Code Anda</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-6">Status Absensi Hari Ini</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Clock className="text-blue-500" />
                                <div>
                                    <div className="text-gray-600">Jam Masuk</div>
                                    <div className="font-medium">08:00:23</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="text-green-500" />
                                <div>
                                    <div className="text-gray-600">Status Lokasi</div>
                                    <div className="font-medium">Terverifikasi ✓</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="text-red-500" />
                                <div>
                                    <div className="text-gray-600">Jam Keluar</div>
                                    <div className="font-medium">17:00:23</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-gray-600 mb-2">Total Kehadiran</h3>
                    <div className="text-xl font-bold mb-4">15/20 Hari</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-gray-600 mb-2">Logbook Terisi</h3>
                    <div className="text-xl font-bold mb-4">15/20 Hari</div>
                    <div className="text-sm text-gray-500">Last updated: Today</div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-gray-600 mb-2">Status Laporan</h3>
                    <div className="text-orange-500 font-medium mb-4">In Review</div>
                    <div className="text-sm text-gray-500">Submitted 2 days ago</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;