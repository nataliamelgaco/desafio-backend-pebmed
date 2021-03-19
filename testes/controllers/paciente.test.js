jest.mock('../../models/paciente.js')
const customExpress = require('../../config/customExpress')
const request = require('supertest')

const app = customExpress()

describe('Classe controllers/paciente.js', () => {
  test('o método buscarPorId() retorna o objeto procurado', async () => {
    const res = await request(app).get('/paciente')

    expect(res.status).toEqual(200)
  })
})
