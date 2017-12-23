import { Injectable } from '@angular/core';

@Injectable()
export class RepositoryParserService {

  constructor() { }

  hostings = [
    {
      canonicalName : 'Github',
      fullName: 'https://github.com',
      imgLink : 'https://ipatryk.pl/wp-content/uploads/2017/06/github.png'
    },
    {
      canonicalName : 'GitLab',
      fullName: 'https://gitlab.com',
      imgLink : 'https://kanbanize.com/blog/wp-content/uploads/2017/03/gitlab.png'
    },
    {
      canonicalName : 'BitBucked',
      fullName: 'https://bitbucked.com',
      imgLink : 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAgeAAAAJDVlMGIwNTk5LTEzYWQtNGQzMC1iMTQ1LWVlMmEzYjI1ZDNjNw.png'
    }
  ];

  identify(link: string) {

    for (let i = 0; i < this.hostings.length; i++) {

      if (link.indexOf(this.hostings[i].fullName) !== -1) {
        return this.hostings[i];
      }

    }
    return {canonicalName: '', fullName: '', imgLink: ''};
  }

}
