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

/** @module models/employee */
/**
 * @file
 * @since
 * @summary
 * @description
 * @todo
 */

const mongoose = require('mongoose');

const { nameSchema } = require('./subSchema/generels/nameSchema');
const { phoneSchema } = require('./subSchema/generels/phoneSchema');
const { adressSchema } = require('./subSchema/generels/adressSchema');
const { personalSchema } = require('./subSchema/generels/personalSchema');

const employeeSchema = new mongoose.Schema({
  nameSchema,
  phoneSchema,
  adressSchema,
  personalSchema,
  note: {
    type: String,
    minlength: 1,
    maxlength: 4000,
    required: false
  }
});

const Employee = mongoose.model('Employee', employeeSchema, 'employee');

exports.Employee = Employee;
