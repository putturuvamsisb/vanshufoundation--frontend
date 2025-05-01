import React from "react";
import "../styles/Blog.css";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

function Blog() {
  const blogs = [
    {
      image: blog1,
      title: "Feeding Hope: Our Nutrition Drive",
      excerpt:
        "Discover how Vanshu Foundation reached over 1,000 children in remote villages with healthy meals and care.",
    },
    {
      image: blog2,
      title: "Stories of Transformation",
      excerpt:
        "Read about Shalini, a young girl who got a second chance at education through our women empowerment program.",
    },
    {
      image: blog3,
      title: "Volunteers in Action",
      excerpt:
        "How volunteers from around the country made a difference by spreading awareness and distributing essentials.",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Vanshu Foundation Blog</h1>
      <p className="blog-subtitle">Stories that Inspire Change</p>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
