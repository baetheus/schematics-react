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

### VSCode Tasks

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "start",
      "type": "npm",
      "script": "start",
      "isBackground": true,
      "problemMatcher": [],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "label": "Create Component",
      "type": "shell",
      "command": "schematics @nll/schematics-react:component --path=${input:componentPath} --name=\"${input:componentName}\"",
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "id": "componentName",
      "description": "Please Enter A Component Name",
      "default": "SomeComponent",
      "type": "promptString"
    },
    {
      "id": "componentPath",
      "description": "Select Location",
      "default": "src/components",
      "type": "pickString",
      "options": ["src/components", "src/pages"]
    }
  ]
}
```
