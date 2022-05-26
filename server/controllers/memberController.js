const Member = require("../models/member");

exports.addMember = async (req, res, next) => {
        try {
            let member = new Member(req.body)

            await member.save()

            res.send(member);
        }
        catch (err){
            console.log(err);
            res.status(404).send('Bugggg')
        }
}


exports.getMember = async (req, res, next) => {
    try {
        let member = await Member.find()
        res.send(member);
    }
    catch (err){
        console.log(err);
        res.status(404).send('Bugggg')
    }
}

exports.login = async (req, res, next) => {
    try {
        let member = new Member(req.body)
        const data = await Member.findOne({ email: member.email, password: member.password })
        if (data) {
            res.send(data);
        } else {
            res.json({
                type:'fail',
                message:'Tài khoản hoặc mật khẩu không tồn tại'
            });
        }
    }
    catch (err){
        console.log(err);
        res.status(404).send('Bugggg')
    }
}
