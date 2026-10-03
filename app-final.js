const A=window.ASSETS||{};
const I=(n,p,img,t=false,s=false)=>({n,p,img,t,s});
const STORES={
  cafe:{
    title:'카페',desc:'커피 · 스무디 · 차 · 에이드 · 디저트',
    hero:['burger_bulgogiburger.webp','burger_cheeseburger.webp','burger_bulgogiset.webp'],
    cats:{
      '커피':[
        I('아메리카노',4000,'burger_bulgogiburger.webp',true,true),
        I('카페라떼',4500,'burger_cheeseburger.webp',true,true),
        I('바닐라라떼',5000,'burger_doublecheeseburger.webp',true,true),
        I('카라멜마키아토',5200,'burger_baconburger.webp',true,true),
        I('카페모카',5000,'burger_chickenburger.webp',true,true),
        I('아인슈페너',5500,'burger_shrimpburger.webp',false,true)
      ],
      '스무디':[
        I('딸기스무디',5500,'burger_bulgogiset.webp',false,true),
        I('망고스무디',5500,'burger_cheeseburgerset.webp',false,true),
        I('블루베리스무디',5800,'burger_frenchfries.webp',false,true),
        I('요거트스무디',5200,'burger_onionrings.webp',false,true)
      ],
      '차':[
        I('녹차라떼',4500,'burger_cheesesticks.webp',true,true),
        I('초코라떼',4500,'burger_chickennuggets.webp',true,true),
        I('레몬차',4200,'burger_cola.webp',true,true),
        I('자몽차',4500,'burger_cider.webp',true,true)
      ],
      '에이드':[
        I('레몬에이드',4800,'burger_icecream.webp',false,true),
        I('자몽에이드',5000,'burger_cider.webp',false,true)
      ],
      '디저트':[I('소프트아이스크림',2500,'cafe_lemonade.webp')]
    }
  },
  burger:{
    title:'햄버거 가게',desc:'버거 · 세트 · 사이드 · 치킨 · 음료 · 디저트',
    hero:['cafe_americano.webp','cafe_blueberrysmoothie.webp','cafe_lemontea.webp'],
    cats:{
      '버거':[
        I('불고기버거',4800,'cafe_americano.webp'),
        I('치즈버거',5000,'cafe_cafelatte.webp'),
        I('더블치즈버거',6500,'cafe_vanillalatte.webp'),
        I('베이컨버거',6200,'cafe_caramelmacchiato.webp'),
        I('치킨버거',5500,'cafe_cafemocha.webp'),
        I('새우버거',5600,'cafe_einspanner.webp')
      ],
      '세트':[
        I('불고기버거 세트',7800,'cafe_strawberrysmoothie.webp'),
        I('치즈버거 세트',8000,'cafe_mangosmoothie.webp')
      ],
      '사이드':[
        I('감자튀김',2500,'cafe_blueberrysmoothie.webp',false,true),
        I('어니언링',3000,'cafe_yogurtsmoothie.webp'),
        I('치즈스틱',2800,'cafe_greentealatte.webp'),
        I('치킨너겟',3200,'cafe_chocolatelatte.webp')
      ],
      '치킨':[I('치킨너겟',3200,'cafe_chocolatelatte.webp')],
      '음료':[
        I('콜라',2200,'cafe_lemontea.webp',false,true),
        I('사이다',2200,'cafe_grapefruittea.webp',false,true)
      ],
      '디저트':[I('소프트아이스크림',1800,'cafe_lemonade.webp')]
    }
  },
  bunsik:{
    title:'분식집',desc:'떡볶이 · 김밥 · 튀김 · 면 · 식사 · 음료',
    hero:['bunsik_tteokbokki.webp','bunsik_gimbap.webp','bunsik_assortedtempura.webp'],
    cats:{
      '떡볶이':[
        I('떡볶이',4000,'bunsik_tteokbokki.webp'),
        I('치즈떡볶이',5000,'bunsik_cheesetteokbokki.webp'),
        I('로제떡볶이',5500,'bunsik_rosetteokbokki.webp'),
        I('라볶이',5000,'bunsik_rabokki.webp')
      ],
      '김밥':[
        I('김밥',3000,'bunsik_gimbap.webp'),
        I('참치김밥',4000,'bunsik_tunagimbap.webp'),
        I('치즈김밥',3800,'bunsik_cheesegimbap.webp'),
        I('돈가스김밥',4500,'bunsik_porkcutletgimbap.webp')
      ],
      '튀김':[
        I('모둠튀김',4500,'bunsik_assortedtempura.webp'),
        I('김말이',3000,'bunsik_gimmari.webp'),
        I('오징어튀김',3500,'bunsik_squidtempura.webp'),
        I('야채튀김',3000,'bunsik_vegetabletempura.webp')
      ],
      '면':[
        I('라면',4000,'bunsik_ramen.webp'),
        I('쫄면',5000,'bunsik_jjolmyeon.webp'),
        I('우동',5000,'bunsik_udon.webp')
      ],
      '식사':[I('돈가스김밥',4500,'bunsik_porkcutletgimbap.webp')],
      '음료':[
        I('콜라',2000,'cafe_lemontea.webp',false,true),
        I('사이다',2000,'cafe_grapefruittea.webp',false,true)
      ]
    }
  }
};
let store=null,cat=null,mode='free',orderType='매장',cart=[],mission=null,money=0;
const $=id=>document.getElementById(id);
const won=n=>n.toLocaleString('ko-KR')+'원';
function src(name){return A[name]||''}
function imgTag(name,alt=''){return src(name)?`<img src="${src(name)}" alt="${alt}">`:`<div class="imageError">이미지 준비 중</div>`}
function renderHome(){
  $('storeGrid').innerHTML=Object.entries(STORES).map(([k,v])=>`<button class="storeCard" onclick="enterStore('${k}')"><div class="storePic heroTiles">${v.hero.map(n=>imgTag(n,'')).join('')}</div><div class="storeBody"><div class="storeName">${v.title}</div><div class="storeDesc">${v.desc}</div><span class="storeGo">주문하기</span></div></button>`).join('');
}
function enterStore(k){store=k;cat=Object.keys(STORES[k].cats)[0];cart=[];document.body.className=k;$('home').classList.add('hidden');$('app').classList.remove('hidden');$('brand').textContent=STORES[k].title+' 키오스크';setMode('free');setOrderType('매장');renderCats();renderMenu();renderCart()}
function goHome(){$('app').classList.add('hidden');$('home').classList.remove('hidden');document.body.className='';closeModal()}
function setMode(m){mode=m;$('freeBtn').classList.toggle('on',m==='free');$('missionBtn').classList.toggle('on',m==='mission');$('missionBox').classList.toggle('hidden',m!=='mission');$('modeGuide').textContent=m==='free'?'자유롭게 주문해 보세요.':'미션을 보고 정확하게 주문해 보세요.';if(m==='mission')newMission()}
function setOrderType(t){orderType=t;$('dineBtn').classList.toggle('on',t==='매장');$('takeBtn').classList.toggle('on',t==='포장')}
function renderCats(){$('catList').innerHTML=Object.keys(STORES[store].cats).map(c=>`<button class="catBtn ${c===cat?'on':''}" onclick="chooseCat('${c}')">${c}</button>`).join('')}
function chooseCat(c){cat=c;renderCats();renderMenu()}
function renderMenu(){$('catTitle').textContent=cat;$('menuGrid').innerHTML=STORES[store].cats[cat].map((x,i)=>`<button class="menuCard" onclick="openItem('${cat}',${i})"><div class="menuPic">${imgTag(x.img,x.n)}</div><div class="menuTxt"><div class="menuName">${x.n}</div><div class="menuPrice">${won(x.p)}${x.s?'~':''}</div></div></button>`).join('')}
function openItem(c,i){const x=STORES[store].cats[c][i],state={temp:x.t?'ICE':'없음',size:x.s?'보통':'없음'};openModal(`<div class="modalHead"><h3>${x.n}</h3><button class="close" onclick="closeModal()">×</button></div><div class="modalBody"><div class="detailPic">${imgTag(x.img,x.n)}</div>${x.t?`<div class="group"><b>온도를 선택하세요</b><div class="opts"><button class="opt sel" data-role="temp" data-value="ICE">ICE</button><button class="opt" data-role="temp" data-value="HOT">HOT</button></div></div>`:''}${x.s?`<div class="group"><b>크기를 선택하세요</b><div class="opts"><button class="opt sel" data-role="size" data-value="보통">보통</button><button class="opt" data-role="size" data-value="큰 사이즈">큰 사이즈 +500원</button></div></div>`:''}<button id="addCartBtn" class="primary">장바구니에 담기</button></div>`,root=>{root.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{state[b.dataset.role]=b.dataset.value;root.querySelectorAll(`[data-role="${b.dataset.role}"]`).forEach(q=>q.classList.remove('sel'));b.classList.add('sel')});root.querySelector('#addCartBtn').onclick=()=>{addCart(x,state);closeModal()}})}
function addCart(x,s){let p=x.p+(s.size==='큰 사이즈'?500:0),key=[x.n,s.temp,s.size].join('|'),z=cart.find(v=>v.key===key);z?z.q++:cart.push({key,n:x.n,p,temp:s.temp,size:s.size,q:1});renderCart()}
function renderCart(){const t=total();$('cartBox').innerHTML=cart.length?cart.map((x,i)=>`<div class="cartRow"><div class="cartLine"><span>${x.n}</span><span>${won(x.p*x.q)}</span></div><div class="cartOpt">${[x.temp!=='없음'?x.temp:'',x.size!=='없음'?x.size:''].filter(Boolean).join(' · ')}</div><div class="qty"><button onclick="qty(${i},-1)">−</button><b>${x.q}</b><button onclick="qty(${i},1)">+</button></div></div>`).join(''):'<div class="empty">메뉴를 선택해 주세요.</div>';$('total').textContent=won(t);$('payBtn').disabled=!cart.length}
function qty(i,d){cart[i].q+=d;if(cart[i].q<=0)cart.splice(i,1);renderCart()}
function total(){return cart.reduce((a,x)=>a+x.p*x.q,0)}
function allItems(){return Object.values(STORES[store].cats).flat()}
function newMission(){let items=allItems(),r=Math.random(),pay=Math.random()<.5?'카드':'현금';if(r<.4){let x=items[Math.floor(Math.random()*items.length)];mission={type:'exact',items:[x.n],pay,ot:Math.random()<.5?'매장':'포장'};$('missionText').textContent=`${mission.ot}에서 ${x.n} 1개를 주문하고 ${pay}로 결제하세요.`}else if(r<.75){let a=items[Math.floor(Math.random()*items.length)],b=items[Math.floor(Math.random()*items.length)];while(b.n===a.n)b=items[Math.floor(Math.random()*items.length)];mission={type:'exact',items:[a.n,b.n],pay,ot:'포장'};$('missionText').textContent=`포장으로 ${a.n} 1개와 ${b.n} 1개를 주문하고 ${pay}로 결제하세요.`}else{mission={type:'budget',budget:10000,min:2,pay,ot:'매장'};$('missionText').textContent=`매장에서 10,000원 안으로 서로 다른 메뉴를 2개 이상 주문하고 ${pay}로 결제하세요.`}}
function speakMission(){if('speechSynthesis'in window){speechSynthesis.cancel();let u=new SpeechSynthesisUtterance($('missionText').textContent);u.lang='ko-KR';u.rate=.9;speechSynthesis.speak(u)}}
function openPayment(){openModal(`<div class="modalHead"><h3>결제 방법을 선택하세요</h3><button class="close" onclick="closeModal()">×</button></div><div class="modalBody"><div class="methods"><button id="cardPayBtn" class="method">카드 결제</button><button id="cashPayBtn" class="method">현금 결제</button></div><div class="summary"><b>결제할 금액</b><br><span style="font-size:1.5rem;font-weight:1000">${won(total())}</span></div></div>`,root=>{root.querySelector('#cardPayBtn').onclick=cardPay;root.querySelector('#cashPayBtn').onclick=cashPay})}
function cardPay(){openModal(`<div class="modalHead"><h3>카드 결제</h3><button class="close" onclick="closeModal()">×</button></div><div class="modalBody"><div style="height:180px;display:grid;place-items:center"><div style="width:220px;height:132px;border-radius:18px;background:linear-gradient(135deg,#254461,#5d7c96);transform:rotate(-7deg);box-shadow:0 16px 30px #0002;position:relative"><div style="width:34px;height:24px;border-radius:5px;background:#e5ce72;position:absolute;left:24px;top:44px"></div><b style="position:absolute;left:24px;bottom:18px;color:#fff;letter-spacing:2px">CARD</b></div></div><button class="primary" onclick="finishPay('카드',${total()})">카드 결제 완료</button></div>`)}
function cashPay(){money=0;openModal(`<div class="modalHead"><h3>현금 결제</h3><button class="close" onclick="closeModal()">×</button></div><div class="modalBody"><b>돈을 눌러 금액을 맞춰보세요.</b><div class="cashGrid">${[100,500,1000,5000,10000,50000].map(v=>`<button onclick="addMoney(${v})">${won(v)}</button>`).join('')}</div><div class="summary"><div>상품 금액: <b>${won(total())}</b></div><div>낸 금액: <b id="paidMoney">0원</b></div><div>거스름돈: <b id="changeMoney">0원</b></div></div><div class="actions"><button class="secondary" onclick="money=0;updateMoney()">다시 내기</button><button class="primary" style="margin-top:0;flex:1" onclick="finishCash()">결제하기</button></div></div>`)}
function addMoney(v){money+=v;updateMoney()}
function updateMoney(){$('paidMoney').textContent=won(money);$('changeMoney').textContent=won(Math.max(0,money-total()))}
function finishCash(){if(money<total())return alert('금액이 부족해요.');finishPay('현금',money)}
function missionOK(method){if(mode!=='mission'||!mission)return true;if(method!==mission.pay||orderType!==mission.ot)return false;let names=[];cart.forEach(x=>{for(let i=0;i<x.q;i++)names.push(x.n)});if(mission.type==='exact')return names.length===mission.items.length&&mission.items.every(n=>names.includes(n));return total()<=mission.budget&&new Set(names).size>=mission.min}
function finishPay(method,paid){let ok=missionOK(method),no=Math.floor(1000+Math.random()*9000);openModal(`<div class="modalHead"><h3>주문 완료</h3><button class="close" onclick="resetAfter()">×</button></div><div class="modalBody">${mode==='mission'?`<div class="result ${ok?'ok':'bad'}">${ok?'미션 성공! 정확하게 주문했어요.':'미션 조건과 달라요. 다시 도전해 보세요.'}</div>`:''}<div class="receipt"><h4>${STORES[store].title}</h4><p>${orderType} 주문</p><hr>${cart.map(x=>`<div class="rline"><span>${x.n} × ${x.q}</span><span>${won(x.p*x.q)}</span></div>`).join('')}<hr><div class="rline"><b>합계</b><b>${won(total())}</b></div><div class="rline"><span>결제</span><span>${method}</span></div>${method==='현금'?`<div class="rline"><span>받은 금액</span><span>${won(paid)}</span></div><div class="rline"><span>거스름돈</span><span>${won(paid-total())}</span></div>`:''}<hr><div class="orderNo">${no}</div></div><button class="primary" onclick="resetAfter()">새 주문 시작</button></div>`)}
function resetAfter(){closeModal();cart=[];renderCart();if(mode==='mission')newMission()}
function openModal(html,after){$('modal').innerHTML=`<div class="overlay"><div class="modalBox">${html}</div></div>`;if(after)after($('modal'))}
function closeModal(){$('modal').innerHTML=''}
renderHome();