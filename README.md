# Spinner CSS

### Description

Spinner CSS is a loading spinner that is generated entirely in css.

### How to use with JavaScript

1) Include <code>spinner.css</code> near the bottom of head in your html
```html
<head>
  ...
  <link href="spinner.css" rel="stylesheet" />
</head>
```

2) Include <code>spinner.js</code> near the bottom of the body in your html
```html
<body>
  ...
  <script src="spinner.js"></script>
</body>
```

3) Place the <code>spinner</code> attribute on the element you'd like to contain the spinner. (make sure it is a block element)
```html
<div spinner></div>
```

### How to use without JavaScript

1) Include <code>spinner.css</code> near the bottom of head in your html.
```html
<head>
  ...
  <link href="spinner.css" rel="stylesheet" />
</head>
```

2) Place the <code>spinner</code> attribute on the element you'd like to contain the spinner. (make sure it is a block element)
```html
<div spinner></div>
```

3) Put 12 <code>div</code> elements in the element that you added the <code>spinner</code> attribute to in the last step.
```html
<div spinner>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
