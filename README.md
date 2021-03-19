Instruções Gerais
	1. O projeto está hospedado no github em: 
		- HTTPS: https://github.com/nataliamelgaco/desafio-backend-pebmed.git
		- SSH: git@github.com:nataliamelgaco/desafio-backend-pebmed.git
	2. As tabelas do banco de dados serão criadas automaticamente ao rodar a api, bastará apenas que configure-se o banco de dados antes de rodar a api. Caso tenham interesse, os comandos para criação das tabelas emcontram-se no caminho infraestrutura/tabelas.js
	3. Para que as tabelas sejam criadas corretamente, será preciso criar um banco de dados no MySql com as seguintes informações:
		- nome do banco: pebmed
		- usuario: root
		- senha: admin
		- porta: 3306
	4. Caso opte por mudar as configurações da conexão do banco, será necessário alterar o arquivo no caminho infraestrutura/conexao.js
	5. Com o banco configurado, execute os seguintes comandos:
		- npm install
		- npm start
	6. Para executar os testes, execute o seguinte comando:
		- npm run test
	7. Para verificar a legibilidade do código, execute o seguinte comando:
		- npm run lint
	8. Foi realizada uma integração contínua automatizada no github. O script encontra-se em: .github\workflows\ci.yml
	9. A documentação da api encontra-se na pasta docs. Lá encontram-se os seguintes arquivos:
		- desafio-pebmed.postman_collection.json: collection da documentação da api para importação no postman_collection
		- Link da coleção no postman.txt: arquivo contendo o link da coleção do postman para importação 
		- Diagrama ER do banco de dados.pdf: arquivo contendo o diagrama ER do banco de dados criado