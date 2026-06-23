import recipes from "@/data/recipes.json";
import styles from "./page.module.css";
import RecipeCard from "@/components/RecipeCard/RecipeCard";

export default function Home() {
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

            <span className={styles.recipesCount}>{recipes.length} recettes</span>
        </div>

        {/* 
          On transforme chaque objet recette en composant RecipeCard.
          La prop "key" aide React à identifier chaque élément dans la liste.
          Ici on utilise l'id de la recette pour avoir une key stable
        */}
        <div className={styles.recipesGrid}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}