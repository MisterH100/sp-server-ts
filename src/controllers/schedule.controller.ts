import express from "express";
import Schedule from "../models/schedule.model";


export const getSchedule = async (req: express.Request, res: express.Response) => {
  const course = req.query.course;
  const certificate = req.query.certificate;

  try {
    const schedule = await Schedule.findOne({ $and: [{ COURSE: course }, { CERTIFICATE: certificate }] });

    res.status(200).json({ schedule, message: "Schedule found" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to find schedule , internal server error", error });
  }
};

export const getSchedules = async (req: express.Request, res: express.Response) => {
  try {
    const schedules = await Schedule.find({});

    res.status(200).json({ schedules, message: "schedules found" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to find schedule , internal server error", error });
  }
};

