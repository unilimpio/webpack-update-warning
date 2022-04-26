import React from 'react';

import Scroll from '../Scroll';



import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Footer from './Footerexport-en';
import Header from './Headerexport-en';



const Layout = ({location, crumbLabel,
  siteVerOpts, langOpts, alternates, alternateEn, alternateEs, alternateEsec, alternateDefault,
  title, desc, banner, pathname, pageLang,
  article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo,
  children }) => {



  return (
    <>
      <Header  siteVerOpts={siteVerOpts} langOpts={langOpts}
      alternates={alternates} alternateEn={alternateEn} alternateEs={alternateEs} alternateEsec={alternateEsec} alternateDefault={alternateDefault}
      title={title} desc={desc} banner={banner} pathname={pathname} pageLang={pageLang}
      article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo} />
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
