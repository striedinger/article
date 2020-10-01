import { useRef } from 'react';
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
  const iconWrapper = useRef(null);

  const toggleOpen = force => iconWrapper.current.classList.toggle(
    styles['is-open'],
    typeof force === 'boolean' ? force : !iconWrapper.current.classList.contains([styles['is-open']]),
  );

  if (highlight || highlightWithTooltip || bold) {
    return (
      <p className={styles.paragraph}>
        <span className={wrapperClassName}>
          {content}
          {
            highlightWithTooltip &&
            <span
              className={styles['info-icon']}
              ref={iconWrapper}
              onClick={toggleOpen}
              onBlur={() => toggleOpen(false)}
              tabindex="0"
            >
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
