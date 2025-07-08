import React from 'react';

import { 
    Calendar, 
    AlertTriangle, 
    CheckCircle, 
    Clock, 
    XCircle 
} from 'lucide-react';

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card';

import ProgressBar from './ProgressBar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CertificateCard = ({ certificate }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'Active': return <CheckCircle className="h-4 w-4 text-green-500" />;
            case 'Expired': return <XCircle className="h-4 w-4 text-red-500" />;
            case 'Expiring': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
            default: return <Clock className="h-4 w-4 text-gray-500" />;
        }
    };

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white w-9 h-9 flex items-center justify-center rounded-md font-semibold">
                        {certificate.id}
                    </div>
                    <div>
                        <CardTitle className="text-sm font-semibold text-gray-800">{certificate.name}</CardTitle>
                        <p className="text-xs text-gray-500">{certificate.subtitle}</p>
                    </div>
                    <div className="ml-auto">{getStatusIcon(certificate.status)}</div>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Berlaku: {certificate.validFrom} - {certificate.validTo}
                </div>
                
                <ProgressBar progress={certificate.progress} status={certificate.status} />
                
                <div className="flex flex-wrap gap-1 text-xs">
                    <Badge variant="secondary">{certificate.certification}</Badge>
                    <Badge variant="outline">{certificate.surveillance}</Badge>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                    <Badge variant={certificate.status === 'Active' ? 'default' : 'destructive'}>
                        {certificate.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:underline">
                        Detail
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default CertificateCard;