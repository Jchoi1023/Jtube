import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import RelatedVideoCard from './RelatedVideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id));
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p> Something is wrong..</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <RelatedVideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
