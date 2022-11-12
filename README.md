# Front-End Social

This repo includes:

- The Eleventy site published at [about.front-end.social](https://about.front-end.social/)
- The Mastodon [style overrides](https://about.front-end.social/css/override.css) we use

Created by [@mia](https://front-end.social/@mia),
with help from current admins:

- [@estelle](https://front-end.social/@estelle)
- [@keithjgrant](https://front-end.social/@keithjgrant)
- [@grigs](https://front-end.social/@grigs)
- [@kitt](https://front-end.social/@kitt)

## Contributing

Mastodon itself is open source,
and accepts contributions from the community:

- https://github.com/mastodon/mastodon/

For now, tho,
our instance is hosted by [Masto.host](https://masto.host/) --
which means our server customizations
are limited:

- [Server-wide CSS overrides](https://about.front-end.social/css/override.css)
  (generated from Sass files in `src/sass/masto/`)
- Various server-related images
  (hero, social media, mascot)
- Server description & and terms
- List of blocked servers

Feel free to open issues for discussion
on any of the above,
or other questions/suggestions --
and open PRs with
suggested changes to the server CSS.

You can also
support the server
by donating to
[buymeacoffee.com/terriblemia](https://buymeacoffee.com/terriblemia).

## Development Scripts

**`npm install`**

> Install the necessary npm packages for local development

**`npm start`**

> Run 11ty with hot reload at localhost:8080, including reload based on Sass changes

**`npm run build`**

> Production build includes minified, autoprefixed CSS

Use this as the "Publish command" if needed by hosting such as Netlify.

## Based on 11ty Sass Skeleton

Featuring absolutely nothing beyond a base HTML5 template
and the essential setup to watch and compile your Sass alongside 11ty.

<small>Created by [@5t3ph](https://twitter.com/5t3ph)</small>
