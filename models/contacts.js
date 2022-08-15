const fs = require('fs').promises;
const path = require("path");
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, 'contacts.json');

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}


const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

const getContactById = async (id) => { 
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === id);
  return result || null;
}

const addContact = async (body) => { 
  const contacts = await listContacts();
  const newContact = {
    id: v4(),
    ...body
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
}

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  const [result] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return result;
}

const updateContact = async (id, {name, email, phone }) => { 
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, name, email, phone };
  await updateContacts(contacts);
  return contacts[idx];
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};