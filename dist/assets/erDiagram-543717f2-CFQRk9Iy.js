import{c as Z,s as Et,g as mt,b as gt,a as kt,C as Rt,D as Ot,l as V,E as bt,h as rt,v as Nt,i as xt,F as Tt,G as At}from"./slidev/md-BVJvyXM8.js";import{G as Mt}from"./graph-fe24fab6-CDnebil0.js";import{l as St}from"./layout-163b9689-DYrEDi5o.js";import{l as wt}from"./line-87f517ef-n30kO9GW.js";import"./modules/vue-DRCAYFAP.js";import"./monaco/bundled-types-xT5GfkES.js";import"./modules/file-saver-igGfcqei.js";import"./lz-string-7V7f_eN4.js";import"./index-CRo--VoJ.js";import"./modules/shiki-D20Pw0Pm.js";import"./slidev/default-C1T8sZwW.js";import"./slidev/context-D4covK3o.js";import"./array-b7dcf730-BKyUJesY.js";import"./path-39bad7e2-CbwjOpE9.js";var at=function(){var t=function(S,a,n,c){for(n=n||{},c=S.length;c--;n[S[c]]=a);return n},e=[6,8,10,20,22,24,26,27,28],r=[1,10],u=[1,11],l=[1,12],f=[1,13],y=[1,14],o=[1,15],h=[1,21],_=[1,22],m=[1,23],g=[1,24],R=[1,25],p=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],x=[1,34],I=[27,28,46,47],F=[41,42,43,44,45],W=[17,34],C=[1,54],T=[1,53],M=[17,34,36,38],O={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:function(a,n,c,d,E,i,K){var s=i.length-1;switch(E){case 1:break;case 2:this.$=[];break;case 3:i[s-1].push(i[s]),this.$=i[s-1];break;case 4:case 5:this.$=i[s];break;case 6:case 7:this.$=[];break;case 8:d.addEntity(i[s-4]),d.addEntity(i[s-2]),d.addRelationship(i[s-4],i[s],i[s-2],i[s-3]);break;case 9:d.addEntity(i[s-3]),d.addAttributes(i[s-3],i[s-1]);break;case 10:d.addEntity(i[s-2]);break;case 11:d.addEntity(i[s]);break;case 12:d.addEntity(i[s-6],i[s-4]),d.addAttributes(i[s-6],i[s-1]);break;case 13:d.addEntity(i[s-5],i[s-3]);break;case 14:d.addEntity(i[s-3],i[s-1]);break;case 15:case 16:this.$=i[s].trim(),d.setAccTitle(this.$);break;case 17:case 18:this.$=i[s].trim(),d.setAccDescription(this.$);break;case 19:case 43:this.$=i[s];break;case 20:case 41:case 42:this.$=i[s].replace(/"/g,"");break;case 21:case 29:this.$=[i[s]];break;case 22:i[s].push(i[s-1]),this.$=i[s];break;case 23:this.$={attributeType:i[s-1],attributeName:i[s]};break;case 24:this.$={attributeType:i[s-2],attributeName:i[s-1],attributeKeyTypeList:i[s]};break;case 25:this.$={attributeType:i[s-2],attributeName:i[s-1],attributeComment:i[s]};break;case 26:this.$={attributeType:i[s-3],attributeName:i[s-2],attributeKeyTypeList:i[s-1],attributeComment:i[s]};break;case 27:case 28:case 31:this.$=i[s];break;case 30:i[s-2].push(i[s]),this.$=i[s-2];break;case 32:this.$=i[s].replace(/"/g,"");break;case 33:this.$={cardA:i[s],relType:i[s-1],cardB:i[s-2]};break;case 34:this.$=d.Cardinality.ZERO_OR_ONE;break;case 35:this.$=d.Cardinality.ZERO_OR_MORE;break;case 36:this.$=d.Cardinality.ONE_OR_MORE;break;case 37:this.$=d.Cardinality.ONLY_ONE;break;case 38:this.$=d.Cardinality.MD_PARENT;break;case 39:this.$=d.Identification.NON_IDENTIFYING;break;case 40:this.$=d.Identification.IDENTIFYING;break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:u,24:l,26:f,27:y,28:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:u,24:l,26:f,27:y,28:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:h,42:_,43:m,44:g,45:R}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(p,[2,19]),t(p,[2,20]),t(e,[2,4]),{11:29,27:y,28:o},{16:30,17:[1,31],29:32,30:33,34:x},{11:35,27:y,28:o},{40:36,46:[1,37],47:[1,38]},t(I,[2,34]),t(I,[2,35]),t(I,[2,36]),t(I,[2,37]),t(I,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:x},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:h,42:_,43:m,44:g,45:R},t(F,[2,39]),t(F,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(W,[2,23],{32:50,33:51,35:52,37:C,38:T}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(W,[2,24],{33:56,36:[1,57],38:T}),t(W,[2,25]),t(M,[2,29]),t(W,[2,32]),t(M,[2,31]),{16:58,17:[1,59],29:32,30:33,34:x},t(W,[2,26]),{35:60,37:C},{17:[1,61]},t(e,[2,13]),t(M,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:function(a,n){if(n.recoverable)this.trace(a);else{var c=new Error(a);throw c.hash=n,c}},parse:function(a){var n=this,c=[0],d=[],E=[null],i=[],K=this.table,s="",Q=0,st=0,yt=2,ot=1,pt=i.slice.call(arguments,1),N=Object.create(this.lexer),G={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(G.yy[J]=this.yy[J]);N.setInput(a,G.yy),G.yy.lexer=N,G.yy.parser=this,typeof N.yylloc>"u"&&(N.yylloc={});var $=N.yylloc;i.push($);var ft=N.options&&N.options.ranges;typeof G.yy.parseError=="function"?this.parseError=G.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function _t(){var Y;return Y=d.pop()||N.lex()||ot,typeof Y!="number"&&(Y instanceof Array&&(d=Y,Y=d.pop()),Y=n.symbols_[Y]||Y),Y}for(var w,H,D,tt,z={},j,P,lt,q;;){if(H=c[c.length-1],this.defaultActions[H]?D=this.defaultActions[H]:((w===null||typeof w>"u")&&(w=_t()),D=K[H]&&K[H][w]),typeof D>"u"||!D.length||!D[0]){var et="";q=[];for(j in K[H])this.terminals_[j]&&j>yt&&q.push("'"+this.terminals_[j]+"'");N.showPosition?et="Parse error on line "+(Q+1)+`:
`+N.showPosition()+`
Expecting `+q.join(", ")+", got '"+(this.terminals_[w]||w)+"'":et="Parse error on line "+(Q+1)+": Unexpected "+(w==ot?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(et,{text:N.match,token:this.terminals_[w]||w,line:N.yylineno,loc:$,expected:q})}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+H+", token: "+w);switch(D[0]){case 1:c.push(w),E.push(N.yytext),i.push(N.yylloc),c.push(D[1]),w=null,st=N.yyleng,s=N.yytext,Q=N.yylineno,$=N.yylloc;break;case 2:if(P=this.productions_[D[1]][1],z.$=E[E.length-P],z._$={first_line:i[i.length-(P||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(P||1)].first_column,last_column:i[i.length-1].last_column},ft&&(z._$.range=[i[i.length-(P||1)].range[0],i[i.length-1].range[1]]),tt=this.performAction.apply(z,[s,st,Q,G.yy,D[1],E,i].concat(pt)),typeof tt<"u")return tt;P&&(c=c.slice(0,-1*P*2),E=E.slice(0,-1*P),i=i.slice(0,-1*P)),c.push(this.productions_[D[1]][0]),E.push(z.$),i.push(z._$),lt=K[c[c.length-2]][c[c.length-1]],c.push(lt);break;case 3:return!0}}return!0}},b=function(){var S={EOF:1,parseError:function(n,c){if(this.yy.parser)this.yy.parser.parseError(n,c);else throw new Error(n)},setInput:function(a,n){return this.yy=n||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var n=a.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var n=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),n=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+n+"^"},test_match:function(a,n){var c,d,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),d=a[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var i in E)this[i]=E[i];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,n,c,d;this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),i=0;i<E.length;i++)if(c=this._input.match(this.rules[E[i]]),c&&(!n||c[0].length>n[0].length)){if(n=c,d=i,this.options.backtrack_lexer){if(a=this.test_match(c,E[i]),a!==!1)return a;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(a=this.test_match(n,E[d]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var n=this.next();return n||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,c,d,E){switch(d){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return c.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return c.yytext[0];case 55:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return S}();O.lexer=b;function v(){this.yy={}}return v.prototype=O,O.Parser=v,new v}();at.parser=at;const It=at;let U={},nt=[];const Dt={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},vt={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},dt=function(t,e=void 0){return U[t]===void 0?(U[t]={attributes:[],alias:e},V.info("Added new entity :",t)):U[t]&&!U[t].alias&&e&&(U[t].alias=e,V.info(`Add alias '${e}' to entity '${t}'`)),U[t]},Lt=()=>U,Bt=function(t,e){let r=dt(t),u;for(u=e.length-1;u>=0;u--)r.attributes.push(e[u]),V.debug("Added attribute ",e[u].attributeName)},Ct=function(t,e,r,u){let l={entityA:t,roleA:e,entityB:r,relSpec:u};nt.push(l),V.debug("Added new relationship :",l)},Pt=()=>nt,Yt=function(){U={},nt=[],bt()},Zt={Cardinality:Dt,Identification:vt,getConfig:()=>Z().er,addEntity:dt,addAttributes:Bt,getEntities:Lt,addRelationship:Ct,getRelationships:Pt,clear:Yt,setAccTitle:Et,getAccTitle:mt,setAccDescription:gt,getAccDescription:kt,setDiagramTitle:Rt,getDiagramTitle:Ot},L={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},Ft=function(t,e){let r;t.append("defs").append("marker").attr("id",L.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",L.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",L.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",L.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",L.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",L.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},B={ERMarkers:L,insertMarkers:Ft},Wt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ut(t){return typeof t=="string"&&Wt.test(t)}const A=[];for(let t=0;t<256;++t)A.push((t+256).toString(16).slice(1));function Gt(t,e=0){return A[t[e+0]]+A[t[e+1]]+A[t[e+2]]+A[t[e+3]]+"-"+A[t[e+4]]+A[t[e+5]]+"-"+A[t[e+6]]+A[t[e+7]]+"-"+A[t[e+8]]+A[t[e+9]]+"-"+A[t[e+10]]+A[t[e+11]]+A[t[e+12]]+A[t[e+13]]+A[t[e+14]]+A[t[e+15]]}function Ht(t){if(!Ut(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}function zt(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}const Kt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Vt="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Xt(t,e,r){function u(l,f,y,o){var h;if(typeof l=="string"&&(l=zt(l)),typeof f=="string"&&(f=Ht(f)),((h=f)===null||h===void 0?void 0:h.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let _=new Uint8Array(16+l.length);if(_.set(f),_.set(l,f.length),_=r(_),_[6]=_[6]&15|e,_[8]=_[8]&63|128,y){o=o||0;for(let m=0;m<16;++m)y[o+m]=_[m];return y}return Gt(_)}try{u.name=t}catch{}return u.DNS=Kt,u.URL=Vt,u}function Qt(t,e,r,u){switch(t){case 0:return e&r^~e&u;case 1:return e^r^u;case 2:return e&r^e&u^r&u;case 3:return e^r^u}}function it(t,e){return t<<e|t>>>32-e}function jt(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const y=unescape(encodeURIComponent(t));t=[];for(let o=0;o<y.length;++o)t.push(y.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const u=t.length/4+2,l=Math.ceil(u/16),f=new Array(l);for(let y=0;y<l;++y){const o=new Uint32Array(16);for(let h=0;h<16;++h)o[h]=t[y*64+h*4]<<24|t[y*64+h*4+1]<<16|t[y*64+h*4+2]<<8|t[y*64+h*4+3];f[y]=o}f[l-1][14]=(t.length-1)*8/Math.pow(2,32),f[l-1][14]=Math.floor(f[l-1][14]),f[l-1][15]=(t.length-1)*8&4294967295;for(let y=0;y<l;++y){const o=new Uint32Array(80);for(let p=0;p<16;++p)o[p]=f[y][p];for(let p=16;p<80;++p)o[p]=it(o[p-3]^o[p-8]^o[p-14]^o[p-16],1);let h=r[0],_=r[1],m=r[2],g=r[3],R=r[4];for(let p=0;p<80;++p){const x=Math.floor(p/20),I=it(h,5)+Qt(x,_,m,g)+R+e[x]+o[p]>>>0;R=g,g=m,m=it(_,30)>>>0,_=h,h=I}r[0]=r[0]+h>>>0,r[1]=r[1]+_>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+g>>>0,r[4]=r[4]+R>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}const qt=Xt("v5",80,jt),Jt=qt,$t=/[^\dA-Za-z](\W)*/g;let k={},X=new Map;const te=function(t){const e=Object.keys(t);for(const r of e)k[r]=t[r]},ee=(t,e,r)=>{const u=k.entityPadding/3,l=k.entityPadding/3,f=k.fontSize*.85,y=e.node().getBBox(),o=[];let h=!1,_=!1,m=0,g=0,R=0,p=0,x=y.height+u*2,I=1;r.forEach(T=>{T.attributeKeyTypeList!==void 0&&T.attributeKeyTypeList.length>0&&(h=!0),T.attributeComment!==void 0&&(_=!0)}),r.forEach(T=>{const M=`${e.node().id}-attr-${I}`;let O=0;const b=At(T.attributeType),v=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",f+"px").text(b),S=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",f+"px").text(T.attributeName),a={};a.tn=v,a.nn=S;const n=v.node().getBBox(),c=S.node().getBBox();if(m=Math.max(m,n.width),g=Math.max(g,c.width),O=Math.max(n.height,c.height),h){const d=T.attributeKeyTypeList!==void 0?T.attributeKeyTypeList.join(","):"",E=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",f+"px").text(d);a.kn=E;const i=E.node().getBBox();R=Math.max(R,i.width),O=Math.max(O,i.height)}if(_){const d=t.append("text").classed("er entityLabel",!0).attr("id",`${M}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Z().fontFamily).style("font-size",f+"px").text(T.attributeComment||"");a.cn=d;const E=d.node().getBBox();p=Math.max(p,E.width),O=Math.max(O,E.height)}a.height=O,o.push(a),x+=O+u*2,I+=1});let F=4;h&&(F+=2),_&&(F+=2);const W=m+g+R+p,C={width:Math.max(k.minEntityWidth,Math.max(y.width+k.entityPadding*2,W+l*F)),height:r.length>0?x:Math.max(k.minEntityHeight,y.height+k.entityPadding*2)};if(r.length>0){const T=Math.max(0,(C.width-W-l*F)/(F/2));e.attr("transform","translate("+C.width/2+","+(u+y.height/2)+")");let M=y.height+u*2,O="attributeBoxOdd";o.forEach(b=>{const v=M+u+b.height/2;b.tn.attr("transform","translate("+l+","+v+")");const S=t.insert("rect","#"+b.tn.node().id).classed(`er ${O}`,!0).attr("x",0).attr("y",M).attr("width",m+l*2+T).attr("height",b.height+u*2),a=parseFloat(S.attr("x"))+parseFloat(S.attr("width"));b.nn.attr("transform","translate("+(a+l)+","+v+")");const n=t.insert("rect","#"+b.nn.node().id).classed(`er ${O}`,!0).attr("x",a).attr("y",M).attr("width",g+l*2+T).attr("height",b.height+u*2);let c=parseFloat(n.attr("x"))+parseFloat(n.attr("width"));if(h){b.kn.attr("transform","translate("+(c+l)+","+v+")");const d=t.insert("rect","#"+b.kn.node().id).classed(`er ${O}`,!0).attr("x",c).attr("y",M).attr("width",R+l*2+T).attr("height",b.height+u*2);c=parseFloat(d.attr("x"))+parseFloat(d.attr("width"))}_&&(b.cn.attr("transform","translate("+(c+l)+","+v+")"),t.insert("rect","#"+b.cn.node().id).classed(`er ${O}`,"true").attr("x",c).attr("y",M).attr("width",p+l*2+T).attr("height",b.height+u*2)),M+=b.height+u*2,O=O==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else C.height=Math.max(k.minEntityHeight,x),e.attr("transform","translate("+C.width/2+","+C.height/2+")");return C},re=function(t,e,r){const u=Object.keys(e);let l;return u.forEach(function(f){const y=le(f,"entity");X.set(f,y);const o=t.append("g").attr("id",y);l=l===void 0?y:l;const h="text-"+y,_=o.append("text").classed("er entityLabel",!0).attr("id",h).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",Z().fontFamily).style("font-size",k.fontSize+"px").text(e[f].alias??f),{width:m,height:g}=ee(o,_,e[f].attributes),p=o.insert("rect","#"+h).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",m).attr("height",g).node().getBBox();r.setNode(y,{width:p.width,height:p.height,shape:"rect",id:y})}),l},ie=function(t,e){e.nodes().forEach(function(r){r!==void 0&&e.node(r)!==void 0&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})},ut=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},ae=function(t,e){return t.forEach(function(r){e.setEdge(X.get(r.entityA),X.get(r.entityB),{relationship:r},ut(r))}),t};let ct=0;const ne=function(t,e,r,u,l){ct++;const f=r.edge(X.get(e.entityA),X.get(e.entityB),ut(e)),y=wt().x(function(x){return x.x}).y(function(x){return x.y}).curve(Tt),o=t.insert("path","#"+u).classed("er relationshipLine",!0).attr("d",y(f.points)).style("stroke",k.stroke).style("fill","none");e.relSpec.relType===l.db.Identification.NON_IDENTIFYING&&o.attr("stroke-dasharray","8,8");let h="";switch(k.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),e.relSpec.cardA){case l.db.Cardinality.ZERO_OR_ONE:o.attr("marker-end","url("+h+"#"+B.ERMarkers.ZERO_OR_ONE_END+")");break;case l.db.Cardinality.ZERO_OR_MORE:o.attr("marker-end","url("+h+"#"+B.ERMarkers.ZERO_OR_MORE_END+")");break;case l.db.Cardinality.ONE_OR_MORE:o.attr("marker-end","url("+h+"#"+B.ERMarkers.ONE_OR_MORE_END+")");break;case l.db.Cardinality.ONLY_ONE:o.attr("marker-end","url("+h+"#"+B.ERMarkers.ONLY_ONE_END+")");break;case l.db.Cardinality.MD_PARENT:o.attr("marker-end","url("+h+"#"+B.ERMarkers.MD_PARENT_END+")");break}switch(e.relSpec.cardB){case l.db.Cardinality.ZERO_OR_ONE:o.attr("marker-start","url("+h+"#"+B.ERMarkers.ZERO_OR_ONE_START+")");break;case l.db.Cardinality.ZERO_OR_MORE:o.attr("marker-start","url("+h+"#"+B.ERMarkers.ZERO_OR_MORE_START+")");break;case l.db.Cardinality.ONE_OR_MORE:o.attr("marker-start","url("+h+"#"+B.ERMarkers.ONE_OR_MORE_START+")");break;case l.db.Cardinality.ONLY_ONE:o.attr("marker-start","url("+h+"#"+B.ERMarkers.ONLY_ONE_START+")");break;case l.db.Cardinality.MD_PARENT:o.attr("marker-start","url("+h+"#"+B.ERMarkers.MD_PARENT_START+")");break}const _=o.node().getTotalLength(),m=o.node().getPointAtLength(_*.5),g="rel"+ct,p=t.append("text").classed("er relationshipLabel",!0).attr("id",g).attr("x",m.x).attr("y",m.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",Z().fontFamily).style("font-size",k.fontSize+"px").text(e.roleA).node().getBBox();t.insert("rect","#"+g).classed("er relationshipLabelBox",!0).attr("x",m.x-p.width/2).attr("y",m.y-p.height/2).attr("width",p.width).attr("height",p.height)},se=function(t,e,r,u){k=Z().er,V.info("Drawing ER diagram");const l=Z().securityLevel;let f;l==="sandbox"&&(f=rt("#i"+e));const o=(l==="sandbox"?rt(f.nodes()[0].contentDocument.body):rt("body")).select(`[id='${e}']`);B.insertMarkers(o,k);let h;h=new Mt({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:k.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const _=re(o,u.db.getEntities(),h),m=ae(u.db.getRelationships(),h);St(h),ie(o,h),m.forEach(function(I){ne(o,I,h,_,u)});const g=k.diagramPadding;Nt.insertTitle(o,"entityTitleText",k.titleTopMargin,u.db.getDiagramTitle());const R=o.node().getBBox(),p=R.width+g*2,x=R.height+g*2;xt(o,x,p,k.useMaxWidth),o.attr("viewBox",`${R.x-g} ${R.y-g} ${p} ${x}`)},oe="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function le(t="",e=""){const r=t.replace($t,"");return`${ht(e)}${ht(r)}${Jt(t,oe)}`}function ht(t=""){return t.length>0?`${t}-`:""}const ce={setConf:te,draw:se},he=t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,de=he,Te={parser:It,db:Zt,renderer:ce,styles:de};export{Te as diagram};
