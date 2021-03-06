export class Database {
    server: string;
    user: string;
    password: string;
    database: string;
    version: string;

constructor(
        server: string,
        user: string,
        password: string,
        database: string,
        version: string) {
            this.server = server;
            this.user = user;
            this.password = password;
            this.database = database;
            this.version = version;
        }
}
