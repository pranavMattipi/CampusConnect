import React from "react";
import { FaStar, FaRegThumbsUp, FaRegCommentDots, FaShareAlt } from "react-icons/fa";

const ReviewsPage = () => {
  // Sample review data
  const reviews = [
    {
      user: "User",
      bookedOn: "BookMyShow",
      text: "#SuperDirection #GreatActing #Blockbuster #Rocking",
      extraText: "",
      rating: 10,
      likes: 1697,
      comments: 0,
      daysAgo: 11,
    },
    {
      user: "User",
      bookedOn: "BookMyShow",
      text: "#GreatActing #AwesomeStory #Blockbuster #Rocking",
      extraText: "blockbuster movie 💯🔥 part 2 kosam wtg",
      rating: 9,
      likes: 1192,
      comments: 0,
      daysAgo: 11,
    },
    {
      user: "Gorle",
      bookedOn: "BookMyShow",
      text: "#SuperDirection #GreatActing",
      extraText: "comeback for kondanna😇🥰",
      rating: 9,
      likes: 823,
      comments: 0,
      daysAgo: 11,
    },
    {
      user: "Suman",
      bookedOn: "BookMyShow",
      text: "#GreatActing",
      extraText: "",
      rating: 6,
      likes: 421,
      comments: 0,
      daysAgo: 11,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Most Helpful Reviews</h1>

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm hover:shadow-md transition"
          >
            {/* User info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.user}</p>
                    <p className="text-xs text-gray-500">
                      Booked on{" "}
                      <span className="font-semibold text-red-500">
                        book
                        <span className="text-black">My</span>
                        <span className="text-red-500">show</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-red-500 font-bold">
                <FaStar /> {review.rating}/10
              </div>
            </div>

            {/* Review text */}
            <div className="mt-4">
              <p className="font-medium">{review.text}</p>
              {review.extraText && (
                <p className="text-gray-600 mt-1">{review.extraText}</p>
              )}
            </div>

            {/* Footer with likes/comments/share */}
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FaRegThumbsUp /> {review.likes}
                </div>
                <div className="flex items-center gap-1">
                  <FaRegCommentDots /> {review.comments}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>{review.daysAgo} Days ago</span>
                <FaShareAlt />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
