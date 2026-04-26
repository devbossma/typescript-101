import { randomUUID, type UUID } from "crypto";
import { checkNotEmty } from "../utils/Strings.js";
import Password from "../utils/Password.js";


class User {
    private readonly _id: UUID = randomUUID();
    private constructor(
        private _userName: string,
        private _email: string,
        private _password: string
    ) { }

    get useNname(): string { return this._userName }
    get email(): string { return this._email }
    get password(): string { return this._password }
    get id(): string { return this._id.toString() }

    set name(newName: string) { if (checkNotEmty(newName)) { this._userName = newName } }
    set email(email: string) { if (checkNotEmty(email)) { this._email = email } }

    public static async create(name: string, email: string, rawPw: string): Promise<User> {

        const hashedPassword = await Password.hashPassword(rawPw);

        return new User(name, email, hashedPassword);
    }
}

export default User;