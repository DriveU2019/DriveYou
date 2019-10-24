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
 * Description: Test If Component Render Correct!
 *        TODO:
 * --------------------------------------------------------------------------------
 */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accounting from '../../components/accounting/Accounting';

configure({ adapter: new Adapter() });

describe('Accounting main Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Accounting />);

    expect(component).toMatchSnapshot();
  });
});
