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

import {
  GET_VALUES,
  ADD_VALUE,
  UPDATE_VALUE,
  DELETE_VALUE,
  VALUE_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_VALUES,
  FILTER_VALUES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_VALUES:
      return {
        ...state,
        values: action.payload,
        loading: false
      };
    case ADD_VALUE:
      return {
        ...state,
        value: [action.payload, ...state.values],
        loading: false
      };
    case UPDATE_VALUE:
      return {
        ...state,
        values: state.values.map(value =>
          value._id === action.payload._id ? action.payload : value
        ),
        loading: false
      };
    case DELETE_VALUE:
      return {
        ...state,
        values: state.values.filter(value => value._id !== action.payload),
        loading: false
      };
    case FILTER_VALUES:
      return {
        ...state,
        filtered: state.values.filter(value => {
          const regex = new RegExp(`${action.payload}`, "gi");
          // const key = Object.keys(state.values);
          // console.log(key);
          return value.name.match(regex);
          // || value.resolution.match(regex);
        })
      };
    case CLEAR_VALUES:
      return {
        ...state,
        values: null,
        error: null,
        current: null
      };
    case VALUE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
