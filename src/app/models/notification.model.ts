export class Notification{

    type: string;
    text: string;
    link: string;
    userId: string;

    constructor(type: string, text: string, link: string, userId: string) {
        this.type = type;
        this.text = text;
        this.link = link;
        this.userId = userId;
    }

}