import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const VIDEO_API = process.env.NEXT_PUBLIC_VIDEO_API;

const Video = props => {
  const { data: { caption, name } } = props;
  const [state, setState] = useState({});

  useEffect(() => {
    fetch(`${VIDEO_API}/api-video/find_all_videos.asp?type=guid&count=1&fields=all&query=${name}`)
      .then(response => response.json())
      .then(json => {
        const { items } = json;
        if (items && items[0]) {
          const { videoStillURL: thumbnail, video2564kMP4Url: video } = items[0];
          setState({ thumbnail, video })
        }
      })
      .catch(error => console.error(error));
  }, []);

  const wrapper = component => (
    <figure className={styles.video}>
      {component}
      <figcaption className={styles.caption}>
        {caption}
      </figcaption>
    </figure>
  );

  if (state.video) return wrapper(
    <video
      controls
      poster={state.thumbnail}
      src={state.video}
      width="100%"
    />
  );

  return wrapper(<div className={styles.placeholder}/>);
};

export default Video;
