var PubSub = function () {
    var publish,
        subscribe,
        unsubscribe,
        queue = this.queue = {};

    this.publish = function (channel, args) {
        if (queue[channel]) {
            var thisChannel = queue[channel],
                thisArgs = args;
            for (var i = 0, j = thisChannel.length; i < j; i++) {
                thisChannel[i].call(window, thisArgs);
            }
        };
        return this
    };

    this.subscribe = function (channel, callback) {
        if (!callback) {
            return {}
        };
        if (!queue[channel]) {
            queue[channel] = [];
        }
        queue[channel].push(callback);
        return {
            channel: channel,
            callback: callback
        }
    };

    this.unsubscribe = function(handle) {
        var channel = handle.channel,
            callback = handle.callback,
            thisChannel = queue[channel];
        if (thisChannel) {
            for (var i = 0, j = thisChannel.length; i < j; i++ ) {
                if (thisChannel[i] = callback) {
                    thisChannel.splice(i, 1)
                }
            }
        }
        return this;
    };
};

Core.PubSub = new PubSub();