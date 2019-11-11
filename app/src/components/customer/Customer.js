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

import React from 'react';
import Spinner from '../layout/Spinner';
import { useGets } from '../../service/useFetch';

const Customer = () => {
  const { data, loading } = useGets('http://localhost:3900/api/v1/customers');

  // console.log('CUSTOMER: ', data);
  return (
    <>
      <div>Customer</div>
      {loading ? (
        <Spinner />
      ) : (
        data.map(d => (
          <div key={d._id}>
            <div key={d.adress._id}>
              <p>{d.adress.street}</p>
              <p>{d.adress.no}</p>
              <p>{d.adress.postZip}</p>
              <p>{d.adress.city}</p>
              <p>{d.adress.state}</p>
              <p>{d.adress.country}</p>
            </div>
            <div key={d.name._id}>
              <p>{d.name.firstName}</p>
              <p>{d.name.lastName}</p>
              <p>{d.name.middleName}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Customer;
