export class Profile {

    profileId: string;
    name: Name;
    avatar: Avatar;
    skills: Array<Skill>;
    contact: Contact;
    nationality: Nationality;
    prefferedRoles: Array<PrefferedRole>;

    constructor(prefferedRoles: Array<PrefferedRole>, name: Name, avatar: Avatar,
        skills: Array<Skill>, contact: Contact, nationality: Nationality, profileId: string) {
        this.name = name;
        this.avatar = avatar;
        this.skills = skills;
        this.contact = contact;
        this.nationality = nationality;
        this.profileId = profileId;
        this.prefferedRoles = prefferedRoles;
    }
}

export class PrefferedRole {
    role: string;
    constructor(role: string) {
        this.role = role;
    }
}

export class Name {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Avatar {

    data: string;

    constructor($url: string) {
        this.data = $url;
    }
}

export class Skill {

    name: string;

    constructor($name: string) {
        this.name = $name;
    }
}

export class Contact {

    skype: string;

    constructor($skype: string) {
        this.skype = $skype;
    }
}

export class Nationality {

    country: string;

    constructor($country: string) {
        this.country = $country;
    }
}

export class MinProfile {
    name: Name;
    avatar: any;

    constructor(name: Name, avatar: any) {
        this.name = name;
        this.avatar = avatar;
    }
}
