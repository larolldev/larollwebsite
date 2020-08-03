import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import Gallery from '../components/gallery'
import Locations from '../components/locations'

import styles from './about.module.scss'

const About = () => {
  return (
    <Layout>
      <Metadata title='About' description='This is my about page' />
      <section className={styles.about}>
        <p>
          <span style={{ fontWeight: 'bold', color: '#a61c24' }}>La Roll</span>{' '}
          is a Vietnamese food to go restaurant serving the busy industrial
          zones of Melbourne.
        </p>
        <p>
          Each of our stores were opened with a passion to provide fresh and
          tasty food. We prepare all our rolls, salads and meals fresh in house.
        </p>
        <p>
          The first La Roll store was opened in Laverton North in 2017, followed
          by Truganina in 2018 and Derrimut in 2019. Our stores were born from a
          love of Vietnamese street food and a desire to share commitment to
          quality with Melbourne and now Australia.
        </p>
      </section>
      <Locations />
      <Gallery />
    </Layout>
  )
}

export default About

export const AboutUs = () => {
  return (
    <div>
      <p>
        <span style={{ fontWeight: 'bold', color: '#a61c24' }}>La Roll</span> is
        a Vietnamese food to go restaurant serving the busy industrial zones of
        Melbourne.
      </p>
      <p>
        Each of our stores were opened with a passion to provide fresh and tasty
        food. We prepare all our rolls, salads and meals fresh in house.
      </p>
      <p>
        The first La Roll store was opened in Laverton North in 2017, followed
        by Truganina in 2018 and Derrimut in 2019. Our stores were born from a
        love of Vietnamese street food and a desire to share commitment to
        quality with Melbourne and now Australia.
      </p>
    </div>
  )
}
