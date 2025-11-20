export async function buyNowProduct(sid: number, pid: string) {
  try {
    const response = await fetch('/api/buy-now', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sid, pid }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to process buy now request');
    }

    return await response.json();
  } catch (error) {
    console.error('Buy now error:', error);
    throw error;
  }
}