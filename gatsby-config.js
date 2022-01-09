module.exports = {

  plugins: [


    {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
      defaultCrumb: {
        // location: required and must include the pathname property
        location: {
          pathname: "/",
        },
        // crumbLabel: required label for the default crumb
        crumbLabel: "Inicio",
        // all other properties optional

      },
    },
  },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://unilimpio.us18.list-manage.com/subscribe/post?u=291181dacd668b1dad7f8c93c&amp;id=9c9708e7eb', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
          },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,

      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/pages/productos`,

      },
    },


    `gatsby-plugin-sharp`,

    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
        safelist: ['breadcrumb','breadcrumb__list','breadcrumb__list__item','breadcrumb__link','breadcrumb__separator'], // Don't remove this selector
        },
      }
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {

        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        output: '/',
        excludes: [`/legal/*`,`/gracias`],
        query: `
        {
           site {
             siteMetadata {
               siteUrl
             }
             buildTime(formatString: "YYYY-MM-DD")
           }
           allSitePage {
             nodes {
               path
             }
           }
           allMarkdownRemark(filter: {frontmatter: {path: {regex: "/blog/"}}}) {
             nodes {
               frontmatter {
                 path
                 date
               }
             }
           }
         }
        `,

        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMarkdownRemark: { nodes: allPosts },
        }) => {
          const pathToDateMap = {};

          allPosts.map(post => {
            pathToDateMap [post.frontmatter.path] = { date: post.frontmatter.date };
          });

          const pages = allPages.map(page => {
            return { ...page, ...pathToDateMap [page.path] };//what does this line of code do???
          });

          return pages;
        },
        serialize: ({ path, date }) => {
          let entry = {
            url: path,
            changefreq: 'monthly',
            priority: 0.5,
          };

          if (date) {
            entry.priority = 0.7;
            entry.lastmod = date;
          }

          return entry;
        }

      }
    }

  ],


  siteMetadata: {
    title: "Unilimpio - Mucho más en higiene Institucional",
    titleTemplate: "%s · Unilimpio",
    description:
      "Unilimpio es una empresa fabricante y comercializadora de soluciones de higiene institucional, productos de limpieza, químicos, absorbentes, jabones y desinfectantes de manos, implementos profesionales de limpieza, detergentes, con más de 20 años de experiencia.",
    url: "https://unilimpio.com", // No trailing slash allowed!
    image: "/images/unilimpio.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@unilimpio_ec",
    siteUrl: "https://unilimpio.com",
    banner: "unilimpio.jpg",
    headline: "",
    siteLanguage: "Español",
    ogLanguage: "",
    author: "Unilimpio",
    twitter: "",
    facebook: ""
  },



};
