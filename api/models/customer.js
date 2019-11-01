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

const mongoose = require('mongoose');
const Joi = required('joi');

const { nameSchema } = require('./subSchema/nameSchema');
const { phoneSchema } = require('./subSchema/phoneSchema');
const { adressSchema } = require('./subSchema/adressSchema');
const { presonalsSchema } = require('./subSchema/personalsSchema');

const customerSchema = new mongoose.Schema({
  name: nameSchema,
  phone: phoneSchema,
  adress: adressSchema,
  personals: presonalsSchema,
  isActive: {
    type: Boolean,
    required: true
  },
  visualAid: {
    type: Boolean,
    required: true
  },
  // legals: { legalDocumentSchema },
  // TODO: link practical
  // TODO: link Theory
  // TODO: link FS Classes
  // TODO: link EXAM Theory
  // TODO: link EXAM practical
  // TODO: link pricelist
  // TODO: link Driving Teacher
  note: {
    type: String,
    minlength: 2,
    maxlength: 4000,
    required: false
  }
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
  const schema = {
    name: Joi.object().keys({
      lastName: Joi.string()
        .min(2)
        .max(50)
        .required(),
      firstName: Joi.string()
        .min(2)
        .max(50)
        .required(),
      middleName: Joi.string()
        .min(2)
        .max(50)
    }),
    phone: Joi.object().keys({
      phoneNo: Joi.string()
        .min(2)
        .max(50)
        .required(),
      mobileNo: Joi.string()
        .min(2)
        .max(50)
        .required(),
      faxNo: Joi.string()
        .min(2)
        .max(50)
    }),
    adress: Joi.object().keys({
      street: Joi.string()
        .min(2)
        .max(50)
        .required(),
      no: Joi.string()
        .min(1)
        .max(50)
        .required(),
      postZip: Joi.string()
        .min(4)
        .max(50)
        .required(),
      city: Joi.string()
        .min()
        .max(50)
        .required(),
      state: Joi.string()
        .min()
        .max(50)
        .required(),
      country: Joi.string()
        .min()
        .max(50)
        .required()
    }),
    personals: Joi.object().keys({
      emailAdress: Joi.string()
        .min(2)
        .max(50)
        .required(),
      gender: Joi.string()
        .min(4)
        .max(10)
        .required(),
      birthDate: Joi.boolean()
    }),
    isActive: Joi.boolean(),
    visualAid: Joi.boolean()
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
