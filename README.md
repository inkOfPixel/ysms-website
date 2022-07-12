# YSMS - Text Marketing

<p align="center">
  <img src="./public/ysms-featured-image.png" alt="YSMS" width="200px" >
</p>


YSMS is a text marketing Shopify app for your Shopify store.

This repo contains the [website](ysms.me) written in [Remix.run](https://remix.run).

### Docker

A Docker file can be found [here](./Dockerfile), in order to build a Docker image, run:

```sh
$ docker image build -t ysms-website .
```

And now run a Docker container with:

```sh
$ docker container run -p 3000:3000 ysms-website
```

### Type-check

This project uses TypeScript.

It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete.

To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting that is configured in [`.eslintrc.js`](./.eslintrc.js).

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project.

It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save.

There's also a `npm run format` script you can run to format all files in the project.