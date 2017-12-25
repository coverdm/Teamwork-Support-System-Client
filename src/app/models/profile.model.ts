export class Profile {

    private name: Name;
    private avatar: Avatar;
    private skills: Array<Skill>;
    private contact: Contact;

    constructor($name: Name, $avatar: Avatar, $skills: Array<Skill>, $contact: Contact) {
        this.name = $name;
        this.avatar = $avatar;
        this.skills = $skills;
        this.contact = $contact;
    }

    public get $name(): Name {
        return this.name;
    }

    public set $name(value: Name) {
        this.name = value;
    }

    public get $avatar(): Avatar {
        return this.avatar;
    }

    public set $avatar(value: Avatar) {
        this.avatar = value;
    }

    public get $skills(): Array<Skill> {
        return this.skills;
    }

    public set $skills(value: Array<Skill>) {
        this.skills = value;
    }

    public get $contact(): Contact {
        return this.contact;
    }

    public set $contact(value: Contact) {
        this.contact = value;
    }
}

class Name {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public get $firstName(): string {
        return this.firstName;
    }

    public set $firstName(value: string) {
        this.firstName = value;
    }

    public get $lastName(): string {
        return this.lastName;
    }

    public set $lastName(value: string) {
        this.lastName = value;
    }


}

class Avatar {

    private url: string;

    constructor($url: string) {
        this.url = $url;
    }
    public get $url(): string {
        return this.url;
    }
    public set $url(value: string) {
        this.url = value;
    }

}

class Skill {

    private name: string;

    constructor($name: string) {
        this.name = $name;
    }

    public get $name(): string {
        return this.name;
    }
    public set $name(value: string) {
        this.name = value;
    }

}

class Contact {

    private email: string;

    constructor($email: string) {
        this.email = $email;
    }

    public set $email(email: string) {
        this.email = email;
    }

    public get $email(){
        return this.email;
    }
}
