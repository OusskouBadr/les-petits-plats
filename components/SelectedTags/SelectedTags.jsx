import styles from "./SelectedTags.module.css";

export default function SelectedTags({ selectedTags, removeTag }) {
  if (selectedTags.length === 0) {
    return null;
  }

  return (
    <div className={styles.selectedTags}>
      {selectedTags.map((tag) => (
        <button
          key={`${tag.type}-${tag.value}`}
          type="button"
          className={styles.selectedTag}
          onClick={() => removeTag(tag.type, tag.value)}
        >
          <span>{tag.value}</span>
          <span className={styles.removeTagIcon} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}