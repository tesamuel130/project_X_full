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
      });
    });
};

//show a broker by id
export const showBrokerById = async (req, res) => {
  const { id } = req.params;
  await Broker.findById({ id })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
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
  await broker
    .save()
    .then((response) => {
      res.json({
        message: "broker added seccucefully",
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
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
    .then((response) => {
      res.json({
        message: "broker updated seccucefully",
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occured",
      });
    });
};
