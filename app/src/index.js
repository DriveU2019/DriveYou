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

/**
 * --------------------------------------------------------------------------------
 * @file:
 * @version:
 * @summary:
 * @description:
 * @todo:
 * --------------------------------------------------------------------------------
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
//
import App from "./App";

/* Global Theme Generator */
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e"
    },
    secondary: {
      main: "#0d47a1"
    }
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif, Helvetica"
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
