import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sid, pid, pt1id } = body;

    if (!sid || !pid || !pt1id) {
      return NextResponse.json(
        { error: 'Missing required parameters: sid, pid, pt1id' },
        { status: 400 }
      );
    }

    const response = await fetch(
      'http://flipshope.com/api/priceComparison/getCompleteProductDetailsForPC',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sid, pid, fspid: pt1id }),
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching product details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product details' },
      { status: 500 }
    );
  }
}