export async function GET() {
  return await new Response(JSON.stringify({ message: 'Hello World' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}