KISSY.add(function(S, Lang, CBaseView, @NAME_CAMELCASE_L@Tpl) {
    "use strict";
    return CBaseView.extend({
        template: @NAME_CAMELCASE_L@Tpl,
        onRender:function(){
            //TODO: render完成之后的处理
        }
    });
}, {
    requires: [
        "lang",
        "c/base/CBaseView",
        "./tpl/@NAME@-tpl",
        "./assets/@NAME@.css"
    ]
});

