var IM={"ayeyarwady": "images/ayeyarwady.jpg", "chin": "images/chin.jpg", "kachin": "images/kachin.jpg", "kayah": "images/kayah.jpg", "kayin": "images/kayin.jpg", "magway": "images/magway.jpg", "mandalay": "images/mandalay.jpg", "mon": "images/mon.jpg", "rakhine": "images/rakhine.jpg", "sagaing": "images/sagaing.jpg", "shan": "images/shan.jpg", "tanintharyi": "images/tanintharyi.jpg", "yangon": "images/yangon.jpg", "bago": "images/bago.jpg", "naypyidaw": "images/naypyidaw.jpg", "flag": "images/flag.jpg", "map": "images/map.jpg", "shwe": "images/shwe.jpg"};
var lang="en",T=function(a,b){return lang==="zh"?b:a};
var R=[
["yangon","Yangon","仰光","Yangon","仰光","Largest city and former capital. Home of Shwedagon Pagoda, colonial buildings and lively street food.","最大城市，曾为首都。拥有大金塔、殖民时期建筑和热闹的街头美食。"],
["mandalay","Mandalay","曼德勒","Mandalay","曼德勒","The last royal capital, famous for the long teak U Bein Bridge and crafts like gold leaf.","最后的王都，以长长的柚木乌本桥和金箔等手工艺闻名。"],
["shan","Shan State","掸邦","Taunggyi","东枝","Cool highlands with tea terraces, Inle Lake and many ethnic communities.","凉爽的高原，有茶园梯田、茵莱湖和众多民族。"],
["mon","Mon State","孟邦","Mawlamyine","毛淡棉","Home of the Mon people and the Golden Rock (Kyaiktiyo), a major pilgrimage site.","孟族故乡，著名朝圣地大金石（吉谛瑜）所在地。"],
["bago","Bago Region","勃固省","Bago","勃固","Ancient Mon capital with the towering Shwemawdaw Pagoda, one of the tallest in the country.","古代孟族都城，高耸的瑞摩陶塔是全国最高的佛塔之一。"],
["rakhine","Rakhine State","若开邦","Sittwe","实兑","Coastal state with the ancient temples of Mrauk-U and the beaches of the Bay of Bengal.","沿海邦，有古老的妙乌寺庙群和孟加拉湾海滩。"],
["tanintharyi","Tanintharyi Region","德林达依省","Dawei","土瓦","The far south: long coast and the Mergui Archipelago with turquoise bays.","最南端，海岸线漫长，丹老群岛拥有碧蓝海湾。"],
["kayin","Kayin State","克伦邦","Hpa-An","帕安","Limestone mountains, caves and green rice fields around Hpa-An.","帕安一带有石灰岩山峰、洞穴和碧绿稻田。"],
["kayah","Kayah State","克耶邦","Loikaw","垒固","One of the smallest states, with hilltop pagodas in Loikaw and unique local cultures.","最小的邦之一，垒固山顶佛塔和独特民族文化。"],
["kachin","Kachin State","克钦邦","Myitkyina","密支那","The far north of mountains and rivers. The Irrawaddy River begins near Myitkyina.","北部的山川之地，伊洛瓦底江在密支那附近形成。"],
["chin","Chin State","钦邦","Hakha","哈卡","Remote green mountains in the west with traditional villages and trekking trails.","西部偏远的青山，传统村落与徒步小径。"],
["sagaing","Sagaing Region","实皆省","Monywa","蒙育瓦","Sagaing Hill is covered with pagodas and monasteries beside the Irrawaddy River.","实皆山上遍布佛塔和寺院，紧邻伊洛瓦底江。"],
["magway","Magway Region","马圭省","Magway","马圭","Dry central region along the Irrawaddy, known for farming, pagodas and oil.","沿伊洛瓦底江的中部干燥地区，以农业、佛塔和石油著称。"],
["ayeyarwady","Ayeyarwady Region","伊洛瓦底省","Pathein","勃生","The delta and rice bowl of Myanmar, with fishing villages and river life.","缅甸的三角洲和粮仓，渔村与河上生活。"],
["naypyidaw","Naypyidaw","内比都联邦区","Naypyidaw","内比都","The capital city since 2006, with wide roads and grand government buildings.","2006年起的首都，道路宽阔，政府建筑宏伟。"]
];
var FACTS=[[55,"M+","Population","人口"],[135,"","Ethnic groups","民族"],[15,"","Regions & states","一级行政区"],[1948,"","Independence","独立年份"]];
var STY=[["Budget","经济",[10,10,5,5]],["Comfort","舒适",[35,20,12,10]],["Luxury","奢华",[100,45,30,25]]],st=1;
var PH=[["မင်္ဂလာပါ","min-ga-la-ba","Hello","你好"],["ကျေးဇူးတင်ပါတယ်","chay-zu tin-ba-de","Thank you","谢谢"],["ဟုတ်ကဲ့","hoke-kè","Yes","是的"],["မဟုတ်ဘူး","ma-hoke-bu","No","不是"],["ဘယ်လောက်လဲ","be-lauk-lè","How much?","多少钱？"],["အရသာရှိတယ်","a-ya-tha shi-de","Delicious","好吃"]];
var Q=[
["What is the capital of Myanmar?","缅甸的首都是哪里？",["Yangon 仰光","Naypyidaw 内比都","Mandalay 曼德勒"],1],
["Which religion do most people in Myanmar follow?","缅甸大多数人信仰什么宗教？",["Theravada Buddhism 上座部佛教","Hinduism 印度教","Taoism 道教"],0],
["What is Thingyan?","泰金（Thingyan）是什么？",["A water festival 泼水节","A noodle soup 面汤","A river 河流"],0],
["Which ancient city has thousands of temples and is a UNESCO site?","哪座古城拥有数千座寺庙并列入世界遗产？",["Bagan 蒲甘","Hpa-An 帕安","Pathein 勃生"],0],
["What does the white star on the flag stand for?","国旗上的白色星星象征什么？",["Peace 和平","Unity of the Union 联邦统一","Rice 稻米"],1]
],qi=0,qs=0,qd=false;
var h=function(i){return document.getElementById(i)};
function setLang(l){lang=l;document.documentElement.lang=l==="zh"?"zh-CN":"en";h("lb").textContent=l==="zh"?"EN":"中文";
document.querySelectorAll("[data-zh]").forEach(function(e){if(!e.dataset.en)e.dataset.en=e.textContent;e.textContent=l==="zh"?e.dataset.zh:e.dataset.en});
document.querySelectorAll("[data-zhp]").forEach(function(e){if(!e.dataset.pe)e.dataset.pe=e.placeholder;e.placeholder=l==="zh"?e.dataset.zhp:e.dataset.pe});
renderAll()}
function reveal(){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll(".rv:not(.in)").forEach(function(e){o.observe(e)})}
function facts(){h("facts").innerHTML=FACTS.map(function(f){return "<div class='fact'><b data-n='"+f[0]+"'>"+f[0]+f[1]+"</b><span>"+T(f[2],f[3])+"</span></div>"}).join("")}
var counted=false;function count(){if(counted)return;counted=true;document.querySelectorAll("[data-n]").forEach(function(e){var n=+e.dataset.n,s=e.textContent.replace(/[0-9]/g,""),t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1500);e.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f)})(t0)})}
function open_(i){var r=R[i];h("mi").src=IM[r[0]];h("mt").textContent=T(r[1],r[2]);h("mc").textContent=T("Capital: ","首府：")+T(r[3],r[4]);h("mb").textContent=T(r[5],r[6]);h("modal").classList.add("on")}
function regions(){h("rg").innerHTML="";h("mapchips").innerHTML="";R.forEach(function(r,i){var b=document.createElement("button");b.className="rc rv";b.innerHTML="<img loading='lazy' alt=''><div><b></b><small></small></div>";b.querySelector("img").src=IM[r[0]];b.querySelector("b").textContent=T(r[1],r[2]);b.querySelector("small").textContent=T("Capital: ","首府：")+T(r[3],r[4]);b.onclick=function(){open_(i)};h("rg").appendChild(b);var c=document.createElement("button");c.className="chip";c.textContent=T(r[1],r[2]);c.onclick=function(){open_(i)};h("mapchips").appendChild(c)})}
function calc(){var d=+h("d").value,p=+h("p").value,f=+h("f").value;h("dv").textContent=d;h("pv").textContent=p;h("fv").textContent=f;
h("st").innerHTML="";STY.forEach(function(s,i){var b=document.createElement("button");b.className="chip"+(i===st?" on":"");b.textContent=T(s[0],s[1])+" · ~$"+s[2].reduce(function(a,b){return a+b},0)+T("/day","/天");b.onclick=function(){st=i;calc()};h("st").appendChild(b)});
var v=STY[st][2],sup=p===1?1.6:1,L=[[T("Stays","住宿"),v[0]*d*p*sup],[T("Food","餐饮"),v[1]*d*p],[T("Local transport","当地交通"),v[2]*d*p],[T("Tickets & fun","门票与活动"),v[3]*d*p],[T("Domestic flights","国内航班"),f*[70,90,130][st]*p],[T("Visa & extras","签证与杂费"),60*p]];
var tot=L.reduce(function(a,b){return a+b[1]},0),mx=Math.max.apply(null,L.map(function(x){return x[1]}));
h("tot").textContent="$"+Math.round(tot).toLocaleString();h("pp").textContent="≈ $"+Math.round(tot/p).toLocaleString()+T(" per person"," / 人");
h("bars").innerHTML=L.map(function(x){return "<div class='bar'><span>"+x[0]+"</span><i style='width:"+Math.max(2,x[1]/mx*55)+"%'></i><b>$"+Math.round(x[1])+"</b></div>"}).join("")}
function phrases(){h("ph").innerHTML="<tr><th>"+T("BURMESE","缅甸语")+"</th><th>"+T("SAY IT","发音")+"</th><th>English</th><th>中文</th></tr>"+PH.map(function(r){return "<tr><td class='mm big'>"+r[0]+"</td><td>"+r[1]+"</td><td>"+r[2]+"</td><td>"+r[3]+"</td></tr>"}).join("")}
function quiz(){var z=h("qz");if(qi>=Q.length){z.innerHTML="<h3 style='font-size:34px;color:var(--gold2)'>"+T("Your score","你的得分")+": "+qs+" / "+Q.length+"</h3><p style='color:var(--mute)'>"+(qs>=4?T("Excellent! You know Myanmar well.","太棒了！你很了解缅甸。"):T("Good try! Explore the regions and try again.","不错！浏览地区后再试一次吧。"))+"</p><button class='btn' id='rs'>"+T("Play again","再玩一次")+"</button>";h("rs").onclick=function(){qi=0;qs=0;quiz()};return}
var q=Q[qi];z.innerHTML="<div style='color:var(--gold)'>"+T("Question","问题")+" "+(qi+1)+" / "+Q.length+"</div><h3 style='font-size:30px;margin-top:8px'>"+T(q[0],q[1])+"</h3><div id='ops'></div><div id='fb' style='margin-top:10px;min-height:28px'></div>";qd=false;
q[2].forEach(function(o,i){var b=document.createElement("button");b.className="opt";b.textContent=o;b.onclick=function(){if(qd)return;qd=true;var ok=i===q[3];if(ok)qs++;b.classList.add(ok?"ok":"no");if(!ok)h("ops").children[q[3]].classList.add("ok");h("fb").innerHTML=(ok?T("Correct!","答对了！"):T("Not quite.","不太对。"))+" <button class='btn' id='nx' style='padding:8px 20px'>"+T("Next","下一题")+"</button>";h("nx").onclick=function(){qi++;quiz()}};h("ops").appendChild(b)})}
var SUG=[["What is Myanmar famous for?","缅甸有什么出名的？"],["Plan a 7-day trip","帮我规划7天行程"],["Tell me about Thingyan","介绍一下泼水节"],["What should I eat?","有什么必吃的美食？"]];
var FAQ=[[/thingyan|water|泼水/i,"Thingyan is the Myanmar New Year water festival in mid-April. People splash water to wash away the old year, enjoy music and make merit at pagodas.","泰金（Thingyan）是缅甸四月中旬的新年泼水节，人们泼水洗去旧年，欣赏音乐并到佛塔做功德。"],[/food|eat|mohinga|美食|吃/i,"Try mohinga (fish noodle soup), laphet thoke (tea leaf salad), Shan noodles and rich curries with many side dishes.","推荐莫辛加（鱼汤米线）、腌茶叶沙拉、掸族米线，以及配有很多小菜的咖喱。"],[/religion|buddh|pagoda|宗教|佛/i,"About 88% of people follow Theravada Buddhism. Remove shoes and socks at pagodas and dress modestly. Christianity, Islam and Hinduism are also practised.","约88%的人信仰上座部佛教。进入佛塔要脱鞋袜、衣着得体。也有基督教、伊斯兰教和印度教信徒。"],[/capital|naypyidaw|首都|内比都/i,"The capital is Naypyidaw (since 2006). The largest city is Yangon.","首都是内比都（2006年起），最大的城市是仰光。"],[/best time|weather|season|when|时间|天气|季/i,"November to February is cool and dry, the best season. March to May is very hot, and June to October is the rainy season.","11月至2月凉爽干燥，是最佳季节；3至5月很热；6至10月是雨季。"],[/plan|trip|itinerary|day|行程|规划|天/i,"A classic 7-day route: Yangon (2 days), Bagan (2 days), Mandalay (1 day), Inle Lake (2 days). Use the cost calculator above for a budget.","经典7天路线：仰光2天、蒲甘2天、曼德勒1天、茵莱湖2天。预算请用上方的费用计算器。"],[/cost|price|money|cheap|费用|钱|价/i,"Roughly $30/day for budget, $75/day for comfort and $200/day for luxury per person. Use the calculator for details.","每人每天大约：经济30美元、舒适75美元、奢华200美元。详情请用费用计算器。"],[/history|bagan|历史|蒲甘/i,"Bagan Kingdom (849-1297) built thousands of temples. Later came the Taungoo and Konbaung dynasties, British rule (1824-1948) and independence in 1948.","蒲甘王朝（849-1297）建起数千座寺庙，之后有东吁与贡榜王朝、英国统治（1824-1948）和1948年独立。"]];
function localAnswer(t){for(var i=0;i<FAQ.length;i++)if(FAQ[i][0].test(t))return T(FAQ[i][1],FAQ[i][2]);return T("I can answer basics offline: try asking about food, Thingyan, religion, the capital, best time, trip plans, cost or history.","离线时我可以回答基础问题：试试问美食、泼水节、宗教、首都、最佳时间、行程、费用或历史。")}
var hist=[],sample=null,busy=false;
function add(c,t){var d=document.createElement("div");d.className="msg "+c;d.textContent=t;h("log").appendChild(d);h("log").scrollTop=h("log").scrollHeight;return d}
function chat(){if(!hist.length){h("log").innerHTML="";add("bot",T("Mingalabar! (Hello!) I'm your guide to Myanmar. Ask me anything.","Mingalabar！（你好！）我是你的缅甸向导，有什么都可以问我。"))}
h("sug").innerHTML="";SUG.forEach(function(s){var b=document.createElement("button");b.className="chip";b.textContent=T(s[0],s[1]);b.onclick=function(){ask(T(s[0],s[1]))};h("sug").appendChild(b)})}
var SYS="You are a warm, knowledgeable guide to Myanmar (Burma) for a university HCI project website. Topics: people, ethnic groups, regions, landscape, history, culture, food, festivals, religion, language, and trip planning (places, transport, accommodation, best time, cost). Rules: reply in the same language the user writes in (English or Chinese); keep answers under 130 words unless a plan is requested; plain text only, no markdown symbols; give costs in USD as rough estimates; be honest that safety varies by region because of ongoing conflict and advise checking current government travel advice and visa rules; never invent facts and admit uncertainty; politely steer unrelated questions back to Myanmar.";
function ask(text){text=(text||h("q").value).trim();if(!text||busy)return;h("q").value="";add("me",text);
if(!sample){add("bot",localAnswer(text));return}
busy=true;h("send").disabled=true;hist.push({role:"user",content:text});var m=hist.slice(-10);m[0]={role:"user",content:"[Instructions: "+SYS+"]\n\n"+m[0].content};var o=add("bot","…");
sample(m,{cache:false,modelTier:"quick",onText:function(e){o.textContent=e.text;h("log").scrollTop=h("log").scrollHeight}}).then(function(r){o.textContent=r.text;hist.push({role:"assistant",content:r.text})}).catch(function(e){hist.pop();o.textContent=e&&e.code==="not_granted"?T("Please allow the AI permission so I can answer.","请允许AI权限，我才能回答。"):e&&e.code==="rate_limited"?T("Many questions right now. Try again shortly.","现在提问较多，请稍后再试。"):T("Sorry, something went wrong. Please try again.","抱歉，出错了，请重试。")}).then(function(){busy=false;h("send").disabled=false})}
function renderAll(){facts();counted=false;regions();calc();phrases();quiz();chat();reveal();var f=h("facts");if(f.classList.contains("in"))count()}
h("home").style.backgroundImage="linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.7)),url("+IM.shwe+")";
h("mapimg").src=IM.map;h("flagimg").src=IM.flag;
h("lb").onclick=function(){setLang(lang==="en"?"zh":"en")};
["d","p","f"].forEach(function(i){h(i).oninput=calc});
h("send").onclick=function(){ask()};h("q").addEventListener("keydown",function(e){if(e.key==="Enter")ask()});
h("mx").onclick=function(){h("modal").classList.remove("on")};h("modal").onclick=function(e){if(e.target===h("modal"))h("modal").classList.remove("on")};document.addEventListener("keydown",function(e){if(e.key==="Escape")h("modal").classList.remove("on")});
new MutationObserver(function(){if(h("facts").classList.contains("in"))count()}).observe(h("facts"),{attributes:true});
renderAll();
try{if(window.claude&&claude.use){claude.use("sample").then(function(s){sample=s}).catch(function(){})}}catch(e){}
