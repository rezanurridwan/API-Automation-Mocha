import request from "supertest"
import { expect } from "chai";
import { createToken } from "../function/createToken.js";


describe('Get Token', () => {
  it('Get tokentoken', async() => {
    const token = createToken()
    console.log(token);
  });
})
