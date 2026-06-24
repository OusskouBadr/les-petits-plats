"use client";

import { useState } from "react";
import styles from "./FilterOptions.module.css";

export default function FilterOptions({ title, options, type, onSelect, selectedTags }) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSearch, setOptionSearch] = useState("");

  const selectedValues = selectedTags
    .filter((tag) => tag.type === type)
    .map((tag) => tag.value);

  const filteredOptions = options.filter((option) => {
    const matchesSearch = option
      .toLowerCase()
      .includes(optionSearch.toLowerCase().trim());

    const isAlreadySelected = selectedValues.includes(option);

    return matchesSearch && !isAlreadySelected;
  });

  return (
    <div className={`${styles.filterGroup} ${isOpen ? styles.open : ""}`}>
      <button
        type="button"
        className={styles.filterButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              className={styles.searchInput}
              value={optionSearch}
              onChange={(event) => setOptionSearch(event.target.value)}
            />

            {optionSearch && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => setOptionSearch("")}
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            )}

            <span className={styles.searchIcon} aria-hidden="true" />       
          </div>

          <ul className={styles.filterList}>
            {filteredOptions.map((option) => (
              <li key={option} className={styles.filterItem} onClick={() => onSelect(type, option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}