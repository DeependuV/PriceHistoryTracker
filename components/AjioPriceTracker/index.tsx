"use client"
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/AjioPriceTracker/HeroSection';
import ProofBar from '@/components/commmonComponents/ProofBar';
import PriceDropsSection from '@/components/commmonComponents/PriceDropsSection';
import FeaturesSection from '@/components/commmonComponents/FeaturesSection';
import TrustSection from '@/components/commmonComponents/TrustSection';
import FAQSection from '@/components/commmonComponents/FAQSection';
import { fetchProducts } from '@/utils/fetchProducts';

interface ProductData {
  _id: string;
  sid: number;
  pid: string;
  price: number;
  mrp: number;
  title: string;
  imgurl: string;
  brand?: string;
  rating?: number;
  rating_count?: number;
  stock: number;
  pt1id: string;
}

const AjioPriceTracker: React.FC = () => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts({
          page: 1,
          limit: 8,
          type: 'pt1id',
          sid: 9 // Ajio's sid is 2
        });
        
        setProducts(response.products);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // Only run once on mount
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />
      <ProofBar />
      <PriceDropsSection products={products} loading={loading} />
      <FeaturesSection />
      <TrustSection />
      <FAQSection />
    </main>
  );
};

export default AjioPriceTracker;