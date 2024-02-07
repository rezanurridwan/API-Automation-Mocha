import request from "supertest";
import {expect} from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

describe('TS01 - Update booking', () => {
  it('TC01 - Update with valid data', async () => {
    const response = await request(baseUrl)
    .put("/booking/:1")
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Cookie','token=abc123')
    .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQxMjM=')
    .send({
        "firstname" : "James",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    })

    expect((await response).status).to.equal(200);
  });
})
