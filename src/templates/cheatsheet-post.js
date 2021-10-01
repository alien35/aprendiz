import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import './cheatsheet.module.css';
import '../components/global.css';
import * as styles from './cheatsheet.module.css'

class CheatsheetPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCheatsheet')
    console.log(post, 'post')
    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
        />

        <div className={styles.container}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </div>
        {
          /*
          <Hero
          image={post.heroImage.gatsbyImageData}
          title={post.title}
          content={post.description.childMarkdownRemark.excerpt}
        />
        <div className={styles.container}>
          <span className={styles.meta}>
            {post.author.name} &middot;{' '}
            <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
            {post.body.childMarkdownRemark.timeToRead} minute read
          </span>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
        */
        }
        
      </Layout>
    )
  }
}

export default CheatsheetPostTemplate

export const pageQuery = graphql`
  query CheatsheetPostBySlug(
    $slug: String!
  ) {
    contentfulCheatsheet(slug: { eq: $slug }) {
      slug
      title
      description {
        childMarkdownRemark {
          excerpt
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
