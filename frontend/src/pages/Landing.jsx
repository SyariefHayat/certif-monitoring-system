import React, { useState } from 'react';

import Footer from '@/components/modules/landing/Footer';
import Header from '@/components/modules/landing/Header';
import { LIST_CERTIFICATES } from '@/contants/listCertificates';
import StatsSection from '@/components/modules/landing/StatsSection';
import FilterButtons from '@/components/modules/landing/FilterButtons';
import CertificateGrid from '@/components/modules/landing/CertificateGrid';

const Landing = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const filteredCertificates = LIST_CERTIFICATES.filter(cert => {
        if (selectedFilter === 'all') return true;
        return cert.status.toLowerCase() === selectedFilter;
    });

    const stats = {
        total: LIST_CERTIFICATES.length,
        active: LIST_CERTIFICATES.filter(c => c.status === 'Active').length,
        expired: LIST_CERTIFICATES.filter(c => c.status === 'Expired').length,
        expiring: LIST_CERTIFICATES.filter(c => c.status === 'Expiring').length
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-Poppins">
            <Header />
            
            <main className="max-w-7xl mx-auto p-4 space-y-6">
                <StatsSection stats={stats} />
                
                <FilterButtons 
                selectedFilter={selectedFilter} 
                onFilterChange={setSelectedFilter} 
                />
                
                <CertificateGrid certificates={filteredCertificates} />
            </main>

            <Footer />
        </div>
    );
};

export default Landing;