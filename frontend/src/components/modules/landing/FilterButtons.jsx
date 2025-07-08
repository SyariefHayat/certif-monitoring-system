import React from 'react';
import { Button } from '@/components/ui/button';

const FilterButtons = ({ selectedFilter, onFilterChange }) => {
    const filters = ['all', 'active', 'expired'];

    return (
        <div className="flex items-center gap-2">
            {filters.map(key => (
                <Button
                    key={key}
                    variant={selectedFilter === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onFilterChange(key)}
                >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
            ))}
        </div>
    );
};

export default FilterButtons;