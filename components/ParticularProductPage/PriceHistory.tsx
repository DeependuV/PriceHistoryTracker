"use client";
import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from 'recharts';
import { ChartDataPoint } from '@/types/product';

interface PriceHistoryProps {
  chartData: ChartDataPoint[];
  productName?: string;
}

const PriceHistory: React.FC<PriceHistoryProps> = ({ chartData, productName }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
// console.log(chartData, "consoling in history")
  // Filter data based on selected period
  const filteredData = useMemo(() => {
    if (selectedPeriod === 'all') return chartData;

    const now = new Date();
    let daysToSubtract = 0;

    switch (selectedPeriod) {
      case '7d':
        daysToSubtract = 7;
        break;
      case '30d':
        daysToSubtract = 30;
        break;
      case '60d':
        daysToSubtract = 60;
        break;
      default:
        return chartData;
    }

    const cutoffDate = new Date(now.getTime() - daysToSubtract * 24 * 60 * 60 * 1000);

    return chartData.filter(item => {
      // Parse the fullDate to compare
      const itemDate = new Date(item.fullDate.split('/').reverse().join('-'));
      return itemDate >= cutoffDate;
    });
  }, [chartData, selectedPeriod]);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-semibold text-gray-900">
            {payload[0].payload.fullDate}
          </p>
          <p className="text-lg font-bold text-[#3145a8] mt-1">
            ₹{payload[0].value.toLocaleString('en-IN')}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 truncate">Check Price History of {productName}</h2>
      
      {/* Filter Buttons */}
      <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setSelectedPeriod('30d')}
          className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition whitespace-nowrap cursor-pointer text-sm sm:text-base ${
            selectedPeriod === '30d' ? 'bg-[#3145a8] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          30 Days
        </button>
        <button 
          onClick={() => setSelectedPeriod('60d')}
          className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition whitespace-nowrap cursor-pointer text-sm sm:text-base ${
            selectedPeriod === '60d' ? 'bg-[#3145a8] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          60 Days
        </button>
        <button 
          onClick={() => setSelectedPeriod('all')}
          className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition whitespace-nowrap cursor-pointer text-sm sm:text-base ${
            selectedPeriod === 'all' ? 'bg-[#3145a8] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          All Time
        </button>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={filteredData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FCD34D" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#FCD34D" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            
            <XAxis 
              dataKey="date" 
              stroke="#6B7280"
              style={{ fontSize: '10px' }}
              tick={{ fill: '#6B7280' }}
              tickLine={{ stroke: '#E5E7EB' }}
            />
            
            <YAxis 
              stroke="#6B7280"
              style={{ fontSize: '10px' }}
              tick={{ fill: '#6B7280' }}
              tickLine={{ stroke: '#E5E7EB' }}
              tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#FCD34D" 
              strokeWidth={3}
              fill="url(#colorPrice)"
              dot={false}
              activeDot={{ r: 6, fill: '#3145a8', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default PriceHistory;
