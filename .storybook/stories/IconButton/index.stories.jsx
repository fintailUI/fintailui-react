import React from 'react';
import { Zap } from 'react-feather'
import { IconButton } from '../../../dist';

export default {
  title: 'IconButton',
  component: IconButton,
};

export const Default = () => {
  return (
    <div>
      <IconButton color="primary">
        <Zap />
      </IconButton>
      <IconButton color="secondary">
        <Zap />
      </IconButton>
      <IconButton color="success">
        <Zap />
      </IconButton>
      <IconButton color="danger">
        <Zap />
      </IconButton>
      <IconButton color="warning">
        <Zap />
      </IconButton>
      <IconButton color="info">
        <Zap />
      </IconButton>
      <IconButton color="light">
        <Zap />
      </IconButton>
      <IconButton color="dark">
        <Zap />
      </IconButton>
    </div>
  )
}

export const Outline = () => {
  return (
    <div>
      <IconButton outline color="primary">
        <Zap />
      </IconButton>
      <IconButton outline color="secondary">
        <Zap />
      </IconButton>
      <IconButton outline color="success">
        <Zap />
      </IconButton>
      <IconButton outline color="danger">
        <Zap />
      </IconButton>
      <IconButton outline color="warning">
        <Zap />
      </IconButton>
      <IconButton outline color="info">
        <Zap />
      </IconButton>
      <IconButton outline color="light">
        <Zap />
      </IconButton>
      <IconButton outline color="dark">
        <Zap />
      </IconButton>
    </div>
  )
}


export const Disabled = () => {
  return (
    <div>
      <IconButton disabled color="primary">
        <Zap />
      </IconButton>
      <IconButton disabled color="secondary">
        <Zap />
      </IconButton>
      <IconButton disabled color="success">
        <Zap />
      </IconButton>
      <IconButton disabled color="danger">
        <Zap />
      </IconButton>
      <IconButton disabled color="warning">
        <Zap />
      </IconButton>
      <IconButton disabled color="info">
        <Zap />
      </IconButton>
      <IconButton disabled color="light">
        <Zap />
      </IconButton>
      <IconButton disabled color="dark">
        <Zap />
      </IconButton>
    </div>
  )
}