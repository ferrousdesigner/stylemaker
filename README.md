# STYLE MAKER

> A simple tool to write and use css in js without css-loader, implements css isolation. 

## Install

```bash
npm i -S stylemaker
```

## Usage

```bash
import StyleMaker from 'StyleMaker';
var yourCssString = `
    #header {
        font-size: 24px;
        color: #666666;
    }
`
StyleMaker(yourCssString); // This will add the styles in a style tag of the document head.
```
