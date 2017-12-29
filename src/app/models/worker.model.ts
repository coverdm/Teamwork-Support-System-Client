import { Contact } from '@models/contact.model.ts';
import { Name } from '@models/profile.model';

export class Worker {

    id: string;
    name: Name;
    project_role: string;
    avatar_url: string;

    constructor($id: string, name: Name, $project_role: string, $avatar_url: string) {
        this.project_role = $project_role;
        this.avatar_url = $avatar_url;
        this.id = $id;
        this.name = name;
    }
}
