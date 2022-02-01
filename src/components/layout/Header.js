import React from 'react';
import Navbar from "../Navbar/Navbar";
import Seo from "../SEO/seo";


export default function Header({title, desc, banner, pathname, article, articleDate, product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo}) {

  return(
    <header className="sticky top-0 z-10">
      <div className="shadow-md">
        <Seo title={title} desc={desc} banner={banner} pathname={pathname} article={article} articleDate={articleDate} product={product} category={category} categorySlug={categorySlug} productSku={productSku} productGtin13={productGtin13} offerPrice={offerPrice} brandName={brandName} brandLogo={brandLogo}/>
        <section id="wilmer">
          <div className="w-full mx-auto bg-black">
            <div className="px-8 py-2 text-white">
              <span className="text-2xl">Aluvión en Quito</span><br/>
              <span className="text-lg">En este momento de mucho dolor, nos solidarizamos con las familias de las víctimas y damnificados que ha dejado el terrible aluvión del pasado Lunes 31 de enero en Quito. </span><br/>
              <span className="text-md">Estaremos recibiendo donaciones de víveres y frazadas en nuestras oficina Matriz, mismas que serán movilizadas a los albergues dispuestos para los damnificados.</span>
            </div>
          </div>
        </section>
        <Navbar />
      </div>


    </header>
  )
}
