import { Name } from "./name.model";

export class MinProfile {
    name: Name;
    avatar: any;

    constructor(name: Name, avatar: any) {
        this.name = name;
        this.avatar = avatar;
    }
}
