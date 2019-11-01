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
  // console.log(req.body);
  const { name, phone, adress, personals, note } = req.body;
  const customerFields = {};
  // if (name.lastName) customerFields.name.lastName = name.lastName;
  // if (name.firstName) customerFields.name.firstName = name.firstName;
  // if (name.middleName) customerFields.name.middleName = name.middleName;
  // if (phone.phoneNo) customerFields.phone.phoneNo = phone.phoneNo;
  // if (phone.mobileNo) customerFields.phone.mobileNo = phone.phoneNo;
  // if (phone.faxNo) customerFields.phone.faxNo = phone.phoneNo;
  // if (adress.street) customerFields.adress.street = adress.street;
  // if (adress.no) customerFields.adress.no = adress.no;
  // if (adress.postZip) customerFields.adress.postZip = adress.postZip;
  // if (adress.city) customerFields.adress.city = adress.city;
  // if (adress.state) customerFields.adress.state = adress.state;
  // if (adress.country) customerFields.adress.country = adress.country;
  // if (personals.emailAdress)
  //   customerFields.personals.emailAdress = personals.emailAdress;
  // if (personals.gender) customerFields.personals.gender = personals.gender;
  // if (personals.birthDate)
  //   customerFields.personals.birthDate = personals.birthDate;
  // if (personals.visualAid)
  //   customerFields.personals.visualAid = personals.visualAid;
  // if (personals.isActive)
  //   customerFields.personals.isActive = personals.isActive;
  // if (note) customerFields.note = note;
  if (name) customerFields.name = name;
  if (phone) customerFields.phone = phone;
  if (adress) customerFields.adress = adress;
  if (personals) customerFields.personals = personals;
  if (note) customerFields.note = note;
  console.log(customerFields);
  // console.log(req.body);

  try {
    // const newCustomer = new Customer(customerFields);
    console.log('req.body');
    const newCustomer = new Customer(req.body);
    if (!newCustomer) {
      return res.status(404).send('Not Found!');
    }
    const customer = await newCustomer.save();
    res.send(customer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error!');
  }
});

router.put('/:id', async (req, res) => {
  const { name, phone, adress, personals, note } = req.body;
  const customerFields = {};
  if (name.lastName) customerFields.name.lastName = name.lastName;
  if (name.firstName) customerFields.name.firstName = name.firstName;
  if (name.middleName) customerFields.name.middleName = name.middleName;
  if (phone.phoneNo) customerFields.phone.phoneNo = phone.phoneNo;
  if (phone.mobileNo) customerFields.phone.mobileNo = phone.phoneNo;
  if (phone.faxNo) customerFields.phone.faxNo = phone.phoneNo;
  if (adress.street) customerFields.adress.street = adress.street;
  if (adress.no) customerFields.adress.no = adress.no;
  if (adress.postZip) customerFields.adress.postZip = adress.postZip;
  if (adress.city) customerFields.adress.city = adress.city;
  if (adress.state) customerFields.adress.state = adress.state;
  if (adress.country) customerFields.adress.country = adress.country;
  if (personals.emailAdress)
    customerFields.personals.emailAdress = personals.emailAdress;
  if (personals.gender) customerFields.personals.gender = personals.gender;
  if (personals.birthDate)
    customerFields.personals.birthDate = personals.birthDate;
  if (personals.visualAid)
    customerFields.personals.visualAid = personals.visualAid;
  if (personals.isActive)
    customerFields.personals.isActive = personals.isActive;
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
    res.status(500).send('Server Error!');
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
