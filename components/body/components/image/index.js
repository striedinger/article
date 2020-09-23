import styles from './styles.module.css';

const Image = props => {
  const { data: { caption, credit, properties: { location } } } = props;
  return (
    <figure className={styles.image}>
      <img src={location} />
      <figcaption className={styles.caption}>
        { `${caption} ${credit}` }
      </figcaption>
    </figure>
  );
};

export default Image;
