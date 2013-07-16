KISSY.add(function(S, B) {
    "use strict";
    return B.Model.extend({
        defaults: {
            label: "",
            align: "auto"
        }
    });
}, {
    requires: [
        "app"
    ]
});
