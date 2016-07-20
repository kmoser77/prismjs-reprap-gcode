# prismjs-reprap-gcode
Reprap G-Code language definition for [Prism.js](http://prismjs.com/) syntax highlighter

## Screenshot

![ScreenShot](https://raw.github.com/kmoser77/prismjs-reprap-gcode/master/screenshot.png)

## Installation

Include prism.js to your web page

```html
<link href="vendor/prism/prism.css" rel="stylesheet" />
<script src="vendor/prism/prism.js" type="text/javascript"></script>
```

Include the additional language file after prism.js

```html
<script src="js/prism.language.reprap_gcode.js" type="text/javascript"></script>
```

## Usage

Use the class **language-reprap_gcode** for highlightning your G-Codes.

```html
<pre><code class="language-reprap_gcode">G28 X0 Y0 ;move X/Y to min endstops</code></pre>
```
