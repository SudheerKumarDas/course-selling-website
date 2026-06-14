import jwt from "jsonwebtoken"

export const generateToken = async (id) => {
    const token = await jwt.sign(
        {
            id:id
        }
        ,   process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )
    return token;
}