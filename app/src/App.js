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

import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//
import Navbar from './components/layout/Navbar';
import Customer from './components/customer/Customer';
import TheoryLesson from './components/theoryLesson/TheoryLesson';
import DriveLesson from './components/driveLesson/DriveLesson';
import Company from './components/company/Company';
import Employee from './components/employee/Employee';
import Payment from './components/payment/Payment';
//
import NotFound from './components/layout/NotFound';

const App = () => {
  return (
    <Fragment>
      <Switch>
        {/* <Route exact path='/login' component={Login} /> */}
        <Navbar>
          <Route exact path='/' component={Customer} />
          <Route exact path='/theorylesson' component={TheoryLesson} />
          <Route exact path='/drivelesson' component={DriveLesson} />
          <Route exact path='/company' component={Company} />
          <Route exact path='/employee' component={Employee} />
          <Route exact path='/payment' component={Payment} />
          {/*  */}
          <Route path='/notFound' component={NotFound} />
          {/* <Redirect from='/' exact to='/' /> */}
          {/* <Redirect to='/notFound' /> */}
          {/*  */}
        </Navbar>
      </Switch>
    </Fragment>
  );
};

export default App;
