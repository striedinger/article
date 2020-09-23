import Image from 'components/image';
import Video from 'components/video';
import styles from './styles.module.css';

const Hero = props => {
  const { article: { hero } } = props;
  if (!hero) return null;
  const component = () => {
    if (hero.type === 'image') {
      const { alternate_text: alt, caption, credit, properties: { location } } = hero;
      return (
        <Image
        src={location}
        alt={alt}
        caption={`${caption}${credit}`}
        className={styles.image}
        title={caption}
      />
      )
    }
    if (hero.type === 'video') {
      const { caption, name: guid } = hero;
      return <Video className={styles.video} caption={caption} guid={guid} />;
    }
  }
  return (
    <section className={styles.hero}>
      {component()}
    </section>
  );
};

export default Hero;
