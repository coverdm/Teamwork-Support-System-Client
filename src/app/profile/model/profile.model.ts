import { Name } from "./name.model";
import { Avatar } from "./avatar.model";
import { Skill } from "./skill.model";
import { Contact } from "./contact.model";
import { Nationality } from "./nationality.model";
import { PrefferedRole } from "./preffered-role.model";

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
