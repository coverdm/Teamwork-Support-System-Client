import { Injectable } from '@angular/core';
import { Worker } from '@models/worker.model';
import { Contact } from '@models/contact.model';

@Injectable()
export class WorkersFinderService {

  avatar_url = '../../../assets/avatar.png';
  avatar_woman_1 =  '../../../assets/avatar9.jpg';
  avatar_man_1 =  '../../../assets/avatar4.jpg';
  avatar_man_2 =  '../../../assets/avatar5.png';
  avatar_man_3 =  '../../../assets/avatar6.jpg';

    workers: Array<Worker> = [
      new Worker(1, 'Dawid', 'Matuszak', 'Project Manager', this.avatar_url,
        ['Project Manager', 'Senior Java Developer'], ['Spring', 'Hibernate', 'JPA'],
        new Contact(null, null), 'dawid_matuszak@outlook.com'),

      new Worker(1, 'Mateusz', 'Stanek', 'Team Leader', this.avatar_man_1,
        ['Project Manager', 'Senior Java Developer'], ['.NET', 'Angular', 'HTML5'],
        new Contact(null, null), 'mateusz_stanek@gmail.com'),

      new Worker(1, 'Klaudia', 'Januszka', 'Python Developer', this.avatar_woman_1,
        ['Project Manager', 'Senior Java Developer'], ['Python API', 'CSS', 'Photoshop'],
        new Contact(null, null), 'klaudia_januszka@buziaczek.pl'),

      new Worker(1, 'Marcin', 'Tatus', 'Javascript Developer', this.avatar_man_2,
        ['Project Manager', 'Senior Java Developer'], ['Angular', 'React', 'HTML5', 'CSS3'],
        new Contact(null, null), 'marcin_tatus@onet.pl'),

      new Worker(1, 'Michal', 'Golabek', 'Graphics Designer', this.avatar_man_3,
        ['Project Manager', 'Senior Java Developer'], ['Photoshop', 'InDesign', 'Ilustrator', 'Adobe Mouse'],
        new Contact(null, null), 'michal_golabek@kurnik.pl')
    ];

  constructor() { }

  public find(email: string): Worker {

    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i].$email === email) {
        return this.workers[i];
      }
    }

    return null;
  }

}
