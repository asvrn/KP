import React, { useState } from 'react';
import { Calendar, Upload, X } from 'lucide-react';

const ActivityModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    tanggal: '',
    deskripsi: '',
    progress: '',
    bukti: null
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Tambah Aktivitas</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Tanggal Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Tanggal</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({...formData, tanggal: e.target.value})}
                />
                <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
              </div>
            </div>

            {/* Deskripsi Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Deskripsi</label>
              <textarea
                className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan deskripsi aktivitas..."
                value={formData.deskripsi}
                onChange={(e) => setFormData({...formData, deskripsi: e.target.value})}
              />
            </div>

            {/* Progress Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Progress</label>
              <input
                type="text"
                placeholder="Masukkan progress..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.progress}
                onChange={(e) => setFormData({...formData, progress: e.target.value})}
              />
            </div>

            {/* File Upload Field */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Upload Bukti (jika ada)</label>
              <div className="border rounded-lg p-3 bg-gray-50">
                <div className="flex items-center">
                  <Upload className="text-gray-400 mr-2" size={20} />
                  <input
                    type="file"
                    className="w-full text-gray-500 focus:outline-none"
                    onChange={(e) => setFormData({...formData, bukti: e.target.files[0]})}
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Ajukan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;