jest.mock('../../models/agendamento.js')
const customExpress = require('../../config/customExpress')
const request = require('supertest')

const app = customExpress()

describe('Testes da classe controllers/agendamento.js', () => {
  test('A rota de listagem de agendamentos executa com sucesso', async () => {
    const res = await request(app).get('/agendamento')

    expect(res.status).toEqual(200)
  })

  test('A rota de busca de agendamento por ID executa com sucesso', async () => {
    const res = await request(app).get('/agendamento/:id')

    expect(res.status).toEqual(200)
  })

  test('A rota de salvar agendamento executa com sucesso', async () => {
    const res = await request(app).post('/agendamento')

    expect(res.status).toEqual(201)
  })

  test('A rota de editar agendamento executa com sucesso', async () => {
    const res = await request(app).patch('/agendamento/:id')

    expect(res.status).toEqual(200)
  })

  test('A rota de deletar agendamento executa com sucesso', async () => {
    const res = await request(app).delete('/agendamento/:id')

    expect(res.status).toEqual(200)
  })

  test('A rota de salvar observação executa com sucesso', async () => {
    const res = await request(app).post('/salvarObservacao/:id')

    expect(res.status).toEqual(201)
  })

  test('A rota de listar observação por paciente ou por id agendamento executa com sucesso', async () => {
    const res = await request(app).get('/listarObservacoes')

    expect(res.status).toEqual(200)
  })
})
