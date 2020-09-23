import Image from './components/image';
import Paragraph from './components/paragraph';
import styles from './styles.module.css';

const Body = props => {
  const { article: { body } } = props;
  const bodyElements = body.map((element, index) => {
    const { type } = element;
    if (type === 'paragraph') return <Paragraph data={element} key={index} />;
    if (type === 'image') return <Image data={element} key={index} />;
    return null;
  });
  return (
    <section className={styles.body}>
      {bodyElements}
    </section>
  );
};

export default Body;
