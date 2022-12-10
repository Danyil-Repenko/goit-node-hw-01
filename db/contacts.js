const fs = require('fs').promises;
const path = require('path');
const uniqid = require('uniqid');

const contactPath = path.join(__dirname, 'contacts.json');

async function listContacts() {
    const result = await fs.readFile(contactPath, 'utf-8');
    return JSON.parse(result);
}

async function getContactById(contactId) {
    const list = await listContacts();
    const result = list.find(element => element.id === contactId);
    return result || null;
}

async function removeContact(contactId) {
    const list = await listContacts();
    const index = list.findIndex(element => element.id === contactId)
    if (index === -1) {
        return null
    }

    const deletedContact = list.splice(index, 1)
    await fs.writeFile(contactPath, JSON.stringify(list, null, 2));

    return deletedContact;

}

async function addContact({ name, email, phone }) {
    const oldList = await listContacts();
    const newContact = {
        id: uniqid(),
        name,
        email,
        phone,
    };
    const newList = [...oldList, newContact];
    await fs.writeFile(contactPath, JSON.stringify(newList, null, 2));

    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}