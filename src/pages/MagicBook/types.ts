import React from 'react';

export type PageProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  page: number;
};

export type PageIndex = {
  index: number;
};
