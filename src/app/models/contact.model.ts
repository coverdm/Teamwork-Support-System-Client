export class Contact {
    private phone: number;
    private skype: string;

    constructor($phone: number, $skype: string) {
        this.phone = $phone;
        this.skype = $skype;
    }

    public get $phone(): number {
        return this.phone;
    }

    public get $skype(): string {
        return this.skype;
    }

}
