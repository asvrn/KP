import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import Navbar from '../fragments/Navbar';

const ProfileLayout = () => {
  const [personalInfo, setPersonalInfo] = useState({
    namaLengkap: 'Ahmad Fauzi',
    nim: '2211523039',
    email: 'ahmadfauzi@gmail.com',
    telepon: '082263653871',
    institusi: 'Universitas Andalas',
    alamat: 'jl. padang panjang'
  });

  const [passwords, setPasswords] = useState({
    passwordLama: '',
    passwordBaru: '',
    konfirmasiPassword: ''
  });

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSimpanPerubahan = (e) => {
    e.preventDefault();
    console.log('Saving changes:', personalInfo);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    console.log('Updating password:', passwords);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">Informasi Pribadi</h2>
          
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="/images/avatar.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full"
              />
              <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSimpanPerubahan} className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                name="namaLengkap"
                value={personalInfo.namaLengkap}
                onChange={handlePersonalInfoChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">NIM</label>
              <input
                type="text"
                name="nim"
                value={personalInfo.nim}
                readOnly
                className="w-full p-2 border rounded bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Nomor Teelepon</label>
              <input
                type="tel"
                name="telepon"
                value={personalInfo.telepon}
                onChange={handlePersonalInfoChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Institusi</label>
              <input
                type="text"
                name="institusi"
                value={personalInfo.institusi}
                onChange={handlePersonalInfoChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Alamat</label>
              <input
                type="text"
                name="alamat"
                value={personalInfo.alamat}
                onChange={handlePersonalInfoChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>

        {/* Password Update Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Password Lama</label>
              <input
                type="password"
                name="passwordLama"
                value={passwords.passwordLama}
                onChange={handlePasswordChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Password Baru</label>
              <input
                type="password"
                name="passwordBaru"
                value={passwords.passwordBaru}
                onChange={handlePasswordChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Konfirmasi Password</label>
              <input
                type="password"
                name="konfirmasiPassword"
                value={passwords.konfirmasiPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>

        {/* Status Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Informasi Pribadi</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Status Magang</p>
                <p className="text-green-500 font-medium">Aktif</p>
              </div>
              <div>
                <p className="text-gray-600">Periode Magang</p>
                <p className="font-medium">6 Jan 2025 - 20 Feb 2025</p>
              </div>
              <div>
                <p className="text-gray-600">Sisa Waktu</p>
                <p className="font-medium">24 Hari</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Aktivitas Terakhir</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-medium">Login terakhir</p>
                  <p className="text-gray-500 text-sm">Today, 08:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="font-medium">Password diubah</p>
                  <p className="text-gray-500 text-sm">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;