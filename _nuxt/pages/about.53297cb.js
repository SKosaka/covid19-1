(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{297:function(t,n,e){var content=e(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("3559834e",content,!0,{sourceMap:!1})},298:function(t,n,e){var content=e(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("97e7ab7c",content,!0,{sourceMap:!1})},300:function(t,n,e){var content=e(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("e882ae98",content,!0,{sourceMap:!1})},303:function(t,n,e){"use strict";var o=e(297);e.n(o).a},304:function(t,n,e){(n=e(15)(!1)).push([t.i,".header[data-v-492c3bde]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-492c3bde]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-492c3bde]{font-size:2rem}}",""]),t.exports=n},305:function(t,n,e){"use strict";var o=e(298);e.n(o).a},306:function(t,n,e){(n=e(15)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=n},309:function(t,n,e){"use strict";var o=e(0).a.extend({props:{icon:{type:String,required:!1,default:""}}}),r=(e(303),e(6)),l=e(44),c=e.n(l),_=e(289),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[this.icon?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"492c3bde",null);n.a=component.exports;c()(component,{VIcon:_.a})},310:function(t,n,e){"use strict";e(82);var o=e(0).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),r=(e(305),e(6)),l=e(44),c=e.n(l),_=e(289),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize/10+"rem","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);n.a=component.exports;c()(component,{VIcon:_.a})},316:function(t,n,e){"use strict";var o=e(300);e.n(o).a},317:function(t,n,e){(n=e(15)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #01a0c7}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=n},351:function(t,n,e){"use strict";var o=e(0).a.extend(),r=(e(316),e(6)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);n.a=component.exports},518:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(309),l=e(351),c=e(310),_=o.a.extend({components:{PageHeader:r.a,StaticCard:l.a,ExternalLink:c.a},head:function(){return{title:this.$t("当サイトについて")}}}),d=e(6),component=Object(d.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"About"},[e("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),e("static-card",[e("i18n",{attrs:{tag:"p",path:"当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、{volunteer}が開設したまとめサイトです。"},scopedSlots:t._u([{key:"volunteer",fn:function(){return[e("external-link",{attrs:{url:"https://github.com/stop-covid19-hyogo/covid19/blob/development/CONTRIBUTORS.md","icon-size":16}},[t._v("\n          "+t._s(t.$t("有志の仲間"))+"\n        ")])]},proxy:!0}])}),t._v(" "),e("i18n",{attrs:{tag:"p",path:"複製・改変が許されたオープンソースライセンスで公開されている、{tokyo}の仕組みを利用しています。"},scopedSlots:t._u([{key:"tokyo",fn:function(){return[e("external-link",{attrs:{url:"https://stopcovid19.metro.tokyo.lg.jp/","icon-size":16}},[t._v("\n          "+t._s(t.$t("東京都公式新型コロナウイルス感染症対策サイト"))+"\n        ")])]},proxy:!0}])}),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("兵庫県による公式情報と客観的な数値をわかりやすく伝えることで、兵庫県にお住まいの方や、兵庫県内に拠点を持つ企業の方、兵庫県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))+"\n    ")])],1),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("データについて")))]),t._v(" "),e("i18n",{attrs:{tag:"p",path:"本サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。（データは順次追加予定です）"},scopedSlots:t._u([{key:"catalogWebsite",fn:function(){return[e("external-link",{attrs:{url:"http://open-data.pref.hyogo.lg.jp/","icon-size":16}},[t._v("\n          "+t._s(t.$t("ひょうごオープンデータカタログ"))+"\n        ")])]},proxy:!0}])}),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("このサイトの内容物は"))+"\n      "),e("external-link",{attrs:{url:t.$t("https://creativecommons.org/licenses/by/4.0/deed.ja"),"icon-size":16}},[t._v("\n        "+t._s(t.$t("クリエイティブ・コモンズ 表示 4.0 ライセンス"))+"\n      ")]),t._v("\n      "+t._s(t.$t("の下に提供されています。"))+"\n    ")],1)],1),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("免責事項 ")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、私たちは利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。 "))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("ブラウザ環境について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),e("li",[t._v("\n        "+t._s(t.$t("Google Chrome 最新版（Windows 10以上, Android 8.0以上）"))+"\n      ")]),t._v(" "),e("li",[t._v(t._s(t.$t("Safari 最新版（macOS, iOS）")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Opera 最新版")))])]),t._v(" "),e("p",{staticClass:"StaticCard-Note"},[e("span",[t._v(t._s(t.$t("※")))]),t._v(" "),e("span",[t._v("\n        "+t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。"))+"\n      ")])])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("当サイトへのリンクについて")))]),t._v(" "),e("p",[t._v(t._s(t.$t("当サイトへのリンクは自由です。")))])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("JavaScriptについて")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),e("br"),t._v("\n      "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),e("br"),t._v("\n      "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("クッキー (Cookie) について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),e("br"),t._v("\n      "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),e("br")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("Google Analyticsの利用について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[e("external-link",{attrs:{url:t.$t("https://marketingplatform.google.com/about/analytics/terms/jp/"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])],1),t._v(" "),e("li",[e("external-link",{attrs:{url:t.$t("https://policies.google.com/privacy?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])],1),t._v(" "),e("li",[e("external-link",{attrs:{url:t.$t("https://support.google.com/analytics/answer/6004245?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])],1)]),t._v(" "),e("i18n",{attrs:{tag:"p",path:"Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"},scopedSlots:t._u([{key:"addon",fn:function(){return[e("external-link",{attrs:{url:t.$t("https://tools.google.com/dlpage/gaoptout?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("測定を無効にするブラウザ アドオン"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("ソースコードについて")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n      "),e("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[e("external-link",{attrs:{url:"https://github.com/stop-covid19-hyogo/covid19","icon-size":16}},[t._v("\n            "+t._s(t.$t("GitHub リポジトリ"))+"\n          ")])]},proxy:!0}])})],1)]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("お問い合わせ先")))]),t._v(" "),e("p",[t._v(t._s(t.$t("以下のメールアドレスまでご連絡ください。")))]),t._v(" "),e("p",[t._v("stop.covid19.hyogo＠gmail.com")]),t._v(" "),e("p",[t._v(t._s(t.$t("※ アットマークを半角に変換してください。")))])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);