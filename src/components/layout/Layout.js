import React from 'react';



import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Footer from './Footer';
import Header from './Header';



const Layout = ({location, crumbLabel,

  title, desc, banner, pathname,
  article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo,
  children }) => {



  return (
    <>
      <Header 
      title={title} desc={desc} banner={banner} pathname={pathname} article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo} />
        <main id="">
          <div className="ml-2">

            <Breadcrumb location={location} crumbLabel={crumbLabel} crumbSeparator=">" />

          </div>


          {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
