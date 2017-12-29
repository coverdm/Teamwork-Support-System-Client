import { Worker } from '@models/worker.model';
import { Time } from '@angular/common/src/i18n/locale_data_api';

export class Assignment {

    title: string;
    description: string;
    workers: Worker[];
    taskDifficult: string;
    created: Date;
    deadline: Date;
    status: string;

    constructor(title: string, description: string, workers: Worker[],
                taskDifficult: string, created: Date, deadline: Date, status: string) {
        this.title = title;
        this.description = description;
        this.workers = workers;
        this.taskDifficult = taskDifficult;
        this.created = created;
        this.deadline = deadline;
        this.status = status;
    }
}
