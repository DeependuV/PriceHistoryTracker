// app/all-products/page.tsx
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ProductCard from '@/components/commmonComponents/ProductCard';

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
  category?: number;
  sub_category?: number;
  color?: string;
  cat?: string;
  pt1id: string;
}

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  // API call function - POST request
  const fetchProducts = async (pageNum: number): Promise<{ products: ProductData[], hasMore: boolean }> => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: pageNum,
          limit: 12,
          type: 'pt1id'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch products');
      }
      
      return {
        products: data.products || [],
        hasMore: data.pagination?.hasMore ?? true
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error instanceof Error ? error.message : 'Failed to load products');
      return {
        products: [],
        hasMore: false
      };
    }
  };

  // Load products
  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetchProducts(page);
      
      if (response.products.length === 0 || !response.hasMore) {
        setHasMore(false);
      }
      
      if (response.products.length > 0) {
        setProducts(prev => [...prev, ...response.products]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMoreProducts, hasMore, loading]);

  // Initial load
  useEffect(() => {
    loadMoreProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array for initial load only

  const handleTrackProduct = (pid: string) => {
    console.log('Tracking product:', pid);
    // Implement your tracking logic here
  };

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="w-full py-16 px-4 bg-white border-b">
        <div className="max-w-[1444px] mx-auto">
          <div className="text-center space-y-4">
            <h1 
              className="text-5xl md:text-6xl font-bold"
              style={{
                background: "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              All Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our complete collection of tracked products with the best deals
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="w-full py-12 px-4">
        <div className="max-w-[1444px] mx-auto">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-center font-medium">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                imgurl={product.imgurl}
                price={product.price}
                mrp={product.mrp}
                brand={product.brand}
                rating={product.rating}
                rating_count={product.rating_count}
                pid={product.pid}
                onTrack={handleTrackProduct}
                sid={product.sid}
                pt1id={product.pt1id}
              />
            ))}
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="relative w-16 h-16">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-gray-200"
                ></div>
                <div 
                  className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
                  style={{
                    borderColor: "#3145a8 transparent transparent transparent"
                  }}
                ></div>
              </div>
            </div>
          )}

          {/* Intersection Observer Target */}
          <div ref={observerTarget} className="h-4"></div>

          {/* No More Products Message */}
          {!hasMore && products.length > 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 font-semibold">
                You've reached the end! No more products to load.
              </p>
            </div>
          )}

          {/* No Products Message */}
          {!loading && products.length === 0 && !error && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600 font-semibold">
                No products found
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AllProductsPage;