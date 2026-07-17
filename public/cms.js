/**
 * DSLD course — legacy CMS cleanup.
 *
 * The in-browser CMS editor has been retired: course content is generated from
 * the source training document, so in-place edits would be overwritten on the
 * next regeneration, and a saved HTML snapshot cannot carry the interactive
 * features (image lightbox, color highlights, notes). This script only purges
 * any stale saved section overrides so pages that were edited in the old CMS
 * self-heal to the current canonical content.
 */
(function () {
  "use strict";
  try {
    if (localStorage.getItem("dsld-cms-sections")) {
      localStorage.removeItem("dsld-cms-sections");
    }
  } catch (e) {
    /* ignore storage errors */
  }
})();
