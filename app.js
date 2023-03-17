/**********************************************************************************************
 * Objetivo: Criar uma API para disponibilizar os contatos de cada usuário do WhatsApp.
 * Autor: Matheus Alves
 * Data: 17/03/2023
 * Versão: 1.0
 **********************************************************************************************/

//Import das dependencias do projeto 

//Dependencia para criar as requisições da API
const express = require('express');

//Dependencia para gerenciar as permissões da API
const cors = require('cors');

//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');

//Import do arquivo no módulo (funções)
const contatos = require('./modulo/contatos.js');
const { json } = require('body-parser');

app.use((request, response, next) => {
    //API publica -> fica disponível para utilização de qualquer aplicação
    //API privada -> somente o IP informado poderá consumir dados da API

    //Define se a API será publica ou privada (* significa que a API é publica)
    response.header('Acess-Control-Allow-Origin', '*');

    //Permite definir quais métodos poderão ser utilizados nas requisições
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Envia para o cors() as regras de permissões 
    app.use(cors());

    //Passar para o próximo CallBack e não encerrar a API
    next();
})

