const Agendamento = require('../models/agendamento')

module.exports = app => {
  app.get('/agendamento', (req, res) => {
    Agendamento.listar(res)
  })

  app.get('/agendamento/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Agendamento.buscarPorId(id, res)
  })

  app.post('/agendamento', (req, res) => {
    const agendamento = req.body

    Agendamento.salvar(agendamento, res)
  })

  app.put('/agendamento/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Agendamento.editar(id, valores, res)
  })

  app.delete('/agendamento/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Agendamento.deletar(id, res)
  })

  app.post('/agendamento/observacao/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const observacao = req.body.observacao

    Agendamento.salvarObservacao(observacao, id, res)
  })
}
