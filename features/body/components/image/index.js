import ImageComponent from 'components/image';
import styles from './styles.module.css';

const Image = props => {
  const { data: { alternate_text: alt, caption, credit, properties: { location } } } = props;
  if (!location) return null;
  return (
    <ImageComponent
      src={location}
      alt={alt}
      caption={`${caption}${credit || ''}`}
      className={styles.image}
      title={caption}
    />
  );
};

export default Image;
