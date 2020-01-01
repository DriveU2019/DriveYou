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

import React, { useReducer } from "react";

import http from "../../service/httpService";
import { apiUrlV1 } from "../../service/httpUrl";

import ValueContext from "./valueContext";
import valueReducer from "./valueReducer";

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

const ValueState = props => {
  const initialState = {
    values: null,
    current: null,
    error: null,
    filtered: ""
  };

  const [state, dispatch] = useReducer(valueReducer, initialState);

  //   GET VALUES
  const getValues = async url => {
    try {
      const res = await http.get(`${apiUrlV1}${url}`);
      dispatch({
        type: GET_VALUES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VALUE_ERROR,
        payload: err.response.msg
      });
    }
  };

  //   ADD VALUE
  const addValue = async (url, value) => {
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await http.post(`${apiUrlV1}${url}`, value, config);
      dispatch({
        type: ADD_VALUE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VALUE_ERROR,
        payload: err.response.msg
      });
    }
  };

  //   UPDATE VALUE
  const updateValue = async (url, value) => {
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await http.put(
        `${apiUrlV1}${url}/${value._id}`,
        value,
        config
      );
      dispatch({
        type: UPDATE_VALUE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: VALUE_ERROR,
        payload: err.response.msg
      });
    }
  };

  //   DELETE VALUE
  const deleteValue = async (url, id) => {
    try {
      await http.delete(`${apiUrlV1}${url}/${id}`);
      dispatch({
        type: DELETE_VALUE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: VALUE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // CLEAR VALUES
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  // SET CURRENT VALUE
  const setCurrent = value => {
    dispatch({ type: SET_CURRENT, payload: value });
  };

  // CLEAR CURRENT VALUE
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // GLOBAL FILTER
  const filterValue = text => {
    dispatch({ type: FILTER_VALUES, payload: text });
  };

  return (
    <ValueContext.Provider
      value={{
        values: state.values,
        current: state.current,
        error: state.error,
        filtered: state.filtered,
        getValues,
        addValue,
        updateValue,
        deleteValue,
        clearValues,
        setCurrent,
        clearCurrent,
        filterValue
      }}
    >
      {props.children}
    </ValueContext.Provider>
  );
};
