import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
//import Breadcrumb from "../components/Breadcrumb"
import PictureWebp from "../components/PictureWebp"
import NewsletterSub from '../components/NewsletterSub'


export default function blogTemplate({
  location,
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  


  return (



    <Layout location={location} crumbLabel={frontmatter.title}
    title={frontmatter.title} desc={excerpt} banner={`${frontmatter.slug}.jpg`} pathname={frontmatter.path} article articleDate={frontmatter.date}>

        <div className="w-full mx-auto mb-0">
            <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <h1 className="text-3xl text-center sm:text-3x1 sm:text-center text-primary font-bold">{frontmatter.title}</h1>
                <h2 className="text-blue-500 text-xl mb-12 text-center sm:text-3x1 sm:text-center ">{frontmatter.date}</h2>

                <PictureWebp path="../../" className="sm:w-2/4 mx-auto mb-8 px-6 pb-6" filename={frontmatter.slug} description={excerpt}/>
                <div className="text-md text-gray-800 ml-8 sm:text-left" dangerouslySetInnerHTML={{ __html: html }}/>
            </div>
        </div>
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
        title
        slug
      }
      excerpt
    }
  }
  `
