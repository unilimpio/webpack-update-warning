import React from 'react';
import Navbar from "../Navbar/Navbarexport";
import Seo from "../SEO/seo";


export default function Header({
  siteVerOpts, langOpts, alternates, alternateEn, alternateEs, alternateEsec, alternateDefault,
  title, desc, banner, pathname,
  article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo}) {

  return(
    <header className="sticky top-0 z-10">
      <div className="shadow-md">
        <Seo title={title} desc={desc} banner={banner} pathname={pathname}
        alternates={alternates} alternateEn={alternateEn} alternateEs={alternateEs} alternateEsec={alternateEsec} alternateDefault={alternateDefault} 
        article={article} articleDate={articleDate}
        product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo}/>

        <Navbar siteVerOpts={siteVerOpts} langOpts={langOpts}/>
      </div>


    </header>
  )
}
