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
            jsonProfileList.contacts = dataContacts.contacts
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
            jsonProfileList.contacts = dataContacts.contacts
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
            jsonProfileList.contacts = dataContacts.contacts
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

//Para exportar as funções
module.exports = {
    getProfileId,
    getProfileNumber,
    getProfileName
}