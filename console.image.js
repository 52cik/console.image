(function(console) {
  'use strict';

  console.image = function image (url, callback) {
    var img = new Image;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    img.onload = function () {
      var width = canvas.width = img.width;
      var height = canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      var data = ctx.getImageData(0, 0, width, height).data;
      var text_shadow = 'text-shadow:';

      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          text_shadow += `${x}px ${y}px 0px rgba(${data[y * width * 4 + x * 4]},${data[y * width * 4 + x * 4 + 1]},${data[y * width * 4 + x * 4 + 2]},${data[y * width * 4 + x * 4 + 3]}),`;
        }
      }

      text_shadow = text_shadow.slice(0, -1);

      console.log('%c.', 'color:#fff;' + text_shadow);
      callback && callback();
    }

    img.src = url;
  };

})(console);
