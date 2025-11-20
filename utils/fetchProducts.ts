
interface FetchProductsParams {
  page: number;
  limit?: number;
  type?: string;
  sid?: number;
}

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
}

interface FetchProductsResponse {
  products: ProductData[];
  hasMore: boolean;
}

export const fetchProducts = async ({
  page,
  limit = 12,
  type = 'pt1id',
  sid
}: FetchProductsParams): Promise<FetchProductsResponse> => {
  try {
    const body: any = {
      page,
      limit,
      type
    };

    // Only add sid if it's provided
    if (sid !== undefined) {
      body.sid = sid;
    }

    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
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
    return {
      products: [],
      hasMore: false
    };
  }
};