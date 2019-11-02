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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//
import LoginForm from './login/LoginForm';
import LoginCard from './login/LoginCard';

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md'>
        <Paper className={classes.paper}>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <LoginForm classes={classes} />
            </Grid>
            <Grid item xs={12} md={6}>
              <LoginCard />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 360
  },
  button: {
    margin: theme.spacing(1)
  },
  gridColor: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff'
  },
  typeText: {
    marginTop: theme.spacing(2)
  }
}));

export default Login;
