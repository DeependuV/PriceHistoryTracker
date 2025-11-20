// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const page = body.page || 1;
    const limit = body.limit || 12;
    const type = body.type || 'pt1id';
    const sid = body.sid; // Optional sid parameter

    // Prepare API payload
    const payload: any = {
      page,
      limit,
      type
    };

    // Only include sid if it's provided
    if (sid !== undefined && sid !== null) {
      payload.sid = sid;
    }

    // Make API call to Flipshope
    const response = await fetch('https://flipshope.com/api/priceComparison/getAllProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      products: data.data || data, // Handle different response structures
      pagination: data.pagination || {
        currentPage: page,
        hasMore: data.hasMore !== undefined ? data.hasMore : (data.products && data.products.length === limit),
        totalProducts: data.totalProducts || null,
        productsPerPage: limit
      }
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch products',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}