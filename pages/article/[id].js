import Error from 'next/error';
import Head from 'next/head';
import Navbar from 'components/navbar';
import Breadcrumbs from 'components/breadcrumbs';
import Headline from 'components/headline';
import Subheadline from 'components/subheadline';
import Byline from 'components/byline';
import Timestamp from 'components/timestamp';
import Body from 'components/body';

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
      <article>
        <Breadcrumbs article={article} />
        <Headline article={article} />
        <Subheadline article={article} />
        <Byline article={article} />
        <Timestamp article={article} />
        <Body article={article} />
      </article>
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
