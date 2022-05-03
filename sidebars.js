/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "getting-started/introduction/introduction",
        "getting-started/overview/overview",
        "getting-started/installation/installation",
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [ 
        {
          type: 'category',
          label: 'Authentication',
          items: [
            {
              type: 'category',
              label: 'OpenLDAP',
              items: [
                "tutorials/authentication/openldap/configure-openldap"
              ]
            }  
          ]
        }
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'How-to Guides',
      items: [
        "how-to-guides/api",
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'References',
      items: [
        "references/architecture",
        "references/architecture-recommendations",
        "references/kubernetes-concepts",
      ],
      collapsed: true,
    }
  ]
}
module.exports = sidebars;
