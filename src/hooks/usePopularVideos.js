import { useEffect } from "react";
import { YOUTUBE_POPULAR_VIDEO_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../utils/videosSlice";

const usePopularVideos = () => {
  const dispatcher = useDispatch();
  const popularVideos = useSelector((store) => store.videos?.popularVideos);

  useEffect(() => {
    !popularVideos && getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEO_API);
    const json = await data.json();

    // adding the popular videos to the redux store
    dispatcher(addPopularVideos(json.items));
  };
};

export default usePopularVideos;
