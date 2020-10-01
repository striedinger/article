import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';
import Info from '../../../../components/svg/info.svg';
const Paragraph = props => {
  const { data: { content: paragraphContent, highlight, highlightWithTooltip, bold } } = props;
  const content = renderCAPI(paragraphContent);
  let style = 'highlight'; // I guess default to this?
  if (bold) {
    style = 'bold';
  }
  const wrapperClassName = styles[style] || '';

  if (highlight || highlightWithTooltip || bold) {
    return (
      <p className={styles.paragraph}>
        <span className={wrapperClassName}>
          {content}
          {
            highlightWithTooltip &&
            <span className={styles['info-icon']}>
              <Info />
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
