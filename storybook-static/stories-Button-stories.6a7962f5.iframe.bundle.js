(self.webpackChunksever=self.webpackChunksever||[]).push([[791],{"./stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-jsx/style.js"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./stories/button.css");function cov_2nf4xx3uuk(){var path="D:\\react at sabaicode\\Homework\\sever\\stories\\Button.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"c01f71f3721616f6e628f02fa5c13048872f1145"===coverage[path].hash||(coverage[path]={path:"D:\\react at sabaicode\\Homework\\sever\\stories\\Button.tsx",statementMap:{0:{start:{line:7,column:26},end:{line:35,column:1}},1:{start:{line:8,column:17},end:{line:8,column:86}},2:{start:{line:9,column:4},end:{line:34,column:7}},3:{start:{line:36,column:0},end:{line:108,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:26},end:{line:7,column:27}},loc:{start:{line:7,column:100},end:{line:35,column:1}},line:7}},branchMap:{0:{loc:{start:{line:7,column:29},end:{line:7,column:44}},type:"default-arg",locations:[{start:{line:7,column:39},end:{line:7,column:44}}],line:7},1:{loc:{start:{line:7,column:46},end:{line:7,column:61}},type:"default-arg",locations:[{start:{line:7,column:53},end:{line:7,column:61}}],line:7},2:{loc:{start:{line:8,column:17},end:{line:8,column:86}},type:"cond-expr",locations:[{start:{line:8,column:27},end:{line:8,column:54}},{start:{line:8,column:57},end:{line:8,column:86}}],line:8},3:{loc:{start:{line:19,column:20},end:{line:23,column:25}},type:"binary-expr",locations:[{start:{line:19,column:20},end:{line:19,column:25}},{start:{line:19,column:29},end:{line:19,column:52}},{start:{line:19,column:56},end:{line:19,column:71}},{start:{line:19,column:75},end:{line:23,column:19}},{start:{line:23,column:23},end:{line:23,column:25}}],line:19}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0],1:[0],2:[0,0],3:[0,0,0,0,0]},inputSourceMap:{version:3,sources:["D:/react at sabaicode/Homework/sever/stories/Button.tsx"],sourcesContent:["import React from 'react';\nimport './button.css';\n\nexport interface ButtonProps {\n  /**\n   * Is this the principal call to action on the page?\n   */\n  primary?: boolean;\n  /**\n   * What background color to use\n   */\n  backgroundColor?: string;\n  /**\n   * How large should the button be?\n   */\n  size?: 'small' | 'medium' | 'large';\n  /**\n   * Button contents\n   */\n  label: string;\n  /**\n   * Optional click handler\n   */\n  onClick?: () => void;\n}\n\n/**\n * Primary UI component for user interaction\n */\nexport const Button = ({\n  primary = false,\n  size = 'medium',\n  backgroundColor,\n  label,\n  ...props\n}: ButtonProps) => {\n  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';\n  return (\n    <button\n      type=\"button\"\n      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}\n      {...props}\n    >\n      {label}\n      <style jsx>{`\n        button {\n          background-color: ${backgroundColor};\n        }\n      `}</style>\n    </button>\n  );\n};\n"],names:["React","Button","primary","size","backgroundColor","label","props","mode","button","type","join"],mappings:";;AAAA,OAAOA,WAAW,QAAQ;AAC1B,OAAO,eAAe;AAyBtB;;CAEC,GACD,OAAO,MAAMC,SAAS,CAAC,EACrBC,UAAU,KAAK,EACfC,OAAO,QAAQ,EACfC,eAAe,EACfC,KAAK,EACL,GAAGC,OACS;IACZ,MAAMC,OAAOL,UAAU,8BAA8B;IACrD,qBACE,MAACM;QACCC,MAAK;QAEJ,GAAGH,KAAK;;;;;oBAKeF;;;oBALpBE,SAAAA,2BAAAA,mBADO;YAAC;YAAoB,CAAC,kBAAkB,EAAEH,KAAK,CAAC;YAAEI;SAAK,CAACG,IAAI,CAAC;;YAGvEL;;;;oBAGuBD;;kFAAAA;;;;AAK9B,EAAE"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c01f71f3721616f6e628f02fa5c13048872f1145"});var actualCoverage=coverage[path];return cov_2nf4xx3uuk=function(){return actualCoverage},actualCoverage}cov_2nf4xx3uuk(),cov_2nf4xx3uuk().s[0]++;const Button=({primary=(cov_2nf4xx3uuk().b[0][0]++,!1),size=(cov_2nf4xx3uuk().b[1][0]++,"medium"),backgroundColor,label,...props})=>{cov_2nf4xx3uuk().f[0]++;const mode=(cov_2nf4xx3uuk().s[1]++,primary?(cov_2nf4xx3uuk().b[2][0]++,"storybook-button--primary"):(cov_2nf4xx3uuk().b[2][1]++,"storybook-button--secondary"));return cov_2nf4xx3uuk().s[2]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{type:"button",...props,className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["1db2ff09cbb475ab",[backgroundColor]]])+" "+(cov_2nf4xx3uuk().b[3][0]++,props&&(cov_2nf4xx3uuk().b[3][1]++,null!=props.className)&&(cov_2nf4xx3uuk().b[3][2]++,props.className)||(cov_2nf4xx3uuk().b[3][3]++,["storybook-button",`storybook-button--${size}`,mode].join(" "))||(cov_2nf4xx3uuk().b[3][4]++,"")),children:[label,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"1db2ff09cbb475ab",dynamic:[backgroundColor],children:`button.__jsx-style-dynamic-selector{background-color:${backgroundColor}}`})]})};cov_2nf4xx3uuk().s[3]++,Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}}},"./stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./stories/Button.tsx").$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Primary={args:{primary:!0,label:"Button"}},Secondary={args:{label:"Button"}},Large={args:{size:"large",label:"Button"}},Small={args:{size:"small",label:"Button"}},__namedExportsOrder=["Primary","Secondary","Large","Small"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",...Small.parameters?.docs?.source}}}},"./node_modules/styled-jsx/style.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/styled-jsx/dist/index/index.js").style}}]);