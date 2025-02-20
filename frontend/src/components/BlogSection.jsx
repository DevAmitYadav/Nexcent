import React from 'react';
import './BlogSection.css';

const blogData = [
  {
    id: 1,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/7ON__Z_b4_4jLed1Ldt8ZJW1vTf35SuybA_2vBKYcpc.jpg',
  },
  {
    id: 2,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/Ctq_O3-aEXwn6oa4NhiP521n_3mbzdxQ6d5KpGXIuiI.jpg',
  },
  {
    id: 3,
    title: 'Revamping the Membership Model with Triathlon Australia',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/Sa8LbESnFn0aehRdwp7ODSlOCpa87lzwhVX7EzFotkk.jpg',
  },
];

const BlogSection = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2 className="title">Caring is the new marketing</h2>
        <p className="subtitle">
          The Nexcent blog is the best place to read about the latest membership insights, trends, and more.
          See who’s joining the community, read about how our community is increasing their membership income, and more.
        </p>
      </div>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imgSrc} alt={blog.title} className="blog-card-img" />
            <div className="blog-card-body">
              <h3 className="blog-card-title">{blog.title}</h3>
              <a href="#" className="blog-card-link">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
