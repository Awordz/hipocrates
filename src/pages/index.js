import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Saber comunicar</h1>
        <p className="hero__subtitle">
          La comunicación en el dominio médico es clave. A pesar de la
          generalización de las Medical Humanities y la comunicación centrada en
          el paciente de los 2000, los géneros médicos continúan teniendo muchas
          carencias de comprensibilidad.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docs 📘📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function Gentt() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="gentt">
      <div className="imagen">
        <img className="responsive" src="./img/doc.png"></img>
      </div>

      <div className="text">
        <div className="pre-title">ACERCA DEL PROYECTO</div>
        <div className="title">¿Qué es HIPÓCRATES?</div>
        <div className="subtitle">
          Es un proyecto de GENTT que tiene el objetivo de formar en
          comunicación a los profesionales médicos, así como a los redactores y
          traductores médicos para que se adecuen a las normas textuales,
          cognitivas y sociales que regulan los géneros para pacientes y poder
          responder adecuadamente a sus necesidades. Esto es especialmente
          relevante en géneros dirigidos a pacientes, como el Consentimiento
          Informado (CI), objetivo rector de HIPÓCRATES
        </div>
        <button className="boton-home" onClick={()=>{window.open("http://www.gentt.uji.es/","_blank","","")}}>El grupo GENTT</button>
      </div>
    </div>
  );
}

function Grupos() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="grupos">
      <div className="titulo-home">Grupos de trabajo</div>
      <div className="titulo-row">El consentimiento informado como producto</div>
      <div className="grupos__row azul">
        <div className="grupos_grupo">
          <a  className="link-grupo" href="/docs/category/gt-textual"><div className="grupo_imagen">
            <img src="./img/textual_icono.png"></img>
          </div>
          <div className="grupo__nombre">Textual</div>
          <div className="grupo___descripcion">Los CI en España presentan problemas de comprensibilidad. El GT textual ha trabajado en recomendaciones de redacción y formato de los CI, así como en la elaboración de modelos optimizados.</div>
        </a></div>

       <a  className="link-grupo" href="/docs/category/gt-legal">
          <div className="grupos_grupo">
            <div className="grupo_imagen">
              <img src="./img/legal_icono.png"></img>
            </div>
            <div className="grupo__nombre">Legal</div>
            <div className="grupo___descripcion">Análisis de las diferentes legislaciones sobre CI a nivel autonómico y nacional desde diferentes puntos de vista: documentación clínica, general y sobre cuestiones LGTBI+.</div>
          </div>
       </a>

      </div>
      <div className="titulo-row">El consentimiento informado como servicio</div>
      <div className="grupos__row rosa">
        <a  className="link-grupo" href="/docs/category/gt-did%C3%A1ctico">
          <div className="grupos_grupo">
            <div className="grupo_imagen">
              <img src="./img/didactico_icono.png"></img>
            </div>
            <div className="grupo__nombre">Didáctico</div>
            <div className="grupo___descripcion">La formación sobre CI es clave en el entorno actual de las «Medical Humanities» y, por tanto, se ha hecho hincapié en la mejora de la formación y de la transmisión de conocimientos sobre CI.</div>
          </div>
        </a>

        <a className="link-grupo" href="/docs/category/gt-profesional">
          <div className="grupos_grupo">
            <div className="grupo_imagen">
              <img src="./img/profesional_icono.png"></img>
            </div>
            <div className="grupo__nombre">Profesional</div>
            <div className="grupo___descripcion">Trabajo con los profesionales sanitarios que están en primera línea y hacen uso real de los CI: médicas y enfermeras. ¿Cómo utilizan los CI? ¿Qué uso hacen de los CI?</div>
          </div>
        </a>
        
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <Gentt />
      <main>
        
        <Grupos />
      </main>
    </Layout>
  );
}
