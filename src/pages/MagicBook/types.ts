import React from 'react';

export type PageProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  page: number;
  setVisible: () => void;
};

export type PageIndex = {
  index: number;
  visiblePage: number;
  setVisible: () => void;
};
