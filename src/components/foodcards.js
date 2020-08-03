import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './foodcards.module.scss'
import Reveal from './reveal'

// import { ScrollLinkTo } from './scrolllink'

const Foods = () => {
  const data = useStaticQuery(query)
  const topRightImage = data.banhmibasket.childImageSharp.fluid
  const veggieBottom = data.bottom.childImageSharp.fluid
  const cards = data.cards.edges

  return (
    <section className={styles.foods}>
      <div className={styles.foodsToprightImg}>
        <Img fluid={topRightImage} alt='banh mi basket' />
      </div>
      <Reveal
        clsName={styles.foodsMsg}
        transProps={{
          opacity: [1, 0],
          transform: ['scale(1)', 'scale(0.5)']
        }}
        transition='opacity 3s ease, transform 3s ease'
      >
        ALWAYS <br /> FRESH
      </Reveal>
      <div className={styles.foodsMiddleCards}>
        {cards.map((edge, index) => (
          <RevealCard
            key={index}
            clsName={styles.card}
            tops={cardAnimate[index][0]}
            lefts={cardAnimate[index][1]}
            fluidImage={edge.node.frontmatter.image.childImageSharp.fluid}
            imageClass={styles.cardImage}
            linkTo={edge.node.frontmatter.linkto}
          />
        ))}
      </div>
      <div className={styles.foodsBottomImg}>
        <Img fluid={veggieBottom} alt='veggie' />
      </div>
      <Link
        to='/foods'
        className={styles.foodsMore}
      >
        Learn more...
      </Link>
    </section>
  )
}

export default Foods

const RevealCard = ({
  clsName,
  tops,
  lefts,
  imageClass,
  fluidImage,
  linkTo
}) => {
  return (
    <Reveal
      clsName={clsName}
      transProps={{
        opacity: [1, 0],
        top: tops,
        left: lefts
      }}
      transition='opacity 0.7s ease, top 2s cubic-bezier(0, 0, 0.23, 0.95), left 2s cubic-bezier(0, 0, 0.23, 0.95)'
    >
      <div className={imageClass}>
        <Link to={`/foods#${linkTo}`}>
          <Img fluid={fluidImage} alt='card' />
        </Link>
      </div>
    </Reveal>
  )
}

export const query = graphql`
  {
    cards: allMarkdownRemark(
      filter: {
        frontmatter: { image: { childImageSharp: { fluid: { src: {} } } } }
        fileAbsolutePath: { regex: "/cards/" }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            cardorder
            linkto
            image {
              relativePath
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    banhmibasket: file(relativePath: { eq: "images/banhmi-basket.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bottom: file(relativePath: { eq: "images/veggie-bottom.png" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
export const cardAnimate = [
  [
    ['-2vw', '2vw'],
    ['-2vw', '4vw']
  ],
  [
    ['-12.8vw', '-12.8vw'],
    ['20.2vw', '20.2vw']
  ],
  [
    ['-23.5vw', '-18vw'],
    ['42.5vw', '48vw']
  ],
  [
    ['-48vw', '-48vw'],
    ['-16vw', '-16vw']
  ],
  [
    ['-58.8vw', '-56vw'],
    ['6vw', '8.8vw']
  ],
  [
    ['-69.8vw', '-72vw'],
    ['28.4vw', '23.6vw']
  ]
]
