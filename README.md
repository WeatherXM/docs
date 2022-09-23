# WeatherXM Documentation

The official source code powering [WeatherXM Docs](https://docs.weatherxm.com/).

Maintained by WeatherXM - Community contributions encouraged.

## Requirements

- [Node.js](https://nodejs.org/en/download) version >= 14

- [Yarn](https://yarnpkg.com/getting-started/install) version >= 3

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Contributing

Pull requests, opening new issues, discussions, and contributions from the community are encouraged.

### How to contribute

Every page uses Markdown syntax which is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

Use the guide found [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) to learn about the markdown syntax.

For more advanced content consider using
[JSX](https://v2.docusaurus.io/docs/markdown-features/#embedding-react-components-with-mdx).

#### Opening an issue or starting a discussion

If you think you have found an issue or just want to initiate a discussion regarding the documentation
you can do so by visiting the [GitHub Issue Tracker](https://github.com/WeatherXM/docs/issues) and click the "New Issue" button.

#### Editing an Existing Doc

Each page in the documentation has an "Edit this page" link at the bottom of the content. By clicking it you are taken to the relevant GitHub location where this page is located and you can edit it and fix or add anything you think that is needed. Please keep in mind that you need
to have a GitHub account and be logged in.

Once logged in, you can use the built-in text editor of GitHub where you can make your edits directly. When you've completed your changes, you can add any specific details on what was changed and commit to a new branch to create a new Pull Request to the repository. Afterwards one of the maintainers will review your changes, and either merge them or request changes.

#### Adding a New Doc

Create a new \*.mdx extension file following the existing naming conventions to the relevant directory.

Also don't forget to update the `sidebars.js` file and add that new entry there.

#### Code Formatting

We use a plugin called Prettier to format the code. You can run this locally by doing`npx prettier --write .` or you can do `npx pretty-quick --staged` which runs on the changed files of your local copy.

## Attribution

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).
