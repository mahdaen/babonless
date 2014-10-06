# **BabonLESS**
---------------
BabonLESS is just another LESS library. BabonLESS help you with CSS3 mixins and some usable mixins. Really, you'll love to use those mixins.

Example:
```less
.flying-block {
	.block(50%);
	.absolute(50% none none 50%);
	.translate(-50% -50%);
	.blur-e(3px);
	.grayscale-e(0.9);
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
```

***Love it?***

Most of the custom mixins using shortand-like arguments. Example:
`.absolute(10px none none 10px)` ***NOT*** `.absolute(10px, none, none, 10px);`

We also support mixed mixins. It's mean properties that can have multiple value like `filter: blur() grayscale();` can be mixed without type it all in the arguments. Every mixins that can be mixed always ended with `-e` suffix. E.g: `.blur-e();` `.grayslace-e()`.

***
## **Getting Started**
***
### **Custom Mixins**

**Vendor Prefixer**
Vendor Prefixer lets you create mixins that automatically prefixed.

**`.prefixer(@prop-name; @values; @origin; @mixed);`**

 - **`@prop-name`** - is the property-name. E.g. `appearance`.
 - **`@values`** - is the property-value. E.g. `none`, `block`, `translate()`.
 - **`@origin`** - is does we should include the non-prefixed property. E.g. `transform`.
 - **`@mixed`** *`comma | space`* - is separator type of values, determine does the mixins can be mixed. 

***Example:***
```less
.border-radius(@value) {
	.prefixer(border-radius, @value, true);
}

// It's like:
.border-radius(@value) {
	-webkit-border-radius: @value;
	-o-border-radius: @value;
	-moz-border-radius: @value;
	border-radius: @value;
}
```

***Mixed sample:***
```less
.transform-e(@value) {
	.prefixer(filter, @value, true, space);
}

// It's like:
.transform(@value) {
	-webkit-transform+: @value;
	-moz-transform+: @value;
	-o-transform+: @value;
	transform+: @value;
}
```
***Usage mixed sample:***
```less
.transformed {
	.translate-e(-50% -50%);
	.rotate-e(-90deg);
	.scale-e(1.2);
}
```
**`Output`**:
```less
.transformed {
	-webkit-transform: translate(-50%, -50%) rotate(-90deg) scale(1.2);
	-o-transform: translate(-50%, -50%) rotate(-90deg) scale(1.2);
	transform: translate(-50%, -50%) rotate(-90deg) scale(1.2);
}
```
***
##### **Container Box**
**`.container-box(@max-width, @padding);`**

- **`@max-width`** ~ is the max-width of container. It's optional.
- **`@padding`** ~ is the container padding.

***`Sample`***
```less
.container {
	.container-box(960px, 0 20px);
}
```
***`Output`***
```css
.container {
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
	padding: 0 20px;
}
```
***
##### **Clearfix**
**`.clearfix(@padding, @margin);`**

- **`@padding`** ~ *`optional`*.
- **`@margin`** ~ *`optional`*.

***`Sample`***
```less
.float-box {
	.clearfix;
}
```
***`Output`***
```css
.float-box {
	*zoom: 1;
}
.float-box:before, .float-box:after {
	display: table;
	content: "";
}
.float-box:after {
	clear: 
}
```
***
##### **Mixed Transition**
**`.transition-e(@values);`**

***`Sample:`***
```less
.transitioned {
	.transition-e(opacity .3s ease-in-out);
	.transition-e(transform .3s ease-in-out .3s);
}
```
***`Result:`***
```css
.transitioned {
	-webkit-transition: opacity .3s ease-in-out, transform .3s ease-in-out .3s;
	-moz-transition: opacity .3s ease-in-out, transform .3s ease-in-out .3s;
	-o-transition: opacity .3s ease-in-out, transform .3s ease-in-out .3s;
	transition: opacity .3s ease-in-out, transform .3s ease-in-out .3s;
}
```
***
##### **Public Transitions**
 - **`.public-effect`** - transition for `all` properties with `.3s` duration and `ease-in-out` easing.
 - **`.public-effect-fast`** - transition for `all` properties, `.2s` duration and `ease-in-out` easing.
 - **`.public-effect-slow`** - transition for `all` properties, `.6s` duration and `ease-in-out` easing.

***
##### **Border**
**`.border(@value);`**

- **`@value`** ~ is the border shorthand. Format can be `top-bottom lef-right style color` or `top right bottom left style color`. Use `none` as border size to skip the side.

***`Sample`***
```less
// top-bottom and lef-right side
.bordered {
	.border(1px 2px solid #ccc);
}
// All side
.bordered-2 {
	.border(1px 2px 3px 4px solid #ccc);
}
// Only top-bottom side.
.bordered-3 {
	.border(1px none solid #ccc);
}
```
***`Result`***
```css
.bordered {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	border-left: 2px solid #ccc;
	border-right: 2px solid #ccc;
}
.bordered-2 {
	border-top: 1px solid #ccc;
	border-right: 2px solid #ccc;
	border-bottom: 3px solid #ccc;
	border-left: 4px solid #ccc;
}
.bordered-3 {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
```

##### **Border Side Radius**
Border radius for each side, not each corner.

- **`.border-top-radius(@radius);`** ~ For `border-top-left-radius` and `border-top-right-radius`.
- **`.border-right-radius(@radius);`** ~ For `border-top-right-radius` and `border-bottom-right-radius`.
- **`.border-bottom-radius(@radius);`** ~ For `border-bottom-left-radius` and `border-bottom-right-radius`.
- **`.border-left-radius(@radius);`** ~ For `border-bottom-left-radius` and `border-top-left-radius`.

***
##### **Text Overflow**
**`.text-overflow;`**

