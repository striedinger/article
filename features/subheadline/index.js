import styles from './styles.module.css';

const Subheadline = props => {
  const { article: { subheadline } } = props;
  if (!subheadline) return null;
  return <h2 className={styles.subheadline}>{subheadline}</h2>;
};

export default Subheadline;
