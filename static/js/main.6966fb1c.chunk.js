(this["webpackJsonpcovid-case-tracker-ph"]=this["webpackJsonpcovid-case-tracker-ph"]||[]).push([[0],{128:function(e,t,s){},129:function(e,t,s){},428:function(e,t,s){"use strict";s.r(t);var a=s(4),c=s.n(a),i=s(121),n=s.n(i),r=(s(128),s(19)),d=s(20),l=s(22),h=s(21),o=(s(129),s(1)),j=function(e){e.cases;return Object(o.jsxs)("div",{className:"has-text-centered pv5 has-background-primary",children:[Object(o.jsx)("h1",{className:"title is-1 title-font is-uppercase has-text-weight-semibold has-text-white text-shadow",children:"Covid-19 Tracker PH"}),Object(o.jsx)("h3",{className:"subtitle is-5 has-text-white mb-6",children:"Simplified Information Hub for PH Covid-19 Cases"})]})},b=(s(131),function(e){var t=e.confirmed,s=e.deaths,a=e.date;return Object(o.jsxs)("div",{className:"tc pt-6 pb-6 ml-6 mr-6 ",children:[Object(o.jsxs)("div",{className:"mb-5",children:[Object(o.jsx)("h1",{className:"title-font title is-1",children:"New Cases Today"}),Object(o.jsxs)("h1",{className:"subtitle is-5",children:["Date: ",a]})]}),Object(o.jsxs)("div",{className:"tile is-parent is-vertical has-text-centered is-size-5",children:[Object(o.jsx)("div",{className:"white tile is-child box m-3 has-background-success",children:Object(o.jsxs)("h3",{children:["New Cases: ",t]})}),Object(o.jsx)("div",{className:"white tile is-child box m-3 has-background-danger",children:Object(o.jsxs)("h3",{children:["New Deaths: ",s]})})]})]})}),u=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={newCases:[],date:(new Date).toLocaleString()},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://corona-api.com/countries/PH").then((function(e){return e.json()})).then((function(t){return e.setState({newCases:t})}))}},{key:"render",value:function(){var e=this.state,t=e.newCases;e.date;return 0===t.length?Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"columns is-centered m-4",children:Object(o.jsx)("p",{className:"box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white",children:"Loading Data..."})})}):Object(o.jsx)("div",{children:Object(o.jsx)(b,{date:t.data.timeline[0].date,confirmed:t.data.today.confirmed,deaths:t.data.today.deaths})})}}]),s}(a.Component),m=function(e){var t=e.date,s=e.confirmed,a=e.recovered,c=e.deaths,i=e.critical;return Object(o.jsxs)("div",{className:"tc pt-6 pb-6",children:[Object(o.jsxs)("div",{className:"title is-4 has-text-centered",children:[Object(o.jsx)("h1",{className:"title-font title is-1",children:"TOTAL CASES"}),Object(o.jsxs)("h1",{className:"subtitle is-5",children:["Date Updated: ",t]})]}),Object(o.jsxs)("div",{className:"ml-6 mr-6 is-size-5",style:{boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))"},children:[Object(o.jsx)("div",{className:"box m-3 has-background-danger-light",children:Object(o.jsxs)("h3",{className:"has-text-danger",children:["Infected: ",s]})}),Object(o.jsx)("div",{className:"box m-3 has-background-success-light",children:Object(o.jsxs)("h3",{className:"has-text-success",children:["Recovered: ",a]})}),Object(o.jsx)("div",{className:"box m-3 has-background-grey ",children:Object(o.jsxs)("h3",{className:"has-text-white",children:["Deceased: ",c]})}),Object(o.jsx)("div",{className:"box m-3 has-background-warning-light",children:Object(o.jsxs)("h3",{className:"has-text-warning-dark",children:["Active Cases: ",i]})})]})]})},x=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={cases:[]},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://corona-api.com/countries/PH").then((function(e){return e.json()})).then((function(t){return e.setState({cases:t})}))}},{key:"render",value:function(){var e=this.state.cases;return 0===e.length?Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"columns is-centered m-4",children:Object(o.jsx)("p",{className:"box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white",children:"Loading Data..."})})}):Object(o.jsx)("div",{children:Object(o.jsx)(m,{date:e.data.timeline[0].date,confirmed:e.data.latest_data.confirmed,recovered:e.data.latest_data.recovered,deaths:e.data.latest_data.deaths,critical:e.data.latest_data.critical})})}}]),s}(a.Component),O=s(73),p=s.n(O),v=s(123),f=function(e){var t=e.region,s=e.cases,a=e.recovered,c=e.deaths;return Object(o.jsxs)("div",{className:"box tc has-background-info-dark dib m-2 white pb5",children:[Object(o.jsx)("h1",{className:"title is-4 title-font f3 text-shadow white",children:t}),Object(o.jsxs)("p",{className:"f4",style:{display:"inline-block",textAlign:"left"},children:["Cases: ",s,Object(o.jsx)("br",{}),"Recovered: ",a,Object(o.jsx)("br",{}),"Deaths: ",c]})]})},g=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={record:[]},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(v.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://covid19-api-philippines.herokuapp.com/api/top-regions",e.next=3,fetch("https://covid19-api-philippines.herokuapp.com/api/top-regions");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,this.setState({record:s});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.record;return 0===e.length?Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"columns is-centered m-4",children:Object(o.jsx)("p",{className:"box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white",children:"Loading Data..."})})}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"has-text-centered mt-6 mb-6",children:[Object(o.jsx)("h1",{className:"title is-1 title-font",children:"TOTAL CASES PER REGION"}),Object(o.jsxs)("h1",{className:"subtitle is-5",children:["Last Updated: ",e.last_update]})]}),Object(o.jsx)("div",{className:"ml-6 mr-6",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))"},children:e.data.map((function(t,s){return Object(o.jsx)(f,{region:e.data[s].region,cases:e.data[s].cases,recovered:e.data[s].recovered,deaths:e.data[s].deaths})}))})]})}}]),s}(a.Component),N=function(){return Object(o.jsxs)("footer",{className:"ph3 ph4-ns pv4 bt b--black-10 black-70",style:{marginTop:"128px"},children:[Object(o.jsx)("h1",{className:"b f3 f2-ns black-70 lh-solid",children:"COVID-19 TRACKER PH"}),Object(o.jsx)("p",{className:"f6 db b ttu lh-solid",children:"Developed by Lance Martija"}),Object(o.jsx)("div",{className:"mt5",children:Object(o.jsxs)("a",{className:"dim",href:"https://github.com/lancemartija/covid-case-tracker-ph",title:"",style:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)("svg",{className:"link gray dib br-100 h2 mr3","data-icon":"github",viewBox:"0 0 32 32",style:{fill:"currentcolor"},children:[Object(o.jsx)("title",{children:"github icon"}),Object(o.jsx)("path",{d:"M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"})]}),Object(o.jsx)("p",{className:"link gray ",children:"View on GitHub"})]})})]})},C=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsxs)("div",{style:{boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"},children:[Object(o.jsx)(u,{}),Object(o.jsx)(x,{})]}),Object(o.jsx)(g,{}),Object(o.jsx)(N,{})]})}}]),s}(a.Component),k=(s(426),s(427),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,429)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))});n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),k()}},[[428,1,2]]]);
//# sourceMappingURL=main.6966fb1c.chunk.js.map