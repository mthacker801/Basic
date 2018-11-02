export class Database {
    server: string;
    user: string;
    password: string;
    value: string;
    version: string;

constructor(
        server: string,
        user: string,
        password: string,
        value: string,
        version: string) {
            this.server = server;
            this.user = user;
            this.password = password;
            this.value = value;
            this.version = version;
        }
}
