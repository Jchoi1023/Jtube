import { createContext, useContext } from "react";
// import FakeYoutube from "../api/fakeyoutube";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const youtube = new Youtube();//new Youtube() 

export function YoutubeApiProvider({children}) {
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}