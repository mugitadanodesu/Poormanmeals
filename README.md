# Poorman's Meals

Budget recipes and ingredient guides — real cost per serving on every dish.

## Structure

```
index.html            → homepage (recipe grid + ingredient teasers)
ingredients.html       → ingredient spotlight page
recipes/                → one HTML file per recipe post
styles.css              → shared design system
script.js               → mobile nav toggle
```

## Adding a new recipe

1. Copy `recipes/ginisang-monggo.html` to `recipes/your-recipe-name.html`.
2. Update the title, cost band, ingredients list, and steps.
3. Add a matching card to the `recipe-grid` in `index.html`, linking to your new file.

## Hosting

This is a static site — no build step. Enable it via **Settings → Pages** on
GitHub, source set to the `main` branch, root folder. It will publish to
`https://<username>.github.io/<repo-name>/`.
