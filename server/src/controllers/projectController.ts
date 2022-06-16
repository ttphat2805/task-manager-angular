import Member from "../models/member.model";
import Project from "../models/project.model";
import Task from "../models/task.model";
import * as ProjectRepo from "../repositories/project.repo";

export let getProject = async (req, res, next) => {
  try {
    const project = await ProjectRepo.getProjectAll();

    if (project) {
      res.status(200).send({
        status: "success",
        data: project,
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
export let getOneProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await Project.findOne({ _id: id }).populate("leader").populate("member");
    if (project) {
      res.status(200).send({
        status: "success",
        data: project,
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

export let addProject = async (req, res, next) => {
  try {
    const project = new Project(req.body);
    if (project) {
      await project.save();
      res.status(200).send({
        status: "success",
        data: project,
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

export let updateProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = req.body;
    await Project.findOneAndUpdate(
      { _id: id },
      {
        $set: project,
      }
    )
      .exec()
      .then(() => {
        res.status(200).send({
          status: "success",
          data: project,
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

export let deleteProject = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Project.findByIdAndRemove({ _id: id })
      .then((data) => {
        Task.deleteMany({ projectId: data._id }).then(() => {
          res.status(200).send({
            status: "success",
          });
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
