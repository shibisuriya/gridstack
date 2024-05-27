import{r as s,R as e,G as d,a as c,J as l,d as m,c as h}from"./chunks/index.B6uJ61uR.js";import{W as p}from"./chunks/Widget.CzWqMVZg.js";import{s as u,y as g,c as _,j as f,a1 as r,o as b}from"./chunks/framework.C_Ca4p6R.js";function v(){const n=()=>{a.current.updateItem("1",{w:2,h:3})},a=s.useRef(),[i,o]=s.useState([{id:"1",x:0,y:0,w:12,h:2,data:{type:"calendar",title:"A calendar widget",data:"10/10/1990"}}]);return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{onClick:n},"Update width")),e.createElement("div",{className:"row"},e.createElement("div",{className:"flex-1"},e.createElement(d,{items:i,setLayout:o,ref:a},i.map(t=>e.createElement(c,{key:t.id,id:t.id,x:t.x,y:t.y,w:t.w,h:t.h},e.createElement(p,{data:t.data}))))),e.createElement("div",{className:"flex-1"},e.createElement(l,{data:i,style:m,class:"json-viewer"}))))}const y=r('<h1 id="using-the-apis" tabindex="-1">Using the APIs <a class="header-anchor" href="#using-the-apis" aria-label="Permalink to &quot;Using the APIs&quot;">​</a></h1><p>The lib only supports one way binding so it is not recommended to update the json and expect the lib to update the layout ones the layout has been initialized and rendered, to learn more click <a href="./../../concepts/one-way-binding">here</a></p><p>Instead of updating the json invoke the APIs supplied by the lib to perform actions such as, changing the widget&#39;s dimensions, updating number of columns in a grid, etc.</p><h2 id="updating-a-widget-s-dimensions-after-it-has-been-initialized" tabindex="-1">Updating a widget&#39;s dimensions after it has been initialized. <a class="header-anchor" href="#updating-a-widget-s-dimensions-after-it-has-been-initialized" aria-label="Permalink to &quot;Updating a widget&#39;s dimensions after it has been initialized.&quot;">​</a></h2><p>Use the <code>update</code> API provided to update the dimensions of a widget.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Don&#39;t change the layout json to update a widget&#39;s dimension.</p></div><p>Press the <code>Update width</code> button and see the layout change.</p>',7),k=r('<h2 id="removing-items-from-the-grid" tabindex="-1">Removing items from the grid <a class="header-anchor" href="#removing-items-from-the-grid" aria-label="Permalink to &quot;Removing items from the grid&quot;">​</a></h2><p>Use the <code>remove()</code> API provided to remove items from a grid.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Don&#39;t remove the item from the layout json.</p></div><p>To learn more about removing items from a grid click <a href="./removing-items">here</a></p><h2 id="adding-items-to-the-grid" tabindex="-1">Adding items to the grid <a class="header-anchor" href="#adding-items-to-the-grid" aria-label="Permalink to &quot;Adding items to the grid&quot;">​</a></h2><p>You can push an item directly to the layout json while adding a item, to learn more click <a href="./../react/adding-items">here</a></p><p>To see a comprehensive list of APIs exposed by each component click here.</p>',7),E=JSON.parse('{"title":"Using the APIs","description":"","frontmatter":{},"headers":[],"relativePath":"guides/react/using-apis.md","filePath":"guides/react/using-apis.md"}'),A={name:"guides/react/using-apis.md"},T=Object.assign(A,{setup(n){const a=u();return g(()=>{h(a.value).render(s.createElement(v,{},null))}),(i,o)=>(b(),_("div",null,[y,f("div",{ref_key:"el",ref:a},null,512),k]))}});export{E as __pageData,T as default};
