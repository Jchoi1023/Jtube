import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import numeral from "numeral"; 

export default function Subscriber({id}) {
    const { youtube } = useYoutubeApi();
    const {
      error,
      isLoading,
      data: subscriber,
    } = useQuery(["subscriberCount", id], () => youtube.channelSubscriber(id), {staleTime: 1000 * 60 * 5});
    return (
      <div className="flex items-center">
       {subscriber && <p className="text-sm">{numeral(subscriber).format("0 a")} subscribers</p>}
      </div>
    );
}