import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import PostRecommended from '../components/PostRecommended';
import PostContribute from '../components/PostContribute';

const PostWrapper = styled.div`
  margin: 0 5%;
  max-width: 1100px;

  @media (min-width: 1000px) {
    align-self: center;
  }
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        date(formatString: "DD MMM YYYY", locale: "pt-BR")
        title
        category
        banner {
          childImageSharp {
            fixed(width: 1400, height: 400) {
              src
            }
          }
        }
      }
    }
  }
`;

export default function blogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const next = pageContext.next;
  const previous = pageContext.previous;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostHeader
        title={post.frontmatter.title}
        category={post.frontmatter.category}
        timeToRead={post.timeToRead}
        date={post.frontmatter.date}
        banner={post.frontmatter.banner.childImageSharp.fixed.src}
      />
      <PostWrapper>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostContribute
          title={post.frontmatter.title}
          link={post.fields.slug}
        />
        <PostRecommended next={next} previous={previous} />
      </PostWrapper>
    </Layout>
  );
}
