var L='en',D={
yg:["Yangon","仰光","Largest city and former capital, home to the golden Shwedagon Pagoda.","最大城市、前首都，金色的大金塔所在地。"],
md:["Mandalay","曼德勒","Royal city and cultural heart of Upper Myanmar.","古代王城，缅甸上部的文化中心。"],
np:["Naypyidaw","内比都","The capital since 2006.","2006年起的首都。"],
sh:["Shan","掸邦","Highland plateau with Inle Lake and tea country.","高原地区，有茵莱湖与茶乡。"],
kc:["Kachin","克钦邦","Northern mountains and the Irrawaddy’s source rivers.","北部山地，伊洛瓦底江的源头河流所在。"],
cn:["Chin","钦邦","Western hills with rich weaving traditions.","西部山区，有丰富的织布传统。"],
rk:["Rakhine","若开邦","Coastal state facing the Bay of Bengal.","面向孟加拉湾的沿海邦。"],
sg:["Sagaing","实皆","Hills dotted with monasteries and pagodas.","山丘上遍布寺院与佛塔。"],
mg:["Magway","马圭","Dry central plains rich in oil fields.","中部干旱平原，盛产石油。"],
bg:["Bago","勃固","Ancient Mon kingdom with the giant reclining Buddha.","古孟族王国，有巨大的卧佛。"],
ay:["Ayeyarwady","伊洛瓦底","Rice-growing delta of the great river.","大河三角洲，水稻产区。"],
mn:["Mon","孟邦","Golden Rock pagoda and a coast of fishing towns.","有大金石佛塔与渔港小镇。"],
ky:["Kayin","克伦邦","Green hills along the Thai border.","与泰国交界的青山。"],
kh:["Kayah","克耶邦","Small eastern state of mountains and villages.","东部山区小邦。"],
tn:["Tanintharyi","德林达依","Long southern strip of islands and rainforest.","南部狭长的岛屿与雨林。"]};
function nm(k){return D[k][L=='zh'?1:0]}function ds(k){return D[k][L=='zh'?3:2]}
var chips=document.getElementById('chips'),info=document.getElementById('info');
function show(k){info.style.opacity=0;setTimeout(function(){info.innerHTML='<b>'+nm(k)+'</b>'+ds(k);info.style.opacity=1},200);
 [].forEach.call(chips.children,function(c){c.classList.toggle('on',c.dataset.k==k)});cur=k}
var cur='yg';
Object.keys(D).forEach(function(k){var b=document.createElement('button');b.dataset.k=k;b.textContent=D[k][0];b.onclick=function(){show(k)};chips.appendChild(b)});
var els=[].slice.call(document.querySelectorAll('[data-zh]'));els.forEach(function(e){e.dataset.en=e.innerHTML});
function apply(){els.forEach(function(e){e.innerHTML=L=='zh'?e.dataset.zh:e.dataset.en});
 [].forEach.call(chips.children,function(c){c.textContent=nm(c.dataset.k)});
 document.documentElement.lang=L=='zh'?'zh-CN':'en';document.getElementById('lang').textContent=L=='zh'?'English':'中文';show(cur)}
document.getElementById('lang').onclick=function(){document.body.classList.add('sw');setTimeout(function(){L=L=='zh'?'en':'zh';apply();try{localStorage.setItem('lang',L)}catch(e){}document.body.classList.remove('sw')},300)};
try{var s=localStorage.getItem('lang');if(s=='zh')L=s}catch(e){}
apply();
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
function tick(){var t=new Date(2026,10,21,0,0,0)-new Date();if(t<0)t=0;
 document.getElementById('d').textContent=Math.floor(t/864e5);document.getElementById('h').textContent=Math.floor(t%864e5/36e5);document.getElementById('m').textContent=Math.floor(t%36e5/6e4)}
tick();setInterval(tick,30000);
