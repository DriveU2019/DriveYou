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

/** @module app */
/**
 * @file Initialize Services
 * @since 1.0.0
 * @summary Initialize Services
 * @description Main File to Initialize Global Services
 * @todo
 */

/** @requires module:express */
const express = require('express');
const app = express();

/**
 * Request Limit
 * @typedef {Object} Limit
 * @property {string} limit - 1 MB
 */
app.use(express.json({ limit: '1mb' }));

/**
 * Initialize Logging Services.
 * @param {Logging Service} logging - Initialize Logging
 * value of {@link logging}.
 */
require('./startup/logging')();

/**
 * Initialize CORS Service
 * @param {Cors Service} cors - Initialize CORS
 * value of {@link cors}.
 */
require('./startup/cors')(app);

/**
 * Initialize Routes Service
 * @param {Routes Service} routes - Initialize Routes
 * value of {@link routes}.
 */
require('./startup/routes')(app);

/**
 * Initialize Database Service
 * @param {DB Service} Database - Initialize Database
 * value of {@link db}.
 */
require('./startup/db')();

/**
 * Initialize Config Service
 * @param {Config Service} Config - Initialize Config
 * value of {@link Config}.
 */
require('./startup/config')();

// require('./startup/validation')();

module.exports = app;
