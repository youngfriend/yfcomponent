KISSY.add(function(S, CBaseView, @NAME_CAMELCASE_L@Tpl) {
    "use strict";
    return CBaseView.extend({
        template: @NAME_CAMELCASE_L@Tpl,
        onRender:function(){
            //TODO: render完成之后的处理
        }
    });
}, {
    requires: [
        "c/base/CBaseView",
        "./tpl/@NAME@-tpl",
        "./assets/@NAME@.css"
    ]
});

