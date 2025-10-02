import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const toggleMenu = useSelector((store) => store.app?.isMenuOpen);

  return (
    <div className="main-sidebar w-[230px] ml-3">
      {!toggleMenu ? (
        <div className="mini-sidebar">
          <Link to="/">
            <div className="home-mini-sidebar-container flex flex-col items-start justify-center">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-rounded/24/home.png"
                alt="home-icon"
              />
              <p>Home</p>
            </div>
          </Link>

          <div className="shorts-mini-sidebar-container flex flex-col items-start justify-center">
            <img
              className="mr-4"
              src="https://img.icons8.com/forma-regular/24/youtube-shorts.png"
              alt="shorts-icon"
            />
            <p>Shorts</p>
          </div>

          <div className="subscriptions-mini-sidebar-container flex flex-col items-start justify-center">
            <img
              className="mr-4"
              src="https://img.icons8.com/material-outlined/24/video-playlist.png"
              alt="subscription-icon"
            />
            <p>Subscription</p>
          </div>

          <div className="you-mini-sidebar-container flex flex-col items-start justify-center">
            <img
              className="mr-4"
              src="https://img.icons8.com/material-rounded/24/user.png"
              alt="you-icon"
            />
            <p>You</p>
          </div>

          <div className="downloads-mini-sidebar-container flex flex-col items-start justify-center">
            <img
              className="mr-4"
              src="https://img.icons8.com/material-outlined/24/downloads.png"
              alt="downloads-icon"
            />
            <p>Downloads</p>
          </div>
        </div>
      ) : (
        <div className="full-sidebar">
          <div className="home-shorts-subscription-container border-b">
            <Link to="/">
              <div className="home-container flex flex-row items-center mb-3">
                <img
                  className="mr-4"
                  src="https://img.icons8.com/material-rounded/24/home.png"
                  alt="home-icon"
                />
                <p>Home</p>
              </div>
            </Link>

            <div className="shorts-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/forma-regular/24/youtube-shorts.png"
                alt="shorts-icon"
              />
              <p>Shorts</p>
            </div>

            <div className="subscriptions-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/video-playlist.png"
                alt="subscription-icon"
              />
              <p>Subscriptions</p>
            </div>
          </div>

          <div className="you-container border-b">
            <h1 className="you-text font-semibold text-lg mb-3 mt-3">
              You <span className="ml-2 font-light">&gt;</span>
            </h1>

            <div className="history-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/time-machine.png"
                alt="history-icon"
              />
              <p>History</p>
            </div>

            <div className="playlists-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/external-dashed-line-kawalan-studio/24/external-youtube-playlist-social-media-dashed-line-kawalan-studio.png"
                alt="playlists-icon"
              />
              <p>Playlists</p>
            </div>

            <div className="your-videos-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/forma-thin/24/youtube-play.png"
                alt="videos-icon"
              />
              <p>Your videos</p>
            </div>

            <div className="your-movies-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-rounded/24/cinema-.png"
                alt="movies-icon"
              />
              <p>Your movies</p>
            </div>

            <div className="watch-later-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/apple-watch.png"
                alt="watch-later-icon"
              />
              <p>Watch later</p>
            </div>

            <div className="liked-videos-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/thumb-up.png"
                alt="liked-videos-icon"
              />
              <p>Liked videos</p>
            </div>

            <div className="downloads-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/downloads.png"
                alt="downloads-icon"
              />
              <p>Downloads</p>
            </div>
          </div>

          <div className="subscriptions-container border-b">
            <h1 className="subscriptions-text font-semibold text-lg mb-3 mt-3">
              Subscriptions <span className="ml-2 font-light">&gt;</span>
            </h1>
          </div>

          <div className="explore-container border-b">
            <h1 className="you-text font-semibold text-lg mb-3 mt-3">
              Explore
            </h1>

            <div className="shopping-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/shopping-bag--v1.png"
                alt="shopping-icon"
              />
              <p>Shopping</p>
            </div>

            <div className="music-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/apple-music.png"
                alt="music-icon"
              />
              <p>Music</p>
            </div>

            <div className="movies-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/forma-thin/24/youtube-play.png"
                alt="movies-icon"
              />
              <p>Movies</p>
            </div>

            <div className="live-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/youtube-live.png"
                alt="live-icon"
              />
              <p>Live</p>
            </div>

            <div className="gaming-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/controller.png"
                alt="gaming-icon"
              />
              <p>Gaming</p>
            </div>

            <div className="news-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/news.png"
                alt="news-icon"
              />
              <p>News</p>
            </div>

            <div className="sports-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/trophy.png"
                alt="sports-icon"
              />
              <p>Sports</p>
            </div>

            <div className="courses-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/graduation-cap--v1.png"
                alt="courses-icon"
              />
              <p>Courses</p>
            </div>

            <div className="fashion-and-beauty-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/hanger.png"
                alt="fandb-icon"
              />
              <p>Fashion & Beauty</p>
            </div>

            <div className="podcasts-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/material-outlined/24/microphone.png"
                alt="podcasts-icon"
              />
              <p>Podcasts</p>
            </div>
          </div>

          <div className="more-from-youtube-container">
            <h1 className="you-text font-semibold text-lg mb-3 mt-3">
              More from YouTube
            </h1>

            <div className="yt-premium-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/color/48/youtube-play.png"
                alt="yt-premium-icon"
              />
              <p>YouTube Premium</p>
            </div>

            <div className="yt-studio-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/color/48/youtube-studio_1.png"
                alt="yt-studio-icon"
              />
              <p>YouTube Studio</p>
            </div>

            <div className="yt-music-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/fluency/48/youtube-music.png"
                alt="yt-music-icon"
              />
              <p>YouTube Music</p>
            </div>

            <div className="yt-kids-container flex flex-row items-center mb-3">
              <img
                className="mr-4"
                src="https://img.icons8.com/doodle/48/youtube-play--v1.png"
                alt="yt-kids-icon"
              />
              <p>YouTube Kids</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
