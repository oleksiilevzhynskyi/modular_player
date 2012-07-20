var Navigator = function (sandbox) {
    $(function () {
        sandbox.on('.next', 'click', function () {
            sandbox.publish('playlist::next');
        });
        sandbox.on('.prev', 'click', function () {
            sandbox.publish('playlist::prev');
        });
        sandbox.on('.pause', 'click', function () {
            sandbox.publish('playlist::togglePlayback');
        });
    });
};

Core.register('navigator', function (sandbox) {
  return {
    init: function () {
      new Navigator(sandbox);
    },
    destory: function () {
        sandbox.off('.next', 'click');
        sandbox.off('.prev', 'click');
        sandbox.off('.pause', 'click');
        sandbox.off('.fileinput', 'click');
    }
  }
});