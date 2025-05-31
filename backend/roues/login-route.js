import UserSchema from '../models/id-pass.js';

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await UserSchema.create({
        username: username,
        password: password
    });

    res.status(201).json({
        message: "User created successfully",
        user: {
            id: user._id,
            username: user.username,
            password: user.password
        },
    });
}

export default login;