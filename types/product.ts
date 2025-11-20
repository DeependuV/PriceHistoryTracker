export interface ProductData {
  _id: string;
  sid: number;
  pid: string;
  data: {
    [key: string]: {
      "0": number;
      "1": number;
      pg_ins?: number;
      pg_ins_dup?: number;
      pg_check?: number;
      pg_check_dup?: number;
    };
  };
  price: number;
  time: string;
  stock?: number;
  brand: string | null;
  cat?: string;
  category?: number;
  color?: string;
  imgurl: string;
  mrp: number;
  rating: string;
  rating_count: number;
  title: string;
}

export interface StoreComparison {
  sid: number;
  pid: string;
  price: number;
}

export interface ProductDetailsResponse {
  code: number;
  data: {
    productDetails: ProductData[];
    storeComparison: StoreComparison[];
  };
  message: string;
}

export interface ChartDataPoint {
  date: string;
  price: number;
  fullDate: string;
}