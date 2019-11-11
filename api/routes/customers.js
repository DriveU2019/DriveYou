/*
 * Copyright 2019 [dage] @DriveYou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * --------------------------------------------------------------------------------
 * Description:
 *        TODO:
 * --------------------------------------------------------------------------------
 */

const express = require('express');
const { Customer } = require('../models/customer');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    if (!customers) {
      return res.status(404).send('Not Found!');
    }
    res.send(customers);
  } catch (err) {
    res.status(500).send('Server Error!');
    console.log(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById();
    if (!customer) {
      return res.status(404).send('Not Found!');
    }
    res.send(customer);
  } catch (err) {
    res.status(500).send('Server Error!');
    console.log(err.message);
  }
});

router.post('/', async (req, res) => {
  const { name, phone, adress, personals, note } = req.body;

  const nameFields = {};
  // name.forEach(i => nameFields.push(i));
  if (name && name.firstName) nameFields.firstName = name.firstName;
  if (name && name.lastName) nameFields.lastName = name.lastName;
  if (name && name.middleName) nameFields.middleName = name.middleName;

  const phoneFields = {};
  if (phone && phone.phoneNo) phoneFields.phoneNo = phone.phoneNo;
  if (phone && phone.mobileNo) phoneFields.mobileNo = phone.phoneNo;
  if (phone && phone.faxNo) phoneFields.faxNo = phone.phoneNo;

  const adressFields = {};
  if (adress && adress.street) customerFields.street = adress.street;
  if (adress && adress.no) customerFields.no = adress.no;
  if (adress && adress.postZip) customerFields.postZip = adress.postZip;
  if (adress && adress.city) customerFields.city = adress.city;
  if (adress && adress.state) customerFields.state = adress.state;
  if (adress && adress.country) customerFields.country = adress.country;

  const personalFields = {};
  if (personals && personals.emailAdress)
    personalFields.emailAdress = personals.emailAdress;
  if (personals && personals.gender) personalFields.gender = personals.gender;
  if (personals && personals.birthDate)
    personalFields.birthDate = personals.birthDate;
  if (personals && personals.visualAid)
    personalFields.visualAid = personals.visualAid;
  if (personals && personals.isActive)
    personalFields.isActive = personals.isActive;

  const customerFields = {};
  if (name) customerFields.name = nameFields;
  if (phone) customerFields.phone = phoneFields;
  if (adress) customerFields.adress = adressFields;
  if (personals) customerFields.personals = personalFields;
  if (note) customerFields.note = note;

  try {
    const newCustomer = new Customer(customerFields);
    if (!newCustomer) {
      return res.status(404).send('Not Found!');
    }
    const customer = await newCustomer.save();
    res.send(customer);
  } catch (err) {
    // console.log(err.message);
    res.status(500).send({ err: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { name, phone, adress, personals, note } = req.body;
  const nameFields = {};
  // name.forEach(i => nameFields.push(i));
  if (name && name.firstName) nameFields.firstName = name.firstName;
  if (name && name.lastName) nameFields.lastName = name.lastName;
  if (name && name.middleName) nameFields.middleName = name.middleName;

  const phoneFields = {};
  if (phone && phone.phoneNo) phoneFields.phoneNo = phone.phoneNo;
  if (phone && phone.mobileNo) phoneFields.mobileNo = phone.phoneNo;
  if (phone && phone.faxNo) phoneFields.faxNo = phone.phoneNo;

  const adressFields = {};
  if (adress && adress.street) customerFields.street = adress.street;
  if (adress && adress.no) customerFields.no = adress.no;
  if (adress && adress.postZip) customerFields.postZip = adress.postZip;
  if (adress && adress.city) customerFields.city = adress.city;
  if (adress && adress.state) customerFields.state = adress.state;
  if (adress && adress.country) customerFields.country = adress.country;

  const personalFields = {};
  if (personals && personals.emailAdress)
    personalFields.emailAdress = personals.emailAdress;
  if (personals && personals.gender) personalFields.gender = personals.gender;
  if (personals && personals.birthDate)
    personalFields.birthDate = personals.birthDate;
  if (personals && personals.visualAid)
    personalFields.visualAid = personals.visualAid;
  if (personals && personals.isActive)
    personalFields.isActive = personals.isActive;

  const customerFields = {};
  if (name) customerFields.name = nameFields;
  if (phone) customerFields.phone = phoneFields;
  if (adress) customerFields.adress = adressFields;
  if (personals) customerFields.personals = personalFields;
  if (note) customerFields.note = note;
  try {
    let updateCustomer = await Customer.findById(req.params.id);
    if (!updateCustomer) {
      return res.status(404).send('Not Found!');
    }
    updateCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: customerFields },
      { new: true }
    );
    res.send(updateCustomer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('VOM BE! ', err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let deleteCustomer = await Customer.findById(req.params.id);
    if (!deleteCustomer) {
      return res.status(404).send('Not Found!');
    }
    await Customer.findByIdAndRemove(req.params.id);
    res.send('Deleted: ' + deleteCustomer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error!');
  }
});

module.exports = router;
