import React, { useState, useRef } from 'react';
import { isEmpty } from '../functions';
import '../styles/styles.scss';

const Services = (props) => {
  const { content } = props;
  const videos = useRef();
  const [hover, setHover] = useState(false);
  return (
    <div
      className="videos"
      onMouseEnter={() => {
        setHover(true);
        if (content.type === 'video') videos.current.pause();
      }}
      onMouseLeave={() => {
        setHover(false);
        if (content.type === 'video') videos.current.play();
      }}
    >
      <div className="videos-text-wrap">
        <div className="videos-title">{content.title}</div>
        <div className="videos-since">{`${content.since}`}</div>
      </div>
      {content.type === 'image' ? (
        <div
          className="video-content-image"
          style={{ backgroundImage: `url(${content.src})` }}
        ></div>
      ) : (
        <video
          className="videos-content"
          ref={videos}
          // preload
          muted
          loop
          autoPlay
          playsInline
          autobuffer
        >
          <source type="video/mp4" src={content.src} />
          재생할 수 없습니다.
        </video>
      )}

      <div className={hover ? 'description-hover' : 'description'}>
        {content.description}
        {!isEmpty(content.link) && (
          <span>
            <br />
            <br />
            링크 : <a href={content.link}>{content.link}</a>
            <br />
            <br />
          </span>
        )}
      </div>
    </div>
  );
};

export default Services;
