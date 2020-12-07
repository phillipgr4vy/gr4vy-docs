module.exports = {
  title: 'Gr4vy Developer Documentation',
  tagline: 'Get started with the cloud payment orchestration platform',
  url: 'https://developer.gr4vy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'gr4vy',
  projectName: 'developer-documentation',
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700",
    "/css/code-block-buttons.css"
  ],
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
        { to: 'reference', label: 'API Reference', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/gr4vy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'guides/',
            },
            {
              label: 'Second Doc',
              to: 'guides/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
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
            'https://github.com/gr4vy/developer-documentation/edit/main/guides',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/gr4vy/developer-documentation/edit/main/blog/',
        },
        theme: {
          colorMode: {
            disableSwitch: true,
          },
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
