const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Created by Arif Hussain - An AI-native interactive textbook for learning Physical AI and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // GitHub Pages configuration
  url: 'https://arifhusssain001.github.io',
  baseUrl: '/physical-ai-textbook/',
  
  organizationName: 'arifhusssain001',
  projectName: 'physical-ai-textbook',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/arifhusssain001/physical-ai-textbook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/arifhusssain001/physical-ai-textbook/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Course',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/arifhusssain001/physical-ai-textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'Hardware Requirements',
              to: '/docs/hardware-requirements',
            },
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'ROS 2 Fundamentals',
              to: '/docs/module-1/introduction',
            },
            {
              label: 'Hardware Requirements',
              to: '/docs/hardware-requirements',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/arifhusssain001/physical-ai-textbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arif Hussain. Physical AI Textbook Platform - Built for Panaversity Hackathon.`,
    },
  },
};

module.exports = config;