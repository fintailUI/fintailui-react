import React from 'react';

import { Button } from '../../../src';

export default {
  title: 'Buttons',
  component: Button,
};

export const Colors = () => (
  <div>
    <Button color="primary">
      Primary
    </Button>
    <Button color="secondary">
      Secondary
    </Button>
    <Button color="success">
      Success
    </Button>
    <Button color="danger">
      Danger
    </Button>
    <Button color="warning">
      Warning
    </Button>
    <Button color="info">
      Info
    </Button>
    <Button color="light">
      Light
    </Button>
    <Button color="dark">
      Dark
    </Button>
  </div>
)

export const Sizes = () => (
  <div className="flex items-end">
    <Button size="xl">
      Button
    </Button>
    <Button size="lg">
      Button
    </Button>
    <Button size="md">
      Button
    </Button>
    <Button size="sm">
      Button
    </Button>
    <Button size="xs">
      Button 
    </Button>
  </div>
)

export const Outlines = () => (
  <div>
    <Button outline color="primary">
      Primary
    </Button>
    <Button outline color="secondary">
      Secondary
    </Button>
    <Button outline color="success">
      Success
    </Button>
    <Button outline color="danger">
      Danger
    </Button>
    <Button outline color="warning">
      Warning
    </Button>
    <Button outline color="info">
      Info
    </Button>
    <Button outline color="light">
      Light
    </Button>
    <Button outline color="dark">
      Dark
    </Button>
  </div>
)

export const Disabled = () => (
  <>
    <p className="pb-4">Default buttons</p>
    <div>
      <Button disabled color="primary">
        Primary
      </Button>
      <Button disabled color="secondary">
        Secondary
      </Button>
      <Button disabled color="success">
        Success
      </Button>
      <Button disabled color="danger">
        Danger
      </Button>
      <Button disabled color="warning">
        Warning
      </Button>
      <Button disabled color="info">
        Info
      </Button>
      <Button disabled color="light">
        Light
      </Button>
      <Button disabled color="dark">
        Dark
      </Button>
    </div>
    <p className="py-4">Outline buttons</p>
    <div>
      <Button outline disabled color="primary">
        Primary
      </Button>
      <Button outline disabled color="secondary">
        Secondary
      </Button>
      <Button outline disabled color="success">
        Success
      </Button>
      <Button outline disabled color="danger">
        Danger
      </Button>
      <Button outline disabled color="warning">
        Warning
      </Button>
      <Button outline disabled color="info">
        Info
      </Button>
      <Button outline disabled color="light">
        Light
      </Button>
      <Button outline disabled color="dark">
        Dark
      </Button>
    </div>
  </>
)

export const Rounded = () => (
  <>
    <p className="pb-4">Default buttons</p>
    <div>
      <Button rounded color="primary">
        Primary
      </Button>
      <Button rounded color="secondary">
        Secondary
      </Button>
      <Button rounded color="success">
        Success
      </Button>
      <Button rounded color="danger">
        Danger
      </Button>
      <Button rounded color="warning">
        Warning
      </Button>
      <Button rounded color="info">
        Info
      </Button>
      <Button rounded color="light">
        Light
      </Button>
      <Button rounded color="dark">
        Dark
      </Button>
    </div>
    <p className="py-4">Outline buttons</p>
    <div>
      <Button outline rounded color="primary">
        Primary
      </Button>
      <Button outline rounded color="secondary">
        Secondary
      </Button>
      <Button outline rounded color="success">
        Success
      </Button>
      <Button outline rounded color="danger">
        Danger
      </Button>
      <Button outline rounded color="warning">
        Warning
      </Button>
      <Button outline rounded color="info">
        Info
      </Button>
      <Button outline rounded color="light">
        Light
      </Button>
      <Button outline rounded color="dark">
        Dark
      </Button>
    </div>
  </>
)