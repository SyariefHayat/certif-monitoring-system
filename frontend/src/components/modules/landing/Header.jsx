import React from 'react';
import { Building } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Header = () => (
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
);

export default Header;