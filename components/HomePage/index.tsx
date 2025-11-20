"use client"
import React, { useEffect, useState } from 'react'
import HeroSection from "@/components/HomePage/HeroSection";
import WhatWeOffer from "@/components/HomePage/WhatWeOffer";
import WhyRealPrice from "@/components/HomePage/WhyRealPrice";
import Testimonials from "@/components/HomePage/Testimonials";
import TopStores from "@/components/HomePage/TopStores";
import FAQSection from './FaqSection';
import { fetchProducts } from '@/utils/fetchProducts';
import PriceDropsSection from '../commmonComponents/PriceDropsSection';

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
}

const index = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts({
          page: 1,
          limit: 8,
          type: 'pt1id',
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
    <main>
      <HeroSection />
      {/* <RecentPriceChanges /> */}
      <PriceDropsSection products={products} loading={loading} />
      <WhatWeOffer />
      <WhyRealPrice />
      <Testimonials />
      <TopStores />
      <FAQSection />
    </main>
  )
}

export default index
