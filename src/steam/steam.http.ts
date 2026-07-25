export async function getJson<T>(url: URL): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Steam API returned ${response.status}`);
  }

  const data = (await response.json()) as T;
  return data;
}
