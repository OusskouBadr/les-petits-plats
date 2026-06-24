'use client'
import { useState } from "react";
import recipes from "@/data/recipes.json";
import styles from "./page.module.css";
import RecipeCard from "@/components/RecipeCard/RecipeCard";

export default function Home() {
  const [ search , setSearch ] = useState("")

  const filteredRecipes = 
  // si search contient au moins 3 caractères → on filtre                            sinon → on affiche toutes les recettes
    search.length >= 3 ? recipes.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase())) : recipes;

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
              <div className={styles.filters}>
                  <button type="button" className={styles.filterButton}>
                    <span>Ingrédients</span>
                    <span className={styles.chevron} aria-hidden="true" />
                  </button>

                  <button type="button" className={styles.filterButton}>
                    <span>Appareils</span>
                    <span className={styles.chevron} aria-hidden="true" />
                  </button>

                  <button type="button" className={styles.filterButton}>
                    <span>Ustensiles</span>
                    <span className={styles.chevron} aria-hidden="true" />
                  </button>
              </div>

            <span className={styles.recipesCount}>{filteredRecipes.length} recettes</span>
          </div>

          {/* 
            On transforme chaque objet recette en composant RecipeCard.
            La prop "key" aide React à identifier chaque élément dans la liste.
            Ici on utilise l'id de la recette pour avoir une key stable
          */}
          <div className={styles.recipesGrid}>
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>
    );
}