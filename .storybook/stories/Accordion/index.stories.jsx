import React, { useState } from 'react';

import { Card, Accordion } from '../../../dist';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <Card className="my-4">
      <Card.Header onClick={() => setOpen(!open)}>My header</Card.Header>
      <Accordion open={open}>
        <Card.Body>Card with header and footer</Card.Body>
      </Accordion>
      <Card.Footer>My footer</Card.Footer>
    </Card>
  )
}