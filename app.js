/**********************************************************************************************
 * Objetivo: Criar uma API para disponibilizar os contatos de cada usuário do WhatsApp.
 * Autor: Matheus Alves
 * Data: 17/03/2023
 * Versão: 1.0
 **********************************************************************************************/

//Import das dependencias do projeto 

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const jsonContacts = require('./modulo/functionsContacts')

const { json } = require('body-parser');

const app = express()

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');

    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());

    next();
})

//EndPoint: lista as conversas e contatos do usuário filtrando pelo ID
app.get('/v1/whatsapp/profile/id/:id', cors(), async function (request, response, next) {

    let statusCode;
    let profileId = request.params.id;
    let dataProfile = {}

    if (profileId == '' || profileId == undefined || profileId < 1 || profileId > 4 || profileId.length !=1 || isNaN(profileId)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio ou necessitam ser entre 1 e 4.'
    } else {
        let contacts = jsonContacts.getProfileId(profileId)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

//EndPoint: lista as conversas e contatos do usuário filtrando pelo NÚMERO de celular
app.get('/v1/whatsapp/profile/number/:number', cors(), async function (request, response, next) {

    let statusCode;
    let profileNumber = request.params.number;
    let dataProfile = {}

    if (profileNumber == '' || profileNumber == undefined || profileNumber.length < 10 || profileNumber.length > 11 || isNaN(profileNumber)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio ou necessitam ter 11 numeros.'
    } else {
        let contacts = jsonContacts.getProfileNumber(profileNumber)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

//EndPoint: lista as conversas e contatos do usuário filtrando pelo NOME
app.get('/v1/whatsapp/profile/name/:name', cors(), async function (request, response, next) {

    let statusCode;
    let profileName = request.params.name;
    let dataProfile = {}

    if (profileName == '' || profileName == undefined || !isNaN(profileName)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio.'
    } else {
        let contacts = jsonContacts.getProfileName(profileName)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

//EndPoint: puxa a foto de perfil do usuário pelo ID
app.get('/v1/whatsapp/profile/image/id/:id', cors(), async function (request, response, next) {

    let statusCode;
    let profileId = request.params.id;
    let dataProfile = {}

    if (profileId == '' || profileId == undefined || profileId < 1 || profileId > 4 || profileId.length !=1 || isNaN(profileId)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio ou necessitam ser entre 1 e 4.'
    } else {
        let contacts = jsonContacts.getProfileImageId(profileId)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

//EndPoint: puxa a foto de perfil do usuário pelo NÚMERO de celular
app.get('/v1/whatsapp/profile/image/number/:number', cors(), async function (request, response, next) {

    let statusCode;
    let profileNumber = request.params.number;
    let dataProfile = {}

    if (profileNumber == '' || profileNumber == undefined || profileNumber.length < 10 || profileNumber.length > 11 || isNaN(profileNumber)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio ou necessitam ter 11 numeros.'
    } else {
        let contacts = jsonContacts.getProfileImageNumber(profileNumber)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

//EndPoint: puxa a foto de perfil do usuário pelo NOME
app.get('/v1/whatsapp/profile/image/name/:name', cors(), async function (request, response, next) {

    let statusCode;
    let profileName = request.params.name;
    let dataProfile = {}

    if (profileName == '' || profileName == undefined || !isNaN(profileName)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio.'
    } else {
        let contacts = jsonContacts.getProfileImageName(profileName)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

//EndPoint: muda a cor de background de cada usuário pelo ID
app.get('/v1/whatsapp/profile/background/id/:id', cors(), async function (request, response, next) {

    let statusCode;
    let profileId = request.params.id;
    let dataProfile = {}

    if (profileId == '' || profileId == undefined || profileId < 1 || profileId > 4 || profileId.length !=1 || isNaN(profileId)) {
        statusCode = 400;
        dataProfile.message = 'Não foi possível processar, pois os dados enviados não podem estar vazio ou necessitam ser entre 1 e 4.'
    } else {
        let contacts = jsonContacts.getProfileBackground(profileId)

        if (contacts) {
            statusCode = 200;
            dataProfile = contacts;
        } else {
            statusCode = 400;
        }
    }

    response.status(statusCode)
    response.json(dataProfile)
})

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')
})
