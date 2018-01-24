import { Contact } from '@models/contact.model.ts';
import { Name } from '@models/profile.model';

export class Worker {

    workerId: WorkerId;
    name: Name;
    project_role: string;
    avatar_url: string;

    constructor($workerId: WorkerId, name: Name, $project_role: string, $avatar_url: string) {
        this.project_role = $project_role;
        this.avatar_url = $avatar_url;
        this.workerId = $workerId;
        this.name = name;
    }
}

export class WorkerId{
    workerId: string;
    constructor(workerId: string) {
        this.workerId = workerId;
    }
}
