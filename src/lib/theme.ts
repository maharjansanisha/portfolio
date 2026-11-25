export const themeStorageKey = "theme";

/** Runs in `<head>` so a saved theme applies before the first paint. */
export const themeScript = `try{var t=localStorage.getItem("${themeStorageKey}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;
