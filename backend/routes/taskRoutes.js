import express from "express";
import auth from "../middleware/auth.js";
import Task from "../models/Task.js";

const router = express.Router();

router.post("/", auth, async(req,res)=>{
  const task = await Task.create({ ...req.body,user:req.user.id });
  res.json(task);
});

router.get("/", auth, async(req,res)=>{
  const tasks = await Task.find({user:req.user.id});
  res.json(tasks);
});

router.put("/:id", auth, async(req,res)=>{
  const task = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json(task);
});

router.delete("/:id", auth, async(req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
});

export default router;
