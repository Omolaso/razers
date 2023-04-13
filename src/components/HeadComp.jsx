import Head from "next/head";

const HeadComp = ({ title, logo }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="US based website for games and gadgets"
      />
      <link rel="icon" href={logo.src} />
    </Head>
  );
};

export default HeadComp;
