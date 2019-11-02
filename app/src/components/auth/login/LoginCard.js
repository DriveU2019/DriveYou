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
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 275
  },
  bgColor: {
    backgroundColor: '#e6oooo'
  }
}));

const LoginCard = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h4' component='h2' gutterBottom>
            Drive You
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' component='h2' gutterBottom>
            Driving School Management System <br /> which grows with ur needs
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' component='h2' gutterBottom>
            For more infomations please contact: <br /> driveu2019@gmail.com
          </Typography>
          <Grid item xs={12}>
            <Typography variant='subtitle1' component='h2' gutterBottom>
              Copyright 2019 Drive You <br /> Build with Material-UI
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider orientation='vertical' />
    </>
  );
};

export default LoginCard;
