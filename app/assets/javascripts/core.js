Core = (function () {
    var modulesData = {},
        register,
        start,
        stop,
        startAll,
        stopAll;

    register = function (moduleId, constructor) {
        modulesData[moduleId] = {
            constructor: constructor,
            instance: null
        };
    };

    start = function (moduleId) {
        var data = modulesData[moduleId];
        if ( data ) {
            data.instance = data.constructor( new SandBox(this, moduleId) );
            data.instance.init();
        }
    };

    stop = function (moduleId) {
        var data = modulesData[moduleId];
        if ( data && data.instance ) {
            data.instance.destroy();
            data.instance = null;
        }
    };

    startAll = function () {
        for (var moduleId in modulesData) {
            if ( modulesData.hasOwnProperty(moduleId) ) {
                this.start(moduleId);
            }
        }
    };

    stopAll = function () {
        for (var moduleId in modulesData) {
            if ( modulesData.hasOwnProperty(moduleId) ) {
                this.stop(moduleId);
            }
        }
    };

    return {
        register: register,
        stop: stop,
        start: start,
        startAll: startAll,
        stopAll: stopAll
    };
})();