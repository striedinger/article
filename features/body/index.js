import Hed from './components/hed';
import Image from './components/image';
import Paragraph from './components/paragraph';
import Video from './components/video';
import styles from './styles.module.css';

const Body = props => {
  const { article: { body } } = props;
  const bodyElements = body.map((element, index) => {
    const { type, inset_type: insetType } = element;
    if (type === 'hed') return <Hed data={element} key={index} />;
    if (type === 'paragraph') return <Paragraph data={element} key={index} />;
    if (type === 'image') return <Image data={element} key={index} />;
    if (type === 'video') return <Video data={element} key={index} />;
    if (type === 'inset' && insetType === 'pagebreak') return <div key={index} style={{ height: "1px", clear: "both", background: "#dbdbdb", margin: "40px 0", width: "100%" }}/>
    return null;
  });
  return (
    <section className={styles.body}>
      {bodyElements}
    </section>
  );
};

export default Body;
