/**
 * @copyright 2019
 * @author [dage] @DriveYou
 *
 * @license Apache-2.0
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

/** @module Server */
/**
 * @file Initialize the Application
 * @version 1.0.0
 * @summary Drive You
 * @description DrivingSchool Management Application
 * @todo
 */

const config = require('config');
const winston = require('winston');

const app = require('./app');

const port = process.env.PORT || config.get('port');

const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
