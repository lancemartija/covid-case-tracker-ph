(this["webpackJsonpcovid-case-tracker-ph"]=this["webpackJsonpcovid-case-tracker-ph"]||[]).push([[0],{12:function(e,s,t){},13:function(e,s,t){},17:function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),a=t(3),n=t.n(a),r=(t(12),t(4)),d=t(5),h=t(7),l=t(6),o=(t(13),t(0)),j=function(e){var s=e.cases;return Object(o.jsxs)("div",{className:"has-text-centered p-6 has-background-primary",children:[Object(o.jsx)("h1",{className:"title is-1 title-font is-uppercase has-text-weight-semibold has-text-white text-shadow",children:"Covid-19 Tracker PH"}),Object(o.jsx)("h3",{className:"subtitle is-5 has-text-white",children:"Simplified Information Hub for PH Covid-19 Cases"}),Object(o.jsxs)("h3",{className:"is-size-6 p-3 has-text-white",children:["(Last Updated: ",s.lastUpdatedAtApify,")"]})]})},b=function(e){var s=e.cases;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"title is-4 has-text-centered",children:Object(o.jsx)("h1",{className:"title-font",children:"TOTAL CASES"})}),Object(o.jsxs)("div",{className:"tile is-ancestor ml-6 mr-6",children:[Object(o.jsxs)("div",{className:"tile is-parent is-vertical has-text-centered is-size-5",children:[Object(o.jsx)("div",{className:"tile is-child box m-3 has-background-danger grow",children:Object(o.jsxs)("h3",{className:"has-text-white",children:["Infected: ",s.infected]})}),Object(o.jsx)("div",{className:"tile is-child box m-3 has-background-info grow",children:Object(o.jsxs)("h3",{className:"has-text-white",children:["Tested: ",s.tested]})}),Object(o.jsx)("div",{className:"tile is-child box m-3 has-background-success grow",children:Object(o.jsxs)("h3",{className:"has-text-white",children:["Recovered: ",s.recovered]})})]}),Object(o.jsxs)("div",{className:"tile is-parent is-vertical has-text-centered is-size-5",children:[Object(o.jsx)("div",{className:"tile is-child box m-3 has-background-black-ter grow",children:Object(o.jsxs)("h3",{className:"has-text-white",children:["Deceased: ",s.deceased]})}),Object(o.jsx)("div",{className:"tile is-child box m-3 has-background-warning grow",children:Object(o.jsxs)("h3",{className:"has-text-warning-dark",children:["Active Cases: ",s.activeCases]})}),Object(o.jsx)("div",{className:"tile is-child box m-3 has-background-warning-dark grow",children:Object(o.jsxs)("h3",{className:"has-text-warning-light",children:["Unique Cases: ",s.unique]})})]})]})]})},x=function(e){Object(h.a)(t,e);var s=Object(l.a)(t);function t(){var e;return Object(r.a)(this,t),(e=s.call(this)).state={cases:[]},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true").then((function(e){return e.json()})).then((function(s){return e.setState({cases:s})}))}},{key:"render",value:function(){var e=this.state.cases;return 0===e.length?Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{cases:e}),Object(o.jsx)("div",{className:"columns is-centered m-4",children:Object(o.jsx)("p",{className:"box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white",children:"Loading..."})})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{cases:e}),Object(o.jsx)(b,{cases:e})]})}}]),t}(c.Component),u=(t(15),t(16),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,a=s.getLCP,n=s.getTTFB;t(e),c(e),i(e),a(e),n(e)}))});n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.72682f5f.chunk.js.map