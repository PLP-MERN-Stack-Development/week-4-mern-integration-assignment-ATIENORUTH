export const getAllCategories = (req, res) => {
  res.json({ message: "Here are your categories!" });
};

export const createCategory = (req, res) => {
  const { name } = req.body;
  // You can add DB logic here later
  res.status(201).json({ message: `Category '${name}' created.` });
};