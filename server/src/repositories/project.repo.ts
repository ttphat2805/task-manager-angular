import { NextFunction, Request, Response } from "express";
import Project from "../models/project.model";

export let getProjectAll = () => {
    return Project.find().populate("member").populate("leader");
};
