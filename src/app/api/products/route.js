export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
    query ?? "",
  )}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  return Response.json(data, { status: res.status });
}
