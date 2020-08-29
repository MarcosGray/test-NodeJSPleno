# Plotar Markers agrupados no Google Maps
Este projeto foi desenvolvido com Nodejs, React, Gogle-map-react e Docker com o objetivo de plotar 50.000 pontos no mapa e agupá-los a medida que diminui 
o zoom no mapa.

## Entendendo o funcionamento

Ao executar o projeto vai abrir uma página com o Google Maps plotando algums pontos que estão agrupados, este markers estarão mostrando valores que 
represetam a quantidade de pontos que estão sendo agrupados nele em forma de círculo.

Ao aproximar o mapa, ou seja aumentar o zoom irá surgir outros pontos, que irá mostrar markers com um imagem diferente, estes markers representa o ponto específico.

Ao distanciar o mapa, ou seja, diminuir o zoom os Markers irão diminuindo em quantidade e mostrando valores dentro circulo maiores, representando a quantidade de 
pontos agrupados naquele local.

## Como instalar projeto

### Passo 1:
Baixe o projeto usando o codigo abaixo.

<code>https://github.com/MarcosGray/test-NodeJSPleno.git</code>

### Passo 2:
Entre na pasta backend e instale o as dependências executando os códigos abaixo (precisa ter o npm ou yarn instalado):

<code>npm install</code> ou <code>yarn</code>

### Passo 3:
Entre na pasta frontmap e execute qualquer um dos codigos abaixo para instalar as depencias do projeto no frontend.

<code>npm install</code> ou <code>yarn</code>

## Como rodar projeto sem o docker:

### Passo 1:
Dentro da pasta backend abra o terminal e execute o código abaixo, para subir a api.

<code>npm start</code> ou <code>yarn start</code>

### Passo 2:
Dentro da pasta frontend abra o terminal e execute o código abaixo, para subir a frontend.

<code>npm start</code> ou <code>yarn start</code>

### Passo 3:
Abra um navegador da sua preferencia e cole a url abaixo.

<code>http://localhost:3000</code>

## Como rodar projeto com o docker:

### Passo 1:
Entre na pasta do projeto pelo terminal e execute o código abaixo:

<code>docker-compose up -d --build</code>

### Passo 2:
Abra um navegador da sua preferencia e cole a url abaixo.

<code>http://localhost:3000</code>
