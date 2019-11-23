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

/** @module validators/user */
/**
 * @file
 * @since
 * @summary
 * @description
 * @todo
 */

const Joi = require('joi');

function validateUser(user) {
  const schema = {
    email: Joi.string()
      .email()
      .required(),
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
    password: Joi.string().required(),
    rules: Joi.array().items(Joi.object().keys({ name: Joi.string() }))
  };

  return Joi.validate(user, schema);
}

exports.validate = validateUser;
