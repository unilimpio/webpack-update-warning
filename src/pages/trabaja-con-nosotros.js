import React from 'react';


import Layout from '../components/layout/Layout';


import PictureWebp from "../components/PictureWebp";


const seo={
  title: "¿Quiénes Somos?",
  desc:  "Somos su aliado en higiene institucional, con nosotros podrá mejorar la satisfacción de sus usuarios, clientes y colaboradores a través de soluciones adecuadas de higiene y desinfección con nuestros productos de limpieza.",
  image: "grupo-unilimpio.jpg",
  pathname: "/quienes-somos",

}


const jobs = [
  {
    id: 1,
    titulo: "Analista de Gestión de la Calidad, Control de Calidad de Materias Primas y Materiales",
    descripcion:
      "Inspeccionar y tomar muestras de las materias primas receptadas, con normativas de BPM. Establecer planes de muestreo. Analizar inmediatamente las materias primas controladas por la SETED o entregadas a granel. Realizar ensayos químicos analíticos cuantitativos. ",
      requisitos: "Ing. Químico, Bioquímico y Farmacia, Biotecnología, Industrial. Maestría deseable. Experiencia: Mínima de 2 años en cargos similares en el sector industrial. Conocimientos: Inglés avanzado, metrología, manejo ISO 9001, 17025, BPM, HACCP, técnicas de muestreo estadístico y de análisis de materiales, Excel avanzado, ensayos químicos analíticos cuantitativos, por ejemplo: Titulaciones. Manejo de sitios web gubernamentales y de consulta como ARCSA, INEN, CAN, ECUAPASS, SAE, OMS 37, entre otros. SAP deseable. Competencias: enfoque al cliente, trabajo en equipo, iniciativa, mejora continua e innovación, transparencia.",
  },

  {
  id: 2,
  titulo: "Analista de Gestión de la Calidad: Aseguramiento de la Calidad, Cumplimiento Regulatorio y Normativo ",
  descripcion:
    "Asegurar la calidad del producto de acuerdo con los requerimientos del cliente y normativas legales vigentes. Gestionar el control de cambios y previa autorización las actualizaciones de las fórmulas madre de Fabricación. Preparación de la documentación para trámites regulatorios hasta su emisión",
    requisitos: "Ing. Químico, Bioquímico y Farmacia, Ambiental, Biotecnología, Industrial. Maestría deseable. Experiencia: Mínima de 2 años en cargos similares en el sector industrial. Conocimientos: Conocimiento en temas regulatorios de productos cosméticos, higiénicos, absorbentes, industriales, farmacéuticos, verificación de información técnica e investigación en fuentes técnico-confiables, manejo ISO 9001, 17025, BPM, HACCP, manejo de sitios web gubernamentales y de consulta como ARCSA, INEN, CAN, ECUAPASS, SAE, entre otros. SAP deseable, control estadístico de variables críticas de proceso, Excel avanzado, ingles medio. Competencias: enfoque al cliente, mejora continua e innovación, trabajo en equipo, iniciativa, orientación a resultados, transparencia.",
  },

  {
    id: 3,
titulo: "Analista Senior Gestión de la Calidad",
descripcion:
  "Dar soporte técnico para la resolución de problemas reportados en cualquier etapa del proceso productivo. Dar soporte en la programación y realizar el seguimiento a homologaciones, la actualización de la documentación técnica de control para los materiales receptados -Analizar, gestionar y solventar las desviaciones detectadas en el producto en proceso y en el producto terminado. Programar, gestionar y realizar el seguimiento de ensayos de laboratorio ligados a cumplimiento normativo INEN. Programar y gestionar todas las actividades relacionadas con Metrología.",
requisitos:
    " Ing. Químico, Bioquímico y Farmacia, Ambiental, Biotecnología, Industrial. Maestría deseable. Experiencia: Mínima de 3 años en cargos similares en el sector industrial. Conocimientos: Conocimiento de herramientas para la optimización de recursos y procesos. Conocimiento gestión por procesos, Inglés Avanzado, Metrología, técnicas de muestreo y de análisis de Materiales y de Producto Terminado, control estadístico de variables críticas de proceso, Herramientas estadísticas, Manejo de Sistemas de Gestión como: ISO 9001, 14000, 17025, BPM, HACCP, Manejo de sitios web como: ARCSA, INEN, CAN, ECUAPASS, SAE, entre otros. Conocimiento en ensayos químicos analíticos cuantitativos. Competencias: enfoque al cliente, mejora continua e innovación, trabajo en equipo, iniciativa, orientación a resultados, transparencia, liderazgo, pensamiento analítico.",

},

{
id: 4,
titulo: "Ejecutivo de Ventas",
descripcion:
  "Lograr las metas establecidas en Ventas, así como la rentabilidad. Atender las necesidades del cliente. Lograr la satisfacción del cliente. Promover las ordenes de compras de sus clientes, hasta asegurar el despacho y entrega total de los mismos. ",
  requisitos: "Ing. Comercial. Experiencia: Mínima de 2 años en cargos similares, de preferencia en canales de distribución. Residir en la ciudad de Quito. Indispensable tener vehículo propio (disponibilidad para viajar fuera de la ciudad). Competencias: Trabajo en equipo, apertura a retroalimentación, orientación al logro, recursividad, competencias digitales, capacitador, conocimiento financiero, comunicación efectiva. Conocimientos: SAP, Microsoft office, Excel intermedio, manejo de redes sociales. ",
},

{
  id: 5,
  titulo: "Auxiliar en Mantenimiento ",
  descripcion:
    "Realizar una revisión general, verificando que las máquinas y equipos se encuentren trabajando en óptimas condiciones. Realizar los mantenimientos preventivos en equipos y máquinas según Cronograma de Mantenimiento. Tener los repuestos, materiales e insumos necesarios, previamente antes de realizar la actividad de mantenimiento. Realizar el cronograma de mantenimiento Preventivo. Solicitar cotizaciones de trabajos, materiales, equipos o repuestos necesarios para la realización de su trabajo.",
    requisitos: " Bachiller técnico en mecánica, electricidad, mantenimiento industrial, electromecánico. Experiencia: Mínimo un año en cargos similares. Residir en la ciudad de Quito. Competencias: Trabajo en equipo, trabajo a presión, iniciativa, proactividad, orientación al resultado. Otros conocimientos: Office, autocad, internet, básicos de electricidad, conocimientos de normas de seguridad industrial, operación de maquinaria industrial.",
  }


]

