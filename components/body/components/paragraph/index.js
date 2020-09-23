import styles from './styles.module.css';

const Paragraph = props => {
  const { data: { content: paragraphContent } } = props;
  const content = paragraphContent.reduce((accumulator, current) => {
    const { text, type, uri } = current;
    if (type === 'link') return `${accumulator}<a href=${uri} target="_blank" rel="noopener noreferrer">${text}</a>`;
    return accumulator + text;
  }, '');
  return (
    <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default Paragraph;
