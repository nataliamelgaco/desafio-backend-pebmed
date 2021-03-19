class Agendamento {
  async salvar (agendamento, res) {
    res.status(201).json(agendamento)
  }

  async listar (res) {
    const resultados = []

    res.status(200).json(resultados)
  }

  async buscarPorId (id, res) {
    const agendamento = {}

    res.status(200).json(agendamento)
  }

  async editar (id, valores, res) {
    res.status(200).json({ ...valores, id })
  }

  async deletar (id, res) {
    res.status(200).json({ id })
  }

  async salvarObservacao (observacao, id, res) {
    res.status(201).json(observacao)
  }

  async listarObservacoesPorPacienteOuIdAgendamento (idPaciente, idAgendamento, res) {
    const resultados = []

    res.status(200).json(resultados)
  }
}

module.exports = new Agendamento()
