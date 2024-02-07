import request from "supertest"
import { expect } from "chai"

const baseUrl = "https://restful-booker.herokuapp.com";

describe('TS01 - Delete Booking', () => {
  it('TC01 - Delete booking', async () => {
    const response = await request(baseUrl)
    .delete('/booking/'4)
    .set('Content-Type','application/json')
    .set('Cookie', 'token=abc123')
    .set('Authorization',' Basic YWRtaW46cGFzc3dvcmQxMjM=')

    expect((await response).status).to.equal(201, 'Created');
    
  });
})
