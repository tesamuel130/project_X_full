export const homeSearch = (req, res) => {
  const { homeQuery } = req.query;

  const keys = ["id", "Fname", "Sname", "NickName", "Gender", "Btype"];

  const search = (data) => {
    return data.filter((item) => {
      keys.some((key) => item[key].toLowerCase().includes(homeQuery));
    });
  };

  res.json(search(users).splice(0, 10));
};
