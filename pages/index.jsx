import Head from 'next/head';
import IndexLayout from "components/layouts/IndexLayout";
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>HOME | Io Design And Home</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
aa
      </div>
    </>
  );
}
HomePage.layout = IndexLayout;