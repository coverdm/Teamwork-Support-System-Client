export class Notification{

    type: string;
    text: string;
    link: string;

    constructor(type: string, text: string, link: string) {
        this.type = type;
        this.text = text;
        this.link = link;
    }

}