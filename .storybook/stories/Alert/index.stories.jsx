import React from 'react';

import { Alert } from '../../../dist';

export default {
  title: 'Alert',
  component: Alert,
};

export const Colors = () => (
  <>
    <Alert color="primary"><b>Alert!</b> This is a primary alert</Alert>
    <Alert color="secondary"><b>Alert!</b> This is a secondary alert</Alert>
    <Alert color="success"><b>Alert!</b> This is a success alert</Alert>
    <Alert color="danger"><b>Alert!</b> This is a danger alert</Alert>
    <Alert color="warning"><b>Alert!</b> This is a warning alert</Alert>
    <Alert color="light"><b>Alert!</b> This is a light alert</Alert>
    <Alert color="dark"><b>Alert!</b> This is a dark alert</Alert>
  </>
)