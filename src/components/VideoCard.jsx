import React from 'react';
import { format } from 'timeago.js';
import { useNavigate } from 'react-router-dom';
import ChannelInfo from './ChannelInfo';
import ViewCount from './ViewCount';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt, channelId } =
    video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } });
      }}
    >
      <img
        className={isList ? 'w-60 mr-2 rounded-lg' : 'w-full rounded-lg'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className='flex'>
        <div className='flex-none'>
          <ChannelInfo id={channelId} />
        </div>
        <div className='flex-1 w-64'>
          <p className='font-semibold my-2 line-clamp-2'>{title}</p>
          <p className='text-sm opacity-80'>{channelTitle}</p>
          <div className='flex flex-row items-center'>
            <ViewCount id={channelId} />  
            <p className='text-sm opacity-80'>  ・  {format(publishedAt)}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
