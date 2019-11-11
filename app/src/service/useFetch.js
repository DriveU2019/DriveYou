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

import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGets = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    async function fetchData() {
      try {
        const { data } = await axios.get(url);
        setState({ data: data, loading: false });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [url, setState]);
  console.log(state);
  return state;
};
