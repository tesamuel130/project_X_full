import Seller from "../models/seller.mjs";

//filter the seller by service type
//filter the public chat service type seller
export const publicChatServiceSeller = async (req, res) => {
  const serviceType = "PublicChat";
  try {
    const chatSellers = await Seller.find({ serviceType: serviceType });
    res.status(200).json(chatSellers);
  } catch (error) {
    res.status(500).send(error);
  }
};

//filter the private chat service type seller
export const privateChatServiceSeller = async (req, res) => {
  const serviceType = "PrivateChat";
  try {
    const chatSellers = await Seller.find({ serviceType: serviceType });
    res.status(200).json(chatSellers);
  } catch (error) {
    res.status(500).send(error);
  }
};

//filter the contact in person service type seller
export const contctInPersonServiceSeller = async (req, res) => {
  const serviceType = "ContactInPerson";
  try {
    const chatSellers = await Seller.find({ serviceType: serviceType });
    res.status(200).json(chatSellers);
  } catch (error) {
    res.status(500).send(error);
  }
};

//filter one person by id
export const getOneSellerDetail = async (req, res) => {
  const { id } = req.params.id;
  try {
    const seller = await Seller.findById({ id });
    res.status(200).json(seller);
  } catch (error) {
    res.status(500).send(error);
  }
};
