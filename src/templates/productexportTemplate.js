import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layoutexport"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from 'gatsby'

import NewsletterSub from '../components/NewsletterSub'
import Features from '../components/Featuresexport'
import Button from '../components/Button';



export default function productTemplate({
  location,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const siteVerOpts = [

    {
      label: 'Internacional',
      value: null,


    },

    {
      label: 'Ecuador',
      value: '/',


    },
];

  const langOpts = [


    {
      label: 'ES',
      value: null,

    },


    {
      label: 'EN',
      value: `/export/en/products/`,

    },


  ];


  return (



    <Layout location={location} crumbLabel={frontmatter.title}
    siteVerOpts={siteVerOpts} langOpts={langOpts}

    title={frontmatter.title} desc={excerpt} banner={`${frontmatter.slug}.jpg`} pathname={frontmatter.path}
    product category={frontmatter.category} categorySlug={frontmatter.categorySlug} productSku={frontmatter.sku} productGtin13={frontmatter.gtin13} offerPrice={frontmatter.price} brandName={frontmatter.brandName} brandLogo={frontmatter.brandLogo}>

        <section id="product-detail" className="bg-gradient-to-br from-white via-blue-200 to-white py-20">

              <div className="text-center mt-2 mb-4">
                <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl text-center">{frontmatter.title}</h1>
                <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-secondary-lighter text-center">{frontmatter.subtitle}</h2>

              </div>

            <div className="flex flex-col md:flex-row w-full mx-auto">
                <div className="order-last md:order-first md:w-1/3  px-6 pt-8 pb-6 ml-4 mr-2 md:ml-20 md:mr-10">
                  <div className="bg-logouni bg-no-repeat bg-right md:bg-right-bottom bg-clip-content bg-60% sm:bg-40%">
                    <div className="bg-white bg-opacity-75 pt-8 pb-6 px-8 rounded-md">

                      <div className="mt-4 text-md font-light leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: html }}/>


                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 mx-auto mt-4">

                  <GatsbyImage image={frontmatter.featuredImage.childImageSharp.gatsbyImageData} className="float-left" alt={excerpt} />
                </div>
            </div>
            <div className="mt-10 ml-4">
              <Link to='/export/es/productos/' className="bg-secondary-lighter p-2 rounded-lg text-white hover:no-underline hover:text-white hover:bg-primary-lighter">
                Ver más productos
              </Link>
            </div>
        </section>


        <section id="contacto" className="my-8">
  <div className="w-full mx-auto  py-8 px-2 sm:px-8 lg:px-40 bg-white bg-opacity-50 text-center">
    <div className="mx:auto bg-gray-300 bg-opacity-50 rounded-xl py-4">
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-primary-default">¡SOLICITE UNA COTIZACIÓN AHORA!</h2>
      <p className="mx-auto mt-8 mb-2 text-xl font-normal px-2 sm:px-4 md:px-40">
       Nuestros asesores están gustosos de ponerse en contacto con usted para brindarle mayor información de nuestros productos de higiene profesional y enviarle una cotización.
      </p>
      <div className="flex flex-wrap mx-auto justify-center">
         <Link to="/export/es/contacto/">
          <Button className="text-white mt-4 mb-4 rounded-xl transition duration-200 ease-in-out bg-primary-default shadow-md hover:bg-secondary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="lg" type="submit">Cotizar</Button>
        </Link>
      </div>
    </div>
  </div>
</section>

        <section id="sellos de calidad" className="bg-primary-default ">
  <div className="container mx-auto sm:flex ">
    <div className=" w-full sm:flex-1 ">
      <h2 className=" pl-5 mx-auto text-2xl font-semibold text-center text-white sm:text-center mb-0 p-px pt-10 ">
      Cumplimos con certificaciones nacionales e internacionales que avalan la calidad de nuestros productos:
      </h2>
   </div>
    <div className="w-full sm:flex-1 ">
     <div className="grid grid-cols-4 gap-4 pt-10 pb-10 pl-10 pr-10">
       <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/logo-issa.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
      </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/logo-iso.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/sello-bpm.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/sello-mucho-mejor-ecuador.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
      </div>
    </div>
  </div>
</section>



        <Features />



        <NewsletterSub />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
    frontmatter {
      date(formatString: "DD/MM/YYYY")
      slug      
      path
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      category
      title
      subtitle
      pageLang
      sku
      price
      gtin13
      brandName
      brandLogo
      categorySlug
    }
    excerpt
    html
  }
  }
  `
