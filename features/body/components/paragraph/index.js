import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';
import Info from '../../../../components/svg/info.svg';

const Paragraph = props => {
  const { data: { content: paragraphContent, highlight, highlightWithTooltip } } = props;
  const content = renderCAPI(paragraphContent);
  if (highlight || highlightWithTooltip) {
    return (
      <p className={styles.paragraph}>
        <span className={styles.highlight}>
          {content}
          {
            highlightWithTooltip && 
            <span className={styles['info-icon']}>
              <Info/>
            </span>
          }
        </span>
      </p>
    );
  }

  return (
    <p className={styles.paragraph}>{content}</p>
  );
};

export default Paragraph;
