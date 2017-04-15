webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(28),s=r(a),l=n(166),u=r(l),c=n(186),f=n(188),p=n(190),d=new u.default(f.simpleFetch);(0,c.startRouter)(d),s.default.render(i.default.createElement(p.App,{store:d}),document.querySelector("#app"))},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(t,"__esModule",{value:!0});var s,l,u,c,f,p,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=n(167),y=(n(168),n(180)),m=r(y),v=n(181),g=r(v),b=n(185),w=r(b),O=(s=function(){function e(t){i(this,e),this.fetch=null,o(this,"currentUser",l,this),o(this,"currentView",u,this),o(this,"editData",c,this),o(this,"addData",f,this),o(this,"auth",p,this),this.fetch=t}return d(e,[{key:"get",value:function(e){var t=this;m.default.start(),this.fetch("/api"+e,{headers:{token:this.auth.token}}).then(function(e){m.default.done(),t.currentView={name:"file",data:e},t.editStop()}).catch(function(e){401==e.status&&(t.auth.isAuthenticated=!1,t.auth.token="")})}},{key:"put",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";m.default.start();var i={content:r,name:o},a=g.default.join(e,t);this.fetch("/api"+a,{method:"PUT",body:JSON.stringify(i),headers:{Accept:"application/json","Content-Type":"application/json",token:this.auth.token}}).then(function(e){m.default.done(),r&&(n.currentView.data.content=r),o&&(n.currentView.data.name=o),n.editStop()})}},{key:"post",value:function(e,t,n){var r=this,o="file";"/"!=t.slice(-1)||n||(o="directory"),console.log(o),m.default.start();var i,a,s=g.default.join(e);n?(i=new FormData,i.append("file",n[0]),a={token:this.auth.token}):(i=JSON.stringify({name:t}),a={Accept:"application/json","Content-Type":"application/json",token:this.auth.token}),this.fetch("/api"+s,{method:"POST",body:i,headers:a}).then(function(e){m.default.done(),r.currentView.data.fileList.push(e),r.editStop()})}},{key:"delete",value:function(e,t){var n=this;m.default.start();var r=g.default.join(e,t);this.fetch("/api"+r,{method:"DELETE",headers:{token:this.auth.token}}).then(function(t){n.get(e),m.default.done(),n.editStop()})}},{key:"execute",value:function(e,t){m.default.start(),this.fetch("/api/exec",{method:"POST",headers:{token:this.auth.token,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({command:e,path:t})}).then(function(e){m.default.done()})}},{key:"login",value:function(e,t){var n=this;return new Promise(function(r,o){n.fetch("/api/login",{method:"POST",body:JSON.stringify({username:e,password:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){n.auth.isAuthenticated=!0,n.auth.token=e.token,w.default.set("token",e.token),n.get(window.location.pathname),r()}).catch(function(){w.default.remove("token"),o()})})}},{key:"editContentStart",value:function(e){this.editData={editContent:!0,editTitle:!1,content:e,title:""}}},{key:"editTitleStart",value:function(e){this.editData={editContent:!1,editTitle:!0,title:e,content:""},console.log(this.editData.editTitle)}},{key:"editStop",value:function(){this.editData={editContent:!1,editTitle:!1,content:"",title:""},"activeElement"in document&&document.activeElement.blur(),this.addData.title=""}},{key:"currentPath",get:function(){if(!this.currentView)return window.location.pathname;var e=g.default.join(this.currentView.data.topPath,this.currentView.data.name);switch(this.currentView.name){case"file":return""+e}}}]),e}(),l=a(s.prototype,"currentUser",[h.observable],{enumerable:!0,initializer:function(){return null}}),u=a(s.prototype,"currentView",[h.observable],{enumerable:!0,initializer:function(){return null}}),c=a(s.prototype,"editData",[h.observable],{enumerable:!0,initializer:function(){return{editContent:!1,editTitle:!1,content:"",title:""}}}),f=a(s.prototype,"addData",[h.observable],{enumerable:!0,initializer:function(){return{title:""}}}),p=a(s.prototype,"auth",[h.observable],{enumerable:!0,initializer:function(){return{isAuthenticated:!0,token:""}}}),a(s.prototype,"currentPath",[h.computed],Object.getOwnPropertyDescriptor(s.prototype,"currentPath"),s.prototype),a(s.prototype,"get",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"get"),s.prototype),a(s.prototype,"put",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"put"),s.prototype),a(s.prototype,"post",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"post"),s.prototype),a(s.prototype,"delete",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"delete"),s.prototype),a(s.prototype,"execute",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"execute"),s.prototype),a(s.prototype,"login",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"login"),s.prototype),a(s.prototype,"editContentStart",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"editContentStart"),s.prototype),a(s.prototype,"editTitleStart",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"editTitleStart"),s.prototype),a(s.prototype,"editStop",[h.action],Object.getOwnPropertyDescriptor(s.prototype,"editStop"),s.prototype),s);t.default=O},181:function(e,t,n){(function(t){"use strict";function r(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o))}return n}function o(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}function i(e){var t=f.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",o=p.exec(r),i=o[1],a=o[2],s=o[3];return[n,i,a,s]}function a(e){var t=f.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return{device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function s(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}function l(e){return h.exec(e).slice(1)}var u="win32"===t.platform,c=n(182),f=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,p=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,d={};d.resolve=function(){for(var e="",n="",o=!1,i=arguments.length-1;i>=-1;i--){var l;if(i>=0?l=arguments[i]:e?(l=t.env["="+e],l&&l.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(l=e+"\\")):l=t.cwd(),!c.isString(l))throw new TypeError("Arguments to path.resolve must be strings");if(l){var u=a(l),f=u.device,p=u.isUnc,d=u.isAbsolute,h=u.tail;if((!f||!e||f.toLowerCase()===e.toLowerCase())&&(e||(e=f),o||(n=h+"\\"+n,o=d),e&&o))break}}return p&&(e=s(e)),n=r(n.split(/[\\\/]+/),!o).join("\\"),e+(o?"\\":"")+n||"."},d.normalize=function(e){var t=a(e),n=t.device,o=t.isUnc,i=t.isAbsolute,l=t.tail,u=/[\\\/]$/.test(l);return l=r(l.split(/[\\\/]+/),!i).join("\\"),l||i||(l="."),l&&u&&(l+="\\"),o&&(n=s(n)),n+(i?"\\":"")+l},d.isAbsolute=function(e){return a(e).isAbsolute},d.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!c.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var r=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),d.normalize(r)},d.relative=function(e,t){e=d.resolve(e),t=d.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),i=o(t.split("\\")),a=o(n.split("\\")),s=o(r.split("\\")),l=Math.min(a.length,s.length),u=l,c=0;c<l;c++)if(a[c]!==s[c]){u=c;break}if(0==u)return t;for(var f=[],c=u;c<a.length;c++)f.push("..");return f=f.concat(i.slice(u)),f.join("\\")},d._makeLong=function(e){if(!c.isString(e))return e;if(!e)return"";var t=d.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},d.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},d.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},d.extname=function(e){return i(e)[3]},d.format=function(e){if(!c.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!c.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===d.sep?n+r:n+d.sep+r:r},d.parse=function(e){if(!c.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=i(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},d.sep="\\",d.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,y={};y.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i=o>=0?arguments[o]:t.cwd();if(!c.isString(i))throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i[0])}return e=r(e.split("/"),!n).join("/"),(n?"/":"")+e||"."},y.normalize=function(e){var t=y.isAbsolute(e),n=e&&"/"===e[e.length-1];return e=r(e.split("/"),!t).join("/"),e||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},y.isAbsolute=function(e){return"/"===e.charAt(0)},y.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!c.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n)}return y.normalize(e)},y.relative=function(e,t){e=y.resolve(e).substr(1),t=y.resolve(t).substr(1);for(var n=o(e.split("/")),r=o(t.split("/")),i=Math.min(n.length,r.length),a=i,s=0;s<i;s++)if(n[s]!==r[s]){a=s;break}for(var l=[],s=a;s<n.length;s++)l.push("..");return l=l.concat(r.slice(a)),l.join("/")},y._makeLong=function(e){return e},y.dirname=function(e){var t=l(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},y.basename=function(e,t){var n=l(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},y.extname=function(e){return l(e)[3]},y.format=function(e){if(!c.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!c.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir?e.dir+y.sep:"",r=e.base||"";return n+r},y.parse=function(e){if(!c.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=l(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},y.sep="/",y.delimiter=":",u?e.exports=d:e.exports=y,e.exports.posix=y,e.exports.win32=d}).call(t,n(109))},182:function(e,t,n){(function(e,r){function o(e,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&t._extend(r,n),O(r.showHidden)&&(r.showHidden=!1),O(r.depth)&&(r.depth=2),O(r.colors)&&(r.colors=!1),O(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),l(r,e,r.depth)}function i(e,t){var n=o.styles[t];return n?"["+o.colors[n][0]+"m"+e+"["+o.colors[n][1]+"m":e}function a(e,t){return e}function s(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function l(e,n,r){if(e.customInspect&&n&&C(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=l(e,o,r)),o}var i=u(e,n);if(i)return i;var a=Object.keys(n),y=s(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),S(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return c(n);if(0===a.length){if(C(n)){var m=n.name?": "+n.name:"";return e.stylize("[Function"+m+"]","special")}if(k(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return e.stylize(Date.prototype.toString.call(n),"date");if(S(n))return c(n)}var v="",g=!1,w=["{","}"];if(h(n)&&(g=!0,w=["[","]"]),C(n)){var O=n.name?": "+n.name:"";v=" [Function"+O+"]"}if(k(n)&&(v=" "+RegExp.prototype.toString.call(n)),E(n)&&(v=" "+Date.prototype.toUTCString.call(n)),S(n)&&(v=" "+c(n)),0===a.length&&(!g||0==n.length))return w[0]+v+w[1];if(r<0)return k(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var j;return j=g?f(e,n,r,y,a):a.map(function(t){return p(e,n,r,y,t,g)}),e.seen.pop(),d(j,v,w)}function u(e,t){if(O(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return g(t)?e.stylize(""+t,"number"):y(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,o){for(var i=[],a=0,s=t.length;a<s;++a)D(t,String(a))?i.push(p(e,t,n,r,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))}),i}function p(e,t,n,r,o,i){var a,s,u;if(u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},u.get?s=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(s=e.stylize("[Setter]","special")),D(r,o)||(a="["+o+"]"),s||(e.seen.indexOf(u.value)<0?(s=m(n)?l(e,u.value,null):l(e,u.value,n-1),s.indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),O(a)){if(i&&o.match(/^\d+$/))return s;a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function d(e,t,n){var r=0,o=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return o>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function h(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function m(e){return null===e}function v(e){return null==e}function g(e){return"number"==typeof e}function b(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function O(e){return void 0===e}function k(e){return j(e)&&"[object RegExp]"===x(e)}function j(e){return"object"==typeof e&&null!==e}function E(e){return j(e)&&"[object Date]"===x(e)}function S(e){return j(e)&&("[object Error]"===x(e)||e instanceof Error)}function C(e){return"function"==typeof e}function P(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function x(e){return Object.prototype.toString.call(e)}function N(e){return e<10?"0"+e.toString(10):e.toString(10)}function _(){var e=new Date,t=[N(e.getHours()),N(e.getMinutes()),N(e.getSeconds())].join(":");return[e.getDate(),M[e.getMonth()],t].join(" ")}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var T=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(o(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,i=r.length,a=String(e).replace(T,function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),s=r[n];n<i;s=r[++n])a+=m(s)||!j(s)?" "+s:" "+o(s);return a},t.deprecate=function(n,o){function i(){if(!a){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),a=!0}return n.apply(this,arguments)}if(O(e.process))return function(){return t.deprecate(n,o).apply(this,arguments)};if(r.noDeprecation===!0)return n;var a=!1;return i};var z,A={};t.debuglog=function(e){if(O(z)&&(z=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!A[e])if(new RegExp("\\b"+e+"\\b","i").test(z)){var n=r.pid;A[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else A[e]=function(){};return A[e]},t.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=y,t.isNull=m,t.isNullOrUndefined=v,t.isNumber=g,t.isString=b,t.isSymbol=w,t.isUndefined=O,t.isRegExp=k,t.isObject=j,t.isDate=E,t.isError=S,t.isFunction=C,t.isPrimitive=P,t.isBuffer=n(183);var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",_(),t.format.apply(t,arguments))},t.inherits=n(184),t._extend=function(e,t){if(!t||!j(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(t,function(){return this}(),n(109))},183:function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},184:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},185:function(e,t,n){var r,o;!function(i){var a=!1;if(r=i,o="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==o&&(e.exports=o)),a=!0,e.exports=i(),a=!0,!a){var s=window.Cookies,l=window.Cookies=i();l.noConflict=function(){return window.Cookies=s,l}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,o,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},r.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{a=JSON.stringify(o),/^[\{\[]/.test(a)&&(o=a)}catch(e){}return o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",o,i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}t||(a={});for(var l=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,c=0;c<l.length;c++){var f=l[c].split("="),p=f.slice(1).join("=");'"'===p.charAt(0)&&(p=p.slice(1,-1));try{var d=f[0].replace(u,decodeURIComponent);if(p=n.read?n.read(p,d):n(p,d)||p.replace(u,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===d){a=p;break}t||(a[d]=p)}catch(e){}}return a}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},186:function(e,t,n){"use strict";function r(e){new o.Router({"/":function(t){return e.get("/")},"/(.*)":function(t){return e.get("/"+t)}}).configure({html5history:!0}).init();(0,i.autorun)(function(){var t=e.currentPath;t!==window.location.pathname&&window.history.pushState(null,null,t)})}Object.defineProperty(t,"__esModule",{value:!0}),t.startRouter=r;var o=n(187),i=n(167)},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.credentials="include",new Promise(function(n,r){window.fetch(e,t).then(function(e){return e.ok?void e.json().then(n).catch(r):(a.default.done(),r(e))}).catch(function(){return a.default.done(),r()})})}Object.defineProperty(t,"__esModule",{value:!0}),t.simpleFetch=o,n(189);var i=n(180),a=r(i)},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function i(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=e.currentView;if(!e.auth.isAuthenticated)return w.default.createElement(R,{view:t,store:e});if(!t)return null;switch(t.name){case"file":return w.default.createElement(z,{view:t,store:e});default:return null}}function c(e){e=e.replace(/(^\s*)|(\s*$)/gi,""),e=e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""),e=e.replace(/[ ]{2,}/gi," "),e=e.replace(/\n /,"\n");var t=e.split(" ");return 1==t.length&&""==t[0]?0:t.length}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var f,p,d,h,y,m,v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=n(1),w=r(b),O=n(191),k=n(192),j=(r(k),n(167)),E=n(193),S=n(181),C=r(S),P=n(197),x=r(P),N=n(199),_=r(N),D=n(200),T=(r(D),"/api"),z=(t.App=(0,O.observer)(function(e){var t=e.store;return w.default.createElement("div",null,u(t))}),(0,O.observer)(function(e){var t=e.view,n=e.store,r=t.data;if(!t.data)return null;var o,i=(n.editData.editTitle,n.editData.title),a=""==r.name;return w.default.createElement("div",{className:"main"},w.default.createElement("div",{className:"header"},w.default.createElement("div",{className:"container"},""!=r.name&&w.default.createElement("div",null,w.default.createElement("span",{className:"yeLink path"},w.default.createElement("a",{onClick:function(){return n.get("")}},"Root")),w.default.createElement("span",{className:"slash"},"/"),t.data.topPath.split("/").map(function(e,t,r){var o=r.slice(0,t+1).join("/");return e&&w.default.createElement("span",null,w.default.createElement("span",{className:"yeLink path"},w.default.createElement("a",{onClick:function(){return n.get(o)}},e)),w.default.createElement("span",{className:"slash"},"/"))})),!a&&w.default.createElement("h1",null,w.default.createElement(B,{className:"edit-name-input",onChange:function(e){return n.editData.title=e.target.value},value:i||r.name,onValidate:function(){return n.put(r.topPath,r.name,"",i)}}),w.default.createElement("span",{className:"octicon octicon-pencil edit-name"})),a&&w.default.createElement("span",{className:"slash"},"/"),a&&w.default.createElement("h1",null,"Root"),w.default.createElement("div",{className:"option-bar"},"file"==r.type&&w.default.createElement("a",{className:"btn btn-sm btn-outline-white",href:T+C.default.join(r.topPath,r.name)+"?option=download"},"Download"),"file"==r.type&&w.default.createElement("a",{className:"btn btn-sm btn-outline-white",href:T+C.default.join(r.topPath,r.name)+"?option=raw",target:"blank"},"Raw"),"directory"==r.type&&w.default.createElement("span",{className:"btn btn-sm btn-outline-white",onClick:function(){return o.click()}},"Upload file"),w.default.createElement("span",{className:"btn btn-sm btn-outline-white float-right",onClick:function(){return n.execute("hugo")}},"Rebuild Blog"),w.default.createElement("input",{style:{display:"none"},type:"file",onChange:function(e){return n.post(C.default.join(r.topPath,r.name),"file",e.target.files)},ref:function(e){return o=e}}),!a&&w.default.createElement("span",{className:"btn btn-sm btn-danger",onClick:function(){return n.delete(r.topPath,r.name)}},"Delete")))),w.default.createElement("div",{className:"bodi"},w.default.createElement("div",{className:"container"},"directory"==r.type?w.default.createElement(A,{view:t,store:n}):w.default.createElement(M,{view:t,store:n}))))})),A=(0,O.observer)(function(e){var t=e.view,n=e.store,r=t.data;return t.data?w.default.createElement("div",null,r.fileList.map(function(e){return w.default.createElement("div",{className:"pointer",onClick:function(){return n.get(C.default.join(r.topPath,r.name,e.name))}},w.default.createElement(U,{mimeType:e.mimeType}),e.name)}),w.default.createElement("div",null,w.default.createElement(B,{className:"add",placeholder:"New file or folder/",value:n.addData.title,onChange:function(e){return n.addData.title=e.target.value},onValidate:function(){return n.post(C.default.join(r.topPath,r.name),n.addData.title)}}),w.default.createElement("span",{className:"detail"},"finish with a / for folder creation"))):null}),M=(0,O.observer)(f=function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.onKeyPress=function(e){e.ctrlKey&&preventDefualt()},o=n,s(r,o)}return l(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props.view.data,n=this.props.store.editData.editContent,r=this.props.store.editData;return this.props.view.data?w.default.createElement(E.StickyContainer,null,void 0!==t.content&&w.default.createElement("div",null,w.default.createElement(E.Sticky,{className:"editBar"},!n&&w.default.createElement("span",{className:"btn btn-sm btn-secondary",onClick:function(){return e.props.store.editContentStart(t.content)}},"Edit"),n&&w.default.createElement("span",{className:"btn btn-sm btn-success",onClick:function(){return e.props.store.put(t.topPath,t.name,e.props.store.editData.content)}},"Save"),n&&w.default.createElement("span",{className:"btn btn-sm btn-danger",onClick:function(){return e.props.store.editStop()}},"Cancel"),w.default.createElement("span",{className:"float-right placeholder"},w.default.createElement("span",null,r.content.length||t.content.length," chars / ",c(r.content)||c(t.content)," words"))),w.default.createElement("div",{className:"editBlock"},!n&&w.default.createElement("div",{className:"readBlock"},t.content||w.default.createElement("span",{className:"placeholder"},"// File is empty")),n&&w.default.createElement("div",null,w.default.createElement(x.default,{placeholder:"Write here...",className:"editArea",value:this.props.store.editData.content,onKeyPress:this.onKeyPress.bind(this),onChange:function(t){return e.props.store.editData.content=t.target.value}})))),t.mimeType.indexOf("image")!=-1&&w.default.createElement("div",null,w.default.createElement("img",{src:T+C.default.join(t.topPath,t.name)+"?option=raw"}))):null}}]),t}(w.default.Component))||f,R=(0,O.observer)((d=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o(r,"username",h,r),o(r,"password",y,r),o(r,"message",m,r),i=n,s(r,i)}return l(t,e),g(t,[{key:"render",value:function(){var e=this;return w.default.createElement("div",{className:"login"},w.default.createElement("h1",null,"This data is protected - please login"),w.default.createElement("form",{className:"box",action:"javascript:void(0);"},this.message&&w.default.createElement("div",{className:"alert alert-danger"},this.message),w.default.createElement("input",{placeholder:"Username",className:"form-control",value:this.username,onChange:function(t){return e.username=t.target.value}}),w.default.createElement("input",{placeholder:"Password",type:"password",className:"form-control",value:this.password,onChange:function(t){return e.password=t.target.value}}),w.default.createElement("button",{className:"btn btn-block btn-success",onClick:this.onLogin.bind(this)},"Login")))}},{key:"onLogin",value:function(){var e=this;this.props.store.login(this.username,this.password).then().catch(function(t){e.message="Wrong creds...",e.username="",e.password=""})}}]),t}(w.default.Component),h=i(d.prototype,"username",[j.observable],{enumerable:!0,initializer:function(){return""}}),y=i(d.prototype,"password",[j.observable],{enumerable:!0,initializer:function(){return""}}),m=i(d.prototype,"message",[j.observable],{enumerable:!0,initializer:function(){return""}}),p=d))||p,B=function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r._handleKeyPress=function(e){"Enter"===e.key&&!!r.props.onValidate&&r.props.onValidate()},o=n,s(r,o)}return l(t,e),g(t,[{key:"render",value:function(){return w.default.createElement(_.default,v({type:"text"},this.props,{onKeyPress:this._handleKeyPress}))}}]),t}(w.default.Component),U=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),g(t,[{key:"render",value:function(){if(!this.props.mimeType)return w.default.createElement("span",{className:"right-space octicon octicon-file-directory"});var e=this.props.mimeType.split("/"),t="right-space octicon ";return t+="image"==e[0]?"octicon-file-media":"text"==e[0]?"octicon-file-text":"pdf"==e[1]?"octicon-file-pdf":"x-rar-compressed"==e[1]&&"zip"==e[1]?"octicon-file-zip":"octicon-file",w.default.createElement("span",{className:t})}}]),t}(w.default.Component)},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Channel=t.StickyContainer=t.Sticky=void 0;var o=n(194),i=r(o),a=n(195),s=r(a),l=n(196),u=r(l);t.Sticky=i.default,t.StickyContainer=s.default,t.Channel=u.default,t.default=i.default},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{
value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),p=n(28),d=r(p),h=function(e){function t(e){i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.updateContext=function(e){var t=e.inherited,r=e.node;n.containerNode=r,n.setState({containerOffset:t,distanceFromBottom:n.getDistanceFromBottom()})},n.recomputeState=function(){var e=n.isSticky(),t=n.getHeight(),r=n.getWidth(),o=n.getXOffset(),i=n.getDistanceFromBottom(),a=n.state.isSticky!==e;n.setState({isSticky:e,height:t,width:r,xOffset:o,distanceFromBottom:i}),a&&(n.channel&&n.channel.update(function(t){t.offset=e?n.state.height:0}),n.props.onStickyStateChange(e))},n.state={},n}return s(t,e),u(t,[{key:"componentWillMount",value:function(){this.channel=this.context["sticky-channel"],this.channel.subscribe(this.updateContext)}},{key:"componentDidMount",value:function(){this.on(["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],this.recomputeState),this.recomputeState()}},{key:"componentWillReceiveProps",value:function(){this.recomputeState()}},{key:"componentWillUnmount",value:function(){this.off(["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],this.recomputeState),this.channel.unsubscribe(this.updateContext)}},{key:"getXOffset",value:function(){return this.refs.placeholder.getBoundingClientRect().left}},{key:"getWidth",value:function(){return this.refs.placeholder.getBoundingClientRect().width}},{key:"getHeight",value:function(){return d.default.findDOMNode(this.refs.children).getBoundingClientRect().height}},{key:"getDistanceFromTop",value:function(){return this.refs.placeholder.getBoundingClientRect().top}},{key:"getDistanceFromBottom",value:function(){return this.containerNode?this.containerNode.getBoundingClientRect().bottom:0}},{key:"isSticky",value:function(){if(!this.props.isActive)return!1;var e=this.getDistanceFromTop(),t=this.getDistanceFromBottom(),n=this.state.containerOffset-this.props.topOffset,r=this.state.containerOffset+this.props.bottomOffset;return e<=n&&t>=r}},{key:"on",value:function(e,t){e.forEach(function(e){window.addEventListener(e,t)})}},{key:"off",value:function(e,t){e.forEach(function(e){window.removeEventListener(e,t)})}},{key:"shouldComponentUpdate",value:function(e,t){var n=this,r=Object.keys(this.props);if(Object.keys(e).length!=r.length)return!0;var o=r.every(function(t){return e.hasOwnProperty(t)&&e[t]===n.props[t]});if(!o)return!0;var i=this.state;if(t.isSticky!==i.isSticky)return!0;if(i.isSticky){if(t.height!==i.height)return!0;if(t.width!==i.width)return!0;if(t.xOffset!==i.xOffset)return!0;if(t.containerOffset!==i.containerOffset)return!0;if(t.distanceFromBottom!==i.distanceFromBottom)return!0}return!1}},{key:"render",value:function(){var e={paddingBottom:0},t=this.props.className,n=l({},{transform:"translateZ(0)"},this.props.style);if(this.state.isSticky){var r={position:"fixed",top:this.state.containerOffset,left:this.state.xOffset,width:this.state.width},i=this.state.distanceFromBottom-this.state.height-this.props.bottomOffset;this.state.containerOffset>i&&(r.top=i),e.paddingBottom=this.state.height,t+=" "+this.props.stickyClassName,n=l({},n,r,this.props.stickyStyle)}var a=this.props,s=(a.topOffset,a.isActive,a.stickyClassName,a.stickyStyle,a.bottomOffset,a.onStickyStateChange,o(a,["topOffset","isActive","stickyClassName","stickyStyle","bottomOffset","onStickyStateChange"]));return f.default.createElement("div",null,f.default.createElement("div",{ref:"placeholder",style:e}),f.default.createElement("div",l({},s,{ref:"children",className:t,style:n}),this.props.children))}}]),t}(f.default.Component);h.propTypes={isActive:f.default.PropTypes.bool,className:f.default.PropTypes.string,style:f.default.PropTypes.object,stickyClassName:f.default.PropTypes.string,stickyStyle:f.default.PropTypes.object,topOffset:f.default.PropTypes.number,bottomOffset:f.default.PropTypes.number,onStickyStateChange:f.default.PropTypes.func},h.defaultProps={isActive:!0,className:"",style:{},stickyClassName:"sticky",stickyStyle:{},topOffset:0,bottomOffset:0,onStickyStateChange:function(){}},h.contextTypes={"sticky-channel":f.default.PropTypes.any},t.default=h,e.exports=t.default},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l),c=n(28),f=r(c),p=n(196),d=r(p),h=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.updateOffset=function(e){var t=e.inherited,r=e.offset;n.channel.update(function(e){e.inherited=t+r})},n.channel=new d.default({inherited:0,offset:0,node:null}),n}return a(t,e),s(t,[{key:"getChildContext",value:function(){return{"sticky-channel":this.channel}}},{key:"componentWillMount",value:function(){var e=this.context["sticky-channel"];e&&e.subscribe(this.updateOffset)}},{key:"componentDidMount",value:function(){var e=f.default.findDOMNode(this);this.channel.update(function(t){t.node=e})}},{key:"componentWillUnmount",value:function(){this.channel.update(function(e){e.node=null});var e=this.context["sticky-channel"];e&&e.unsubscribe(this.updateOffset)}},{key:"render",value:function(){return u.default.createElement("div",this.props,this.props.children)}}]),t}(u.default.Component);h.contextTypes={"sticky-channel":u.default.PropTypes.any},h.childContextTypes={"sticky-channel":u.default.PropTypes.any},t.default=h,e.exports=t.default},196:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t){n(this,e);var r=[];t=t||{},this.subscribe=function(e){r.push(e)},this.unsubscribe=function(e){var t=r.indexOf(e);t!==-1&&r.splice(t,1)},this.update=function(e){e&&e(t),r.forEach(function(e){return e(t)})}};t.default=r,e.exports=t.default},200:function(e,t,n){var r=n(1),o=r.createClass({getInitialState:function(){return{value:"",styles:{parent:{position:"relative"},file:{position:"absolute",top:0,left:0,opacity:0,width:"100%",zIndex:1},text:{position:"relative",zIndex:-1}}}},handleChange:function(e){this.setState({value:e.target.value.split(/(\\|\/)/g).pop()}),this.props.onChange&&this.props.onChange(e)},render:function(){return r.DOM.div({style:this.state.styles.parent},r.DOM.input({type:"file",name:this.props.name,className:this.props.className,onChange:this.handleChange,disabled:this.props.disabled,accept:this.props.accept,style:this.state.styles.file}),r.DOM.input({type:"text",tabIndex:-1,name:this.props.name+"_filename",value:this.state.value,className:this.props.className,onChange:function(){},placeholder:this.props.placeholder,disabled:this.props.disabled,style:this.state.styles.text}))}});e.exports=o}});
//# sourceMappingURL=src.js.map