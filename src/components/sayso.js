import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './sayso.module.scss'
import Reveal from './reveal'
import facebook from '../img/facebook.svg'
import google from '../img/google.svg'

const Sayso = () => {
  // query data from markdown files
  const data = useStaticQuery(query)
  const quotes = data.allMarkdownRemark.edges

  return (
    <section className={styles.sayso} id='sayso'>
      <div className={styles.title}>What people say</div>
      <div className={styles.social}>
        <a
          href='https://www.facebook.com/LaRollAlwaysFresh'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={facebook} className={styles.facebook} alt='facebook' />
        </a>
        <a
          href='https://business.google.com/groups/106389886199026729681/reviews'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={google} className={styles.google} alt='google' />
        </a>
      </div>
      <div className={styles.quotes}>
        {quotes.map(edge => (
          <Quote
            key={edge.node.id}
            clsQuote={styles.quote}
            clsSay={styles.say}
            clsWho={styles.who}
            who={edge.node.frontmatter.who}
            say={edge.node.frontmatter.say}
          />
        ))}
      </div>
    </section>
  )
}

export default Sayso

export const Quote = ({ clsQuote, clsSay, clsWho, who, say }) => {
  return (
    <div className={clsQuote}>
      <Reveal
        clsName={clsSay}
        transProps={{
          opacity: [1, 0],
          transform: ['scale(1.2)', 'scale(1)']
        }}
        transition='opacity 3s ease, transform 0.2s ease'
      >
        {say}
      </Reveal>
      <p className={clsWho}>{who}</p>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { active: { eq: "yes" } }
        fileAbsolutePath: { regex: "/quotes/" }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            active
            say
            who
            source
            date
          }
        }
      }
    }
  }
`
