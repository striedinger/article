import styles from './styles.module.css';

const Byline = props => {
  const { article: { byline } } = props;
  if (!byline) return null; 
  const content = byline.reduce((accumulator, current) => {
    const { text, id } = current;
    if (id) return `${accumulator}<a href="https://www.wsj.com/news/author/${id}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    return accumulator + text;
  }, '');
  return (
    <div className={styles.byline} dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default Byline;
