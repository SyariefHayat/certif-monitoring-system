import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  Building,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

const contoh = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const certificates = [
    { id: 1, name: "ISO 9001", subtitle: "Sistem Manajemen Mutu", validFrom: "19 Agust 2024", validTo: "11 Sep 2027", status: "Active", certification: "Sertifikat", surveillance: "Surveillance 1", progress: 85 },
    { id: 2, name: "ISO 14001", subtitle: "Sistem Manajemen Lingkungan", validFrom: "19 Agust 2024", validTo: "11 Sep 2027", status: "Active", certification: "Sertifikat", surveillance: "Surveillance 1", progress: 75 },
    { id: 3, name: "ISO 45001", subtitle: "Sistem Manajemen K3", validFrom: "30 Mei 2023", validTo: "27 Apr 2026", status: "Active", certification: "Sertifikat", surveillance: "Surveillance 2", progress: 60 },
    { id: 4, name: "ISO 50001", subtitle: "Sistem Manajemen Energi", validFrom: "14 Agust 2024", validTo: "17 Jun 2025", status: "Expired", certification: "Sertifikat", surveillance: "Renewal", progress: 0 },
    { id: 5, name: "ISO 37001", subtitle: "Sistem Manajemen Anti Penyuapan", validFrom: "16 Jun 2023", validTo: "9 Agust 2026", status: "Active", certification: "Sertifikat", surveillance: "Surveillance 2", progress: 90 },
    { id: 6, name: "ISO 27001", subtitle: "Sistem Manajemen Keamanan Informasi", validFrom: "25 Sep 2024", validTo: "24 Sep 2027", status: "Active", certification: "Sertifikat", surveillance: "Surveillance 1", progress: 95 }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Expired': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'Expiring': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const filteredCertificates = certificates.filter(cert => {
    if (selectedFilter === 'all') return true;
    return cert.status.toLowerCase() === selectedFilter;
  });

  const stats = {
    total: certificates.length,
    active: certificates.filter(c => c.status === 'Active').length,
    expired: certificates.filter(c => c.status === 'Expired').length,
    expiring: certificates.filter(c => c.status === 'Expiring').length
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building className="h-6 w-6 text-teal-600" />
            <h1 className="text-xl font-semibold">Certificate System</h1>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm">Sertifikat Sistem</Button>
            <Button variant="ghost" size="sm">Sertifikat Produk</Button>
            <Button variant="ghost" size="sm">Pemeliharaan Data</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Total', value: stats.total, color: 'text-gray-900', icon: <Building className="text-blue-500" /> },
            { title: 'Active', value: stats.active, color: 'text-green-600', icon: <CheckCircle className="text-green-500" /> },
            { title: 'Expired', value: stats.expired, color: 'text-red-600', icon: <XCircle className="text-red-500" /> },
            { title: 'Expiring Soon', value: stats.expiring, color: 'text-orange-600', icon: <AlertTriangle className="text-orange-500" /> },
          ].map((stat, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-full">
                  {stat.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2">
          {['all', 'active', 'expired'].map(key => (
            <Button
              key={key}
              variant={selectedFilter === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCertificates.map(cert => (
            <Card key={cert.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white w-9 h-9 flex items-center justify-center rounded-md font-semibold">
                    {cert.id}
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold text-gray-800">{cert.name}</CardTitle>
                    <p className="text-xs text-gray-500">{cert.subtitle}</p>
                  </div>
                  <div className="ml-auto">{getStatusIcon(cert.status)}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Berlaku: {cert.validFrom} - {cert.validTo}
                </div>
                <div>
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span className="font-semibold text-gray-700">{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        cert.status === 'Expired'
                          ? 'bg-red-500'
                          : cert.progress >= 80
                          ? 'bg-green-500'
                          : cert.progress >= 60
                          ? 'bg-yellow-500'
                          : 'bg-orange-500'
                      }`}
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 text-xs">
                  <Badge variant="secondary">{cert.certification}</Badge>
                  <Badge variant="outline">{cert.surveillance}</Badge>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <Badge variant={cert.status === 'Active' ? 'default' : 'destructive'}>{cert.status}</Badge>
                  <Button variant="ghost" size="sm" className="text-teal-600 hover:underline">
                    Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t mt-10 py-4 text-sm text-gray-500 text-center">
        Department of System Management and EQMS © 2024
      </footer>
    </div>
  );
};

export default contoh;