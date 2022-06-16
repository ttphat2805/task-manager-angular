import Member from "../models/member.model";
import * as common from "../utils/common.util";
import * as jwtUtil from "../utils/jwt.util";

export let addMember = async (req, res, next) => {
  try {
    const member = new Member(req.body);
    if (member) {
      await member.save();
      res.status(200).send({
        status: "success",
        data: member,
      });
    } else {
      res.status(404).send({
        status: "error",
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export let currentUser = async (req, res) => {
  try {
    const data = await Member.findOne({_id: req.body.user._id});
    if (data) {
      res.status(200).json({data: data.role});
    } else {
      res.status(404).send({ status: "bad request"});
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export let getMember = async (req, res, next) => {
  try {
    const member = await Member.find();
    if (member) {
      res.status(200).send({
        status: "success",
        data: member,
      });
    } else {
      res.status(404).send({
        status: "error",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

export let updateMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    const member = req.body;
    console.log(member);
    await Member.findOneAndUpdate(
      { _id: id },
      {
        $set: member,
      }
    )
      .exec()
      .then(() => {
        res.status(200).send({
          status: "success",
          data: member,
        });
      })
      .catch((err) => {
        res.status(404).send({
          status: "error",
        });
      });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export let getOneMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    const member = await Member.findOne({ _id: id });
    if (member) {
      res.status(200).send({
        status: "success",
        data: member,
      });
    } else {
      res.status(404).send({
        status: "error",
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export let login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const data = await Member.findOne({
      email,
    });
    if (data) {
      if (common.comparePassword(data.password, password)) {
        const token = jwtUtil.sign({
          email: data.email,
          _id: data._id,
          role: data.role,
        });
        res.json({
          token,
          status: "Success"
        });
      } else {
        res.json({ status: "Wrong password" });
      }
    } else {
      res.json({ status: "Wrong exist accounts" });
    }
  } catch (err) {
    res.status(404).send("Bugggg");
  }
};

export let register = async (req, res, next) => {
  try {
    const email = req.body.email;
    const count = await Member.findOne({ email });
    if (count) {
      res.send({ status: "email exists" });
    } else {
      const encryptedPassword = common.encryptPassword(req.body.password);
      const member = new Member({
        fullname: req.body.fullname,
        email: req.body.email,
        password: encryptedPassword.hashPassword,
        date: req.body.date,
        area: req.body.area,
        role: req.body.role,
        status: req.body.status,
      });
      if (member) {
        await member.save();
        res.status(200).send({
          status: "success",
          data: member,
        });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export let deleteMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Member.findByIdAndRemove({ _id: id })
      .exec()
      .then(() => {
        res.status(200).send({
          status: "success",
        });
      })
      .catch((err) => {
        res.status(404).send({
          status: "error",
        });
      });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
