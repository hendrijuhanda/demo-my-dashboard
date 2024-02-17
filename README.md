## Nuxt 3

This app is built with Nuxt 3. Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Usage

First, make sure to install the dependencies by installing npm dependencies.

```bash
npm install
```

To run development server, simply run command below.

```bash
npm run dev
```

The app should be running on `http://localhost:3000`.

The app is intended as SPA or Client-Side only. To build the app, run command below.

```bash
npm run generate
```

The built result can be found in `.output/public` directory and can be deployed on any static hosting server.

## (Optional) Usage with Lando

[Lando](https://lando.dev/) is local development environment DevOps tool, built on Docker. The repository includes `.lando.yml` config file and is already pre-scripted.

Assumed Lando is installed, simply run command below.

```
lando start
```

Wait for the build process, and if everything goes well, the app should be virtually hosted on `http://demo-my-dashboard.lndo.site`. That's it.
