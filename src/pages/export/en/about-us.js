import React from 'react';
import Layout from '../../../components/layout/Layoutexport-en';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import NewsletterSub from "../../../components/NewsletterSub";
import Button from "../../../components/Button";



const seo={
  title: "About Us",
  desc:  "Descubra nuestra historia",
  image: "productos.jpg",
  pathname: "/export/en/about-us",
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/acerca-de',

  },


];

const langOpts = [

  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: '/export/en/about-us',

  },


];

const AboutUs = ({location}) => (




  <Layout location={location} crumbLabel="About us"
          siteVerOpts={siteVerOpts} langOpts={langOpts}
            title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


    <StaticImage src="../../../images/foto-dron-unilimpio.jpg"
                className="object-contain"
                alt="Acerca de Unilimpio: en la imagen todos los colaboradores de Unilimpio oficina Matriz."
                placeholder="blurred"
                layout="fullWidth"
                 />

    <section id="presentacion" className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-semibold text-primary-default ">We are Health and Wellness</h1>
      <p className="mt-4 text-xl text-gray-700 mb-6">We are a proudly Ecuadorian company that for more than 3 decades has been providing health and wellness to people through cleaning and hygiene.
  </p>
    </div>
    </div>
</section>





<section id="historia" className="bg-gradient-to-r from-blue-400 via-white to-blue-100 mt-20 flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary-lighter text-center ">OUR HISTORY</h2>
      <p className="mt-4 text-lg text-gray-700 mb-20 font-normal text-justify">Unilimpio S.A. is an Ecuadorian company founded in 1986. We are dedicated to providing cleaning systems for industry, institutions and the home. Our purpose is to provide well-being to people through hygiene solutions.
          <br/> <br/>
          After 34 years, we have become a business group made up of companies specialized in different fields of hygiene, with operations in Colombia and Ecuador; and exports to Peru.
<br/> <br/>
We differentiate ourselves from the competition by having the broadest portfolio of cleaning products, professional cleaning consultants, good manufacturing practices, quality and food safety.
 </p>

<h1 className=" italic font-semibold text-center text-primary text-xl ">"Hygiene is wellness, it is health". </h1>
    </div>
    </div>
</section>



<section className="bg-gray-200 pt-12 sm:pt-16 mb-20 mt-20">
  <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-4xl mx-auto text-center ">
      <h2 className="text-3xl font-bold mt-0 text-center text-primary-lighter mb-12  ">
      CONSTANT IMPROVEMENT
      </h2>
    </div>
  </div>
  <div className="bg-gray-200 py-px pb-12 sm:pb-16">
    <div className="relative ">
      <div className="absolute inset-0 h-1/2 bg-gray-200"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              ISO 9001 Certification
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter ">
                2001
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Member of the International Sanitary Supply Association ISSA
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2009
              </dd>
            </div>
            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              ISO 4500 and ISO 14000 certification
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2012
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Social Responsibility with the ISO 26000 framework of conduct
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2016
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Member of the United Nations Global Compact
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2018
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Good Manufacturing Practices Certification
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2019
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="grupo empresarial Unilimpio" className="bg-white flex justify-center mt-2">
  <div className="max-w-7xl mx-10 py-2 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center flex justify-center">
      <h1 className="text-3xl font-bold mt-0 text-center text-primary-lighter  ">OUR PHILOSOPHY</h1>
    </div>
    </div>
</section>


<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  mx-6 mt-0">
  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../images/nuestro-proposito.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold ">OUR PHILOSOPHY</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-center">Well-being of people through hygiene.</dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>
  </li>

  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../images/nuestro-futuro.jpg"
                    className="flex justify-center mx-6"
                    alt="Visión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold">Our Future</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-center">To be the first institutional hygiene option recognized for its value offer and its Social Responsibility. </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>

  </li>

  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../images/valores-corporativos.jpg"
                    className="flex justify-center mx-6"
                    alt="Valores corporativos de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold">Our Corporate Values</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-justify"><li>Customer focus</li><li>Continuous improvement and innovation</li> <li>Teamwork to achieve results</li> <li>Transparency, honesty, courage and faith</li> <li>Sustainable (Global Compact and SDGs)</li> </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">
        </dd>
      </dl>
    </div>
  </li>
</section>






<NewsletterSub/>

</Layout>
);

export default AboutUs;
