import Task from "../models/task.model";
import * as TaskRepo from "../repositories/task.repo";

export let getTask = async (req, res, next) => {
  console.log(req);

  try {
    const task = await TaskRepo.getTaskAll();
    if (task) {
      res.status(200).send({
        status: "success",
        data: task,
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

export let getOneTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.find({ _id: id }).populate("projectId memberId");
    if (task) {
      res.status(200).send({
        status: "success",
        data: task,
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

export let addTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    if (task) {
      await task.save();
      res.status(200).send({
        status: "success",
        data: task,
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

export let updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = req.body;
    await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: task,
      }
    )
      .exec()
      .then(() => {
        res.status(200).send({
          status: "success",
          data: task,
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

export let deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndRemove({ _id: id })
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
