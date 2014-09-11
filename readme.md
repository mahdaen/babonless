#BabonLESS
----------
BabonLESS is just another LESS library. BabonLESS help you with CSS3 mixins and some usable mixins. Really, you'll love to use the mixins.

Example:

```less
.flying-block {
	.block(50%);
	.absolute(50% none none 50%);
	.translate(-50% -50%);
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
}
```
	


##Features:

#### Vendor Prefixer
Vendor Prefixer lets you create mixins that automatically prefixed.

### Box Sizing

```less
.box-sizing(@value);

```