jest.mock('../../models/cadastro.js')
const customExpress = require('../../config/customExpress')
const request = require('supertest')

const app = customExpress()

describe('Classe controllers/cadastro.js', () => {
  test('o método buscarPorId() retorna o objeto procurado', async () => {
    const res = await request(app).get('/cadastro')

    expect(res.status).toEqual(200)
  })
})
