import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './gallery.module.scss'

const Gallery = () => {
  const photos = useStaticQuery(query).allGalleryYaml.edges
  console.log(photos)

  return (
    <section className={styles.gallery}>
      <p>Moments...</p>
      <div className={styles.container}>
        {photos.map(photo => (
          <ImgBox key={photo.node.id} photoNode={photo.node} styles={styles} />
        ))}
      </div>
    </section>
  )
}

export default Gallery

export const ImgBox = ({ photoNode, styles }) => (
  <div className={styles.item}>
    <Img
      fluid={photoNode.gal_image.childImageSharp.fluid}
      alt={photoNode.gal_title}
    />
    <div className={styles.box} />
  </div>
)

export const query = graphql`
  {
    allGalleryYaml(sort: { order: ASC, fields: gal_order }) {
      edges {
        node {
          id
          gal_order
          gal_title
          gal_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
