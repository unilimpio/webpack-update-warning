import React from 'react';

import Scroll from '../Scroll';

import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Footer from './Footer';
import Header from './Header';



const Layout = ({location, crumbLabel, title, desc, banner, pathname, article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo, children }) => {



  return (
    <>
      <Header title={title} desc={desc} banner={banner} pathname={pathname} article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo} />
        <main>
        <Breadcrumb location={location} crumbLabel={crumbLabel} crumbSeparator=">" />
        <Scroll showPoint={1200} />
          {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
