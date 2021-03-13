const Cadastro = require('../models/cadastro')

module.exports = app => {
    app.get('/cadastro', (req, res) => {
        Cadastro.listar(res)
    })

    app.get('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.buscarPorId(id, res)
    })

    app.post('/cadastro', (req, res) => {
        const paciente = req.body

        Cadastro.salvar(paciente, res)

    })

    app.patch('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Cadastro.editar(id, valores, res)
    })

    app.delete('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.deletar(id, res)
    })
}