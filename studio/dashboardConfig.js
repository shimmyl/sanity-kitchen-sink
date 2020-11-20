export default {
  widgets: [
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
                  buildHookId: '5fb73b2db792ce47045dd1a0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zr3ymkr9',
                  apiId: 'c414ae39-4005-459c-a57f-51042592d62d'
                },
                {
                  buildHookId: '5fb73b2d1a84e349f9685615',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yi1rmz5d',
                  apiId: 'f9f5f886-8664-4879-bb88-e92923391be0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shimmyl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yi1rmz5d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
