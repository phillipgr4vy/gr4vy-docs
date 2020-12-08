const path = require('path')

module.exports = {
  title: 'Gr4vy Developer Documentation',
  tagline: 'Get started with the cloud payment orchestration platform',
  url: 'https://developer.gr4vy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'gr4vy',
  projectName: 'gr4vy-developer-documentation',
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Gr4vy',
      logo: {
        alt: 'Gr4vy Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'guides/',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'reference',
          label: 'API Reference',
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Style Guide',
              to: 'guides/',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'NPM',
              href: 'https://twitter.com/gr4vy',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gr4vy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/gr4vypop',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gr4vy, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'guides',
          routeBasePath: 'guides',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/gr4vy/gr4vy-developer-documentation/edit/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/gr4vy/gr4vy-developer-documentation/edit/main/',
        // },
        theme: {
          colorMode: {
            disableSwitch: true,
          },
          customCss: require.resolve('./src/css/custom.css'),
        },
        stylesheets: [
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700",
          "/css/code-block-buttons.css"
        ],
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, 'plugins', 'webpack-buffer-polyfill')
  ],
};