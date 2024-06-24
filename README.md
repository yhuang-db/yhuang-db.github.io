# yhuang-db.github.io

### Init vite+react project

git clone https://github.com/yhuang-db/yhuang-db.github.io.git

cd yhuang-db.github.io.git

npm create vite@latest ./

npm install

https://vitejs.dev/guide/#getting-started

npm create vite@latest frontend -- --template react

##### Init bootstrap

https://getbootstrap.com/docs/5.3/getting-started/vite/

npm i --save bootstrap @popperjs/core

npm i --save-dev sass

mkdir src/scss

touch src/scss/styles.scss


npm run dev  // See website in develop mode

npm run build  // Build website

npm run preview  // preview built website

### Deploy

Github repo -> Settings -> Pages -> Build and deployment -> Source: Github Actions

Create action: https://vitejs.dev/guide/static-deploy.html#github-pages

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
