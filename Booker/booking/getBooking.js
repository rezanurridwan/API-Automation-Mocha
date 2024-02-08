import  request  from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.js";


const baseUrl = "https://restful-booker.herokuapp.com";
const bookingId ="78"
describe('TS01 - Get Booking ', () => {
    it('TC01 - get booking with data valid', async () => {
        const response = await request(baseUrl).get(`/booking`)
        console.log(`/booking`);
        expect((await response).status).to.equal(200);
        
    }).timeout(5000); // Increase the timeout to 5000 milliseconds (5 seconds)
    it('TC02 - get booking by id', async () => {
        try {
            const response = await request(baseUrl).get(`/booking/${bookingId}`);
            console.log(`/booking/${bookingId}`);
            expect(response.status).to.equal(200);
            // expect(response.body).to.have.property('firstname');
        } catch (error) {
            console.error(error);
            throw error;
        }
    }).timeout(5000);
    it('Import Token', async() => {
        const token = await createToken()
        console.log(await token);
    });

})
