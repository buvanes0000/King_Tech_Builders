import React from 'react';
import './BlogSection.css';
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import blog4 from "../assets/blog4.png"

const blogData = [
  {
    title: 'Innovative House Construction Techniques',
    description: 'Discover the latest trends in house construction and how they can benefit your next project.',
    image: blog1,
    link: 'https://www.designswan.com/archives/how-cool-your-home-can-be-27-innovative-ideas-of-interior-designs.html',
    category: 'Construction'
  },
  {
    title: 'Top 5 Sustainable Building Materials',
    description: 'Learn about eco-friendly building materials that are both sustainable and cost-effective.',
    image:blog2,
    link: 'https://buildingrenewable.com/sustainable-building-materials/',
    category: 'Materials'
  },
  {
    title: 'How to Choose the Right Contractor',
    description: 'Find out what to look for when hiring a contractor to ensure your project is completed on time and within budget.',
    image: blog3,
    link: 'https://www.hseblog.com/factors-to-consider-in-choosing-the-contractor/',
    category: 'Guides'
  },
  {
    title: 'Latest Home Design Trends in 2024',
    description: 'Explore the most popular home design trends this year and how to incorporate them into your project.',
    image: blog4,
    link: 'https://www.nobroker.in/blog/latest-house-designs/',
    category: 'Design'
  }
 
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-heading">Latest Blog Posts</h2>
      <div className="blog-grid">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
