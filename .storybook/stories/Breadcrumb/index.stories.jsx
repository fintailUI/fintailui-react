import React from 'react';

import { Breadcrumb } from '../../../dist';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => {

  return (
    <Breadcrumb>
      <a href="/">Home</a>
      <a href="/users">Users</a>
      <label>Add user</label>
    </Breadcrumb>
  )
}

export const CustomSeparator = () => {

  return (
    <Breadcrumb separator=">">
      <a href="/">Home</a>
      <a href="/users">Users</a>
      <label>Add user</label>
    </Breadcrumb>
  )
}

export const CustomClass = () => {

  return (
    <Breadcrumb className="bg-green-300">
      <a href="/">Home</a>
      <a href="/users">Users</a>
      <label>Add user</label>
    </Breadcrumb>
  )
}