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

  app.patch('/agendamento/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Agendamento.editar(id, valores, res)
  })

  app.delete('/agendamento/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Agendamento.deletar(id, res)
  })

  app.post('/salvarObservacao/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const observacao = req.body.observacao

    Agendamento.salvarObservacao(observacao, id, res)
  })

  app.get('/listarObservacoes', (req, res) => {
    let idPaciente = null
    let idAgendamento = null

    if (req.query.idPaciente) {
      idPaciente = parseInt(req.query.idPaciente)
    }
    if (req.query.idAgendamento) {
      idAgendamento = req.query.idAgendamento
    }

    Agendamento.listarObservacoesPorPacienteOuIdAgendamento(idPaciente, idAgendamento, res)
  })
}
