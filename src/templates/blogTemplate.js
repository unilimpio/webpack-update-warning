import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"



export default function blogTemplate({
  location,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const siteVerOpts = [

    {
      label: 'Ecuador',
      value: null,


    },

    {
      label: 'Internacional',
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
    article articleDate={frontmatter.date}>

        <div className="w-full mx-auto mb-0">
            <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <h3 className="text-sm text-center text-primary mb-6">- Blog -</h3>
                <h1 className="text-3xl text-center sm:text-3x1 sm:text-center text-primary font-bold">{frontmatter.title}</h1>
                <h2 className="text-primary-lighter text-xl mb-12 text-center sm:text-3x1 sm:text-center ">{frontmatter.date}</h2>
                <GatsbyImage image={frontmatter.featuredImage.childImageSharp.gatsbyImageData} className="sm:w-2/4 float-left m-8" alt={excerpt} />

                <div className="text-md text-gray-800 ml-8 text-justify" dangerouslySetInnerHTML={{ __html: html }}/>
            </div>
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    frontmatter {
      date(formatString: "DD/MM/YYYY")
      title
      slug
      path
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
    excerpt
    html
  }
}
`
