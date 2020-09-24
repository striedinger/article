import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';

const Paragraph = props => {
  const { data: { content: paragraphContent } } = props;
  const content = renderCAPI(paragraphContent);
  return (
    <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default Paragraph;
