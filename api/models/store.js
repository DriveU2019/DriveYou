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

/** @module models/store */
/**
 * @file
 * @since
 * @summary
 * @description
 * @todo
 */

const mongoose = require('mongoose');
const { adressSchema } = require('./subSchema/generels/adressSchema');
const { nameSchema } = require('./subSchema/generels/nameSchema');
const { phoneSchema } = require('./subSchema/generels/phoneSchema');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 25,
    required: false, // have to be true
    unique: false // haf to be True
  },
  adressSchema,
  phoneSchema,
  owner: {
    nameSchema,
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
      required: false // have to be true
    }
  },
  head: {
    nameSchema,
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
      required: false // have to be true
    }
  },
  note: {
    type: String,
    minlength: 1,
    maxlength: 4000,
    required: false
  }
});

const Store = mongoose.model('Store', storeSchema, 'store');

exports.Store = Store;
