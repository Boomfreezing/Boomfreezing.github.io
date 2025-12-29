(function () {
  function start() {
    try {
      initWidget({
        waifuPath: '/dist/live2d-widget-master/dist/waifu-tips.json',
        logLevel: 'info',
        cubism2Path: '/dist/live2d-widget-master/dist/chunk/index.js',
        cubism5Path: '/dist/live2d-widget-master/dist/chunk/index2.js'
      });
    } catch (e) {
      console.error('initWidget 未就绪，稍后重试', e);
      setTimeout(start, 300);
    }
  }

  if (window.initWidget) {
    start();
  } else {
    var s = document.createElement('script');
    s.src = '/dist/live2d-widget-master/dist/autoload.js';
    s.onload = start;
    s.onerror = function () { console.error('无法加载 autoload.js'); };
    document.head.appendChild(s);
  }
})();
