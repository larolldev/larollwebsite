import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import EOIForm from '../components/eoiform'

import styles from './beyourboss.module.scss'
import haybails from '../data/images/lrbeyourboss.png'

const Beyourboss = () => {
  return (
    <Layout>
      <Metadata title='Be your boss' description='Be yur our boss page' />
      <section className={styles.beyourboss}>
        <div className={styles.haybails}>
          <p>
            <a href='#eiform'>Be Your Own Boss</a>
          </p>
          <img src={haybails} alt='haybails' />
        </div>
        <EOIForm className={styles.form} />
      </section>
    </Layout>
  )
}

export default Beyourboss
