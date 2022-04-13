exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const productDetailTemplate = require.resolve(`./src/templates/productTemplate.js`)
  const productexportDetailTemplate = require.resolve(`./src/templates/productexportTemplate.js`)
  const productexportenDetailTemplate = require.resolve(`./src/templates/productexportenTemplate.js`)

	const result = await graphql(`
		{
			blogs: allMarkdownRemark(filter: {parent: {internal: {content: {regex: "/(/blog/)/"}}}}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
			prods: allMarkdownRemark(filter: {parent: {internal: {content: {regex: "/(/productos/)/"}}}}) {
        edges {
          node {
            frontmatter {
              path

            }
          }
        }
      }
      prodsexport: allMarkdownRemark(filter: {parent: {internal: {content: {regex: "/(/export/)/"}}}}) {
        edges {
          node {
            frontmatter {
              path
              lang

            }
          }
        }
      }
		}
	`)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  result.data.prods.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: productDetailTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  result.data.prodsexport.edges.forEach(({ node }) => {
    if (node.frontmatter.lang == "en"){
      createPage({
        path: node.frontmatter.path,
        component: productexportenDetailTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,

        },
      })
    } else if (node.frontmatter.lang == "es"){
      createPage({
        path: node.frontmatter.path,
        component: productexportDetailTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          
        },
      })
    }
  })


}
