const conexao = require('../infraestrutura/conexao')
class Agendamento {
  salvar (agendamento, res) {
    const sql = 'INSERT INTO Agendamento SET ?'

    conexao.query(sql, agendamento, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(201).json(agendamento)
      }
    })
  }

  listar (res) {
    const sql = 'SELECT * FROM Agendamento'

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  buscarPorId (id, res) {
    const sql = `SELECT * FROM Agendamento WHERE id=${id}`

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        const agendamento = resultados[0]

        res.status(200).json(agendamento)
      }
    })
  }

  editar (id, valores, res) {
    const sql = 'UPDATE Agendamento SET ? WHERE id=?'

    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({ ...valores, id })
      }
    })
  }

  deletar (id, res) {
    const sql = 'DELETE FROM Agendamento WHERE id=?'

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json({ id })
      }
    })
  }

  salvarObservacao (observacao, id, res) {
    const sql = 'UPDATE Agendamento SET observacao=? WHERE id=?'

    conexao.query(sql, [observacao, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(201).json(observacao)
      }
    })
  }

  listarObservacoesPorPacienteOuIdAgendamento (idPaciente, id, res) {
    let sql = ''

    if (idPaciente && !id) {
      sql = `SELECT * FROM Agendamento WHERE paciente_id=${idPaciente}`
    } else if (!idPaciente && id) {
      sql = `SELECT * FROM Agendamento WHERE id=${id}`
    } else {
      sql = `SELECT * FROM Agendamento WHERE id=${id} AND paciente_id=${idPaciente}`
    }

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }
}

module.exports = new Agendamento()
