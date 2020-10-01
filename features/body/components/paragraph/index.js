import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';

const Paragraph = props => {
  const { data: { content: paragraphContent, highlight } } = props;
  const content = renderCAPI(paragraphContent);
  if (highlight) {
    return (
      <p className={styles.paragraph}>
        <span className={styles.highlight} dangerouslySetInnerHTML={{ __html: content }} />
      </p>
    );
  }
  return (
    <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default Paragraph;
