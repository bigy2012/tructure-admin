"use server";

// module.exports = {
//   GetInventoryById: async id => {
//     let response = await fetch(process.env.BASE_ENDPOINT_URL + "/inventory");
//     return response.json();
//   },
  
// };


export async function GetInventory() {
  let response = await fetch(process.env.BASE_ENDPOINT_URL + "/inventory");
  return response.json();
}

export async function GetInventoryById(id) {
  let response = await fetch(process.env.BASE_ENDPOINT_URL + "/inventory/" + id);
  return response.json();
}