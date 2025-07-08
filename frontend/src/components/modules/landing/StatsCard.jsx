import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsCard = ({ title, value, color, icon }) => (
    <Card className="shadow-sm">
        <CardContent className="p-4 flex justify-between items-center">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
            </div>
            <div className="p-2 bg-gray-100 rounded-full">
                {icon}
            </div>
        </CardContent>
    </Card>
);

export default StatsCard;