export default function Named ({location})  {

  return(



  <Layout location={location} crumbLabel="Trabaja con Nosotros"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>
    <PictureWebp className="object-contain" filename="trabaja-con-nosotros" description="trabaja en Unilimpio"/>


    <section id="intro" class="bg-white mt-0">
  <div class="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-5xl font-semibold text-blue ">Trabaja con Nosotros </h1>
      <p class="mt-4 text-xl text-gray-700 mb-0">Eres una persona orientada a resultados y te apasionan los retos? Entonces, te estamos buscando. ¡Nos encantaría que formes parte de nuestra familia Unilennials! <br/>En este espacio encontrarás todas las oportunidades laborables que tenemos en Unilimpio. *Aplica únicamente si cumples con todos los requisitos.
  </p>
    </div>
    </div>
</section>

<section id="vacantes" className="bg-gray-50 pt-0">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl text-center font-bold text-blue-500">Oportunidades laborables</h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-400">
            {jobs.map((job) => (
              <div key={job.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-lg text-left font-bold text-primary md:col-span-5">{job.titulo}</dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-700">
                    <span className="font-bold text-secondary">Descripción:<br/> </span>{job.descripcion} <br/>
                    <span className="font-bold text-secondary">Requisitos:<br/></span>{job.requisitos} <br/>
                    <span className="text-primary text-lg text-extrabold">Si te interesa aplicar a este puesto, envía tu hoja de vida y una carta de motivación al correo talentohumano@unilimpio.com</span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>



  </Layout>
)}
