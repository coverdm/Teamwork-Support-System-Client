export class DialogProperties {
    title: string;
    message: string;
    showLoader: boolean;
    isError: boolean;
    openDialog: boolean;

    constructor(title: string){
        this.title = title;
    }

}