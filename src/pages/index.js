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
        <h1 className="hero__title">
          Humanizar la comunicación médico-sanitaria
        </h1>
        <p className="hero__subtitle">
        This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing 
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/textual/gt-textual-introduccion"
          >
            Ver resultados 📘📚
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
          Es un proyecto del grupo de investigación GENTT con el objetivo de
          mejorar la comunicación en el contexto médico-sanitario, generar
          materiales y recursos para diferentes colectivos, desde el personal
          sanitario a los redactores y traductores e intérpretes médicos.<br/><br/>
          Revisamos las normas textuales, cognitivas y sociales que regulan los
          géneros para pacientes para responder adecuadamente a las necesidades
          de pacientes y personal médico-sanitario. En el proyecto, nos hemos
          centrado en la investigación en el Consentimiento Informado (CI) como
          acto de comunicación oral y escrita.
        </div>
        <button
          className="boton-home"
          onClick={() => {
            window.open("http://www.gentt.uji.es/", "_blank", "", "");
          }}
        >
          El grupo GENTT
        </button>
      </div>
    </div>
  );
}

function Grupos() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="grupos">
      <div className="titulo-home">Perspectivas de análisis</div>
      <div className="titulo-row">
        El consentimiento informado como producto
      </div>
      <div className="grupos__row azul">
        <div className="grupos_grupo">
          <a className="link-grupo" href="/docs/textual/gt-textual-introduccion">
            <div className="grupo_imagen">
              <img src="./img/textual_icono.png"></img>
            </div>
            <div className="grupo__nombre">Aspectos textuales</div>
            <div className="grupo___descripcion">
            El CI presenta importantes problemas de comprensibilidad. Desde esta perspectiva hemos desarrollado una herramienta de análisis textual, con la que hemos analizado un corpus de CI en español, catalán e inglés. Este análisis nos ha permitido identificar los elementos lingüístico-textuales que dificultan la comprensión, proponer modelos optimizados con distintos niveles de complejidad tanto en formato tradicional como digital (e-consent). 

            </div>
          </a>
        </div>

        <a className="link-grupo" href="/docs/category/marco-legal">
          <div className="grupos_grupo">
            <div className="grupo_imagen">
              <img src="./img/legal_icono.png"></img>
            </div>
            <div className="grupo__nombre">Marco legal</div>
            <div className="grupo___descripcion">
            Desde el punto de vista jurídico hemos recopilado y analizado la legislación aplicable al CI en España, tanto en el ámbito autonómico como estatal y en el plano internacional: leyes generales de salud y documentación clínica, últimas voluntades, derechos LGTBI+, etc.

            </div>
          </div>
        </a>
      </div>
      <div className="titulo-row">
        El consentimiento informado como servicio
      </div>
      <div className="grupos__row rosa">
        <a className="link-grupo" href="http://localhost:3000/docs/category/orientaciones-pedag%C3%B3gicas">
          <div className="grupos_grupo">
            <div className="grupo_imagen">
              <img src="./img/didactico_icono.png"></img>
            </div>
            <div className="grupo__nombre">Orientaciones pedagógicas</div>
            <div className="grupo___descripcion">This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing This text is missing 
            </div>
          </div>
        </a>

        <a className="link-grupo" href="/docs/category/perspectiva-socioprofesional">
          <div className="grupos_grupo">
            <div className="grupo_imagen">
              <img src="./img/profesional_icono.png"></img>
            </div>
            <div className="grupo__nombre">Perspectiva socioprofesional</div>
            <div className="grupo___descripcion">
            La implicación de los profesionales sanitarios es fundamental para entender las condiciones reales de la comunicación y mejorarla. Desde esta perspectiva, hemos analizado las percepciones del personal de medicina y enfermería en cuanto a la administración del Consentimiento Informado (CI). 

            </div>
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
      description="HIPÓCRATES::un proyecto del grupo de investigación GENTT "
    >
      <HomepageHeader />
      <Gentt />
      <main>
        <Grupos />
      </main>
    </Layout>
  );
}
