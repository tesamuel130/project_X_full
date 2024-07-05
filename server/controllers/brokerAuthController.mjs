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

//
