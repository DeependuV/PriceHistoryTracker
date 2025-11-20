"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductDetails from '@/components/ParticularProductPage/ProductDetails';
import PriceHistory from '@/components/ParticularProductPage/PriceHistory';
import DealScore from '@/components/ParticularProductPage/DealScore';
import { ProductData, StoreComparison, ChartDataPoint, ProductDetailsResponse } from '@/types/product';
import MoreProducts from './MoreProducts';
import { fetchProducts } from '@/utils/fetchProducts';

interface ProductDataGrid {
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

export default function ProductPageContent() {
  const searchParams = useSearchParams();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [storeComparison, setStoreComparison] = useState<StoreComparison[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<ProductDataGrid[]>([]);
    // const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadProducts = async () => {
        setLoading(true);
        try {
          const response = await fetchProducts({
            page: 1,
            limit: 8,
            type: 'pt1id',
            sid: 2 // Amazon's sid is 2
          });
          
          setProducts(response.products);
        } catch (error) {
          console.error('Error loading products:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadProducts();
    }, []); 

  useEffect(() => {
    const fetchProductData = async () => {
      const sid = searchParams.get('sid');
      const pid = searchParams.get('pid');
      const pt1id = searchParams.get('pt1id');

      if (!sid || !pid || !pt1id) {
        setError('Missing required parameters');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/product/details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sid: Number(sid), pid, pt1id }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }

        const result: ProductDetailsResponse = await response.json();

        console.log(result, "checking for the result here");
        
        if (result.code === 200 && result.data.productDetails.length > 0) {
          const product = result.data.productDetails[0];
          setProductData(product);
          setStoreComparison(result.data.storeComparison);

          // Transform data for chart
          const chartDataArray: ChartDataPoint[] = Object.entries(product.data).map(([date, values]) => ({
            date: new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
            fullDate: new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            price: values["0"]
          }));
          setChartData(chartDataArray);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-[#3145a8] via-[#2c3562] to-[#3145a8]">
        <div className="text-white text-xl font-semibold">Loading product details...</div>
      </div>
    );
  }

  if (error || !productData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-[#3145a8] via-[#2c3562] to-[#3145a8]">
        <div className="text-white text-xl font-semibold">{error || 'Finding Product Details...'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#3145a8] via-[#2c3562] to-[#3145a8] py-8 px-4">
      <div className="max-w-[1444px] mx-auto space-y-6">
        <ProductDetails productData={productData}  />
        <DealScore storeComparison={storeComparison} productData={productData} />
        <PriceHistory chartData={chartData} productName={productData.title} />
        <MoreProducts products={products} />
      </div>
    </div>
  );
}