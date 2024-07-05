import Broker from "../models/brokerList.mjs";
import { hashPassword, comparePassword } from "../helpers/auth.mjs";
import jwt from "jsonwebtoken";
import { response } from "express";

//show the list of Brokers "all brokers"
export const showAllBrokers = async (req, res) => {
  await Broker.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
        err: err,
      });
    });
};

//show a broker by id
export const showBrokerById = async (req, res) => {
  const brokerId = req.body.id;
  await Broker.findById(brokerId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
        err: err,
      });
    });
};

//add a broker into the database
export const addBroker = async (req, res) => {
  let broker = new Broker({
    name: req.body.name,
    email: req.body.email,
    PhoneNumber: req.body.PhoneNumber,
    password: req.body.password,
  });
  if (req.file) {
    broker.avater = req.file.path;
  }
  await broker
    .save()
    .then(() => {
      res.json({
        message: "broker added seccucefully",
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
        err: err,
      });
    });
};

//update a broker by id
export const updateBrokerById = async (req, res) => {
  const { id } = req.params;
  let updateData = {
    name: req.body.name,
    PhoneNumber: req.body.PhoneNumber,
    password: req.body.password,
  };

  await Broker.findByIdAndUpdate({ id }, { $set: updateData })
    .then(() => {
      res.json({
        message: "broker updated seccucefully",
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
        err: err,
      });
    });
};

//delate a broker
export const deleteBrokerById = async (req, res) => {
  const { id } = req.params;
  await Broker.findByIdAndRemove({ id })
    .then(() => {
      res.json({
        message: "broker deleted seccucefully",
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
        err: err,
      });
    });
};
