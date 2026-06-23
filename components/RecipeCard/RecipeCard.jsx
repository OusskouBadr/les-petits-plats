import styles from "./RecipeCard.module.css";
import Image from "next/image";



export default function RecipeCard({ recipe }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.cardImage}
          src={`/assets/JSON%20recipes/${recipe.image}`}
          alt={recipe.name}
          width={380}
          height={253}
        />

        <span className={styles.recipeTime}>{recipe.time}min</span>
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{recipe.name}</h2>

        <section className={styles.recipeSection}>
          <h3 className={styles.sectionTitle}>RECETTE</h3>
          <p className={styles.description}>{recipe.description}</p>
        </section>

        <section className={styles.ingredientsSection}>
          <h3 className={styles.sectionTitle}>INGRÉDIENTS</h3>
          
          <ul className={styles.ingredients}>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredient} className={styles.ingredientItem}>
                <span className={styles.ingredientName}>
                  {ingredient.ingredient}
                </span>

                <span className={styles.ingredientQuantity}>
                  {ingredient.quantity !== undefined
                    ? `${ingredient.quantity} ${ingredient.unit ?? ""}`
                    : "-"}
                </span>
              </li>
            ))}
          </ul>          
        </section>
      </div>
    </article>
  );
}