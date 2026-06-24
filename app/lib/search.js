
// standardise une chaîne de caracs pour rendre la recherche plus fiable.
function normalizeText(text) {
  return text.toLowerCase().trim();
}

export function searchRecipes(recipes, search) {
  const normalizedSearch = normalizeText(search);

  // En dessous de 3 caractères, la recherche principale ne se lance pas
  if (normalizedSearch.length < 3) {
    return recipes;
  }

  return recipes.filter((recipe) => {
    const recipeName = normalizeText(recipe.name)
    const recipeDescription = normalizeText(recipe.description)

    // some() retourne true dès qu'un ingrédient correspond.
    const hasOneIngredient = recipe.ingredients.some((ingredient) => {
      const ingredientName = ingredient.ingredient.toLowerCase();

      // includes() vérifie si l'ingrédient contient la recherche
      return ingredientName.includes(normalizedSearch)
    });
    // Différence some(à) et includes() 👇
    // some()     → Vérifie dans le tableau d’ingrédients ( tableau )
    // includes() → Vérifie dans le texte d’un ingrédient ( texte )

    // filter() garde la recette si elle correspond au nom à la description ou à au moins un ingrédient
    return (
      recipeName.includes(normalizedSearch) ||
      recipeDescription.includes(normalizedSearch) ||
      hasOneIngredient
    );
  });
}