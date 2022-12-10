const contacts = require('./db/contacts');
const { program } = require('commander');

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contactList = await contacts.listContacts()
            console.table(contactList)
            break;

        case "get":
            const contact = await contacts.getContactById(id)
            console.log(contact)
            break;

        case "add":
            const newContact = await contacts.addContact({ name, email, phone })
            console.log(newContact)
            break;
        case "remove":
            const deletedContact = await contacts.removeContact(id)
            console.log(deletedContact)
            break;

        default:
            console.warn("Unknown action type!");
    }
}

program.parse();
const options = program.opts();

invokeAction(options)