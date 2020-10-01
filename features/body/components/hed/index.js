import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';

const Hed = props => {
  const { data: { content: hedContent, hed_type: type } } = props;
  const content = renderCAPI(hedContent);
  if (type === 'subhed') return <h6 className={styles.hed}>{content}</h6>;
  return null;
};

export default Hed;
