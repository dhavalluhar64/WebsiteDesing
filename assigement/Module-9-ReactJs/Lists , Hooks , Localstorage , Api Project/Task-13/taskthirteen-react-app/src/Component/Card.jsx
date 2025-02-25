import React from "react";

function Card() {
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img
            className="p-8 rounded-t-lg"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1705218542017/38535a64-cf30-4a10-82fb-72a3f325a086.png?auto=compress,format&format=webp"
            alt="product_image1"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Using Context API
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5"></div>
          <div className="flex items-center justify-between"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
