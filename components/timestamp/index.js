import { format } from 'fecha';
import styles from './styles.module.css';

const Timestamp = props => {
  const { article: { published, updated } } = props;
  const dateFormat = 'MMM. D, YYYY h:mm a ET';
  const displayDate = updated ? format(new Date(updated), `[Updated] ${dateFormat}`) : format(new Date(published), `[Published] ${dateFormat}`);
  return (
    <time className={styles.timestamp}>
      {displayDate}
    </time>
  );
};

export default Timestamp;
