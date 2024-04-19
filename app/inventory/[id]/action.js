"use server";

export async function postData(data, method) {
  const response = await fetch(process.env.BASE_ENDPOINT_URL + "/inventory", {
    method: method,
    body: data
  });
  console.log({
    method: method,
    body: data
  })

  return await response.json();
}
