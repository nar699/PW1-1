(()=>{var y=class{constructor(t,e,i,s,n,l,a){this.taskId=t,this.titleValue=e,this.DeadlieValue=i,this.imageValue=s,this.DescriptionValue=l,this.CategoryValue=n,this.Completed=a}};var p=class{#t=new Array;constructor(){this.#t[0]="media/img/Rectangle 15.png",this.#t[1]="media/img/Rectangle 16.png",this.#t[2]="media/img/Rectangle 17.png",this.#t[3]="media/img/Rectangle 18.png",this.#t[4]="media/img/Rectangle 19.png",this.#t[5]="media/img/Rectangle 20.png"}selectImage(t){return this.#t[t]}getImage(t){return t==null?this.#t[defaultImg]:this.#t[t]}};var f=class{#t={};#e=[];constructor(){var t=JSON.parse(localStorage.getItem("cat"));t==null&&localStorage.setItem("cat",JSON.stringify(this.#t)),this.#t=JSON.parse(localStorage.getItem("cat"))}addCategory(t){this.#t[t.categoryId]=t,localStorage.setItem("cat",JSON.stringify(this.#t)),this.#r(),console.log(this.#t)}removeCategory(t){delete this.#t[t],localStorage.setItem("cat",JSON.stringify(this.#t)),this.#r()}getCategory(){return this.#t=JSON.parse(localStorage.getItem("cat")),Object.keys(this.#t).map(t=>this.#t[t])}addObserver(t){this.#e.push(t)}#r(){this.#e.forEach(t=>t.update())}};var v=class{#t;#e;#r="../media/img/Rectangle 15.png";#i={};#s={};#n={};#a={};#d={};#c={};#l={};#p;#h;#m;#u=0;img=new p;constructor(t,e,i){this.#h=e,this.#m=i,this.#t=t}#g(t){t.addEventListener("click",e=>{e.preventDefault();let i=this.#i.input.value,s=this.#s.input.value,n=this.img.getImage(this.#u),l=document.getElementById("category").value,a=this.#a.input.value,r=document.getElementById("checkbox1").checked;if(i.length==0||i.length>100){this.#p.innerHTML="Title required. Maximum 100 characters length.",this.update();return}if(s==""){this.#p.innerHTML="Deadline required.",this.update();return}if(a.length==0||a.length>1e3){this.#p.innerHTML="Description required. Maximum 1.000 characters length.",this.update();return}let d=(this.#h.getTask().length||0)+1,c=new y(d,i,s,n,l,a,r);this.#h.addTask(c),window.location.href="index.html"})}#C(){this.#i.input.value="",this.#s.input.value="",this.#a.input.value=""}#b(t){t.addEventListener("click",e=>{e.preventDefault(),window.location.href="index.html"})}#o(t,e){t.addEventListener("click",i=>{i.preventDefault();var s=this.img.selectImage(e);document.getElementById("fotoGran").src=s,this.#u=e,this.update()})}update(){this.render}render(){let t=document.createElement("div");t.setAttribute("class","fotoGran"),this.#t.appendChild(t);let e=document.createElement("img");e.setAttribute("id","fotoGran"),e.src=this.img.selectImage(this.#u),t.appendChild(e);let i=document.createElement("div");i.setAttribute("class","fotos"),this.#t.appendChild(i);let s=document.createElement("picture");i.appendChild(s);let n=document.createElement("input");n.setAttribute("type","image"),n.setAttribute("src","media/img/Rectangle 15.png"),n.setAttribute("alt","0"),n.setAttribute("id","0"),this.#o(n,n.id),s.appendChild(n);let l=document.createElement("input");l.setAttribute("type","image"),l.setAttribute("src","media/img/Rectangle 16.png"),l.setAttribute("alt","1"),l.setAttribute("id","1"),this.#o(l,l.id),s.appendChild(l);let a=document.createElement("input");a.setAttribute("type","image"),a.setAttribute("src","media/img/Rectangle 17.png"),a.setAttribute("alt","2"),a.setAttribute("id","2"),this.#o(a,a.id),s.appendChild(a);let r=document.createElement("input");r.setAttribute("type","image"),r.setAttribute("src","media/img/Rectangle 18.png"),r.setAttribute("alt","3"),r.setAttribute("id","3"),this.#o(r,r.id),s.appendChild(r);let d=document.createElement("input");d.setAttribute("type","image"),d.setAttribute("src","media/img/Rectangle 19.png"),d.setAttribute("alt","4"),d.setAttribute("id","4"),this.#o(d,d.id),s.appendChild(d);let c=document.createElement("input");c.setAttribute("type","image"),c.setAttribute("src","media/img/Rectangle 20.png"),c.setAttribute("alt","5"),c.setAttribute("id","5"),this.#o(c,c.id),s.appendChild(c),this.#e=document.createElement("form"),this.#e.setAttribute("id","form"),this.#t.appendChild(this.#e);let u=document.createElement("div");u.setAttribute("class","title"),this.#e.appendChild(u),this.#i.label=document.createElement("label");let S=document.createElement("span");S.innerHTML="Title",this.#i.label.appendChild(S),u.appendChild(this.#i.label),this.#i.input=document.createElement("input"),this.#i.input.setAttribute("id","title"),this.#i.input.setAttribute("type","text"),this.#i.label.appendChild(this.#i.input);let g=document.createElement("div");g.setAttribute("class","deadline"),this.#e.appendChild(g),this.#s.label=document.createElement("label");let I=document.createElement("span");I.innerHTML="Deadline",this.#s.label.appendChild(I),g.appendChild(this.#s.label),this.#s.input=document.createElement("input"),this.#s.input.setAttribute("id","date"),this.#s.input.setAttribute("type","date"),this.#s.label.appendChild(this.#s.input);let h=document.createElement("div");h.setAttribute("class","category"),this.#e.appendChild(h),this.#n.label=document.createElement("label"),this.#n.label.setAttribute("for","category");let L=document.createElement("span");L.innerHTML="Category",this.#n.label.appendChild(L),h.appendChild(this.#n.label),this.#n.select=document.createElement("select"),this.#n.select.setAttribute("id","category"),this.#n.select.setAttribute("name","category"),h.appendChild(this.#n.select);let N=document.getElementById("category");N.innerHTML='<option value="none" selected disabled hidden>Select category</option>';let V=this.#m.getCategory();for(var b=0;b<V.length;b++){console.log("entro");let x=document.createElement("option"),w=document.createElement("span");w.innerHTML=this.#m.getCategory()[b],x.appendChild(w),this.#n.select.appendChild(x)}let m=document.createElement("div");m.setAttribute("class","description"),this.#e.appendChild(m),this.#a.label=document.createElement("label"),this.#a.label.setAttribute("for","description");let T=document.createElement("span");T.innerHTML="Description",this.#a.label.appendChild(T),m.appendChild(this.#a.label),this.#a.input=document.createElement("input"),this.#a.input.setAttribute("id","text"),this.#a.input.setAttribute("type","text"),m.appendChild(this.#a.input),this.#p=document.createElement("p"),this.#e.appendChild(this.#p);let C=document.createElement("div");C.setAttribute("class","checkbox1"),this.#e.appendChild(C),this.#l.label=document.createElement("label");let O=document.createElement("span");this.#l.input=document.createElement("input"),this.#l.input.setAttribute("id","checkbox1"),this.#l.input.setAttribute("type","checkbox"),this.#l.label.appendChild(this.#l.input),O.innerHTML="Completed",this.#l.label.appendChild(O),C.appendChild(this.#l.label);let A=document.createElement("div");A.setAttribute("class","submit-cancel"),this.#e.appendChild(A),this.#c=document.createElement("input"),this.#c.setAttribute("id","submit-cancel"),this.#c.setAttribute("type","submit"),this.#c.setAttribute("value","Cancel"),this.#b(this.#c),A.appendChild(this.#c);let E=document.createElement("div");E.setAttribute("class","submit-accept"),this.#d=document.createElement("input"),this.#d.setAttribute("id","submit-accept"),this.#d.setAttribute("type","submit"),this.#d.setAttribute("value","Accept"),this.#g(this.#d),E.appendChild(this.#d),this.#e.appendChild(E)}};var k=class{#t={};#e=[];constructor(){var t=JSON.parse(localStorage.getItem("task"));t==null&&localStorage.setItem("task",JSON.stringify(this.#t)),this.#t=JSON.parse(localStorage.getItem("task"))}addTask(t){this.#t[t.taskId]=t,localStorage.setItem("task",JSON.stringify(this.#t)),this.#r(),console.log(this.#t)}removeTask(t){delete this.#t[t],localStorage.setItem("task",JSON.stringify(this.#t)),this.#r()}getTask(){return this.#t=JSON.parse(localStorage.getItem("task")),Object.keys(this.#t).map(t=>this.#t[t])}addObserver(t){this.#e.push(t)}#r(){this.#e.forEach(t=>t.update())}};document.addEventListener("DOMContentLoaded",()=>{let o=new k,t=new f,e=new p;new v(document.getElementById("container"),o,t).render()});})();
//# sourceMappingURL=todoForm.js.map
