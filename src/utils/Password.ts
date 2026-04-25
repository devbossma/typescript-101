import bcrypt from "bcrypt";
class Password {
    private static readonly saltRounds: number = 12;
    public static hashPassword(pw: string): Promise<string> {
        return bcrypt.hash(pw, this.saltRounds)
    }
    public static async checkPassword(inputPassword: string, storedHash: string): Promise<boolean> {

        return await bcrypt.compare(inputPassword, storedHash)
    }
}

export default Password
