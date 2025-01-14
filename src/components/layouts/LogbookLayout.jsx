import React, { useState } from 'react';
import { ArrowUpDown, Clock, CheckCircle } from 'lucide-react';
import LogbookStatsCard from '../fragments/LogbookStatsCard';
import ActivityModal from '../fragments/Activity';

const Logbook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const logbookData = [
    {
      tanggal: '13 Jan 2024',
      aktivitas: 'Implementasi fitur login dan autentikasi menggunakan JWT Token Progress: 100%',
      dokumentasi: 'View',
      status: 'Approved',
      paraf: 'Paraf'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Logbook Aktivitas</h1>
        <div className="space-x-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-flex items-center"
          >
            <span className="text-xl mr-2">+</span> Tambah Aktivitas
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg inline-flex items-center">
            <ArrowUpDown className="mr-2 h-5 w-5" /> Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <LogbookStatsCard 
          icon={<ArrowUpDown className="text-blue-600 h-6 w-6" />}
          title="Total Entries"
          value="28"
          color="bg-blue-100"
        />
        <LogbookStatsCard 
          icon={<Clock className="text-orange-500 h-6 w-6" />}
          title="Pending Review"
          value="2"
          color="bg-orange-100"
        />
        <LogbookStatsCard 
          icon={<CheckCircle className="text-green-600 h-6 w-6" />}
          title="Approved"
          value="26"
          color="bg-green-100"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4">Tanggal</th>
                <th className="text-left py-4 px-4">Aktivitas</th>
                <th className="text-left py-4 px-4">Dokumentasi</th>
                <th className="text-left py-4 px-4">Status</th>
                <th className="text-left py-4 px-4">Paraf</th>
              </tr>
            </thead>
            <tbody>
              {logbookData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4">{item.tanggal}</td>
                  <td className="py-4 px-4 max-w-md">{item.aktivitas}</td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:underline flex items-center">
                      <ArrowUpDown className="mr-1 h-4 w-4" />
                      {item.dokumentasi}
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-gray-600 hover:text-gray-800 flex items-center">
                      <ArrowUpDown className="mr-1 h-4 w-4" />
                      {item.paraf}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">Showing 1 to 10 of 20 entries</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded text-gray-600">Previous</button>
            <button className="px-4 py-2 border rounded bg-gray-50">1</button>
            <button className="px-4 py-2 border rounded">2</button>
            <button className="px-4 py-2 border rounded text-gray-600">Next</button>
          </div>
        </div>
      </div>

      {/* Activity Modal */}
      <ActivityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Logbook;