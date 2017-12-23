export class User {

    private id: number;
    private firstName: string;
    private lastName: string;
    private preffered_role: string;
    private skills: string;
    private contact: number;
    private email: string;

    constructor($id: number, $firstName: string, $lastName: string,
        $preffered_role: string, $skills: string, $contact: number, $email: string) {
        this.id = $id;
        this.firstName = $firstName;
        this.lastName = $lastName;
        this.preffered_role = $preffered_role;
        this.skills = $skills;
        this.contact = $contact;
        this.email = $email;
    }
}
