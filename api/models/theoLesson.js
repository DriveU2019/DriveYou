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

const mongoose = require("mongoose");
const { nameSchema } = require("./subSchema/generels/nameSchema");

const theoLessonSchema = new mongoose.Schema({
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
      ref: "employee",
      required: false
    }
  },
  customer: [
    {
      nameSchema,
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cumstomer",
        required: false
      }
    }
  ]
});

const TheoyLesson = mongoose.model(
  "TheoryLesson",
  theoLessonSchema,
  "theory_lesson"
);

exports.TheoyLesson = TheoyLesson;
