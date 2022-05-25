module.exports = {

  plugins: [


    {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
/*
      defaultCrumb: {
        // location: required and must include the pathname property
        location: {
          pathname: "/",
        },
        // crumbLabel: required label for the default crumb
        crumbLabel: "Inicio",
        // all other properties optional
        //crumbSeparator: ">",

      },*/
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
        name: `images`,
        path: `${__dirname}/src/images`,

      },
    },


    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-netlify`,

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
          safelist: [
            'breadcrumb',
            'breadcrumb__list',
            'breadcrumb__list__item',
            'breadcrumb__link',
            'breadcrumb__separator',
            'ol',
          ], // Don't remove this selector
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
    title: "Gatsby site",
    titleTemplate: "%s · Gatsby",
    description:
      "",
    url: "", // No trailing slash allowed!
    image: "", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
    siteUrl: "http://localhost:8000",
    banner: "",
    hreflangEs: "",
    hreflangEsec: "/",
    hreflangEn: "",
    headline: "",
    siteLanguage: "es",
    ogLanguage: "",
    author: "",
    twitter: "",
    facebook: ""
  },





};
