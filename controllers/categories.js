const sendAllCategories = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.categoriesArray));
};
const sendCategoryById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};
const sendCategoryUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "категория обновлена" }));
};
const sendCategoryDeleted = (req, res) =>{
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(req.category));
}
module.exports = {
  sendAllCategories,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
};
