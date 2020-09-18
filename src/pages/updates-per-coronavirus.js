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
        <h3>
          WE'RE BACK TO NORMAL OPENING HOURS
        </h3>
        <h3>6:00AM - 2:30PM</h3>
        <h3>MONDAY - FRIDAY</h3>
        <p>Effective from Monday 21 September 2020.</p>
      </section>
      <Locations />
      <Gallery />
    </Layout>
  )
}
export default UpdatesPerCoronavirus
