class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelasCadastro()
    }

    criarTabelasCadastro(){
        const sql = 'CREATE TABLE IF NOT EXISTS Paciente(id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, telefone varchar(15), sexo varchar(1), data_nascimento datetime NOT NULL, PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela Paciente criada com sucesso')
            }

        })
    }
}

module.exports = new Tabelas