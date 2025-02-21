"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const data = [
    { title: "Lorem ipsum dolor sit amet.", category: "Artificial Intelligence", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/1.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Artificial Intelligence", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/2.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Software Development", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/3.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Web Development", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/4.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Artificial Intelligence", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/5.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Software Development", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/6.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Artificial Intelligence", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/7.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Artificial Intelligence", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/8.png" },
    { title: "Lorem ipsum dolor sit amet.", category: "Mobile App Development", date: "15/01/2025", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", image: "/Blogs/Cards/9.png" },

];
  const categories = ["All", "Artificial Intelligence", "Software Development", "Web Development", "Mobile App Development"];

  const totalPages = Math.ceil(data.length / postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const filteredPosts = useMemo(() => {
    return data.filter((post) => {
      const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
      const searchMatch = post.title.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, query]);
  


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle Page Change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    setCurrentPage(1);
  }, [query, selectedCategory]);
  return (
    <section className="mt-24 pt-6 relative">
      <div className="container mx-auto px-6">
        {/* Blog Header */}
        <div className="text-center w-full flex justify-center items-center flex-col bg-center bg-no-repeat h-full" style={{ backgroundImage: "url(/Blogs/shadow.png)", backgroundSize: "100% 100%" }}>
          <div className="w-[70%] space-y-3">
            <h1 className="text-white text-4xl lg:text-6xl font-semibold">Blogs</h1>
            <p className="subtitle text-white">Discover insights, tips, and inspiration on technology, career growth, and content creation.</p>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-3 py-12">
              {/* Dropdown */}
              <div className="relative inline-block text-left">
                <button onClick={() => setIsOpen(!isOpen)} className="w-244 h-522 bg-red text-white rounded-md focus:outline-none">
                  Category ▼
                </button>
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-244 bg-white border rounded-md shadow-lg">
                    <ul className="py-2 text-gray-700">
                      {categories.map((category) => (
                        <li 
                          key={category} 
                          className="px-4 py-2 hover:bg-red hover:text-white cursor-pointer"
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsOpen(false);
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Search */}
              <div className="relative w-full max-w-md">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <IoSearch size={30} className="absolute right-3 top-2 text-gray-500 hover:text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((card, index) => (
            <div className="w-full" key={index}>
              <Image src={card.image} width={300} height={322} alt="" className="w-full" />
              <div className="space-y-3">
                <div className="flex justify-between items-center pt-3">
                  <p className="text-white">{card.date}</p>
                  <p className="text-white">{card.category}</p>
                </div>
                <h1 className="text-white text-xl lg:text-4xl">{card.title}</h1>
                <p className="text-white subtitle">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="w-full flex justify-end mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} className={`w-10 h-10 border-2 rounded-full ${currentPage === index + 1 ? "border-red text-red" : "hover:bg-red text-white hover:text-white"}`}>
              {index + 1}
            </button>
          ))}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`px-6 py-2 border-2 text-white rounded-md ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-200"}`}>
            Next
          </button>
        </div>
      </div>

          <div className="bg-no-repeat bg-center absolute top-100 w-full md:w-500 h-500" style={{backgroundImage:"url(/Blogs/Cards/right.png)",backgroundSize:"100% 100%"}}></div>
          <div className="bg-no-repeat bg-center absolute top-130 right-0 w-530 h-530" style={{backgroundImage:"url(/Blogs/Cards/left.png)",backgroundSize:"100% 100%"}}></div>
    </section>
  );
};

export default BlogPage;
