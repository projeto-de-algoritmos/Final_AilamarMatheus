# Trabalho final

**Número da Dupla**: 6 <br>
**Conteúdo da Disciplina**: Grafos <br>

## Alunos

**Matrícula** | **Aluno** 
:-----------: | :---------:
16/0022673    | Ailamar Alves Guimarães
17/0080307    | Matheus Amaral Moreira

## Sobre 

Nesse projeto final a dupla busca atualizar e melhorar a aplicação contruída inicialmente no semestre utilizando os métodos de melhor caminho adquiridos nas aulas, partindo da ideia de apps de serviço de pesquisa de mapas e rotas. Nossa aplicação consiste em retornar ao usuário o melhor caminho entre uma região administrativa e outra em relação à distância até a cidade de destino.

## Screenshots

- Tela inicial   
<br>

![Home](./assets/home.png)

- Tela de Busca   
<br>

![lista de cidades](./assets/busca.png)
<br>

- Mapa de rotas  
<br>

![Pesquisa](./assets/grafo.png)


## Instalação 
**Linguagem**: JavaScript <br>
**Framework**: Node JS, React JS<br>

Nosso projeto consiste nas tecnologias NodeJS e um arquivo JS como motores.

1. Abra o terminal em uma pasta e faça o clone do repositorio do GitHub para sua máquina:
```
$ git clone https://github.com/projeto-de-algoritmos/Final_RotasDF2.0.git
```

2. O segundo passo é entrar na pasta do repositório e instalar as dependências do NodeJS (para isso você deve ter o NodeJS já instalado):
```
$ cd ./Final_RotasDF2.0/backend
$ npm install
```

```
$ cd ./Final_RotasDF2.0/frontend/src
$ npm install
```

3. Inicie o servidor com o comando:
```
$ npm start
```

4. Com a página iniciada faça suas buscas pelas cidades que deseja saber o caminho.

## Uso 

Selecione uma cidade no primeiro bloco, uma cidade no segundo bloco e clique em pesquisar. O resultado vai a rota com o menor custo da origem até o destino.

[Vídeo de explicação e uso do projeto.](https://youtu.be/fhVnegHuK48)

## Outros 

Para encontrar o melhor caminho o algoritimo utilizado nesse projeto foi o Dijkstra.




