(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8aae"],{"39f4":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("d2-container",[t("template",{slot:"header"},[e._v("表格内编辑")]),t("d2-crud",{attrs:{columns:e.columns,data:e.data}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:e.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:e.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},l=[],d=(t("cadf"),t("551c"),t("097d"),t("59df")),s=t.n(d),r="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          component: {\n            name: 'el-date-picker',\n            size: 'small'\n          }\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          component: {\n            name: 'el-select',\n            options: [\n              {\n                value: '王小虎',\n                label: '王小虎'\n              },\n              {\n                value: '王中虎',\n                label: '王中虎'\n              },\n              {\n                value: '王老虎',\n                label: '王老虎'\n              }\n            ],\n            size: 'small'\n          }\n        },\n        {\n          title: '地址',\n          key: 'address',\n          component: {\n            name: 'el-input',\n            size: 'small'\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ]\n    }\n  }\n}\n<\/script>",o={data:function(){return{doc:s.a,code:r,columns:[{title:"日期",key:"date",component:{name:"el-date-picker",size:"small"}},{title:"姓名",key:"name",component:{name:"el-select",options:[{value:"王小虎",label:"王小虎"},{value:"王中虎",label:"王中虎"},{value:"王老虎",label:"王老虎"}],size:"small"}},{title:"地址",key:"address",component:{name:"el-input",size:"small"}}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}}},c=o,i=t("2877"),m=Object(i["a"])(c,a,l,!1,null,null,null);m.options.__file="index.vue";n["default"]=m.exports},"59df":function(e,n){e.exports="向 `columns` 的 `component` 对象传入 `name` 属性来控制渲染的组件，默认为 `el-input` ，支持的组件有 `el-input-number` `el-radio` `el-checkbox` `el-select` `el-cascader` `el-switch` `el-slider` `el-time-select` `el-time-picker` `el-date-picker` `el-rate` `el-color-picker` ，也可以使用 `render函数` 自己渲染组件，只需在 `component` 中传入 `renderFuntion` ，接收两个参数： `h`是render函数的固定参数， `scope` 是单元格中的数据，[render函数使用方法](https://cn.vuejs.org/v2/guide/render-function.html)。代码如下：\n"}}]);
//# sourceMappingURL=chunk-8aae.cfa5cc75.js.map