"use client";
import React, { useMemo, useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

// Types
interface StoreComparison {
  sid: number;
  price: number;
}

interface ProductData {
  price: number;
  data: {
    [date: string]: {
      "0": number;
    };
  };
}

interface DealScoreProps {
  storeComparison: StoreComparison[];
  productData: ProductData;
}

const storeInfo: { [key: number]: { label: string; favIcon: string } } = {
  1: {
    label: "Flipkart",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=flipkart.com",
  },
  2: {
    label: "Amazon",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=amazon.in",
  },
  3: {
    label: "ShopClues",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=shopclues.com",
  },
  4: {
    label: "Snapdeal",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=snapdeal.com",
  },
  5: {
    label: "JioMart",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=jiomart.com",
  },
  6: {
    label: "Tata CLiQ",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=tatacliq.com",
  },
  7: {
    label: "Myntra",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=myntra.com",
  },
  8: {
    label: "Nykaa",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=nykaa.com",
  },
  9: {
    label: "Ajio",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=ajio.com",
  },
  10: {
    label: "Pepperfry",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=pepperfry.com",
  },
  11: {
    label: "FirstCry",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=firstcry.com",
  },
  12: {
    label: "Nykaa Fashion",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=nykaafashion.com",
  },
  13: {
    label: "Croma",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=croma.com",
  },
  14: {
    label: "Reliance Digital",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=reliancedigital.in",
  },
  15: {
    label: "Meesho",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=meesho.com",
  },
  16: {
    label: "Purplle",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=purplle.com",
  },
  17: {
    label: "Shopsy",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=shopsy.in",
  },
};

const DealScore: React.FC<DealScoreProps> = ({ storeComparison, productData }) => {
  const [needleAngle, setNeedleAngle] = useState(0);

  // Calculate deal score based on price history
  const dealScore = useMemo(() => {
    const priceData = Object.entries(productData.data);
    
    // Filter last 60 days
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 60);
    
    const filteredData = priceData
      .filter(([date]) => {
        const entryDate = new Date(date);
        return !isNaN(entryDate.getTime()) && entryDate >= cutoffDate;
      })
      .map(([, values]) => values["0"])
      .sort((a, b) => a - b);

    if (filteredData.length === 0) return 1;

    const latestPrice = productData.price;
    const percentile15 = filteredData[Math.floor((filteredData.length / 100) * 15)];
    const percentile50 = filteredData[Math.floor((filteredData.length / 100) * 50)];
    const percentile75 = filteredData[Math.floor((filteredData.length / 100) * 75)];

    // Calculate deal score (1-4)
    if (latestPrice < percentile15) return 4; // Excellent
    if (latestPrice <= percentile50) return 3; // Good
    if (latestPrice <= percentile75) return 2; // Fair
    return 1; // Poor
  }, [productData]);

  // Update needle angle based on deal score
  // For semicircle: 180° = left, 225° = lower left, 270° = bottom, 315° = lower right, 360° = right
  // We want: Poor = 180°, Fair = 225°, Good = 315°, Excellent = 360° (0°)
  useEffect(() => {
    const angles = [290, 340, 20, 70]; // Maps to Poor, Fair, Good, Excellent
    setNeedleAngle(angles[dealScore - 1]);
  }, [dealScore]);

  const dealLabels = ['Poor', 'Fair', 'Good', 'Excellent'];
  const dealColors = ['#EF4444', '#F59E0B', '#FCD34D', '#10B981'];
  const dealBgColors = ['#FEE2E2', '#FEF3C7', '#FEF9C3', '#D1FAE5'];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Deal Score Gauge */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 text-center">Deal Score</h3>
          
          {/* Speedometer Gauge */}
          <div className="relative flex justify-center items-center py-4">
            <svg width="300" height="170" viewBox="0 0 300 170" className="overflow-visible">
              {/* Segmented arc with gaps - SEMICIRCLE ONLY */}
              {dealLabels.map((label, index) => {
                const gapSize = 4;
                const totalAngle = 180; // Semicircle
                const segmentAngle = (totalAngle / 4) - gapSize;
                const startAngle = 180 + (index * (totalAngle / 4)) + (gapSize / 2);
                const endAngle = startAngle + segmentAngle;
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;
                const radius = 120;
                const innerRadius = 90;
                const cx = 150;
                const cy = 150;
                
                const x1Outer = cx + radius * Math.cos(startRad);
                const y1Outer = cy + radius * Math.sin(startRad);
                const x2Outer = cx + radius * Math.cos(endRad);
                const y2Outer = cy + radius * Math.sin(endRad);
                
                const x1Inner = cx + innerRadius * Math.cos(startRad);
                const y1Inner = cy + innerRadius * Math.sin(startRad);
                const x2Inner = cx + innerRadius * Math.cos(endRad);
                const y2Inner = cy + innerRadius * Math.sin(endRad);
                
                return (
                  <path
                    key={index}
                    d={`M ${x1Inner} ${y1Inner} 
                        L ${x1Outer} ${y1Outer} 
                        A ${radius} ${radius} 0 0 1 ${x2Outer} ${y2Outer} 
                        L ${x2Inner} ${y2Inner} 
                        A ${innerRadius} ${innerRadius} 0 0 0 ${x1Inner} ${y1Inner} Z`}
                    fill={dealColors[index]}
                    opacity="0.9"
                    className="transition-opacity duration-300"
                  />
                );
              })}
              
              {/* White center semicircle */}
              <path
                d="M 30 150 A 120 120 0 0 1 270 150 L 270 150 A 85 85 0 0 0 30 150 Z"
                fill="white"
              />
              
              {dealLabels.map((label, index) => {
                const totalAngle = 180;
                const gapSize = 4;
                const segmentAngle = (totalAngle / 4) - gapSize;
                const startAngle = 180 + (index * (totalAngle / 4)) + (gapSize / 2);
                const midAngle = startAngle + (segmentAngle / 2);
                const radius = 105;
                
                // Create a curved path for the text to follow
                const pathId = `textPath-${index}`;
                const textPathRadius = radius;
                
                // Create arc path for text
                const arcStartAngle = startAngle;
                const arcEndAngle = startAngle + segmentAngle;
                const arcStartRad = (arcStartAngle * Math.PI) / 180;
                const arcEndRad = (arcEndAngle * Math.PI) / 180;
                
                const x1 = 150 + textPathRadius * Math.cos(arcStartRad);
                const y1 = 150 + textPathRadius * Math.sin(arcStartRad);
                const x2 = 150 + textPathRadius * Math.cos(arcEndRad);
                const y2 = 150 + textPathRadius * Math.sin(arcEndRad);
                
                return (
                  <g key={index}>
                    <defs>
                      <path
                        id={pathId}
                        d={`M ${x1} ${y1} A ${textPathRadius} ${textPathRadius} 0 0 1 ${x2} ${y2}`}
                        fill="none"
                      />
                    </defs>
                    <text
                      className="text-[11px] font-bold uppercase"
                      fill={'#fff'}
                    >
                      <textPath
                        href={`#${pathId}`}
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        {label}
                      </textPath>
                    </text>
                  </g>
                );
              })}
              
              {/* Needle */}
              <g
                style={{
                  transform: `rotate(${needleAngle}deg)`,
                  transformOrigin: '150px 150px',
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Needle shadow */}
                <path
                  d="M 150 150 L 147 155 L 150 65 L 153 155 Z"
                  fill="#00000020"
                  transform="translate(2, 2)"
                />
                {/* Needle */}
                <path
                  d="M 150 150 L 147 155 L 150 65 L 153 155 Z"
                  fill="#1e40af"
                />
              </g>
              
              {/* Center bolt */}
              <circle cx="150" cy="150" r="10" fill="#1e40af" />
              <circle cx="150" cy="150" r="6" fill="#3b82f6" />
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600 mb-1">Current</p>
              <p className="text-base font-bold text-[#3145a8]">
                ₹{productData.price.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600 mb-1">Lowest</p>
              <p className="text-base font-bold text-green-600">
                ₹{Math.min(...Object.values(productData.data).map(v => v["0"])).toLocaleString('en-IN')}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600 mb-1">Highest</p>
              <p className="text-base font-bold text-red-600">
                ₹{Math.max(...Object.values(productData.data).map(v => v["0"])).toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* Deal Score Badge */}
          {/* <div 
            className="rounded-xl p-6 text-center"
            style={{ 
              backgroundColor: dealBgColors[dealScore - 1],
              borderColor: dealColors[dealScore - 1],
              borderWidth: '2px'
            }}
          >
            <div className="text-5xl font-bold mb-2" style={{ color: dealColors[dealScore - 1] }}>
              {dealLabels[dealScore - 1]}
            </div>
            <div className="text-sm text-gray-700">
              {dealScore === 4 && "Excellent deal! Price is at historical low."}
              {dealScore === 3 && "Good deal! Price is below average."}
              {dealScore === 2 && "Fair deal. Price is around average."}
              {dealScore === 1 && "Consider waiting. Price is above average."}
            </div>
          </div> */}
        </div>

        {/* Available Stores */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Available Stores</h3>
            <span className="text-sm text-gray-600">{storeComparison.length} stores</span>
          </div>
          
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {storeComparison.map((store, idx) => {
              const storeDetails = storeInfo[store.sid];
              return (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {storeDetails?.favIcon ? (
                      <img 
                        src={storeDetails.favIcon} 
                        alt={storeDetails.label}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-[#3145a8] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {storeDetails?.label || `Store ${store.sid}`}
                      </div>
                      <div className="text-sm text-gray-600">Free delivery</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xl font-bold text-[#3145a8]">
                        ₹{store.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-sm text-green-600">In stock</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealScore;