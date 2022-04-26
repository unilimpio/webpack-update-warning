import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Facebook from './Facebook'
import Twitter from './Twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ title, desc, banner, pathname, pageLang,
  alternates, alternateEn, alternateEs, alternateEsec, alternateDefault,
  article, articleDate,
  product, category, categorySlug, productSku, productGtin13, offerPrice, brandName, brandLogo,
  node }) => {

  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      defaultHreflangEn,
      defaultHreflangEs,
      defaultHreflangEsec,
      defaultPageLang,
      headline,
      ogLanguage,
      author,
      twitter,
      facebook,

    }

  } = site

  const seo = {
    title: `${title || defaultTitle}`,
    description: `${desc || defaultDescription}`,
    image: `${siteUrl}/images/${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`,
    pageLang: `${pageLang|| defaultPageLang}`,
    alternateEs: `${siteUrl}${alternateEs || defaultHreflangEs}`,
    alternateEn: `${siteUrl}${alternateEn || defaultHreflangEn}`,
    alternateDefault: `${siteUrl}${alternateEs || defaultHreflangEs}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: defaultPageLang,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Organization',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: author,
    },
    copyrightYear: '2021',
    creator: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
    },
    datePublished: '26/02/2021',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/${defaultBanner}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Inicio',
      },
      position: 1,
    },
  ]

  let schemaArticle = null
  let schemaProduct = null



  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Organization',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: author,
      },
      copyrightYear: '2021',
      creator: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/${defaultBanner}`,
        },
      },
      datePublished: articleDate,
      dateModified: articleDate,
      description: seo.description,
      headline: seo.title,
      inLanguage: seo.pageLang,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/blog`,
        name: 'Blog',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}${pathname}`,
        name: seo.title,
      },
      position: 3,
    }


    )
  }

  if(product){

    schemaProduct = {

        "@context": "https://schema.org/",
        "@type": "Product",
        "name": seo.title,
        "image": [
          `${seo.image}`

         ],
        "description": seo.description,
        "sku": productSku,
        "gtin13": productGtin13,

        "brand": {
          "@type": "Brand",
          "name": brandName,
          "logo": `${siteUrl}/images/${brandLogo}`,
        },



        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": offerPrice,
          "priceCurrency": "USD",
          "url": seo.url,

        }

    }



    // Push current product into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/productos`,
        name: 'Productos de limpieza',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}/productos/${categorySlug}`,
        name: category,
      },
      position: 3,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${siteUrl}${pathname}`,
        name: seo.title,
      },
      position: 4,
    }

    )

  }


  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={seo.pageLang} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        {product && <script type="application/ld+json">{JSON.stringify(schemaProduct)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

        {/* Insert alternates hreflang settings conditionally */}
        {alternates && <link rel="alternate" hreflang="es-ec" href={seo.alternateEsec} />}
        {alternates && <link rel="alternate" hreflang="en" href={seo.alternateEn} />}
        {alternates && <link rel="alternate" hreflang="es" href={seo.alternateEs} />}
        {alternates && <link rel="alternate" hreflang="x-default" href={seo.alternateDefault} />}


      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    </>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  pageLang: PropTypes.string,
  article: PropTypes.bool,
  product: PropTypes.bool,
  alternates: PropTypes.bool,
  categorySlug: PropTypes.string,
  productSku: PropTypes.string,
  productGtin13: PropTypes.string,
  offerPrice: PropTypes.string,
  brandName: PropTypes.string,
  brandLogo: PropTypes.string,
  alternateEn: PropTypes.string,
  alternateEs: PropTypes.string,
  alternateEsEc: PropTypes.string,
  alternateDefault: PropTypes.string,
  node: PropTypes.object,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  pageLang: null,
  article: false,
  product: false,
  alternates: false,
  alternateEn: null,
  alternateEs: null,
  alternateEsEc: null,
  alternateDefault: null,
  categorySlug: null,
  productSku: null,
  productGtin13: null,
  offerPrice: null,
  brandName: null,
  brandLogo: null,
  node: null,
}
const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        defaultHreflangEn: hreflangEn
        defaultHreflangEs: hreflangEs
        defaultHreflangEsec: hreflangEsec
        headline
        defaultPageLang: siteLanguage
        ogLanguage
        author
        twitter
        facebook

      }


    }
  }
`
