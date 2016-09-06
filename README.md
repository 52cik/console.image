# console.image

> Display the picture on the Chrome 50+ console.log.

**Works in Chrome 50+ and Chrome only.**

[live demo][live demo]


## How to use it

### `console.image(url, callback)`

```js
console.image('rem.jpg');
// or callback
console.image('rem.jpg', function () {
  console.log('%c\t\t如果真爱有颜色，那一定是蓝色。', 'color:#4062a0;font-weight:bold;');
});
// or promise
console.image('rem.jpg').then(function () {
  console.log('%c\t\t如果真爱有颜色，那一定是蓝色。', 'color:#4062a0;font-weight:bold;');
});
```
> (only works if 'Access-Control-Allow-Origin' header is present on the requested resource, e.g. wikimedia or imgur).



## How it works

 A temporary canvas is created in which the image is drawn. getImageData creates an Array that contains the rgb values of every pixel. The image is drawn as a series of 1x1 text-shadows of a single dot.


[live demo]: http://52cik.github.io/console.image/
