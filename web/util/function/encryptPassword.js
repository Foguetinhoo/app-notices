import bcrypto from 'bcrypt'

const hashPassword = async pass => await bcrypto.hash(pass, 12);

const comparePassword = async (hash,pass) => await bcrypto.compare(hash,pass)
export {hashPassword,comparePassword}
