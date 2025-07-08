import React, { useState } from 'react';

import { Button } from '@/components/ui/button';

const Header = () => {
    const [activeTab, setActiveTab] = useState("sistem");

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <h1 className="text-xl font-semibold">Logo</h1>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={activeTab === "sistem" ? "default" : "secondary"}
                        size="sm"
                        className={activeTab === "sistem" ? "shadow font-semibold" : ""}
                        onClick={() => setActiveTab("sistem")}
                    >
                        Sertifikat Sistem
                    </Button>

                    <Button
                        variant={activeTab === "produk" ? "default" : "secondary"}
                        size="sm"
                        className={activeTab === "produk" ? "shadow font-semibold" : ""}
                        onClick={() => setActiveTab("produk")}
                    >
                        Sertifikat Produk
                    </Button>

                    <Button
                        variant={activeTab === "pemeliharaan" ? "default" : "secondary"}
                        size="sm"
                        className={activeTab === "pemeliharaan" ? "shadow font-semibold" : ""}
                        onClick={() => setActiveTab("pemeliharaan")}
                    >
                        Pemeliharaan Data
                    </Button>
                </div>
            </div>
        </header>
    )
};

export default Header;