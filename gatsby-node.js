exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const productDetailTemplate = require.resolve(`./src/templates/productTemplate.js`)

	
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


}