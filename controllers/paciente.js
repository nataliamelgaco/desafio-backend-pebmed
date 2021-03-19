const Paciente = require('../models/paciente')

module.exports = app => {
  app.get('/paciente', (req, res) => {
    Paciente.listar(res)
  })

  app.get('/paciente/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Paciente.buscarPorId(id, res)
  })

  app.post('/paciente', (req, res) => {
    const paciente = req.body

    Paciente.salvar(paciente, res)
  })

  app.patch('/paciente/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body

    Paciente.editar(id, valores, res)
  })

  app.delete('/paciente/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Paciente.deletar(id, res)
  })
}
