import React from 'react';

export type PageProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  page: number;
  setVisible: React.Dispatch<React.SetStateAction<number>>;
};

export type PageIndex = {
  index: number;
  visiblePage: number;
  setVisible: React.Dispatch<React.SetStateAction<number>>;
};
