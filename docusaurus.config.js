module.exports = {
  title: 'Selltxt',
  tagline: 'Quick Start Guide',
  url: 'https://selltxtwebappdev.azurewebsites.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo-icon.png',
  organizationName: 'MaryJJ', // Usually your GitHub org/user name.
  projectName: 'SelltxtDoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Selltxt',
      logo: {
        alt: 'Selltxt Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} NTSprint, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://dev.azure.com/NTS-Selltxt/Selltxt/_git/SelltxtDoc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://dev.azure.com/NTS-Selltxt/Selltxt/_git/SelltxtDoc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
