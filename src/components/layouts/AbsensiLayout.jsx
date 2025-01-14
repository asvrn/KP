import React, { useState } from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import StatsCard from '../fragments/StatsCard';
import PermissionModal from '../fragments/Permission';

const AbsensiLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const attendanceData = [
    {
      tanggal: '13 Jan 2024',
      status: 'Hadir',
      waktu: '08:00:23',
      ketepatan: 'Telat',
      keterangan: '-'
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPermission = (formData) => {
    console.log('Permission form submitted:', formData);
    // Add your API call or data processing logic here
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Absensi</h1>
        <div className="space-x-4">
          <button 
            onClick={handleOpenModal}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Ajukan Izin
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Download Rekap
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          icon={<CheckCircle className="text-blue-500" size={24} />}
          title="Total Kehadiran"
          value="18/20"
          color="bg-blue-100"
        />
        <StatsCard 
          icon={<CheckCircle className="text-green-500" size={24} />}
          title="Hadir Tepat Waktu"
          value="16"
          color="bg-green-100"
        />
        <StatsCard 
          icon={<Clock className="text-orange-500" size={24} />}
          title="Izin"
          value="2"
          color="bg-orange-100"
        />
        <StatsCard 
          icon={<XCircle className="text-red-500" size={24} />}
          title="Alpha"
          value="0"
          color="bg-red-100"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Riwayat Absensi</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Tanggal</th>
                <th className="text-left py-4">Status</th>
                <th className="text-left py-4">Waktu</th>
                <th className="text-left py-4">Ketepatan Waktu</th>
                <th className="text-left py-4">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{item.tanggal}</td>
                  <td className="py-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4">{item.waktu}</td>
                  <td className="py-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                      {item.ketepatan}
                    </span>
                  </td>
                  <td className="py-4">{item.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">Showing 1 to 10 of 20 entries</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 border rounded bg-gray-50">1</button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

      <PermissionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPermission}
      />
    </div>
  );
};

export default AbsensiLayout;