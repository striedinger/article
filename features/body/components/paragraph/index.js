import renderCAPI from 'helpers/renderCAPI';
import styles from './styles.module.css';

const textsForBold = [
  'Mafalda was a 6-year old schoolgirl',
  'Joaquín Salvador Lavado, better known by his nickname Quino',
  '“I don’t think the problem is that political systems',
  'Following Argentina’s military coup',
].map((text) => text.slice(0, 20));

const paragraphIsBold = (pg) => textsForBold.includes(pg.slice(0, 20));

const Paragraph = props => {
  const { data: { content: paragraphContent } } = props;
  const content = renderCAPI(paragraphContent);
  const isBold = paragraphIsBold(content);
  const className = `${styles.paragraph} ${isBold ? styles['is-bold'] : ''}`;
  return (
    <p className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default Paragraph;
