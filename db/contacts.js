const fs = require('fs').promises;
const path = require('path');

const contactPath = path.join(__dirname, 'contacts.json');

function listContacts() {
    // ...твій код
}

function getContactById(contactId) {
    // ...твій код
}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}