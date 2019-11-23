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

/** @module models/vehicle */
/**
 * @file
 * @since
 * @summary
 * @description
 * @todo
 */

const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  vendor: {
    type: String,
    minlenth: 1,
    maxlngth: 20,
    required: false,
    unique: false
  },
  model: {
    type: String,
    minlenth: 1,
    maxlngth: 20,
    required: false,
    unique: false
  },
  buildyear: {},
  note: {
    type: String,
    minlength: 1,
    maxlength: 4000,
    required: false
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema, 'vehicle');

exports.Vehicle = Vehicle;
