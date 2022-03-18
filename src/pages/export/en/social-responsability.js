
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"



import Layout from '../../../components/layout/Layoutexport-en';

import NewsletterSub from "../../../components/NewsletterSub";







const seo={
  title: "Social Responsability",
  desc:  "",
  image: "",
  pathname: "/export/en/social-responsability",
}

const siteVerOpts = [

  {
    label: 'International',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/responsabilidad-social',

  },


];

const langOpts = [

  {
    label: 'EN',
    value: null,

  },


  {
    label: 'ES',
    value: '/export/responsabilidad-social',

  },


];

const SocialResponsability = ({location}) => (

          <Layout location={location} crumbLabel="Social Responsability"
                  siteVerOpts={siteVerOpts} langOpts={langOpts}
                  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

<div class="bg-fixed" >

<StaticImage src="../images/responsabilidad-social.jpg"
            className="object-contain"
            alt="We are a company with corporate social responsibility, learn more"
            placeholder="blurred"
            layout="fullWidth"
             />


</div>

<section class="bg-white flex justify-center">
<div class="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
<div class="max-w-3xl mx-auto text-center">
  <h1 class="text-5xl font-semibold text-blue ">Corporate Social Responsibility</h1><br/>
  <h1 className=" italic font-mormal text-center text-primary text-xl ">"Building our legacy today for future generations." </h1>

</div>

    </div>
   </section>




<section id="responsabilidad social" className="">
<div class="bg-white">
<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
  <div class="space-y-5 sm:space-y-4">
    <h2 class="text-5xl font-semibold tracking-tight sm:text-4xl text-primary-lighter text-center">CSR is part of our DNA</h2>
    <p class="text-xl text-gray-500"></p>
  </div>
  <div class="lg:col-span-2">
    <ul role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
      <li class="sm:py-8">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <StaticImage src="../../images/logo-onu-mujeres.jpg"
                className="flex justify-center mx-6"
                alt="Misión de Unilimpio"
                placeholder="blurred"
                layout="constrained"/>
          </div>
          <div class="sm:col-span-2">
            <div class="space-y-4">
              <div class="text-2xl leading-6 font-semibold space-y-1">
                <h3>ONU WOMEN</h3>
              </div>
              <div class="text-lg">
                <p class="text-gray-700">In 2019, we signed an agreement with UN Women in ratification of our commitment to building better business communities.</p>
              </div>
              <ul role="list" class="flex space-x-5">
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="sm:py-8">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <StaticImage src="../../images/pacto-global-logo.jpg"
                className="flex justify-center mx-6"
                alt="Misión de Unilimpio"
                placeholder="blurred"
                layout="constrained"/>
          </div>
          <div class="sm:col-span-2">
            <div class="space-y-4">
              <div class="text-2xl leading-6 font-semibold space-y-1">
                <h3>NNU GLOBAL COMPACT</h3>
              </div>
              <div class="text-lg">
                <p class="text-gray-700">We are a company with Corporate Social Responsibility in our DNA, which is why we have been part of the UN Global Compact since 2017, actively supporting ODS 4 and 12.</p>
              </div>
              <ul role="list" class="flex space-x-5">
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="sm:py-8">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <StaticImage src="../../images/huella-de-carbono.jpg"
                className="flex justify-center mx-6"
                alt="Misión de Unilimpio"
                placeholder="blurred"
                layout="constrained"/>
          </div>
          <div class="sm:col-span-2">
            <div class="space-y-4">
              <div class="text-2xl leading-6 font-semibold space-y-1">
                <h3>ZERO CARBON</h3>
              </div>
              <div class="text-lg">
                <p class="text-gray-700">We work on Carbon Footprint measurement following the guidelines and principles of the ISO 14064-1:2018 standard, which is recognized as one of the most important international standards.</p>
              </div>
              <ul role="list" class="flex space-x-5">
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="sm:py-8">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <StaticImage src="../../images/reciclaje.jpg"
                className="flex justify-center mx-6"
                alt="Misión de Unilimpio"
                placeholder="blurred"
                layout="constrained"/>
          </div>
          <div class="sm:col-span-2">
            <div class="space-y-4">
              <div class="text-2xl leading-6 font-semibold space-y-1">
                <h3>100% RECYCLABLE</h3>
              </div>
              <div class="text-lg">
                <p class="text-gray-700">100% of the packaging used for the products manufactured by Unilimpio is made of recyclable materials, the challenge is mainly to get more people in the country to dispose of our containers separately so that they can be used through recycling processes. To this end, Unilimpio has included graphic legends on each label of its products clearly indicating the recyclable materials from which the packaging is made to help consumers dispose of them correctly at the end of the cycle.</p>
              </div>
              <ul role="list" class="flex space-x-5">
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="sm:py-8">
        <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <StaticImage src="../../images/inclusivos.jpg"
                className="flex justify-center mx-6"
                alt="Misión de Unilimpio"
                placeholder="blurred"
                layout="constrained"/>
          </div>
          <div class="sm:col-span-2">
            <div class="space-y-4">
              <div class="text-2xl leading-6 font-semibold space-y-1">
                <h3>INCLUSIVE</h3>
              </div>
              <div class="text-lg">
                <p class="text-gray-700">Within our company, employees are informed about not discriminating against anyone, especially their coworkers, and about not committing violent acts within their family circle. To reinforce this point, our training calendar includes topics such as child abuse, gender violence and discrimination.</p>
              </div>
              <ul role="list" class="flex space-x-5">
              </ul>
            </div>
          </div>
        </div>
      </li>
     
    </ul>
  </div>
</div>
</div>
</div>
</section>

            <NewsletterSub/>

          </Layout>

)
export default SocialResponsability
