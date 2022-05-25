import React from 'react';


import Layout from '../components/layout/Layout';



import HeroBanner from "../components/HeroBanner"






const IndexPage = ({  location }) => {




  return(

<Layout location={location} crumbLabel="Home"
      >




<HeroBanner />







  </Layout>

)

}




export default IndexPage
