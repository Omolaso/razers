import Head from "next/head";

const HeadComp = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadComp;
