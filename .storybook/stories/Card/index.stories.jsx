import React from 'react';

import { Card } from '../../../src';

export default {
  title: 'Cards',
  component: Card,
};

export const Default = () => (
  <Card className="my-4">
    <Card.Body>Basic card</Card.Body>
  </Card>
)

export const HeaderAndFooter = () => (
  <Card className="my-4">
    <Card.Header>My header</Card.Header>
    <Card.Body>Card with header and footer</Card.Body>
    <Card.Footer>My footer</Card.Footer>
  </Card>

)
export const Image = () => (
  <Card className="my-4">
    <img src="http://via.placeholder.com/640x360" />
    <Card.Body>Card with image</Card.Body>
  </Card>
)