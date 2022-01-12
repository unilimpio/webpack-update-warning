import React from 'react';

import Scroll from '../Scroll';
import WhastappBubble from '../WhatsappBubble'
import { HomeIcon } from '@heroicons/react/solid'

import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Footer from './Footer';
import Header from './Header';



const Layout = ({location, crumbLabel, title, desc, banner, pathname, article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo, children }) => {



  return (
    <>
      <Header title={title} desc={desc} banner={banner} pathname={pathname} article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo} />
        <main>
          <div className="">
            <span className="absolute left-0 top-0 text-gray-600"><HomeIcon /></span>
            <Breadcrumb location={location} crumbLabel={crumbLabel} crumbSeparator=">" />

          </div>


        <WhastappBubble contactNum="593997345385" />
        <Scroll showPoint={800} />
          {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
