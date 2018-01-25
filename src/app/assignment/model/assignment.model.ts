import { Time } from '@angular/common/src/i18n/locale_data_api';

export class Assignment {

    assignmentId: string;
    title: string;
    description: string;
    workers: Array<string>;
    difficult: string;
    created: number;
    deadline: number;
    status: string;

    constructor(assignmentId: string, title: string, description: string, workers: Array<string>,
                difficult: string, created: number, deadline: number, status: string) {
        this.assignmentId = assignmentId;
        this.title = title;
        this.description = description;
        this.workers = workers;
        this.difficult = difficult;
        this.created = created;
        this.deadline = deadline;
        this.status = status;
    }
}
