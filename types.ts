import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  thumbnail: string;
  url: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface Leadership {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}