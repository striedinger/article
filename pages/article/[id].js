import Error from 'next/error';
import Head from 'next/head';
import Navbar from 'features/navbar';
import Breadcrumbs from 'features/breadcrumbs';
import Headline from 'features/headline';
import Subheadline from 'features/subheadline';
import Hero from 'features/hero';
import Byline from 'features/byline';
import Timestamp from 'features/timestamp';
import Body from 'features/body';
import styles from './styles.module.css';

const DOMAIN = process.env.DOMAIN;

const Article = props => {
  const { article, errorCode } = props;
  if (errorCode) return <Error statusCode={errorCode} />;
  const { headline } = article;
  return (
    <React.Fragment>
      <Head>
        <title>{headline}</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.tools} />
        <article className={styles.article}>
          <Breadcrumbs article={article} />
          <Headline article={article} />
          <Subheadline article={article} />
          <Hero article={article} />
          <div className={styles.body}>
            <Byline article={article} />
            <Timestamp article={article} />
            <Body article={article} />
          </div>
        </article>
        <div className={styles.sidebar} />
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const response = await fetch(`${DOMAIN}/api/article/${id}`);
  if (!response.ok) {
    res.statusCode = response.status;
    return {
      props: {
        errorCode: response.status,
      },
    };
  }
  const article = await response.json();
  return {
    props: {
      article,
    },
  };
};

export default Article;
