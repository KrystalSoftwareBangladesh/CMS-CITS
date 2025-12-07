### A base TSConfig for working with Node 24.

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @tsconfig/node24
yarn add --dev @tsconfig/node24
```

Add to your `tsconfig.json`:

```json
"extends": "@tsconfig/node24/tsconfig.json"
```

---

The `tsconfig.json`: 

```jsonc
{
  "$schema": "https://www.schemastore.org/tsconfig",
  "_version": "24.0.0",

  "compilerOptions": {
    "lib": [
      "es2024",
      "ESNext.Array",
      "ESNext.Collection",
      "ESNext.Iterator",
      "ESNext.Promise"
    ],
    "module": "nodenext",
    "target": "es2024",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}

```

You can find the [code here](https://github.com/tsconfig/bases/blob/master/bases/node24.json).
