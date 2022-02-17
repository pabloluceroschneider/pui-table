<h1 align="center">
PUI-TABLE 
</h1>

## Demo
✏️ <a href="https://codesandbox.io/s/pui-table-default-gvpb8" target="_blank">CodeSandbox</a>

## Instalation
To install `pui-table` with `npm`:

    npm install pui-table --save


## 🚀 Usage

Add styles to `index.js`,  `_app.js` or whatever the entry point is:
```jsx
import "pui-table/styles.css";
```

Component instace:
```jsx
import Table from "pui-table";
```

```jsx
<Table 
  headers={[
    { Header: "nº", accesor: "priority" },
    { Header: "Name", accesor: "name" },
    { Header: "Age", accesor: "age" }
  ]}
  data={[
    { name: "Rachel", age: 25, priority: 1 },
    { name: "Ross", age: 23, priority: 2 },
    { name: "Joey", age: 24, priority: 3 },
    { name: "Phoebe", age: 26, priority: 4 },
    { name: "Chandler", age: 24, priority: 5 },
    { name: "Mónica", age: 24, priority: 6 }
  ]}
/>
```
## NPM Package
<a href="https://www.npmjs.com/package/pui-table" target="_blank">pui-table</a>

## License

`pui-table` is released under the [ISC License](http://opensource.org/licenses/ISC).
