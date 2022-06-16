import Task from "../models/task.model";

export let getTaskAll = () => {
    return Task.find().populate("projectId memberId");
};
