import request from "supertest"
import { expect } from "chai"
import { baseUrlKasirAja } from "../Data/configKasirAja.js"
import '../Auth/Login.js'

describe('Units', () => {
  it('Add unit', async() => {
    const unit = {  
        "name": "gram",
        "description": "weight measurement"}
    const response = await request(baseUrlKasirAja)
    .post('/units')
    .set('Authorization', `Bearer ${globalToken}`)
    .send(unit)

    expect((await response).status).to.equal(201)
    expect((await response).body.message).to.equal('Unit berhasil ditambahkan')
  });
  it('Get unit list', async() => {
    const response = await request(baseUrlKasirAja)
    .get('/units?q=gram&page=1')
    .set('Authorization', `Bearer ${globalToken}`)

    expect((await response).status).to.equal(200)
  });
  it('Update unit', async() => {
    const unit = {  
        "name": "update-gram",
        "description": "no-measurement"}
    const response = await request(baseUrlKasirAja)
    .put('/units/1')
    .set('Authorization', `Bearer ${globalToken}`)
    .send(unit)

    expect((await response).status).to.equal(201)
    expect((await response).body.message).to.equal('Unit berhasil diupdate')
  });
  it('Delete unit', async() => {
    const response = await request(baseUrlKasirAja)
    .delete('/units/811f547e-a24e-4f94-bfe1-b7ed7d11c03f')
    .set('Authorization', `Bearer ${globalToken}`)


    expect((await response).status).to.equal(200)
  });
})
