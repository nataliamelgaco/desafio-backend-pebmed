class Tabelas {
  init (conexao) {
    this.conexao = conexao
    this.criarTabelaPaciente()
    this.criarTabelaAgendamento()
  }

  criarTabelaPaciente () {
    const sql = 'CREATE TABLE IF NOT EXISTS Paciente(id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, telefone varchar(15), email varchar(50), sexo varchar(1), data_nascimento datetime , altura numeric, peso numeric, PRIMARY KEY(id))'

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log('Não foi possível criar a tabela Paciente. Motivo:')
        console.log(erro)
      } else {
        console.log('Tabela Paciente criada com sucesso')
      }
    })
  }

  criarTabelaAgendamento () {
    const sql = 'CREATE TABLE IF NOT EXISTS pebmed.Agendamento(id int NOT NULL AUTO_INCREMENT, paciente_id int NOT NULL, data_consulta datetime NOT NULL, observacao varchar(500), PRIMARY KEY (id), FOREIGN KEY (paciente_id) REFERENCES Paciente(id))'

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log('Não foi possível criar a tabela Agendamento. Motivo:')
        console.log(erro)
      } else {
        console.log('Tabela Agendamento criada com sucesso')
      }
    })
  }
}

module.exports = new Tabelas()
