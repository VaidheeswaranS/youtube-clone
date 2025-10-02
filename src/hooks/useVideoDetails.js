import { useEffect } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoDetails } from "../utils/videosSlice";

const useVideoDetails = (searchParams) => {
  const dispatcher = useDispatch();
  const videoDetails = useSelector((store) => store.videos?.videoDetails);

  useEffect(() => {
    !videoDetails && getVideoDetails(searchParams);
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=" +
        searchParams +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();

    console.log(json.items);

    // adding the video details to the redux store
    dispatcher(addVideoDetails(json.items));
  };
};

export default useVideoDetails;
