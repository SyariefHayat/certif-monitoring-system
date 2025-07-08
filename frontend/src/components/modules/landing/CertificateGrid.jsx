import React from 'react';
import CertificateCard from './CertificateCard';

const CertificateGrid = ({ certificates }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
        ))}
    </div>
);

export default CertificateGrid;