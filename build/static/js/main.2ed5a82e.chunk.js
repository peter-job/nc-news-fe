(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},27:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=a(2),i=a(3),s=a(5),u=a(4),m=a(6),d=a(1),h=(a(39),a(40),a(41),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",notFound:!1},a.handleChange=function(e){var t=e.target.value;a.setState({username:t,notFound:!1})},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.login)(a.state.username).then(function(){return Object(d.c)("/")}).catch(function(){return a.setState({notFound:!0})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.user?r.a.createElement("div",{className:"Auth"},r.a.createElement("p",null,"Hi, ",this.props.user.name),r.a.createElement("button",{onClick:this.props.logout},"Log out")):r.a.createElement("div",{className:"Auth"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{onChange:this.handleChange,value:this.state.username,placeholder:"try 'jessjelly'"}),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Log in"))),this.state.notFound&&r.a.createElement("span",null,r.a.createElement("br",null),"Sorry, we couldn't find that username."))}}]),t}(n.Component)),p=(a(42),a(43),function(e){var t=e.user;return r.a.createElement("div",{className:"UserIcon"},r.a.createElement(d.a,{to:"/login"},r.a.createElement("span",{className:"userName"},t?t.username:"Login")),r.a.createElement(d.a,{to:"/login"},r.a.createElement("img",{className:"userAvatar",alt:t?t.username:"login",src:t?t.avatar_url:"images/login.png"})))}),v=function(){return r.a.createElement("div",{className:"Title"},r.a.createElement(d.a,{to:"/"},r.a.createElement("h2",null,"NC")))},f=(a(44),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1},a.toggleActive=function(){var e=a.state.active;a.setState({active:!e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.active,t=this.props,a=t.handler,n=t.title,c=t.selected,l=t.field,o=t.trayOptions;return r.a.createElement("div",{className:"Dropdown noselect",onClick:this.toggleActive},r.a.createElement("p",null,"".concat(n).concat(c)),r.a.createElement("ul",{className:"Dropdown-List-".concat(e?"Active":"Inactive")},o.map(function(e){return r.a.createElement("li",{className:"Dropdown-Li",key:e.value,onClick:function(){return a({field:l,value:e.value,name:e.name})}},e.name)})))}}]),t}(n.Component)),g=function(e){var t=e.user,a=e.navOptions,n=e.handler,c=e.selected;return r.a.createElement("nav",{className:"Navbar"},r.a.createElement(v,null),r.a.createElement(f,{trayOptions:a,selected:c,title:"",className:"dropDown",handler:n}),r.a.createElement(p,{user:t}))},E=a(8),b=a(10),y=(a(45),a(11)),O=a.n(y),N=a(26),j=a.n(N).a.create({baseURL:"https://be2-nc-news.herokuapp.com/api/"}),S=function(e){return j.get("articles",{params:e}).then(function(e){var t=e.data.articles;return Promise.all(t.map(function(e){return w(e.author).then(function(t){return e.avatar_url=t.avatar_url,e})}))})},_=function(e,t,a){var n={inc_votes:e},r="articles/".concat(t).concat(a?"/comments/".concat(a):"");return j.patch(r,n).then(function(e){var t=e.data;return t.article?t.article:t.comment})},C=function(e,t){var a="articles/".concat(e,"/comments");return j.get(a,{params:t}).then(function(e){var t=e.data.comments;return Promise.all(t.map(function(e){return w(e.author).then(function(t){return e.avatar_url=t.avatar_url,e})}))})},w=function(e){var t="users/".concat(e);return j.get(t).then(function(e){return e.data.user})},A=function(e,t,a,n){var r="topics/".concat(e,"/articles");return j.post(r,{title:t,body:a,username:n}).then(function(e){return e.data.article})},k=function(e,t,a){var n="articles/".concat(e,"/comments");return j.post(n,{username:t,body:a}).then(function(e){return e.data.comment})},L=(a(65),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={voted:0},a.handleVote=function(e){var t=a.state.voted,n=a.props,r=n.article_id,c=n.comment_id,l=0;t===e?(t=0,l=-e):t===-e?(t=e,l=2*e):(t=e,l=e),a.setState({voted:t}),_(l,r,c)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.votes,a=this.state.voted;return r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"up noselect ".concat(a>0?"Voted":""),onClick:function(){return e.handleVote(1)}},r.a.createElement("i",{className:"fi-arrow-up"})," "),r.a.createElement("span",{className:"count noselect"},t+a),r.a.createElement("span",{className:"down noselect ".concat(a<0?"Voted":""),onClick:function(){return e.handleVote(-1)}},r.a.createElement("i",{className:"fi-arrow-down"})," "))}}]),t}(n.Component)),D=function(e){var t=e.article,a=e.full;return r.a.createElement("div",{className:"Article"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{alt:t.author,src:t.avatar_url,onError:function(e){return e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"}})),r.a.createElement("div",{className:"author"},r.a.createElement("span",null,t.author," in ",t.topic,r.a.createElement("br",null),O()(t.created_at,"YYYY-MM-DD-Thh:mm:ss").fromNow())),r.a.createElement("div",{className:"topic"},r.a.createElement("span",null)),r.a.createElement("div",{className:"title"},a?r.a.createElement("span",null,t.title):r.a.createElement(d.a,{to:"/articles/".concat(t.article_id)},t.title)),r.a.createElement("div",{className:"Votes"},r.a.createElement(L,{votes:t.votes,article_id:t.article_id})),a&&r.a.createElement("div",{className:"Body"},r.a.createElement("p",null,t.body)))},T=(a(66),function(e){var t=e.articles;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.article_id},r.a.createElement(D,{article:e}))}))}),U=a(12),V=(a(67),function(e){var t=e.handler,a=e.sort_by,n=e.order,c=e.sortOptions,l=e.orderOptions,o=function(e,t){return t.reduce(function(t,a){return a.value===e?a.name:t},"")};return r.a.createElement("div",{className:"ContentOptions"},r.a.createElement(f,{handler:t,trayOptions:c,title:"Sort By: ",selected:o(a,c),field:"sort_by"}),r.a.createElement(f,{handler:t,trayOptions:l,title:"Order: ",selected:o(n,l),field:"order"}))}),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],sort_by:"created_at",order:"desc",page:1,topic:null,hasAllArticles:!1},a.sortOptions=[{value:"title",name:"Title"},{value:"articles.username",name:"User"},{value:"topic",name:"Topic"},{value:"created_at",name:"Date"},{value:"votes",name:"Votes"},{value:"comment_count",name:"Comments"}],a.orderOptions=[{value:"asc",name:"Ascending"},{value:"desc",name:"Descending"}],a.fetchArticles=function(){var e=a.state,t=e.sort_by,n=e.order,r=e.page;S({sort_by:t,order:n,p:r}).then(function(e){a.setState(function(t){var a=t.page,n=t.articles;return{articles:1===a?e:[].concat(Object(b.a)(n),Object(b.a)(e)),isLoading:!1}})}).catch(function(e){404===e.response.status&&a.setState(function(e){return{hasAllArticles:!0,page:e.page-1}})})},a.handleScroll=Object(U.throttle)(function(e){var t=e.target,n=t.clientHeight,r=t.scrollTop;t.scrollHeight-(n+r)<150&&a.setState(function(e){return{page:e.page+1}})},1e3),a.updateContentOptions=function(e){var t=e.field,n=e.value;a.setState(function(e){var a,r=e.page,c=e.hasAllArticles;return e[t]!==n&&(r=1,c=!1),a={},Object(E.a)(a,t,n),Object(E.a)(a,"page",r),Object(E.a)(a,"hasAllArticles",c),a})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.sort_by;S(t).then(function(t){return e.setState({articles:t})}),this.addScrollEventListener()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.page,r=a.hasAllArticles,c=a.sort_by,l=a.order,o=t.page!==n,i=t.sort_by!==c,s=t.order!==l;(o&&!r||i||s)&&this.fetchArticles()}},{key:"addScrollEventListener",value:function(){document.querySelector(".ArticleList").addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.articles,a=e.sort_by,n=e.order;return r.a.createElement("div",{className:"ArticleList"},r.a.createElement(V,{handler:this.updateContentOptions,sort_by:a,order:n,sortOptions:this.sortOptions,orderOptions:this.orderOptions}),r.a.createElement(T,{articles:t}))}}]),t}(n.Component),M=(a(68),function(){return r.a.createElement("div",{className:"NoMatch"},r.a.createElement("p",null,"Page not found!"))}),x=(a(69),function(e){var t=e.comment,a=e.article_id;return r.a.createElement("div",{className:"Comment"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{alt:t.author,src:t.avatar_url,onError:function(e){return e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"}})),r.a.createElement("div",{className:"author"},r.a.createElement("span",null,t.author,r.a.createElement("br",null),O()(t.created_at,"YYYY-MM-DD-Thh:mm:ss").fromNow())),r.a.createElement("div",{className:"body"},r.a.createElement("p",null,t.body)),r.a.createElement("div",{className:"Votes"},r.a.createElement(L,{votes:t.votes,article_id:a,comment_id:t.comment_id})))}),P=(a(23),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={body:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state.body,n=a.props,r=n.user,c=n.article_id;k(c,r.username,t).then(function(){return a.props.handler()})},a.handleChange=function(e){a.setState({body:e.target.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=this.state.isLoading;return e?t?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{className:"NewArticle"},r.a.createElement("form",{className:"articleForm",onSubmit:this.handleSubmit},r.a.createElement("textarea",{className:"articleTextarea",placeholder:"Say something!",onChange:this.handleChange,value:this.state.body}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Comment"}))):r.a.createElement("div",{className:"NewArticle"},r.a.createElement(d.a,{to:"/login"},"Please login first."))}}]),t}(n.Component)),Y=(a(70),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={article:null,comments:null,isLoading:!0,hasError:!1,sort_by:"created_at",order:"desc",page:1,hasAllComments:!1},a.sortOptions=[{value:"created_at",name:"Date"},{value:"votes",name:"Votes"},{value:"comments.username",name:"User"}],a.orderOptions=[{value:"asc",name:"Ascending"},{value:"desc",name:"Descending"}],a.fetchComments=function(){var e=a.state,t=e.sort_by,n=e.order,r=e.page,c=a.props.id;C(c,{sort_by:t,order:n,p:r}).then(function(e){a.setState(function(t){var a=t.page,n=t.comments;return{comments:1===a?e:[].concat(Object(b.a)(n),Object(b.a)(e)),isLoading:!1}})}).catch(function(e){404===e.response.status&&a.setState(function(e){return{hasAllComments:!0,page:e.page-1}})})},a.handleNewComment=function(){a.setState({page:1,comments:null,isLoading:!0},function(){return a.fetchComments()})},a.handleScroll=Object(U.throttle)(function(e){var t=e.target,n=t.clientHeight,r=t.scrollTop;t.scrollHeight-(n+r)<150&&a.setState(function(e){var t=e.page;return{page:++t}})},1e3),a.updateContentOptions=function(e){var t=e.field,n=e.value;a.setState(function(e){var a,r=e.page,c=e.hasAllComments;return e[t]!==n&&(r=1,c=!1),a={},Object(E.a)(a,t,n),Object(E.a)(a,"page",r),Object(E.a)(a,"hasAllComments",c),a})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.id;this.state.article||function(e){var t="articles/"+e;return j.get(t).then(function(e){var t=e.data.article;return w(t.author).then(function(e){return t.avatar_url=e.avatar_url,t})})}(t).then(function(t){e.setState({article:t})}).then(function(){return C(t)}).then(function(t){e.setState({comments:t,isLoading:!1})}).catch(function(t){return e.setState({hasError:!0})})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.page,r=a.hasAllComments,c=a.sort_by,l=a.order,o=a.isLoading,i=t.page!==n,s=t.sort_by!==c,u=t.order!==l;(i&&!r||s||u)&&this.fetchComments(),!0===t.isLoading&&!1===o&&this.addScrollEventListener()}},{key:"addScrollEventListener",value:function(){document.querySelector(".ArticlePage").addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.article,a=e.comments,n=e.isLoading,c=e.hasError,l=e.sort_by,o=e.order;return c?r.a.createElement("p",null,"Something went wrong..."):n?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{className:"ArticlePage"},r.a.createElement(D,{key:t.title,article:t,full:!0}),r.a.createElement("div",null,r.a.createElement(P,{user:this.props.user,article_id:this.props.id,handler:this.handleNewComment})),r.a.createElement("div",{className:"CommentsHeader"},r.a.createElement("br",null),r.a.createElement("h3",null,"Comments"),r.a.createElement("br",null)),r.a.createElement(V,{handler:this.updateContentOptions,sort_by:l,order:o,sortOptions:this.sortOptions,orderOptions:this.orderOptions}),r.a.createElement("div",{className:"CommentList"},a.map(function(e){return r.a.createElement(x,{key:e.comment_id,comment:e,article_id:t.article_id})})))}}]),t}(n.Component)),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topics:null,isLoading:!0,topic:"",title:"",body:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.topic,r=t.title,c=t.body,l=a.props.user;console.log(a.state),A(n,r,c,l.username).then(function(e){console.log("navigating away!"),Object(d.c)("/articles/"+e.article_id)})},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.get("topics").then(function(e){return e.data.topics}).then(function(t){return e.setState({topics:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.props.user,t=this.state,a=t.isLoading,n=t.topics;return e?a?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{className:"NewArticle"},r.a.createElement("p",null,"New Article"),r.a.createElement("form",{className:"articleForm",onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,type:"text",placeholder:"Title",className:"titleInput",name:"title",value:this.state.Title}),r.a.createElement("br",null),r.a.createElement("textarea",{className:"articleTextarea",placeholder:"Say something!",name:"body",onChange:this.handleChange,value:this.state.Body}),r.a.createElement("br",null),r.a.createElement("select",{name:"topic",onChange:this.handleChange,value:this.state.Topic,defaultValue:"Topic"},r.a.createElement("option",{disabled:!0,hidden:!0},"Topic")," ",n.map(function(e){return r.a.createElement("option",{key:e.slug,value:e.slug},e.slug)})),r.a.createElement("input",{type:"submit",value:"Post"}))):r.a.createElement("div",{className:"NewArticle"},r.a.createElement(d.a,{to:"/login"},"Please login first."))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,page:"Home"},a.navOptions=[{value:"/",name:"Home"},{value:"/login",name:"Login"},{value:"/article/new",name:"New Article"}],a.navRef={"/":"Home","/login":"Login","/article/new":"New Article"},a.handleSave=function(){localStorage.setItem("state",JSON.stringify(a.state))},a.setUser=function(e){return w(e).then(function(e){return a.setState({user:e})})},a.handleNavbar=function(e){e.field;var t=e.value,n=e.name;a.setState({page:n}),Object(d.c)(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("state");e&&this.setState(JSON.parse(e))}},{key:"componentDidUpdate",value:function(){this.handleSave()}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{user:t,navOptions:this.navOptions,handler:this.handleNavbar,selected:this.navRef[window.location.pathname]}),r.a.createElement(d.b,{className:"Router"},r.a.createElement(h,{path:"/login",login:this.setUser,logout:function(){return e.setState({user:null})},user:this.state.user}),r.a.createElement(H,{path:"/"}),r.a.createElement(Y,{path:"/articles/:id",user:t}),r.a.createElement(F,{path:"/article/new",user:t}),r.a.createElement(M,{default:!0})))}}]),t}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2ed5a82e.chunk.js.map