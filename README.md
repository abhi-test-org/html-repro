Run the command below to reproduce:

```sh
node index.js
```

You should receive this error:

```
{ Error: Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=undefined&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at a.b.render (/Users/abhiaiyer/gatsby/html-repro/render-page.js:29410:21)
    at a.b.read (/Users/abhiaiyer/gatsby/html-repro/render-page.js:29250:33)
    at renderToString (/Users/abhiaiyer/gatsby/html-repro/render-page.js:29631:28)
    at Module.__webpack_exports__.default (/Users/abhiaiyer/gatsby/html-repro/render-page.js:1914:28)
    at RENDER_HTML.Promise (/Users/abhiaiyer/gatsby/html-repro/index.js:14:36)
    at new Promise (<anonymous>)
    at RENDER_HTML (/Users/abhiaiyer/gatsby/html-repro/index.js:12:10)
    at Object.<anonymous> (/Users/abhiaiyer/gatsby/html-repro/index.js:36:1)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10) context: { path: '/my-second-post/' } }
```
