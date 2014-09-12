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
### **Common Mixins**

**Vendor Prefixer**
Vendor Prefixer lets you create mixins that automatically prefixed.
```less
.prefixer(@prop-name; @values; @origin; @mixed);
```

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
#### **Most Used**

**Box Sizing**
Reset elements box model.
`.box-sizing(@model);`

**`@model`** - is the box sizing model `border-box, padding-box, etc`.

***
### **Animation**
CSS3 animation mixins.

**Animation**
`.animation(@value);`

**Animation Name.**
`.animation-name(@name);`

**Animation Duration.**
`.animation-duration(@duration);`

**Animation Timing Function.**
`.animation-timing-function(@timing);`

**Animation Delay.**
`.animation-delay(@delay);`

**Animation Iteration Count.**
`.animation-iteration-count(@repeat);`

**Animation Direction.**
`.animation-direction(@direction);`

**Animation Fill Mode.**
`.animation-fill-mode(@mode);`

**Animation Play State.**
`.animation-play-state(@state);`

***
### **Transition**
**Transition**
`.transition(@values);`

***`Sample:`***
`.transition(all .3s ease-in-out);`

**Mixed Transition**
`.transition-e(@values);`

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
**Transition Property**
`.transition-property(@prop);`

**Transition Duration**
`.transition-duration(@duration);`

**Transition Timing Function**
`.transition-timing-function(@repeat);`

**Transition Delay**
`.transition-delay(@delay);`

**Public Transitions**
 - `.public-effect` - transition for `all` properties with `.3s` duration and `ease-in-out` easing.
 - `.public-effect-fast` - transition for `all` properties, `.2s` duration and `ease-in-out` easing.
 - `.public-effect-slow` - transition for `all` properties, '.6s` duration and `ease-in-out` easing.

***
Still writing . . .