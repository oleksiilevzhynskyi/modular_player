var CoolPlayer = function (Player) {
  var list = [],
      current = 0,
      localPlayer = null,
      _next,
      _play,
      _onProgress;

  this.add = function (files) {
    for (var i = 0, max = files.length; i < max; i++) {
      list.push(files[i]);
    }
  };

  this.get = function () {
    var titles = [];
    for (var i = 0, max = this.list.length; i < max; i++) {
      titles.push(list.name);
    }
    return titles;
  };

  _play = this.play = function (file) {
    if (localPlayer) {
      localPlayer.stop();
      localPlayer.off();
      delete localPlayer
    }
    localPlayer = Player.fromFile(file || list[current]);
    localPlayer.play();
    localPlayer.on('progress', function (persent) { _onProgress(persent); });
  };

  _next = this.next = function () {
    if (current < list.length - 1 ) {
      current += 1;
    } else {
      current = 0;
    }
    _play();
  };

  this.prev = function () {
    if (current > 0 ) {
      current -= 1;
    } else {
      current = list.length - 1;
    }
    _play();
  };

  this.getCurrentTime = function () {
    if (localPlayer) {
      return localPlayer.currentTime
    }
  };

  this.togglePlayback = function () {
    if (localPlayer) {
      localPlayer.togglePlayback();
    }
  };

  _onProgress = function (duration) {
    if (duration === localPlayer.duration) {
      _next();
    }
  };

};

Core.register('cool-player', function (sandbox) {
  return {
    init: function () {
      coolPlayer = new CoolPlayer(sandbox.player);
      sandbox.subscribe('player::play', coolPlayer.play);
      sandbox.subscribe('player::next', coolPlayer.next);
      sandbox.subscribe('player::prev', coolPlayer.prev);
      sandbox.subscribe('player::togglePlayback', coolPlayer.togglePlayback);
      sandbox.subscribe('player::add', coolPlayer.add);
    },
    destory: function () {
    }
  }
});