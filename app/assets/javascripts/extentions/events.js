var Events = function () {
    this.on = function(wrapper, selector, action, callback) {
        $(wrapper).on(action, selector, callback);
    };
    this.off = function(wrapper, selector, action) {
        $(wrapper).off(action, selector);
    };
}

Core.events = new Events();