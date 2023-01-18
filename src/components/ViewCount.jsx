import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import numeral from "numeral"; 

export default function ViewCount({id}) {
    const { youtube } = useYoutubeApi();
    const {
      error,
      isLoading,
      data: view,
    } = useQuery(["viewcount", id], () => youtube.channelViews(id), {staleTime: 1000 * 60 * 5});
    return (
      <div className="flex items-center">
       {view && <p className="text-sm mr-1">{numeral(view).format("0,0")} views</p>}
      </div>
    );
}

