// alle Checkboxen mit der Klasse "klick_checkbox" werden ausgewählt
const checkboxes = document.querySelectorAll(".klick_checkbox");

// Variable um die zuletzt angeklickte Checkbox zu speichern
let lastCheckedCheckbox = null;

// fügt bei jedem Klick der Checkbox einen Event-Listener hinzu
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    // Zählt wieviele Checkboxen aktuell ausgewählt sind
    let checkedCount = 0;
    checkboxes.forEach(function (cb) {
      if (cb.checked) checkedCount++;
    });

    // Bedingung wenn mehr als 2 Checkboxen angeklickt sind
    if (checkedCount > 2) {
      // Deaktiviere die zuvor angeklickte Checkbox
      if (lastCheckedCheckbox !== null && lastCheckedCheckbox !== this) {
        lastCheckedCheckbox.checked = false;
      }
    }

    // Aktualisiere die Variable "lastCheckedCheckbox" mit der aktuellen Checkbox
    lastCheckedCheckbox = this;
  });
});
