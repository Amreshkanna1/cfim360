document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("article-date-filter");
  const clearBtn  = document.getElementById("clear-date");
  const cards     = document.querySelectorAll(".article-tile");

  if (!dateInput || !cards.length) return;

  function applyFilter() {
    const selectedDate = dateInput.value;

    cards.forEach(card => {
      const cardDate = card.dataset.date;
      card.style.display =
        !selectedDate || cardDate === selectedDate
          ? ""
          : "none";
    });
  }

  dateInput.addEventListener("change", applyFilter);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      dateInput.value = "";
      applyFilter();
    });
  }
});