***`Sample`***
```less
.tflow {
	.text-overflow;
}
```
***`Output`***
```css
.tflow {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```

***
##### **Hyphens**
**`.hyphens(@value);`** - Default value is `auto`.

***
#### **Layout Debugger**
Display red border in all box to show does the layout is right or not.

**`.debug-block;`**

***`Output`***
```css
* {
	box-shadow(0 0 0 1px red !important;
}
```

***
##### **Input Placeholder Color**
**`.input-placehoder(@color);`**

- **`@color`** ~ is the input placeholder color.

***
##### **Selection Color**
Customize the selection text-color and background-color.

**`.selection-color(@values)`**

- **`@values`** ~ shorthand format, can be `color` or `color background-color`.

***`Sample`***
```less
.selected-text-orange {
	.selection-color(orange);
}
.selected-text-bg-orange {
	.selection-color(orange black);
}
```
***`Output`***
```css
.selected-text-orange::selection {
	color: #ffa500;
}
.selected-text-orange::-moz-selection {
	color: #ffa500;
}
.selected-text-bg-orange::selection {
	color: #ffa500;
	background-color: #000000;
}
.selected-text-bg-orange::-moz-selection {
	color: #ffa500;
	background-color: #000000;
}
```	

***
###### **Mozilla Inner Focus Border**
Customize the Mozilla Inner Focus Border. Usually Firefox browser will show dotted border on anchor, submit button etc. You can hide or set the style with this.

**`.inner-focus-border(@border);`**

***
##### **Display**
Custom display mixins.

**`.block(@width @height);`** - Set display to block with or without size.
**`.inline-block(@width @height);`** - Set display to inline-block with or without size.
**`.inline(@width @height);`** - Set display to inline with or without size.
**`.table(@width @height);`** - Set display to table with or without size.
**`.table-cell(@width @height);`** - Set display to table-cell with or without size.
**`.flex-box(@width @height);`** - Set display to flex-box with or without size.
**`.size(@width @height);`** - Set the box size.

**`.invisible;`** - Set the visibility to hidden and opacity to 0.
**`.visible;`** - Set the visibility to visible and opacity to 1.
**`.hide;`** - Set display to none.
**`.show;`** - Set display to block.
**`.hidden;`** Set display to none, visibility to hidden, and opacity to 0.

***`Detail`***
- **`@width`** , **`@height`** - *`optional`* - is the box width and height if you want to define them. You can skip the value with `none` or just use `.block;` if you don't want to set the box size.

***`Sample`***
```less
.thumbnail {
	.block(256px);
}
.fit-block {
	.block(100% none);
}
.fit-height {
	.block(none 100%);
}
.just-block {
	.block;
}
```
***`Output`***
```css
.thumbnail {
  display: block;
  width: 256px;
  height: 256px;
}
.fit-block {
  display: block;
  width: 100%;
}
.fit-height {
  display: block;
  height: 100%;
}
.just-block {
  display: block;
}
```





***
### **CSS3 Standard**
- `.appearance(@val);`
- `.animation(@value);`
- `.animation-name(@name);`
- `.animation-duration(@duration);`
- `.animation-timing-function(@timing);`
- `.animation-delay(@delay);`
- `.animation-iteration-count(@repeat);`
- `.animation-direction(@direction);`
- `.animation-fill-mode(@mode);`
- `.animation-play-state(@state);`
- `.backface-visibility(@val);`
- `.background-clip(@value);`
- `.background-origin(@value);`
- `.background-size(@value);`
- `.border-image(@value);`
- `.border-image-outset(@value);`
- `.border-image-repeat(@value);`
- `.border-image-slice(@value);`
- `.border-image-source(@value);`
- `.border-image-width(@value);`
- `.border-radius(@radius);` 
- `.border-top-left-radius(@radius);`
- `.border-top-right-radius(@radius);`
- `.border-top-left-radius(@radius);`
- `.border-top-left-radius(@radius);`
- `.box-align(@value);`
- `.box-direction(@value);`
- `.box-decoration-break(@value);`
- `.box-flex(@value);`
- `.box-flex-group(@value);`
- `.box-line(@value);`
- `.box-ordinal-group(@value);`
- `.box-orien(@value);`
- `.box-pack(@value);`
- `.box-sizing(@val);`
- `.break-after(@value);`
- `.break-before(@value);`
- `.break-inside(@value);`
- `.clip-path(@val);`
- `.columns(@value);`
- `.column-count(@value);`
- `.column-fill(@value);`
- `.column-gap(@value);`
- `.column-rule(@value);`
- `.column-rule-style(@value);`
- `.column-rule-width(@value);`
- `.column-span(@value);`
- `.column-width(@value);`
- `.filter(@val);`
- `.grid-columns(@val);`
- `.grid-rows(@val);`
- `.hanging-punctuation(@val);`
- `.icon(@val);`
- `.marquee-direction(@value);`
- `.marquee-play-count(@value);`
- `.marquee-speed(@value);`
- `.marquee-style(@value);`
- `.nav-index(@value);`
- `.nav-left(@v);`
- `.nav-right(@v);`
- `.nav-up(@v);`
- `.opacity(@val);`
- `.punctuation-trim(@val);`
- `.resize(@val);`
- `.rotation(@v);`
- `.rotation-point(@v);`
- `.target(@val);`
- `.target-name(@val);`
- `.target-new(@val);`
- `.target-position(@val);`
- `.text-wrap(@val);`
- `.text-size-adjust(@val);`
- `.transition(@values);`
- `.transition-property(@prop);`
- `.transition-duration(@duration);`
- `.transition-timing-function(@repeat);`
- `.transition-delay(@delay);`
- `.user-select(@val);`
- `.word-berak(@val);`
- `.word-wrap(@val);`


***
Still writing . . .