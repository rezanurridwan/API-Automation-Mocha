// import request from "supertest";
// import {baseUrl} from "../data/config.js"

// export async function createToken(){
  
//     const payloads = {
//         "username" : "admin",
//         "password" : "password123456789"
//     }
//     //send request
//     const response = await request (baseUrl)
//     .post('/auth')
//     .send(payloads)
//     .set("Content-Type","application/json")

//     let token = (await response).body.token
//     return token
// }
// console.log(createToken());

import request from "supertest";
import { baseUrl } from "../data/config.js";

export async function createToken() {
  const payloads = {
    "username": "admin",
    "password": "password123456789"
  };

  try {
    // Menggunakan async/await untuk menunggu respons
    const response = await request(baseUrl)
      .post('/auth')
      .send(payloads)
      .set("Content-Type", "application/json");

    const token = response.body.token;
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Menggunakan async/await untuk menunggu hasil dari createToken
async function getToken() {
  try {
    const token = await createToken();
    console.log(token);
  } catch (error) {
    console.error("Failed to get token:", error);
  }
}

// Panggil fungsi untuk mendapatkan dan mencetak token
getToken();
