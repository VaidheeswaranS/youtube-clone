import React from "react";

const Header = () => {
  return (
    <div>
      <div className="main-header flex flex-row items-center justify-between mt-2 mb-4">
        <div className="left-side-header flex flex-row items-center">
          <div className="hamburger-container">
            <img
              className="hamburger-menu w-16 mr-3"
              src="https://img.favpng.com/6/7/20/computer-icons-hamburger-button-icon-design-web-typography-png-favpng-WCdfkJA1mmcy54pnSwS9bffjG.jpg"
              alt="hamburger-menu"
            />
          </div>
          <div className="logo-container">
            <img
              className="logo w-24"
              src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
              alt="youtube-logo"
            />
          </div>
        </div>
        <div className="middle-side-header flex flex-row items-center">
          <div className="search-container flex flex-row justify-center items-center mr-3">
            <input
              className="search-input w-[450px] border border-r-0 border-gray-500 rounded-l-3xl py-2 px-3"
              type="text"
              placeholder=""
            />
            <button className="search-button bg-gray-100 text-black font-semibold px-3 rounded-r-3xl border border-gray-500 border-l-1 py-2 cursor-pointer">
              Search
            </button>
            {/* <img
            className="search-icon w-14 px-2 rounded-r-xl border border-gray-500 border-l-1 object-cover"
            src="https://lh6.googleusercontent.com/proxy/s4JJSoHGQEMFx_g4gceol0c9RXuWyDHzfyfWcQvkGTA92MslTc_LqWf_9CeGJhUVBSAi6S3Yqp-3OhH3slVyCw_ChMgFFCbeqlSJiOP-NEgEMvId6YKq6DZboQ"
            alt="search-icon" /> */}
          </div>
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
