# elmjs-inspect

## Build it

```sh
npm i
npm run build
npm link
```

## Run it

Size contribution of each function

```
elmjs-size elm.js
```

Size contribution by modules

```
elmjs-size --summary=module elm.js
```

Size contribution by package

```
elmjs-size --summary=package elm.js
```

Size contribution of only the project's modules

```
elmjs-size --summary=project elm.js
```

## TODO

-   Allow giving .js file by options or otherwise by file input (inquirer.js?)
-   Show results by package/module/file level
-   NPM Publish
