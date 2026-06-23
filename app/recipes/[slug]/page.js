import Image from "next/image";
import { notFound } from "next/navigation";
import recipes from "@/data/recipes.json";
import styles from "./page.module.css";

// Affiche la quantité sous l'ingrédient.
// Si aucune quantité n'existe dans la data, on affiche "-".
function formatQuantity(ingredient) {
  if (ingredient.quantity === undefined) {
    return "-";
  }

  return `${ingredient.quantity} ${ingredient.unit ?? ""}`;
}

export default async function RecipePage({ params }) {
  // async func ducoup on attends le params avant de passer a la suite
  const { slug } = await params;

  // On cherche la recette qui correspond au slug dans l'URL.
  const recipe = recipes.find((recipe) => recipe.slug === slug);

  // Si aucun slug ne correspond, on affiche la page 404.
  if (!recipe) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero} />

      <section className={styles.recipeDetail}>
        <div className={styles.imageWrapper}>
          <Image
            src={`/assets/JSON%20recipes/${recipe.image}`}
            alt={recipe.name}
            width={606}
            height={738}
            className={styles.recipeImage}
            priority
          />
        </div>

        <article className={styles.content}>
          <h1>{recipe.name}</h1>

          <section className={styles.section}>
            <h2>Temps de préparation</h2>
            <span className={styles.time}>{recipe.time}min</span>
          </section>

          <section className={styles.section}>
            <h2>Ingrédients</h2>

            <ul className={styles.ingredients}>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.ingredient}>
                  <span className={styles.ingredientName}>
                    {ingredient.ingredient}
                  </span>
                  <span className={styles.ingredientQuantity}>
                    {formatQuantity(ingredient)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Ustensiles nécessaires</h2>

            <ul className={styles.simpleList}>
              {recipe.ustensils.map((ustensil) => (
                <li key={ustensil}>{ustensil}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Appareil nécessaire</h2>
            <p>{recipe.appliance}</p>
          </section>

          <section className={styles.section}>
            <h2>Recette</h2>
            <p className={styles.description}>{recipe.description}</p>
          </section>
        </article>
      </section>

      <footer className={styles.footer}>
        Copyright &copy; 2026 - Les Petits Plats
      </footer>
    </main>
  );
}