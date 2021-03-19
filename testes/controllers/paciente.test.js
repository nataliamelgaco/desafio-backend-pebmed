jest.mock('../../models/paciente.js')
const customExpress = require('../../config/customExpress')
const request = require('supertest')

const app = customExpress()

describe('Testes da classe controllers/paciente.js', () => {
  test('A rota de listagem de pacientes executa com sucesso', async () => {
    const res = await request(app).get('/paciente')

    expect(res.status).toEqual(200)
  })

  test('A rota de busca de paciente por ID executa com sucesso', async () => {
    const res = await request(app).get('/paciente/:id')

    expect(res.status).toEqual(200)
  })

  test('A rota de salvar paciente executa com sucesso', async () => {
    const res = await request(app).post('/paciente')

    expect(res.status).toEqual(201)
  })

  test('A rota de editar paciente executa com sucesso', async () => {
    const res = await request(app).patch('/paciente/:id')

    expect(res.status).toEqual(200)
  })

  test('A rota de deletar paciente executa com sucesso', async () => {
    const res = await request(app).delete('/paciente/:id')

    expect(res.status).toEqual(200)
  })
})
