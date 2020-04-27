export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea6cb18a4028d56df38cede',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e6wi3r6x',
                  apiId: '6facd89d-52e0-431f-aac2-42b4a3a291ed'
                },
                {
                  buildHookId: '5ea6cb182e556c10c9a8ed40',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-372zw6w3',
                  apiId: 'd3cab950-b346-4ddc-8317-805493d9f968'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidvr78/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-372zw6w3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
