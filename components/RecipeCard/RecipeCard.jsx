import styles from "./RecipeCard.module.css";
import Image from "next/image";

// Transforme un objet ingrédient en texte lisible.
// Exemple : { ingredient: "Lait", quantity: 400, unit: "ml" }
// devient : "Lait 400 ml"
function formatIngredient(ingredient) {
  const name = ingredient.ingredient;
  const quantity = ingredient.quantity;
  const unit = ingredient.unit;

  // Cas complet : nom + quantité + unité
  if (quantity && unit) {
    return `${name} ${quantity} ${unit}`;
  }

  // Cas sans unité : ex "Oignon 1"
  if (quantity) {
    return `${name} ${quantity}`;
  }

  // Cas sans quantité ni unité : ex "Glaçons"
  return name;
}

export default function RecipeCard({ recipe }) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.cardImage}
        src={`/assets/JSON%20recipes/${recipe.image}`}
        alt={recipe.name}
        width={380}
        height={253}
      />

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2>{recipe.name}</h2>
          <span>{recipe.time} min</span>
        </div>

        <div className={styles.cardBody}>
          <ul className={styles.ingredients}>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredient}>
                {formatIngredient(ingredient)}
              </li>
            ))}
          </ul>

          <p className={styles.description}>{recipe.description}</p>
        </div>
      </div>
    </article>
  );
}