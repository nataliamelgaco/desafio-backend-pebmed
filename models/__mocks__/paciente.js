class Paciente {
  async salvar (paciente, res) {
    res.status(201).json(paciente)
  }

  async listar (res) {
    const resultados = []

    res.status(200).json(resultados)
  }

  async buscarPorId (id, res) {
    const paciente = {}

    res.status(200).json(paciente)
  }

  async editar (id, valores, res) {
    res.status(200).json({ ...valores, id })
  }

  async deletar (id, res) {
    res.status(200).json({ id })
  }
}

module.exports = new Paciente()
