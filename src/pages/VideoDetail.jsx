import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import Subscriber from '../components/Subscriber';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  const [show, setShow] = useState(false);
  const toggleShowStatus = () => {
    setShow(!show);
    updateStatus(!show);
  };
  return (
    <section className='flex flex-col lg:flex-row m-2'>
      <article className='basis-5/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder='0'
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          {/* <div className='flex flex-col'> */}
          <ChannelInfo id={channelId} name={channelTitle} />
          <Subscriber id={channelId}/>
          {/* </div>         */}
          <div className='bg-zinc-100 hover:bg-zinc-200 p-3 rounded-lg'>
            <pre className='whitespace-pre-wrap font-sans text-sm line-clamp-3'>
              {description}
            </pre>
            <button className='font-bold pt-3' onClick={toggleShowStatus}>
              {!show && 'Show more'}
              {show && 'Show less'}
            </button>
          </div>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

function updateStatus(show) {
  if (show) {
    document.querySelector('pre').classList.remove('line-clamp-4');
  } else {
    document.querySelector('pre').classList.add('line-clamp-4');
  }
}
