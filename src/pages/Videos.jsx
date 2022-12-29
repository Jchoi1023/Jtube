import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";


export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    //두가지 인자 필요. key and function. keyword인 videos안에서 keyword별로 cache가 되도록.
    ["videos", keyword],
    () => youtube.search(keyword)
    

    //axios는 데이터를 fetch 처럼 json으로 변환해줄 필요 없음.
  );
  return (
    <>
      <div>Videos {keyword}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p> Something is wrong..</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
