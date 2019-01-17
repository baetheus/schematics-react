### To Use

Install as schematics-react and schematics-cli globally:

```bash
npm i -g @angular-devkit/schematics-cli @nll/schematics-react
```

Run the commands manually (path defaults to /src/components):

```bash
schematics @nll/schematics-react:component --name=MyNewComponent --path=/src/my/custom/components
```

Or add the following script to your package.json file:

```
"c": "schematics @nll/schematics-react:component",
"p": "schematics @nll/schematics-react:component --path=src/pages",
```

And then the commands becomes:

```bash
npm run c -- --name=MyNewComponent

npm run p -- --name=MyNewPage
```
