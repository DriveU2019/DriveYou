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

const licenseClassSchema = new mongoose.Schema({
  class: {
    type: String,
    minlength: 1,
    maxlength: 25,
    required: true,
    unique: true
  },
  theoryLesson: [
    {
      lessonNo: {
        type: Number
      },
      lessonName: {
        type: String,
        minlength: 1,
        maxlength: 50,
        required: false,
        unique: true
      },
      lessonTime: {
        type: Number
      }
    }
  ]
});

const LicenseClass = mongoose.model(
  'LicenseClass',
  licenseClassSchema,
  'license_class'
);

exports.LicenseClass = LicenseClass;
