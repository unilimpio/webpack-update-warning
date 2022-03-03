import React from 'react';

import Scroll from '../Scroll';
import WhastappBubble from '../WhatsappBubble'


import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Footer from './Footerexport-en';
import Header from './Headerexport-en';



const Layout = ({location, crumbLabel, siteVerOpts, langOpts, title, desc, banner, pathname, article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo, children }) => {



  return (
    <>
      <Header  siteVerOpts={siteVerOpts} langOpts={langOpts} title={title} desc={desc} banner={banner} pathname={pathname} article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo} />
        <main id="">
          <div className="ml-2">

            <Breadcrumb location={location} crumbLabel={crumbLabel} crumbSeparator=">" />

          </div>



        <Scroll showPoint={800} />
          {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;