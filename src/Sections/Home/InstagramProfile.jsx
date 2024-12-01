import React from 'react';
import instagramprofpic from '../../assets/images/Instagramprofilepic.jpg';

const InstagramProfile = () => {
  return (
    <div className="flex justify-center items-center my-6 md:my-8 lg:my-12 bg-white">
      <div className="flex flex-wrap items-center justify-center px-5 py-4 sm:py-6 md:py-8 lg:py-10 space-x-4 md:space-x-6 lg:space-x-8">
        {/* Profile Picture */}
        <img
          src={instagramprofpic}
          alt="Profile Picture"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
        />

        {/* Stats Section */}
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <div className="text-center">
            <p className="text-base md:text-lg lg:text-xl font-bold">309</p>
            <p className="text-sm md:text-base lg:text-lg">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg lg:text-xl font-bold">4,165</p>
            <p className="text-sm md:text-base lg:text-lg">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg lg:text-xl font-bold">843</p>
            <p className="text-sm md:text-base lg:text-lg">Following</p>
          </div>
        </div>

        {/* Follow Button */}
        <a
          target="_blank"
          href="https://www.instagram.com/partylounges/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded mt-2 md:mt-0"
        >
          Follow
        </a>
      </div>
    </div>
  );
};

export default InstagramProfile;