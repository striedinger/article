import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';

const Paragraph = props => {
  const { data: { content: paragraphContent, highlight = false, bold = false } } = props;
  const content = renderCAPI(paragraphContent);
  if (highlight || bold) {
    return (
      <p className={styles.paragraph}>
        <span className={highlight ? styles.highlight : styles.bold}>
          {content}
        </span>
      </p>
    );
  }
  return (
    <p className={styles.paragraph}>{content}</p>
  );
};

export default Paragraph;
``;
