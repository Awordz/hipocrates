// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hipócrates :: un proyécto de GENTT",
  tagline: "Es un proyecto del grupo de investigación GENTT con el objetivo de mejorar la comunicación en el contexto médico-sanitariours are cool",
  url: "https://hipocrates.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png?v=2",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',

      navbar: {
        title: "",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "textual/gt-textual-introduccion",
            position: "left",
            label: "Ver resultados",
          },

          // {
          //   type: "doc",
          //   docId: "GT Textual/gt-textual-prototipo",
          //   position: "left",
          //   label: "Corpus",
          // },

          {
            to: "/guia-buenas-practicas",
            position: "left",
            label: "Guía de buenas prácticas",
            className: "menu-destacado",
          },

          

          {
            href: "http://www.gentt.uji.es/",
            label: "GENTT",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title:" ",
            items: [
              
              {
                html: `<img src="/img/invertido.svg">`,
              },
            ],
          },

          {
            title: "Enlaces a sitios destacados",
            items: [
              {

                html: `<hr class="raya-footer">`,
              },
              {
                label: "Hipócrates. Sobre este sitio",
                to: "/docs/intro",
              },

              {
                label: "Mini manual de Markdown©",
                to: "/docs/intro",
              },
              {
                label: "Guía de buenas prácticas",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contacta con nosotros ",
            items: [
              {

                html: `<hr class="raya-footer">`,
              },
              {
                label: "UJI Universitat Jaume I ",
                href: "https://www.uji.es/",
              },
              {
                label: "GENTT",
                href: "http://www.gentt.uji.es/",
              },
              {
                label: "gentt@uji.es",
                href: "mailto:gentt@uji.es",
              },
            ],
          },
          {
            title: "Proyecto financiado por",
            items: [
              {

                html: `<hr class="raya-footer">`,
              },
              {

                html: `<img src="/img/logo-ministeri.png">`,
              },
              
              
            ],
          },
        ],
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   src: 'img/meta_oss_logo.png',
        //   href: 'https://opensource.fb.com',
        //   width: 160,
        //   height: 51,
        // },
        copyright: `© ${new Date().getFullYear()} Hipócrates GENTT| Aviso legal y politica de privacidad | Política de cookies | Diseño y programación: Awordz LTD`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
};

module.exports = config;
