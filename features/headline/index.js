import styles from './styles.module.css';

const Headline = props => {
  const { article: { headline } } = props;
  if (!headline) return null;
  return <h1 className={styles.headline}>{headline}</h1>;
};

export default Headline;
