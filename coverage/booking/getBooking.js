import  request  from "supertest";
import { expect } from "chai";



const baseUrl = "https://restful-booker.herokuapp.com";

describe('TS01 - Get Booking ', () => {
it('TC01 - get booking with data valid', async () => {
    const response = await request(baseUrl).get('/booking')
    
    expect((await response).status).to.equal(200);
    
}).timeout(5000); // Increase the timeout to 5000 milliseconds (5 seconds)
    
})
