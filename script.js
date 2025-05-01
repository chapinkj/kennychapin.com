  function redirectHash() {
    if (location.hash === "#sample-data-visualizations") {
      location.hash = "#data";
    }
  }
  window.addEventListener("load", redirectHash);
  window.addEventListener("hashchange", redirectHash);

