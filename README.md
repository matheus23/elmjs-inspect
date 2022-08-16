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
elmjs-inspect elm.js
```

Size contribution by modules

```
elmjs-inspect --summary=module elm.js
```

Size contribution by package

```
elmjs-inspect --summary=package elm.js
```

Size contribution of only the project's modules

```
elmjs-inspect --summary=project elm.js
```
