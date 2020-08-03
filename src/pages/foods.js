import React from 'react'
import Layout from '../components/layout'
import Metadata from '../components/metadata'
import FoodList from '../components/foodlist'

const Foods = () => {
  return (
    <Layout>
      <Metadata title='Foods' description='This is foods page' />
      <FoodList />
    </Layout>
  )
}
export default Foods
