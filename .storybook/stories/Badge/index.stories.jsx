import React from 'react';

import { Badge } from '../../../dist';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = () => (
  <>
    <Badge color="primary">Primary</Badge>{' '}
    <Badge color="secondary">Secondary</Badge>{' '}
    <Badge color="success">Success</Badge>{' '}
    <Badge color="danger">Danger</Badge>{' '}
    <Badge color="warning">Warning</Badge>{' '}
    <Badge color="light">Light</Badge>{' '}
    <Badge color="dark">Dark</Badge>{' '}
  </>
)

export const Rounded = () => (
  <>
    <Badge rounded color="primary">Primary</Badge>{' '}
    <Badge rounded color="secondary">Secondary</Badge>{' '}
    <Badge rounded color="success">Success</Badge>{' '}
    <Badge rounded color="danger">Danger</Badge>{' '}
    <Badge rounded color="warning">Warning</Badge>{' '}
    <Badge rounded color="light">Light</Badge>{' '}
    <Badge rounded color="dark">Dark</Badge>{' '}
  </>
)