import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layoutexport-en"


import { Link } from 'gatsby'
import NewsletterSub from '../components/NewsletterSub'
import Features from '../components/Featuresexport-en'




export default function productTemplate({
  location,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const siteVerOpts = [

      {
        label: "International",
        value: null,


      },

      {
        label: "Ecuador",
        value: "/",


      }


  ];

  const langOpts = [


      {
        label: 'EN',
        value: null,

      },


      {
        label: 'ES',
        value: `/export/es/productos/`,

      }


  ];






  return (



    <Layout location={location} crumbLabel={frontmatter.title}
    siteVerOpts={siteVerOpts} langOpts={langOpts}
     alternateEn={frontmatter.alternateEn} alternateEs={frontmatter.alternateEs} alternateEsec={frontmatter.alternateEsec} alternateDefault={frontmatter.alternateDefault}
    title={frontmatter.title} desc={excerpt} banner={`${frontmatter.slug}.jpg`} pathname={frontmatter.path}
    product category={frontmatter.category} categorySlug={frontmatter.categorySlug} productSku={frontmatter.sku} productGtin13={frontmatter.gtin13} offerPrice={frontmatter.price} brandName={frontmatter.brandName} brandLogo={frontmatter.brandLogo}>

        <section id="product-detail" className="bg-gradient-to-br from-white via-blue-200 to-white py-20">

              <div className="text-center mt-2 mb-4">
                <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl text-center">{frontmatter.title}</h1>
                <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-secondary-lighter text-center">{frontmatter.subtitle}</h2>

              </div>

            <div className="flex flex-col md:flex-row w-full mx-auto">
                <div className="order-last md:order-first md:w-1/2  px-6 pt-8 pb-6 ml-4 mr-2 md:ml-20 md:mr-10">
                  <div className="bg-logouni bg-no-repeat bg-right md:bg-right-bottom bg-clip-content bg-60% sm:bg-40%">
                    <div className="bg-white bg-opacity-75 pt-8 pb-6 px-8 rounded-md">

                      <div className="mt-4 text-md font-light leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: html }}/>


                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 mx-auto mt-4">

                  <GatsbyImage image={frontmatter.featuredImage.childImageSharp.gatsbyImageData} className="float-left" alt={excerpt} />
                </div>
            </div>
            <div className="mt-10 ml-4">
              <Link to='/export/en/products/' className="bg-secondary-lighter p-2 rounded-lg text-white hover:no-underline hover:text-white hover:bg-primary-lighter">
                Ver más productos
              </Link>
            </div>
        </section>

        <section id="sellos de calidad" className="bg-primary-default mt-20">
  <div className="container mx-auto sm:flex ">
    <div className=" w-full sm:flex-1 ">
      <h2 className=" pl-5 mx-auto text-2xl font-semibold text-center text-white sm:text-center mb-0 p-px pt-10 ">
      We comply with national and international certifications that guarantee the quality of our products:
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

        <section id="contact" className="relative bg-white mt-20">
<div class="relative bg-white">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-200"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="max-w-lg mx-auto">
        <h2 class="text-4xl font-bold  text-primary-default sm:text-2xl">
        ¡REQUEST A QUOTE NOW!
        </h2>
        <dl class="mt-8 text-xl text-primary-default">
          <div>
            <dd>
              <p>Our consultants will be happy to contact you for further information and to schedule an appointment.</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div class="max-w-lg mx-auto lg:max-w-none">
        <form name="lead" action="/gracias" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="grid grid-cols-1 gap-y-6">
          <div>
            <label for="full-name" class="sr-only">Nombre</label>
            <input type="text" name="nombre" id="nombre" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Name"/>
          </div>
          <div>
            <label for="phone" class="sr-only">Teléfono</label>
            <input type="text" name="phone" id="país" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Country"/>
          </div>
          <div>
            <label for="email" class="sr-only">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="E-mail"/>
          </div>
          <div>
            <label for="phone" class="sr-only">Teléfono</label>
            <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Phone"/>
          </div>

          <div>
            <label for="mensaje" class="sr-only">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
          </div>
          <div>
            <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-default hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section>


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
      alternate
      path
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      category
      title
      subtitle
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
