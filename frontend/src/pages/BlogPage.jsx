// src/pages/BlogPage.jsx
import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-700">
          CampusConnect Blog
        </h1>

        <p className="text-gray-700 text-sm sm:text-base mb-6">
          Welcome to the CampusConnect Blog! Here, we share inspiring stories,
          useful tips, and updates on student life, campus events, and career
          growth. Whether you're into tech, culture, or personal development,
          we’ve got something for you.
        </p>

        {/* Blog 1 */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            1. Campus Fest 2025 Highlights
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">Admin</span> • August 18, 2025
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Relive the vibrant energy of Campus Fest 2025 with music, cultural
            events, and unforgettable performances. Students from all branches
            came together to celebrate unity and diversity with colors, dance,
            and creativity. The star of the event was the inter-college band
            competition that had the crowd on its feet!
          </p>
        </div>

        {/* Blog 2 */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            2. How to Prepare for Hackathons
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">Tech Society</span> • August 10,
            2025
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Hackathons are exciting opportunities for students to showcase their
            coding and innovation skills. To prepare, start by brushing up on
            problem-solving, form a balanced team, and bring design thinking
            into your solutions. Don’t forget: presentation is as important as
            the idea itself.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            3. Why College Clubs Matter
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">Cultural Team</span> • August 5,
            2025
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Joining clubs not only boosts your resume but also helps in
            networking, building leadership, and having fun. From coding clubs
            to dance and drama, these groups give students opportunities to
            explore interests, meet like-minded peers, and create unforgettable
            experiences.
          </p>
        </div>

        {/* Blog 4 */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            4. Balancing Studies and College Life
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">Student Council</span> • July 30,
            2025
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Managing academics while staying active in college life can be
            tricky. The key is to prioritize tasks, maintain a planner, and
            never compromise on health. Remember, college is not only about
            grades — it’s also about friendships, self-discovery, and growing
            confidence.
          </p>
        </div>

        {/* Blog 5 */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            5. Career Tips for Engineering Students
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">Placement Cell</span> • July 25,
            2025
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Want to land your dream job after graduation? Start early. Build a
            solid LinkedIn profile, contribute to open-source projects, and
            attend networking events. Internships during summer breaks also play
            a huge role in preparing for placements.
          </p>
        </div>

        {/* Blog 6 */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            6. The Future of Campus Technology
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            By <span className="font-medium">Innovation Hub</span> • July 15,
            2025
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Technology is reshaping campus life. From AI-powered attendance to
            online communities, the future of student experience is digital and
            inclusive. CampusConnect is working to bridge this gap with modern
            tools that keep every student connected.
          </p>
        </div>

        <p className="text-gray-700 text-sm sm:text-base mt-8">
          Stay tuned for more exciting stories, guides, and tips on campus life,
          tech trends, and career opportunities. Have something to share? Reach
          out to us at{" "}
          <span className="text-purple-700 font-medium">
            blog@campusconnect.com
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
