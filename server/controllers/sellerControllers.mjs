import Seller from "../models/seller.mjs";

//filter the seller by service type
//filter the public chat service type seller
export const publicChatServiceSeller = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const serviceType = "Public";

    const chatSellers = await Seller.find({ serviceType: serviceType })
      .skip(skip)
      .limit(limit);
    const totalSeller = await Seller.countDocuments({
      serviceType: serviceType,
    });

    res.status(200).json({
      results: chatSellers,
      totalPages: Math.ceil(totalSeller / limit),
      currentPage: page,
    });
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
  try {
    const { id } = req.params.id;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid or missing seller id" });
    }

    const seller = await Seller.findById({ id });

    if (!seller) {
      return res.status(404).json({ error: "Seller not found" });
    }
    res.status(200).json(seller);
  } catch (error) {
    console.error("Error fetching seller details:", error);
    res.status(500).send(error);
  }
};
