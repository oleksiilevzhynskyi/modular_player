var TemplateEngine = function () {
    var templates = {};
    return {
        get: function (name) {
            var undefined;
            if ( templates[name] === undefined ) {
                templates[name] = _.template( $("script[data-name='" + name + "']").html() );
            }
            return templates[name];
        }
    };
};

$(function () {
    Core.templateEngine = new TemplateEngine;
})
