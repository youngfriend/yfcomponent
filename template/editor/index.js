KISSY.add(function(S, Lang, CBaseEditorView, Attrs, @NAME_CAMELCASE_U@, @NAME_CAMELCASE_L@Tpl) {
    "use strict";
    return CBaseEditorView.extend({
        cPath: "c/@NAME@/",

        ATTRS: Attrs,

        View: @NAME_CAMELCASE_U@,

        template: @NAME_CAMELCASE_L@Tpl,

        inspectableAttrs: {
            label: {
                desc: "标签",
                type: "text"
            },
            align: {
                desc: "对齐方式",
                type: "radio",
                radios: [
                    {
                        desc: "自动",
                        value: "auto"
                    },
                    {
                        desc: "左对齐",
                        value: "left"
                    },
                    {
                        desc: "右对齐",
                        value: "right"
                    },
                    {
                        desc: "上对齐",
                        value: "top"
                    }
                ]
            }
        }        
    }, {
        cName: "@CNAME@"
    });
}, {
    requires: [
        "lang",
        "c/base/CBaseEditorView",
        "./Attrs",
        "../",
        "../tpl/@NAME@-tpl",
        "../assets/@NAME@.css"
    ]
});

