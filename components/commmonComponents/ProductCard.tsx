"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { createProductUrl } from '@/utils/slugify';

interface ProductCardProps {
  title: string;
  imgurl: string;
  price: number;
  mrp: number;
  brand?: string;
  rating?: number;
  rating_count?: number;
  pid: string;
  onTrack?: (pid: string) => void;
  sid: number;
  pt1id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imgurl,
  price,
  mrp,
  brand,
  rating,
  rating_count,
  pid,
  onTrack,
  sid,
  pt1id
}) => {
  const router = useRouter();
  const discount = mrp > 0 ? Math.round(((mrp - price) / mrp) * 100) : 0;

  const handleClick = () => {
    const url = createProductUrl(title, sid, pid, pt1id);
    router.push(url);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={imgurl}
          alt={title}
          className="w-full h-full object-fill sm:object-contain group-hover:scale-110 transition-transform duration-300 p-4"
        />
        {discount > 0 && (
          <span
            style={{
              background: "linear-gradient(to right, #3145a8, #2c3562)",
            }}
            className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
          >
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-[#2c3562] line-clamp-2 min-h-10">
          {title}
        </h3>

        {rating && rating_count ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{rating}</span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500">
              ({rating_count.toLocaleString('en-IN')} ratings)
            </span>
          </div>
        ) : (
          <div className='h-6'/>
        )}

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#3145a8]">
              ₹{price.toLocaleString('en-IN')}
            </span>
          </div>
          {mrp > price ? (
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                ₹{mrp.toLocaleString('en-IN')}
              </span>
            </div>
          ): (
            <div className='h-5'/>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;