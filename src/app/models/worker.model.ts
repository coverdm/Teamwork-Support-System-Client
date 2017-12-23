import { Contact } from '@models/contact.model.ts';

export class Worker {

    private id: number;
    private firstName: string;
    private lastName: string;
    private project_role: string;
    private avatar_url: string;
    private preffered_roles: string[];
    private skills: string[];
    private contact: Contact;
    private email: string;


    constructor($id: number, $firstName: string, $lastName: string, 
            $project_role: string, $avatar_url: string, $preffered_roles: string[], 
            $skills: string[], $contact: Contact, $email: string) {
        this.id = $id;
        this.firstName = $firstName;
        this.lastName = $lastName;
        this.project_role = $project_role;
        this.avatar_url = $avatar_url;
        this.preffered_roles = $preffered_roles;
        this.skills = $skills;
        this.contact = $contact;
        this.email = $email;
    }


    public get $id(): number {
        return this.id;
    }


    public get $firstName(): string {
        return this.firstName;
    }

    public get $lastName(): string {
        return this.lastName;
    }

    public get $project_role(): string {
        return this.project_role;
    }

    public get $avatar_url(): string {
        return this.avatar_url;
    }


    public get $preffered_roles(): string[] {
        return this.preffered_roles;
    }

    public get $skills(): string[] {
        return this.skills;
    }

    public get $contact(): Contact {
        return this.contact;
    }

    public get $email(): string {
        return this.email;
    }


}
