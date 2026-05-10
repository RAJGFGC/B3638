const Recipe = require("../models/recipeModel");

// GET all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json({
      status: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch recipes",
      error: error.message,
    });
  }
};

// CREATE a new recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({
      success: true,
      message: "Recipe created successfully",
      data: recipe,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create recipe",
      error: error.message,
    });
  }
};

module.exports = {
  getRecipes,
  createRecipe,
};
