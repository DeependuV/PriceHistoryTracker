import { Suspense } from 'react';
import ProductPageContent from '@/components/ParticularProductPage';

export default function ProductPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-[#3145a8] via-[#2c3562] to-[#3145a8]">
        <div className="text-white text-xl font-semibold">Loading...</div>
      </div>
    }>
      <ProductPageContent />
    </Suspense>
  );
}
