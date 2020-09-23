import styles from './styles.module.css';

const renderHTML = content => {
  return content.reduce((accumulator, current) => {
    const { content: innerContent, emphasis, text, type, uri } = current;
    if (type === 'link') return `${accumulator}<a href=${uri} target="_blank" rel="noopener noreferrer">${text || renderHTML(innerContent)}</a>`;
    if (type === 'emphasis' && emphasis === 'BOLD') return accumulator + `<strong>${(text || renderHTML(innerContent))}</strong>`;
    if (type === 'emphasis' && emphasis === 'ITALIC') return accumulator + `<em>${(text || renderHTML(innerContent))}</em>`;
    return accumulator + text;
  }, '');
};

const Paragraph = props => {
  const { data: { content: paragraphContent } } = props;
  const content = renderHTML(paragraphContent);
  return (
    <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default Paragraph;
