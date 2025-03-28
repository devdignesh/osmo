import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function GET() {
  try {
    const buildTime = new Date().toLocaleString();
    console.log(`Page rebuilt via API at: ${buildTime}`);
    revalidatePath('/'); 
     

    return new Response(JSON.stringify({ message: 'Page rebuilt via API at', buildTime }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('Revalidation failed:', error);
    return new Response(JSON.stringify({ message: 'Revalidation failed' }), { status: 500 });
  }
}