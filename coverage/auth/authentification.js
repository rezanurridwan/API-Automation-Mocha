import request from "supertest";
import { expect } from "chai";

const baseUrl = 'https://restful-booker.herokuapp.com';

describe('TS01 - Create token for auth', () => {
  let token;
  it('TC01 - Auth with valid data', async () => {
    const response = await request(baseUrl)
    .post('/auth')
    .set('Content-Type', 'application/json')
    .send({
        "username": "admin",
        "password":"password123"
    });

    expect((await response).status).to.equal(200);
    expect((await response).body).to.have.property('token');
    token = (await response).body.token
    console.log('This is the token : ', await token);
  });
  it('TC02 - Auth with null data', async () => {
    const response = await request(baseUrl)
    .post('/auth')
    .set('Content-Type', 'application/json')
    .send({
      "username":"",
      "password":""
    });
    expect((await response).status).to.equal(200);
    expect((await response).body).to.have.property('reason', 'Bad credentials')
  });
});
