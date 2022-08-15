import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// camion esta es un aprueba de spell 
const FeatureList = [
  {
    title: 'Textual',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Los CI en España presentan problemas de comprensibilidad. El GT textual ha trabajado en recomendaciones de redacción y formato de los CI, así como en la elaboración de modelos optimizados.
      </>
    ),
  },
  {
    title: 'Legal',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Análisis de las diferentes legislaciones sobre CI a nivel autonómico y nacional desde diferentes puntos de vista: documentación clínica, general y sobre cuestiones LGTBI+.
      </>
    ),
  },
  {
    title: 'Didactico',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La formación sobre CI es clave en el entorno actual de las «Medical Humanities» y, por tanto, se ha hecho hincapié en la mejora de la formación y de la transmisión de conocimientos sobre CI.
      </>
    ),
  },
  {
    title: 'Profesional',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Trabajo con los profesionales sanitarios que están en primera línea y hacen uso real de los CI: médicas y enfermeras. ¿Cómo utilizan los CI? ¿Qué uso hacen de los CI?
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        lll
      </div>
    </section>
  );
}
