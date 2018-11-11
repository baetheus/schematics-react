### To Use

Install as schematics-react a dev dependency and schematics-cli globally:

```bash
npm i -D @nll/schematics-react
npm i -g @angular-devkit/schematics-cli
```

Run the commands manually (path defaults to /src/components):

```bash
schematics schematics-react:stateless-component --name=MyNewComponent --path=/src/my/custom/components
```

Or add the following script to your package.json file:

`"g:sc": "schematics schematics-react:stateless-component",`

And then the command becomes:

```bash
npm run g:c -- --name=MyNewComponent
```
