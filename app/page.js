'use client'
import { useState } from "react";
import recipes from "@/data/recipes.json";
import styles from "./page.module.css";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { searchRecipes } from "./lib/search";
import { getFilter, filterRecipesByTags } from "./lib/filters";
import FilterOptions from "@/components/FilterOptions/FilterOptions";
import SelectedTags from "@/components/SelectedTags/SelectedTags";


export default function Home() {
  const [ search , setSearch ] = useState("")
  const [selectedTags, setSelectedTags] = useState([]);
  const [openedFilter, setOpenedFilter] = useState(null);

  const recipesAfterSearch = searchRecipes(recipes, search);
  const filteredRecipes = filterRecipesByTags(recipesAfterSearch, selectedTags);
  const filterOptions = getFilter(filteredRecipes);

  const noResult = search.trim().length >= 3 && filteredRecipes.length === 0

  // Fonction qui permets de gérer les tags 
  function addTag(type, value) {
    const newTag = {
      type,
      value,
    };
    
    setSelectedTags((currentTags) => {
      const tagAlreadyExists = currentTags.some(
        (tag) => tag.type === type && tag.value === value
      );

      if (tagAlreadyExists) {
        return currentTags;
      }

      return [...currentTags, newTag];
    });
  }

  function removeTag(type, value) {
    setSelectedTags((currentTags) =>
      currentTags.filter(
        (tag) => !(tag.type === type && tag.value === value)
      )
    );
  } 

  // Fonction quiu permets d'ouvrir qu'un dropdown a la fois
  function toggleFilter(type) {
    setOpenedFilter((currentFilter) => currentFilter === type ? null : type)
  }
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>
          Découvrez nos recettes <br />
          du quotidien, simples et délicieuses
        </h1>

        <form className={styles.searchForm}>
          <input
            type="search"
            placeholder="Rechercher une recette, un ingrédient, ..."
            aria-label="Rechercher une recette"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" aria-label="Lancer la recherche">
            <img src="/assets/icons/search.svg" alt=""/>
          </button>
        </form>
      </section>

      <section className={styles.recipesSection}>
        <div className={styles.filtersBar}>
          <FilterOptions title="Ingrédients" type="ingredient" options={filterOptions.ingredients} isOpen={openedFilter === "ingredient"} onToggle={toggleFilter} onSelect={addTag} selectedTags={selectedTags}/>
          <FilterOptions title="Appareils" type="appliance" options={filterOptions.appliances} isOpen={openedFilter === "appliance"} onToggle={toggleFilter} onSelect={addTag} selectedTags={selectedTags} />
          <FilterOptions title="Ustensiles" type="ustensil" options={filterOptions.ustensils} isOpen={openedFilter === "ustensil"} onToggle={toggleFilter} onSelect={addTag} selectedTags={selectedTags} />
          <span className={styles.recipesCount}>{filteredRecipes.length} recettes</span>
        </div>

      <SelectedTags selectedTags={selectedTags} removeTag={removeTag} />

        {noResult ? (  
          <p className={styles.noResultMessage}>
            Aucune recette ne contient “{search}”. Vous pouvez chercher “tarte aux pommes”, “poisson”, etc.
          </p>
        ) : (
        // On transforme chaque objet recette en composant RecipeCard.
        // La prop "key" aide React à identifier chaque élément dans la liste.
        // Ici on utilise l'id de la recette pour avoir une key stable
          <div className={styles.recipesGrid}>
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
        )}
      </section>
    </main>
  );
}