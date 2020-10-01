import classnames from 'classnames';
import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';

const Paragraph = props => {
  const { data: { content: paragraphContent, highlight } } = props;
  const content = renderCAPI(paragraphContent);
  const classes = classnames(styles.paragraph, { [styles.highlight]: highlight });
  return (
    <p className={classes} dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default Paragraph;
