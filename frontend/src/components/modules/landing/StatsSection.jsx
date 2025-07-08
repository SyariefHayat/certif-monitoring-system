import React from 'react';

import { 
    Building, 
    CheckCircle, 
    XCircle, 
    AlertTriangle 
} from 'lucide-react';

import StatsCard from './StatsCard';

const StatsSection = ({ stats }) => {
    const statsData = [
        { title: 'Total', value: stats.total, color: 'text-gray-900', icon: <Building className="text-blue-500" /> },
        { title: 'Active', value: stats.active, color: 'text-green-600', icon: <CheckCircle className="text-green-500" /> },
        { title: 'Expired', value: stats.expired, color: 'text-red-600', icon: <XCircle className="text-red-500" /> },
        { title: 'Expiring Soon', value: stats.expiring, color: 'text-orange-600', icon: <AlertTriangle className="text-orange-500" /> },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((stat, idx) => (
                <StatsCard key={idx} {...stat} />
            ))}
        </div>
    );
};

export default StatsSection;