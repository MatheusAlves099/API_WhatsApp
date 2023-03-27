/**********************************************************************************************
 * Objetivo: Criar função para retornar os contatos de cada perfil do JSON.
 * Autor: Matheus Alves
 * Data: 27/02/2023
 * Versão: 1.0
 **********************************************************************************************/

//Import do arquivo JSON contatos
const arquivoContatos = require('../modulo/contatos.js')

/*********** Função 1 -> para puxar a lista de conversas e contatos pelo ID do usuário *********/
const getProfileId = function (id) {
    let contactId = id;
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.id == contactId) {
            jsonProfileList = dataContacts.contacts
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}
// console.log(getProfileId(1))


/*********** Função 2 -> para puxar a lista de conversas e contatos pelo NÚMERO do usuário *********/
const getProfileNumber = function (number) {
    let contactNumber = number;
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.number == contactNumber) {
            jsonProfileList = dataContacts.contacts
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}

// console.log(getProfileNumber('11955577796'))


/*********** Função 3 -> para puxar a lista de conversas e contatos pelo NOME do usuário *********/
const getProfileName = function (name) {
    let contactName = name;
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.account == contactName) {
            jsonProfileList = dataContacts.contacts
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}

// console.log(getProfileName('Sandy Wilstern'))

/*********** Função 4 -> para puxar as fotos de perfil de cada usuário pelo ID *********/
const getProfileImageId = function (idUser) {
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.id == idUser) {
            jsonProfileList = dataContacts['profile-image']
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}

// console.log(getProfileImageId(1))

/*********** Função 5 -> para puxar as fotos de perfil de cada usuário pelo NUMERO *********/
const getProfileImageNumber = function (numberUser) {
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.number == numberUser) {
            jsonProfileList = dataContacts['profile-image']
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}

// console.log(getProfileImageNumber('11987876567'))

/*********** Função 6 -> para puxar as fotos de perfil de cada usuário pelo NOME *********/
const getProfileImageName = function (nameUser) {
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.account == nameUser) {
            jsonProfileList = dataContacts['profile-image']
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}

// console.log(getProfileImageName('Ricardo da Silva'))

/*********** Função 7 -> para puxar as cores de background de cada usuário pelo ID *********/
const getProfileBackground = function (idUser) {
    let jsonProfileList = {};
    let status = false;

    arquivoContatos.contatos["whats-users"].forEach(dataContacts => {
        if (dataContacts.id == idUser) {
            jsonProfileList = dataContacts['background']
                status = true
            }
        })

    if (status == true) {
        return jsonProfileList;
    } else { 
        return status;
    }
}

// console.log(getProfileBackground(1))

//Para exportar as funções
module.exports = {
    getProfileId,
    getProfileNumber,
    getProfileName,
    getProfileImageId,
    getProfileImageNumber,
    getProfileImageName,
    getProfileBackground
}