import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com"

describe('TS01 - Create booking', () => {
  it('TC01 - Create booking with data valid', async () => {
    const payloads = ({
        "firstname" : "Sukanata",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
        })
    
    const response = await request(baseUrl)
    .post('/booking')
    .set('Content-Type','application/json')
    .set('Accept','application/json')
    .send(payloads)
    console.log(payloads);
    expect((await response).status).to.equal(200);
    })
});
