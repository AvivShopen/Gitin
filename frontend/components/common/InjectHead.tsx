import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
}

const InjectHead = ({title}: Props) => {
  return (
    <Head>
      <title>{title ? title : 'GitIn'}</title>
      <meta
        name="description"
        content="Gitin - Bringing code together"
        key="description"
      />
      <meta name="keywords" content="Github, Linkedin, Gitin" key="keywords" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        key="viewport"
      />
    </Head>
  );
};

export default InjectHead;
