import React from 'react';

const ProgressBar = ({ progress, status }) => {
    const getProgressColor = () => {
        if (status === 'Expired') return 'bg-red-500';
        if (progress >= 80) return 'bg-green-500';
        if (progress >= 60) return 'bg-yellow-500';
        return 'bg-orange-500';
    };

    return (
        <div>
            <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span className="font-semibold text-gray-700">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                className={`h-2 rounded-full ${getProgressColor()}`}
                style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;