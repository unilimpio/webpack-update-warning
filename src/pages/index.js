import React from 'react';


import Layout from '../components/layout/Layout';



import HeroBanner from "../components/HeroBanner"


const siteVerOpts = [

  {
    label: 'Ecuador',
    value: '',

  },
  {
    label: 'Internacional',
    value: "/export-es/",

  },


];

const langOpts = [

  {
    label: 'ES',
    value: '',

  },


  {
    label: 'EN',
    value: '',

  },


];

const IndexPage = ({  location }) => {




  return(

<Layout location={location} crumbLabel="Home"
        siteVerOpts={siteVerOpts} langOpts={langOpts} alternates>




<HeroBanner />







  </Layout>

)

}




export default IndexPage
