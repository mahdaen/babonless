# **BabonLESS**
---------------

**BabonLESS** is just another ***LESS*** library. **BabonLESS** help you with ***CSS3*** mixins and some usable mixins. We are trying to make our life easy when writing css. We try to makes all non-unit properties shorted. Really, you'll love to use those mixins.

**Get BabonLESS**
You can use `bower install babonless` or download the latest version [v0.1.5]() 


**Example**:
```less
.flying-block {
    .block(100%);
    .blur-e(3px);
    .grayscale-e(0.9);
    .absolute-middle-center;
}
.table-cell-display {
    .table-cell(25% 50px);
    .middle-center;
}
```
<b>Output</b>:
```css
.flying-block {
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-filter: blur(3px) grayscale(0.9);
}
.table-cell-display {
    display: table-cell;
    width: 25%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
}
```

***Love it?***

Most of the custom mixins using shortand-like arguments. Example:
`.absolute(10px none none 10px)` ***NOT*** `.absolute(10px, none, none, 10px);`

We are also created mixed mixins to makes the code easy to read. It's mean properties that can have multiple value like `transform: translate(20%, 30%) rotate(20deg);` can be mixed without type it all in the arguments. Every mixins that can be mixed always ended with `-e` suffix. E.g: `.blur-e();` `.grayslace-e()`.

**Sample**
```less
.transformed {
    .translate-e(20% 30%);
    .rotate-e(20deg);
}
```

**`Output`**
```css
.transformed {
    -webkit-transform: translate(20%, 30%) rotate(20deg);
    -moz-transform: translate(20%, 30%) rotate(20deg);
    -ms-transform: translate(20%, 30%) rotate(20deg);
    -o-transform: translate(20%, 30%) rotate(20deg);
    transform: translate(20%, 30%) rotate(20deg);
}
```

## **CONTENTS**
Visit the wiki page to see the contents detail.

- **Alignments**
- **Commons**
- **CSS3**
- **Animations**
- **Borders**
- **Cheats**
- **Displays**
- **Fonts**
- **Gradients**
- **Grids**
- **Media Queries**
- **Positions**
- **Shadows**
- **Shapes**
- **Text Styles**
- **Transforms**
