import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './locations.module.scss'

import lrmaps from '../data/images/lrmaps.png'

const Locations = () => {
  const data = useStaticQuery(query)
  console.log(data.allMarkdownRemark.edges)
  return (
    <section className={styles.locations}>
      <h1>Locations</h1>
      <img src={lrmaps} alt='la roll maps' className={styles.map} />
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <Location
          styles={styles}
          key={edge.node.id}
          name={edge.node.frontmatter.location_name}
          address={edge.node.frontmatter.location_address}
          open={edge.node.frontmatter.location_open}
          phone={edge.node.frontmatter.location_phone}
          image={edge.node.frontmatter.location_image.childImageSharp.fluid}
        />
      ))}
    </section>
  )
}

export default Locations

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { location_active: { eq: "yes" } }
        fileAbsolutePath: { regex: "/locations/" }
      }
      sort: { order: ASC, fields: frontmatter___location_order }
    ) {
      edges {
        node {
          id
          frontmatter {
            location_active
            location_address
            location_bookmark
            location_desc
            location_open
            location_name
            location_phone
            location_image {
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
  }
`

export const Location = ({ styles, name, address, open, phone, image }) => {
  return (
    <div className={styles.location}>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>Opening hours: {open}</p>
      <p className={styles.phone}>Call us at: <a href={`tel:${phone}`}>{phone}</a></p>
      <Img fluid={image} alt={name} />
    </div>
  )
}
