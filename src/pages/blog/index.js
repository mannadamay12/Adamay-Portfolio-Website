import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';

const BlogContainer = styled(motion.main)`
  min-height: 100vh;
  background: ${props => props.theme.colors.blue};
  padding: 4rem 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const BlogTitle = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const BlogSubtitle = styled.p`
  color: ${props => props.theme.colors.lightBlue};
  font-size: 1.2rem;
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
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
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

const BlogCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.lightBlue};
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.red};
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  margin: 2rem auto;
  max-width: 600px;
`;

export default function Blog({ posts, error }) {
  if (error) {
    return (
      <BlogContainer>
        <ErrorMessage>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </ErrorMessage>
      </BlogContainer>
    );
  }
  

  return (
    <BlogContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BlogHeader>
        <BlogTitle>My Blog</BlogTitle>
        <BlogSubtitle>Thoughts on development, AI, and technology</BlogSubtitle>
      </BlogHeader>

      <BlogGrid>
        {posts?.map((post) => (
          <BlogCard
            key={post.slug}
            onClick={() => window.open(`https://mannadamay.hashnode.dev/${post.slug}`, '_blank')}
            whileHover={{ y: -5 }}
          >
            {post.coverImage !== null && (
              <BlogImage src={post.coverImage} alt={post.title} />
            )}
            <BlogContent>
              <BlogCardTitle>{post.title}</BlogCardTitle>
              <p>{post.brief.substring(0, 120)}...</p>
              <BlogMeta>
                <span>{format(new Date(post.dateAdded), 'MMM dd, yyyy')}</span>
                <span>Read more →</span>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}

export async function getStaticProps() {
    try {
      const query = `
        {
          publication(host: "mannadamay.hashnode.dev") {
            isTeam
            title
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  dateAdded: publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `;
  
      const response = await fetch('https://gql.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const { data, errors } = await response.json();
      
      if (errors) {
        throw new Error(errors[0].message);
      }

      if (!data?.publication) {
        throw new Error('No publication found');
      }

      const posts = data.publication.posts.edges.map(({ node }) => ({
        title: node.title,
        brief: node.brief,
        slug: node.slug,
        dateAdded: node.dateAdded,
        coverImage: node.coverImage?.url || null
      }));

      return {
        props: {
          posts,
        },
        revalidate: 3600,
      };
    } catch (error) {
      console.error('Error in getStaticProps:', error);
      return {
        props: {
          error: error.message || 'Failed to fetch blog posts. Please try again later.',
          posts: [],
        },
      };
    }
}