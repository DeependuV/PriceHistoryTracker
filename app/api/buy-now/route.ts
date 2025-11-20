import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sid, pid } = body;

    // Validate required fields
    if (!sid || !pid) {
      return NextResponse.json(
        { error: 'Missing required fields: sid and pid' },
        { status: 400 }
      );
    }

    // Make your external API call here
    const response = await fetch('https://flipshope.com/api/prices/prodstorelink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any auth headers if needed
        // 'Authorization': `Bearer ${process.env.API_KEY}`
      },
      body: JSON.stringify({ sid, pid }),
    });

    if (!response.ok) {
      throw new Error('External API request failed');
    }

    const data = await response.json();

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Buy now API error:', error);
    return NextResponse.json(
      { error: 'Failed to process buy now request' },
      { status: 500 }
    );
  }
}