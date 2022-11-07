import Head from 'next/head';

import IndexLayout from "components/layouts/IndexLayout";


import { Card, Container, Form, Image, Carousel } from 'react-bootstrap';
import OurTools from 'container/home/our-tools';

export default function Catalog() {

  return (
    < >
      <Head>
        <title>HOME | Io Design And Home</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

        <OurTools />

      </div>
    </ >
  );
}
Catalog.layout = IndexLayout;