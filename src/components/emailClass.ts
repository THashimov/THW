class EmailClass {
    userName: string;
    userEmail: string;
    userPhone: string;
    message: string;

    constructor (
        userName: string,
        userEmail: string,
        userPhone: string,
        message: string
    ) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
        this.message = message
    }
}

export default EmailClass;