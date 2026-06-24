export function getFilter(recipes) {
    // Un Set, c’est comme un tableau, mais il refuse les doublons. 
    // Ex : si plusieurs recettes utilisent "Four", il ne sera gardé qu’une seule fois.
    const ingredients = new Set();
    const appliances = new Set();
    const ustensils = new Set();

    recipes.forEach((recipe) => {
        appliances.add(recipe.appliance);

        recipe.ingredients.forEach((ingredient) => {
        ingredients.add(ingredient.ingredient);
        });

        recipe.ustensils.forEach((ustensil) => {
        ustensils.add(ustensil);
        });
    });

    return {
        // Ici on mets ... parce qu’un Set n’est pas un tableau classique.
        // on transforme le Set en tableau avec le spread operator
        ingredients: [...ingredients],
        appliances: [...appliances],
        ustensils: [...ustensils],
    };
}

export function filterRecipesByTags(recipes, selectedTags) {
  // Si aucun tag n'est sélectionné, ( === 0)
  // on retourne directement toutes les recettes reçues.
  if (selectedTags.length === 0) {
    return recipes;
  }

  return recipes.filter((recipe) => {
    // every() vérifie que TOUS les tags sélectionnés correspondent à la recette en cours.
    return selectedTags.every((tag) => {

      // Vérifie qu'au moins un ingrédient correspond au tag.
      if (tag.type === "ingredient") {
        return recipe.ingredients.some(
          (ingredient) => ingredient.ingredient === tag.value
        );
      }

      // Vérifie que l'appareil correspond au tag.
      if (tag.type === "appliance") {
        return recipe.appliance === tag.value;
      }

      // Vérifie que l'ustensile est présent dans la recette.
      if (tag.type === "ustensil") {
        return recipe.ustensils.includes(tag.value);
      }

      return true;
    });
  });
}