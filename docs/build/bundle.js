var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode&&t.parentNode.removeChild(t)}let s;function f(t){s=t}const a=[],i=[];let l=[];const d=[],$=Promise.resolve();let p=!1;function h(t){l.push(t)}const g=new Set;let m=0;function _(){if(0!==m)return;const t=s;do{try{for(;m<a.length;){const t=a[m];m++,f(t),y(t.$$)}}catch(t){throw a.length=0,m=0,t}for(f(null),a.length=0,m=0;i.length;)i.pop()();for(let t=0;t<l.length;t+=1){const n=l[t];g.has(n)||(g.add(n),n())}l.length=0}while(a.length);for(;d.length;)d.pop()();p=!1,g.clear(),f(t)}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const b=new Set;function x(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];l.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),l=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function w(t,n){-1===t.$$.dirty[0]&&(a.push(t),p||(p=!0,$.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function v(c,a,i,l,d,$,p=null,g=[-1]){const m=s;f(c);const y=c.$$={fragment:null,ctx:[],props:$,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:a.target||m.$$.root};p&&p(y.root);let x=!1;if(y.ctx=i?i(c,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),x&&w(c,t)),n})):[],y.update(),x=!0,o(y.before_update),y.fragment=!!l&&l(y.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);y.fragment&&y.fragment.l(t),t.forEach(u)}else y.fragment&&y.fragment.c();a.intro&&((v=c.$$.fragment)&&v.i&&(b.delete(v),v.i(k))),function(t,e,c){const{fragment:u,after_update:s}=t.$$;u&&u.m(e,c),h((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(h)}(c,a.target,a.anchor),_()}var v,k;f(m)}class k{$$=void 0;$$set=void 0;$destroy(){x(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function E(n){let e;return{c(){var t;t="h1",e=document.createElement(t),e.textContent="Hello World 👋"},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");return new class extends k{constructor(t){super(),v(this,t,null,E,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
