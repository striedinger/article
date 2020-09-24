import classnames from 'classnames';
import ImageComponent from 'components/image';
import styles from './styles.module.css';

const Image = props => {
  const { data: { alternate_text: alt, caption, credit, properties: { location, responsive: { layout } = {} } } } = props;
  if (!location) return null;
  const classes = classnames(styles.image, { [styles.wrap]: (layout === 'wrap') });
  return (
    <ImageComponent
      src={location}
      alt={alt}
      caption={`${caption} ${credit ? `Photo: ${credit}` : ''}`}
      className={classes}
      title={caption}
    />
  );
};

export default Image;
