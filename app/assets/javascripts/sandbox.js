var SandBox = function (core, moduleId) {
    var containerSelector = '#' + moduleId
    return {
        subscribe: function (event, callback) {
            core.PubSub.subscribe(event, callback);
        },
        publish: function (event, data) {
            core.PubSub.publish(event, data);
        },
        unsubscribe: function (event) {
            core.PubSub.unsubscribe(event);
        },
        on: function (selector, event, callback) {
            core.events.on(containerSelector, selector, event, callback);
        },
        off: function (selector, event) {
            core.events.on(containerSelector, selector, event);
        },
        find: function (selector) {
            return core.dom.find(containerSelector + ' ' + selector).get(0);
        },
        insertHTML: function (selector, html) {
            var element = this.find(selector);
            core.dom.insertHTML(element, html);
        },
        parent: function (element) {
            return core.dom.parent(element).get(0);
        },
        closest: function (element, selector) {
            return core.dom.closest(element, selector).get(0);
        },
        getData: function (element, field) {
            return core.dom.getData(element, field);
        },
        template: function(templateId, data) {
            console.log('op')
            var template = core.templateEngine.get(templateId);
            console.log(template)
            if (template) {
                return template(data);
            }
        },
        player: core.Player
    }
}

window.SandBox = SandBox
