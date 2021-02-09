import React from 'react'
import styles from './updates-per-coronavirus.module.scss'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import Gallery from '../components/gallery'
import Locations from '../components/locations'

const UpdatesPerCoronavirus = () => {
  return (
    <Layout>
      <Metadata
        title='Updates per COVID'
        description='This is my updates per covid page'
      />
      <section className={styles.covid}>
        <h3> We're applying</h3>
        <h3>WEARING MASKS - DISTANCING - HYGIENE PROCEDURES</h3>
        <h3>Opening: 6:00AM - 2:30PM MONDAY - FRIDAY</h3>
        <h3>Close: Weekends and public holidays</h3>
      </section>
      <Locations />
      <Gallery />
    </Layout>
  )
}
export default UpdatesPerCoronavirus
