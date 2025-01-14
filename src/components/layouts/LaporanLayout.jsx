import React, { useState } from 'react';
import { ArrowUpDown, Upload } from 'lucide-react';
import UploadLaporan from '../fragments/UploadLaporan';

const Laporan = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  
  const submissionHistory = [
    {
      versi: 'v1.2',
      tanggal: '13 Jan 2024',
      status: 'In Review',
      feedback: 'Menunggu review dari pembimbing',
      file: 'Download'
    },
    {
      versi: 'v1.1',
      tanggal: '10 Jan 2024',
      status: 'Need Revision',
      feedback: 'Perlu penambahan pada bab metodologi',
      file: 'Download'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Laporan Akhir Magang</h1>
        <button 
          onClick={() => setIsUploadOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-flex items-center hover:bg-blue-700"
        >
          <Upload className="mr-2 h-5 w-5" /> Upload Laporan
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Status Laporan</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Deadline Pengumpulan:</span>
            <span className="text-gray-800">31 Jan 2024</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Riwayat Pengumpulan</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4">Versi</th>
                <th className="text-left py-4 px-4">Tanggal</th>
                <th className="text-left py-4 px-4">Status</th>
                <th className="text-left py-4 px-4">Feedback</th>
                <th className="text-left py-4 px-4">File</th>
              </tr>
            </thead>
            <tbody>
              {submissionHistory.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4">{item.versi}</td>
                  <td className="py-4 px-4">{item.tanggal}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'In Review' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">{item.feedback}</td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:underline inline-flex items-center">
                      <ArrowUpDown className="mr-1 h-4 w-4" />
                      {item.file}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <UploadLaporan 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
      />
    </div>
  );
};

export default Laporan;