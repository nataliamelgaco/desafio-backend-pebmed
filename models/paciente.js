const conexao = require('../infraestrutura/conexao')
const Agendamento = require('./agendamento')

class Paciente {
  salvar (paciente, res) {
    const sql = 'INSERT INTO Paciente SET ?'

    conexao.query(sql, paciente, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(201).json(paciente)
      }
    })
  }

  listar (res) {
    const sql = 'SELECT * FROM Paciente'

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  buscarPorId (id, res) {
    const sql = `SELECT * FROM Paciente WHERE id=${id}`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        const paciente = resultados[0]

        res.status(200).json(paciente)
      }
    })
  }

  editar (id, valores, res) {
    const sql = 'UPDATE Paciente SET ? WHERE id=?'

    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({ ...valores, id })
      }
    })
  }

  deletar (id, res) {
    Agendamento.deletarPorIdPaciente(id)

    const sql = 'DELETE FROM Paciente WHERE id=?'

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({ id })
      }
    })
  }
}

module.exports = new Paciente()
