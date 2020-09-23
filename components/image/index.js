import classnames from 'classnames';
import styles from './styles.module.css';

const Image = props => {
  const { alt, className, caption, title, src } = props;
  const classes = classnames(styles.image, className);
  return (
    <figure className={classes}>
      <img src={src} alt={alt} title={title} />
      <figcaption>
        {caption}
      </figcaption>
    </figure>
  );
};

export default Image;
