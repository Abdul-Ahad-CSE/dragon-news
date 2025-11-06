import React, { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";



const NewsCart = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;


const [isExpanded, setIsExpanded] = useState(false);
const words = details.split(" ");
const isLong = words.length > 50; // For testing, use 50 instead of 200
const shortText = words.slice(0, 50).join(" ");


  // Format date
  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl ">
      {/* Author Info */}
      <div className="flex items-center gap-3 p-4 ">
  <img
    src={author.img}
    alt={author.name}
    className="w-10 h-10 rounded-full object-cover"
  />

  {/* This div will expand and push icons to the right */}
  <div className="flex-1">
    <h3 className="font-semibold text-sm">{author.name}</h3>
    <p className="text-xs text-gray-500">{publishedDate}</p>
  </div>

  {/* Icons aligned at the end */}
  <div className="flex items-center gap-2 text-xl text-gray-600">
    <CiBookmark />
    <CiShare2 />
  </div>
</div>

      {/* Content */}
      <div className="p-4">
        <h2 className="card-title text-lg mb-2">{title}</h2>
    
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover mb-3"
        />

        <p className="text-sm text-gray-700 mb-3">
  {isExpanded ? details : `${shortText}...`}
  {isLong && (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="text-blue-500 font-semibold ml-2 hover:underline"
    >
      {isExpanded ? "See Less" : "See More"}
    </button>
  )}
</p>


        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs font-medium capitalize"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-semibold">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
