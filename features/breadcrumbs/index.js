import styles from './styles.module.css'

const Breadcrumbs = props => {
  const { article: { sectionName } } = props;
  if (!sectionName) return null;
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumb}>
        <a href="https://www.google.com">{sectionName}</a>
      </div>
    </div>
  );
};

export default Breadcrumbs;
