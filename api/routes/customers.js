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

const express = require("express");
const { Customer } = require("../models/customer");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    if (!customers) {
      return res.status(404).send("not found!");
    }
    res.send(customers);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error!");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById();
    if (!customer) {
      return res.status(404).send("not found!");
    }
    res.send(customer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error!");
  }
});

router.post("/", async (req, res) => {
  const { name, phone, adress, personals, note } = req.body;
  let nameFields = {};
  for (key of Object.keys(name)) nameFields[key] = name[key];
  const phoneFields = {};
  for (key of Object.keys(phone)) phoneFields[key] = phone[key];
  const adressFields = {};
  for (key of Object.keys(adress)) adressFields[key] = adress[key];
  const personalFields = {};
  for (key of Object.keys(personals)) personalFields[key] = personals[key];
  const customerFields = {};
  if (name) customerFields.name = nameFields;
  if (phone) customerFields.phone = phoneFields;
  if (adress) customerFields.adress = adressFields;
  if (personals) customerFields.personals = personalFields;
  if (note) customerFields.note = note;
  try {
    const newCustomer = new Customer(customerFields);
    if (!newCustomer) {
      return res.status(404).send("not found!");
    }
    const customer = await newCustomer.save();
    res.send(customer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ err: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const { name, phone, adress, personals, note } = req.body;
  let nameFields = {};
  for (key of Object.keys(name)) nameFields[key] = name[key];
  const phoneFields = {};
  for (key of Object.keys(phone)) phoneFields[key] = phone[key];
  const adressFields = {};
  for (key of Object.keys(adress)) adressFields[key] = adress[key];
  const personalFields = {};
  for (key of Object.keys(personals)) personalFields[key] = personals[key];
  const customerFields = {};
  if (name) customerFields.name = nameFields;
  if (phone) customerFields.phone = phoneFields;
  if (adress) customerFields.adress = adressFields;
  if (personals) customerFields.personals = personalFields;
  if (note) customerFields.note = note;

  try {
    let updateCustomer = await Customer.findById(req.params.id);
    if (!updateCustomer) {
      return res.status(404).send("not found!");
    }
    updateCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: customerFields },
      { new: true }
    );
    res.send(updateCustomer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error!");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let deleteCustomer = await Customer.findById(req.params.id);
    if (!deleteCustomer) {
      return res.status(404).send("Not Found!");
    }
    await Customer.findByIdAndRemove(req.params.id);
    res.send("Deleted: " + deleteCustomer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error!");
  }
});

module.exports = router;
