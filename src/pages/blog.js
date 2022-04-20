import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from '../components/layout/Layout';


import NewsletterSub from '../components/NewsletterSub';

const siteVerOpts = [

  {
    label: 'Ecuador',
    value: '',


  },

  {
    label: 'Internacional',
    value: '',


  },
];

const langOpts = [


  {
    label: 'ES',
    value: '',

  },


  {
    label: 'EN',
    value: `/export/en/products`,

  },


];

const seo={
  title: "Blog de Unilimpio",
  desc:  "En nuestro blog subimos contenido útil y actualizado como consejos, recomendaciones y tips, relacionado con la gestión de Unilimpio y en general al tema de la limpieza e higiene.",
  image: "blog-unilimpio.jpg",
  pathname: "/blog",
}

export default function Blog ({location, data}) {


    return(

      <Layout location={location} crumbLabel="Blog"
      siteVerOpts={siteVerOpts} langOpts={langOpts}
      title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


      <section id="blog-banner" className="bg-blog-banner br-top bg-no-repeat m-0 p-0 ">
      <div className=" ">
        <div className="pt-6 px-10" >
          <div className="sm:mx-10 sm:px-20">
            <h1 className="text-6xl text-center font-semibold mb-0">
              Blog
            </h1>
            <p className=" font-normal text-lg text-gray-900 text-md text-center px-6 py-4 ">¡Bienvenid@ a nuestro Blog! <br/>  Actualmente contamos con <span className="text-primary-lighter font-medium  text-md text-xl">{data.allMarkdownRemark.totalCount}</span> publicaciones. Subimos consejos y tips relacionados al tema <br/> de la limpieza, y noticias importantes sobre la gestión de Unilimpio.  </p> <p className=" font-medium text-lg text-primary-default text-md text-center px-4 py-2 pb-16 mb-10 ">¡VISÍTANOS CONSTANTEMENTE!
            </p>
          </div>
        </div>
      </div>
      </section>


      <section id="" className="w-full mx-auto bg-white">
          <div className="mx-4 sm:mx-20 sm:px-20">
            {data.allMarkdownRemark.edges.map(({ node }) => (

              <div key={node.id} className="flex flex-col sm:flex-row my-8">
                    <div className="md:w-48">
                      <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt={node.excerpt} />

                    </div>
                    <div className="px-8">

                      <Link className="" to={node.frontmatter.path}>
                      <h3 className="text-primary-lighter text-2xl ">
                        {node.frontmatter.title}{" "}
                        <span className="text-gray-600 text-xs">
                          — {node.frontmatter.date}
                        </span>
                      </h3>
                      </Link>
                      <p className="text-left">
                        {node.excerpt}
                      </p>
                    </div>
              </div>
            ))}
          </div>
           </section>

           <NewsletterSub/>
    </Layout>


    )

}

export const query = graphql`

query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {parent: {internal: {content: {regex: "/(blog)/"}}}}) {
    edges {
      node {
        excerpt
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          path
          slug
          featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        }
      }
    }
    totalCount
  }
}

`
