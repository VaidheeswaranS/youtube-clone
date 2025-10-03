import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuItems } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const disptacher = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  /**
   * here useEffect() will be called everytime when my search text changes(on every key stroke)
   * it will set the timer for 200 ms and then the API call will be made only after 200 ms - this is DEBOUNCING (to avoid unnecessary API calls)
   * example below -
   * in search bar if I type "i" - first key stroke, timer will be set and an API call will be made after 200ms
   *
   * scenario - 1
   * if I type "p" => "ip" - second key stroke within 200ms then the search component re-renders and this calls the return function which will clear
   * the timer and a new timer will be set
   *
   * scenario - 2
   * if I type "p" => "ip" - second key stroke after 200ms then the API call will be made again for second keystroke
   */

  // DEBOUNCING is applied in API call fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      // making an API call only after 200 seconds
      getSearchDetails();
    }, 200);

    // this will be called whenever the component renders within the timout (200ms)
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchDetails = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };

  const handleMenuItems = () => {
    disptacher(toggleMenuItems());
  };

  return (
    <div>
      <div className="main-header flex flex-row items-center justify-between mt-2 mb-4">
        <div className="left-side-header flex flex-row items-center">
          <div className="hamburger-container">
            <img
              className="hamburger-menu w-16 mr-3 cursor-pointer"
              onClick={() => handleMenuItems()}
              src="https://img.favpng.com/6/7/20/computer-icons-hamburger-button-icon-design-web-typography-png-favpng-WCdfkJA1mmcy54pnSwS9bffjG.jpg"
              alt="hamburger-menu"
            />
          </div>
          <div className="logo-container">
            <img
              className="logo w-24 cursor-pointer"
              src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
              alt="youtube-logo"
            />
          </div>
        </div>
        <div className="middle-side-header-search flex flex-row items-center">
          <div className="search-bar-suggestions-container flex flex-col relative">
            <div className="search-bar-container">
              <div className="search-container flex flex-row justify-center items-center mr-3">
                <input
                  className="search-input w-[450px] border border-r-0 border-gray-500 rounded-l-3xl py-2 px-3"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setShowSuggestions(false)}
                />
                <button className="search-button bg-gray-100 text-black font-semibold px-3 rounded-r-3xl border border-gray-500 border-l-1 py-2 cursor-pointer">
                  Search
                </button>
              </div>
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestions text-black bg-white w-[450px] border border-gray-200 rounded-lg absolute top-[42px] left-0 z-10 shadow-lg">
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      🔍 {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="middle-side-header-microphone flex flex-row items-center">
          <div className="microphone-icon">
            <img
              className="w-10 object-cover cursor-pointer"
              src="https://img.favpng.com/8/24/18/microphone-icon-png-favpng-kcPPJr914R2LjGCJukTmthVGF.jpg"
              alt="microphone-icon"
            />
          </div>
        </div>
        <div className="right-side-header flex flex-row items-center mr-8">
          <div className="create-button px-5 py-2 bg-gray-200 border border-gray-500 rounded-full cursor-pointer mr-3">
            + Create
          </div>
          <div className="notifications-icon mr-3">
            <img
              className="w-8 object-cover cursor-pointer"
              src="https://p.kindpng.com/picc/s/179-1799598_png-icon-free-download-clipart-transparent-download-post.png"
              alt="notifications-icon"
            />
          </div>
          <button className="px-3 py-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
