import mongoose from "mongoose";
import Report from '../models/report.js';

export const getReports = async (req, res) => {
  const { userId } = req.query;
  try {
    const reports = await Report.find({ userId });
    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getReport = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findOne({ id });
    res.status(200).json(report);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReport = async (req, res) => {
  const newReportItem = new Report(req.body);
  try {
    const newReport = await newReportItem.save();
    res.status(200).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReport = async (req, res) => {
  try {
    const { id: _id, updatedReport } = req.body;
    await Report.findByIdAndUpdate(_id, { ...updatedReport, _id}, { new: true });
    res.status(200).json('Report item has been updated successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const { id } = req.body;
    await Report.findByIdAndDelete(id);
    res.status(200).json({ message: 'Report has been deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

