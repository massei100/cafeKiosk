// Cafe photo correction layer: never reuse burger/bunsik assets in the cafe.
// High-resolution food-photo endpoints are locked per menu so each item keeps a stable image.
(()=>{
  const photo=(keywords,lock)=>`https://loremflickr.com/900/900/${keywords}?lock=${lock}`;
  const cafe=S.cafe.cats;
  const urls={
    '아메리카노':photo('americano,coffee,cafe',101),
    '카페라떼':photo('cafe,latte,coffee',102),
    '바닐라라떼':photo('vanilla,latte,coffee',103),
    '카라멜마키아토':photo('caramel,macchiato,coffee',104),
    '카페모카':photo('mocha,coffee,chocolate',105),
    '아인슈페너':photo('vienna,coffee,cream',106),
    '딸기스무디':photo('strawberry,smoothie,drink',111),
    '망고스무디':photo('mango,smoothie,drink',112),
    '블루베리스무디':photo('blueberry,smoothie,drink',113),
    '요거트스무디':photo('yogurt,smoothie,drink',114),
    '레몬차':photo('lemon,tea,drink',121),
    '자몽차':photo('grapefruit,tea,drink',122),
    '녹차라떼':photo('matcha,latte,drink',123),
    '초코라떼':photo('chocolate,latte,drink',124),
    '레몬에이드':photo('lemonade,lemon,drink',131),
    '자몽에이드':photo('grapefruit,ade,drink',132),
    '소프트아이스크림':photo('soft,serve,icecream',141)
  };
  Object.values(cafe).flat().forEach(item=>{ if(urls[item.n]) item.img=urls[item.n]; });
  S.cafe.hero=urls['카페라떼'];
  const oldEnter=enter;
  enter=function(k){ oldEnter(k); if(k==='cafe') renderMenu(); };
  const oldPayment=openPayment;
  openPayment=function(){
    openModal(`<div class="mh"><h3>결제 방법을 선택하세요</h3><button class="x" onclick="closeModal()">×</button></div><div class="mb"><div class="methods"><button id="card" class="method"><strong class="pay-symbol">CARD</strong><span>카드 결제</span></button><button id="cashm" class="method"><strong class="pay-symbol">₩</strong><span>현금 결제</span></button></div><div class="summary"><b>결제할 금액</b><br><strong>${won(total())}</strong></div></div>`,r=>{r.querySelector('#card').onclick=cardPay;r.querySelector('#cashm').onclick=cashPay});
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>home()); else home();
})();