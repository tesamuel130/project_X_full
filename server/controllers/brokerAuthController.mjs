import Broker from "../models/brokerList.mjs";
import { hashPassword, comparePassword } from "../helpers/auth.mjs";
import jwt from "jsonwebtoken";

//show the list of Brokers "all brokers"
export const showAllBrokers = async (req, res) => {
  Broker.find()
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
