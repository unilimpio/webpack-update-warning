import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

import PictureWebp from "../components/PictureWebp"
import { Link } from 'gatsby'
import LeadForm from "../components/LeadForm"
import NewsletterSub from '../components/NewsletterSub'




export default function productTemplate({
  location,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  return (



    <Layout location={location} crumbLabel={frontmatter.title}
    title={frontmatter.title} desc={excerpt} banner={`${frontmatter.slug}.jpg`} pathname={frontmatter.path} product category={frontmatter.category} categorySlug={frontmatter.categorySlug} productSku={frontmatter.sku} productGtin13={frontmatter.gtin13} offerPrice={frontmatter.price} brandName={frontmatter.brandName} brandLogo={frontmatter.brandLogo}>

        <section id="product-detail" className="bg-gradient-to-br from-white via-blue-200 to-white py-20">

              <div className="text-center mt-2 mb-4">
                <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl text-center">{frontmatter.title}</h1>
                <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-secondary text-center">{frontmatter.subtitle}</h2>

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

                    <PictureWebp path="../../" className="shadow-md" filename={frontmatter.slug} description={excerpt}/>
                </div>
            </div>
            <div className="mt-10 ml-4">
              <Link to={'/productos/'+frontmatter.categorySlug} className="bg-gray-600 p-2 rounded-lg text-white hover:no-underline hover:text-white hover:bg-blue-400">
                Ver más productos
              </Link>
            </div>
        </section>

        <LeadForm />
        <NewsletterSub/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        category
        categorySlug
        title
        subtitle
        slug
        sku
        gtin13
        price
        brandName
        brandLogo


      }
      excerpt
    }
  }
  `
