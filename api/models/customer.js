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

/** @module models/customer */
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
const { legalDocSchema } = require('./subSchema/customer/legalDoc');

const customerSchema = new mongoose.Schema({
  nameSchema,
  phoneSchema,
  adressSchema,
  personalSchema,
  store: {
    name: {
      type: String,
      minlength: 1,
      maxlength: 25,
      required: false,
      unique: false
    },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'store',
      required: false
    }
  },
  legalDocSchema,
  theoryLesson: [
    {
      store: {
        type: String,
        minlength: 1,
        maxlength: 25,
        required: false,
        unique: false
      },
      licenseClass: {
        type: String,
        minlength: 1,
        maxlength: 25,
        required: false,
        unique: false
      },
      lesson: {
        type: String,
        minlength: 1,
        maxlength: 25,
        required: false,
        unique: false
      },
      dueDate: {
        type: Date,
        required: true,
        unique: false
      },
      startTime: {
        type: String
      },
      endTimer: {
        type: String
      },
      employee: {
        nameSchema,
        employeeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'employee',
          required: false
        }
      },
      theoLessonId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theory_lesson',
        required: false
      }
    }
  ],
  // TODO: link practical
  // TODO: link FS Classes
  // TODO: link EXAM Theory
  // TODO: link EXAM practical
  // TODO: link pricelist
  // TODO: link Driving Teacher
  note: {
    type: String,
    minlength: 1,
    maxlength: 4000,
    required: false
  }
});

const Customer = mongoose.model('Customer', customerSchema, 'customer');

// exports.customerSchema = customerSchema;
exports.Customer = Customer;
