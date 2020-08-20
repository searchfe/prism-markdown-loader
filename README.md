# prism-markdown-loader
prism-markdown-loader for webpack

## Installation

`npm install prism-markdown-loader`

## Usage

Since markdown-it's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

### Webpack

```javascript
{
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "prism-markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }]
    }
}
```

### Options

Pass your markdown-it [options](https://www.npmjs.com/package/markdown-it) as shown above.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
