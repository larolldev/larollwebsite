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
          TEMPORARY CHANGE
          <br />
          TO OPENING HOURS
          <br />
          DUE TO COVID RESTRICTONS
        </h3>
        <h3>9AM - 2PM</h3>
        <h3>MONDAY - FRIDAY</h3>
        <p>Effective from Monday 10 August 2020.</p>
        <p>
          We will be back to normal hours as soon as the restrictions are easier
        </p>
      </section>
      <Locations />
      <Gallery />
    </Layout>
  )
}
export default UpdatesPerCoronavirus
