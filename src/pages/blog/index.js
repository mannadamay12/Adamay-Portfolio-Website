// src/pages/blog/index.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

const BlogContainer = styled(motion.main)`
  min-height: 100vh;
  background: ${props => props.theme.colors.blue};
  padding: 4rem 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  color: white;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightBlue};
  font-size: 0.9rem;
  margin-top: 1rem;
`;

// Hashnode API integration
const fetchBlogPosts = async () => {
  const query = `
    query {
      user(username: "AdamayMann") {
        publication {
          posts(page: 1) {
            title
            brief
            slug
            dateAdded
            coverImage
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data.user.publication.posts;
};

export default function Blog({ posts }) {
  return (
    <BlogContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            whileHover={{ y: -5 }}
            onClick={() => window.open(`https://adamaymann.hashnode.dev/${post.slug}`, '_blank')}
          >
            <BlogImage src={post.coverImage} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <p>{post.brief.substring(0, 120)}...</p>
              <BlogMeta>
                <span>
                  {formatDistanceToNow(new Date(post.dateAdded), { addSuffix: true })}
                </span>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}

export async function getStaticProps() {
  const posts = await fetchBlogPosts();
  return {
    props: {
      posts,
    },
    revalidate: 3600, // Revalidate every hour
  };
}