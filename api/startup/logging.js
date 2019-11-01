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

const winston = require('winston');
const config = require('config');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.exceptions.handle(new winston.transports.Console({}));

  process.on('unhandledRejection', ex => {
    throw ex;
  });

  winston.add(new winston.transports.Console({}));

  winston.add(
    new winston.transports.MongoDB({
      db: process.env.DATABASE || config.get('db'),
      collection: 'logging',
      storeHost: true,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    })
  );
};
