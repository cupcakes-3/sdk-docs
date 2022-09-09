import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cd5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '88b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cdd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '906'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c0c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bf2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'dc6'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f60'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '9a3'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5d7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '98a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e85'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '1fa'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '353'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9f9'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'c54'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '866'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a4d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8ef'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c03'),
    routes: [
      {
        path: '/docs/bundle-transactions',
        component: ComponentCreator('/docs/bundle-transactions', '1db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/sdk-reference',
        component: ComponentCreator('/docs/category/sdk-reference', '409'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/gassless-experience',
        component: ComponentCreator('/docs/gassless-experience', '38c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sdk-reference/manage-docs-versions',
        component: ComponentCreator('/docs/sdk-reference/manage-docs-versions', '72c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sdk-reference/translate-your-site',
        component: ComponentCreator('/docs/sdk-reference/translate-your-site', 'b89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallets',
        component: ComponentCreator('/docs/wallets', '25e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '5c9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
