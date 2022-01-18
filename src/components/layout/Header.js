import React from 'react';
import Navbar from "../Navbar/Navbar";
import Seo from "../SEO/seo";


export default function Header({title, desc, banner, pathname, article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo}) {

  return(
    <header className="sticky top-0 z-10">
      <div className="shadow-md">
        <Seo title={title} desc={desc} banner={banner} pathname={pathname} article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo}/>
        <Navbar />
      </div>


    </header>
  )
}
