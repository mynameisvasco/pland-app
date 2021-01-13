const baseUrl = "http://localhost:8080";

export async function request(
  endpoint: string,
  method: string,
  body: any = undefined,
  headers: any = {}
) {
  const req = await fetch(baseUrl + endpoint, {
    method,
    body: JSON.stringify(body),
    headers,
  });
  const res = await req.json();
  return res;
}
