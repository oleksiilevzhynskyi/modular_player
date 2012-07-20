var FileSelector = function (sandbox) {
    $(function () {
        sandbox.on('.fileinput', 'change', function () {
            var files = this.files;
            sandbox.publish('playlist::add', files);
        });
    })
}

Core.register('file-selector', function (sandbox) {
  return {
    init: function () {
        new FileSelector(sandbox);
    },
    destory: function () {
        sandbox.off('.fileinput', 'click');
    }
  }
});