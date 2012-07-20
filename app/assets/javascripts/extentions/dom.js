var DOM = function () {
    this.find = function (selector) {
        return $(selector);
    }
    this.insertHTML = function (selector, html) {
        $(selector).html(html);
    }
    this.parent = function (selector) {
        return $(selector).parent();
    }
    this.getData = function (selector, field) {
        return $(selector).data(field);
    }
    this.closest = function (element, selector) {
        return $(element).closest(selector);
    }

}

Core.dom = new DOM();