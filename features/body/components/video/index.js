import { useEffect, useState } from 'react';
import VideoComponent from 'components/video';
import styles from './styles.module.css';

const Video = props => {
  const { data: { caption, name: guid } } = props;
  if (!guid) return null;

  return <VideoComponent className={styles.video} caption={caption} guid={guid} />;
};

export default Video;
