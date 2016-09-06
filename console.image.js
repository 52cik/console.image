(function(console) {
  'use strict';

  console.image = function image (url, callback) {
    var img = new Image;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve, reject) {
      img.onerror = reject;
      loadIamge(resolve);
    });

    function loadIamge(resolve) {
      img.onload = function () {
        var width = canvas.width = img.width;
        var height = canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        var data = ctx.getImageData(0, 0, width, height).data;
        var text_shadow = 'text-shadow:';

        for (var x = 0; x < width; x++) {
          for (var y = 0; y < height; y++) {
            var offset = y * width * 4 + x * 4;
            // text_shadow += `${x}px ${y}px 0 rgba(${data[offset]},${data[offset + 1]},${data[offset + 2]},${data[offset + 3]}),`;
            text_shadow += x + 'px ' + y + 'px 0 rgba(' + data[offset] + ',' + data[offset + 1] + ',' + data[offset + 2] + ',' + data[offset + 3] + '),';
          }
        }

        text_shadow = text_shadow.slice(0, -1);

        console.log('%c.', 'color:transparent;' + text_shadow);
        callback ? callback() : resolve();
      }

      img.src = url;
    }

  };

})(console);
