import React from 'react';



import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Footer from './Footer';
import Header from './Header';



const Layout = ({location, crumbLabel,
  siteVerOpts, langOpts, alternates, alternateEn, alternateEs, alternateEsec, alternateDefault,
  title, desc, banner, pathname,
  article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo,
  children }) => {



  return (
    <>
      <Header siteVerOpts={siteVerOpts} langOpts={langOpts}
      alternates={alternates} alternateEn={alternateEn} alternateEs={alternateEs} alternateEsec={alternateEsec} alternateDefault={alternateDefault}
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
