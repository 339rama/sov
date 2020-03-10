const db = require('../db.js');

module.exports = class Candidate {
    constructor(phone, email, letter){
        this.phone = phone;
        this.email = email;
        this.letter = letter;
    }
    async save(){
        const sql = 'INSERT INTO candidates (phone, email, letter) VALUES (?, ?, ?)';
        const candidate = [this.phone, this.mail, this.letter];
        await db.query(sql, candidate);
    }

    static async findOne(phone){
        const sql = 'SELECT phone FROM candidates WHERE phone=?';
        const filter = [phone];
        const candidate = await db.query(sql, filter);
        return candidate[0];
    }
}