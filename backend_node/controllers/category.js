const Category = require("../models/category");
const formidable = require("formidable");
const _ = require("lodash");

// Fetch details of a category specified by its ID
exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB",
      });
    }
    req.category = category;
    next();
  });
};

// Create a new category and write to DB
exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save category in DB",
      });
    }
    res.json({ category });
  });
};

// Get details of a particular category
exports.getCategory = (req, res) => {
  return res.json(req.category);
};

// Fetch all categories that exists
exports.getAllCategory = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "NO categories found",
      });
    }
    res.json(categories);
  });
};

// Update details of existing category
exports.updateCategory = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }

    let category = req.category;
    category = _.extend(category, fields);

    // Write update to the DB
    category.save((err, category) => {
      if (err) {
        res.status(400).json({
          error: "Updation of category failed",
        });
      }
      res.json(category);
    });
  });
};

// Delete a category from the application
exports.removeCategory = (req, res) => {
  const category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this category",
      });
    }
    res.json({
      message: "Successfully deleted",
    });
  });
};
