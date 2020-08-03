import React from 'react'
import styles from './intro.module.scss'
import Reveal from './reveal'

// import wordcloud from '../img/wordcloud.svg'
import lrCircle from '../img/lr-circle-right-bottom.svg'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Reveal
        clsName={styles.introMsg}
        transProps={{
          opacity: [1, 0],
          transform: ['scale(1)', 'scale(0.5)']
        }}
        transition='opacity 3s ease, transform 3s ease'
      >
        ALWAYS <br /> FRESH
      </Reveal>
      <img src={lrCircle} className={styles.introCircle} alt='la roll circle logo' />
      {/* <img src={wordcloud} className={styles.introWords} alt='words cloud' /> */}
    </section>
  )
}

export default Intro
