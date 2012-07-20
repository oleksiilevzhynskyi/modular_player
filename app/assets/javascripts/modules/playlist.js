var Playlist = function (sandbox) {
    var list = [],
        _render,
        _bindings,
        that = this;

    _render = function () {
        var template = sandbox.template('playlist', {list: list});
        sandbox.insertHTML("", template);
    };

    _bindings = function () {
        sandbox.on('.play', 'click', that.play);
        sandbox.on('.remove', 'click', that.remove);
    };

    _findSong = function (name) {
        for (var i = 0, max = list.length; i < max; i++) {
            if (list[i].name === name) {
                return list[i]
            }
        }
    }

    this.add = function (files) {
        for (var i = 0, max = files.length; i < max; i++) {
            list.push(files[i]);
        }
        _render();
    };

    this.play = function () {
        var item = sandbox.closest(this, 'tr'),
            song = _findSong( sandbox.getData(item, 'name') );
        sandbox.publish('player::play', song);
    }

    this.remove = function () {
    }

    $(function () {
        _bindings();
    });
}

Core.register('playlist', function (sandbox) {
    return {
        init: function () {
            var playlist = new Playlist(sandbox);
            sandbox.subscribe('playlist::add', playlist.add);
        }
    }
})