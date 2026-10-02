const I=(n,p,a,t=0,s=0)=>({n,p,a,t,s});
const S={
 cafe:{title:'카페',desc:'커피 · 스무디 · 차 · 에이드 · 디저트',hero:'cafe_hero.webp',cats:{
  '커피':[I('아메리카노',4000,'cafe_americano.webp',1,1),I('카페라떼',4500,'cafe_cafelatte.webp',1,1),I('바닐라라떼',5000,'cafe_vanillalatte.webp',1,1),I('카라멜마키아토',5200,'cafe_caramelmacchiato.webp',1,1),I('카페모카',5000,'cafe_cafemocha.webp',1,1),I('아인슈페너',5500,'cafe_einspanner.webp',0,1)],
  '스무디':[I('딸기스무디',5500,'cafe_strawberrysmoothie.webp',0,1),I('망고스무디',5500,'cafe_mangosmoothie.webp',0,1),I('블루베리스무디',5800,'cafe_blueberrysmoothie.webp',0,1),I('요거트스무디',5200,'cafe_yogurtsmoothie.webp',0,1)],
  '차':[I('레몬차',4200,'cafe_lemontea.webp',1,1),I('자몽차',4500,'cafe_grapefruittea.webp',1,1),I('녹차라떼',4500,'cafe_greentealatte.webp',1,1),I('초코라떼',4500,'cafe_chocolatelatte.webp',1,1)],
  '에이드':[I('레몬에이드',4800,'cafe_lemonade.webp',0,1)],
  '디저트':[I('소프트아이스크림',1800,'burger_softicecream.webp')]
 }},
 burger:{title:'햄버거 가게',desc:'버거 · 세트 · 사이드 · 치킨 · 음료 · 디저트',hero:'burger_hero.webp',cats:{
  '버거':[I('불고기버거',4800,'burger_bulgogiburger.webp'),I('치즈버거',5000,'burger_cheeseburger.webp'),I('더블치즈버거',6500,'burger_doublecheeseburger.webp'),I('베이컨버거',6200,'burger_baconburger.webp'),I('치킨버거',5500,'burger_chickenburger.webp'),I('새우버거',5600,'burger_shrimpburger.webp')],
  '세트':[I('불고기버거 세트',7800,'burger_bulgogiset.webp'),I('치즈버거 세트',8000,'burger_cheeseburgerset.webp')],
  '사이드':[I('감자튀김',2500,'burger_frenchfries.webp',0,1),I('어니언링',3000,'burger_onionrings.webp'),I('치즈스틱',2800,'burger_cheesesticks.webp')],
  '치킨':[I('치킨너겟',3200,'burger_chickennuggets.webp')],
  '음료':[I('콜라',2200,'burger_cola.webp',0,1),I('사이다',2200,'burger_cider.webp',0,1)],
  '디저트':[I('소프트아이스크림',1800,'burger_softicecream.webp')]
 }},
 bunsik:{title:'분식집',desc:'떡볶이 · 김밥 · 튀김 · 면 · 식사 · 음료',hero:'bunsik_hero.webp',cats:{
  '떡볶이':[I('떡볶이',4000,'bunsik_tteokbokki.webp'),I('치즈떡볶이',5000,'bunsik_cheesetteokbokki.webp'),I('로제떡볶이',5500,'bunsik_rosetteokbokki.webp'),I('라볶이',5000,'bunsik_rabokki.webp')],
  '김밥':[I('김밥',3000,'bunsik_gimbap.webp'),I('참치김밥',4000,'bunsik_tunagimbap.webp'),I('치즈김밥',3800,'bunsik_cheesegimbap.webp'),I('돈가스김밥',4500,'bunsik_porkcutletgimbap.webp')],
  '튀김':[I('모둠튀김',4500,'bunsik_assortedtempura.webp'),I('김말이',3000,'bunsik_gimmari.webp'),I('오징어튀김',3500,'bunsik_squidtempura.webp'),I('야채튀김',3000,'bunsik_vegetabletempura.webp')],
  '면·식사':[I('라면',4000,'bunsik_ramen.webp'),I('쫄면',5000,'bunsik_jjolmyeon.webp'),I('우동',5000,'bunsik_udon.webp')],
  '음료':[I('콜라',2000,'burger_cola.webp',0,1),I('사이다',2000,'burger_cider.webp',0,1)]
 }}
};
function art(key){
 const src=window.ASSETS&&window.ASSETS[key];
 if(src)return `<img src="${src}" alt="" loading="lazy">`;
 return `<div style="width:100%;height:100%;display:grid;place-items:center;background:#f7efe8;color:#8f8178;font-weight:900">이미지 준비 중</div>`;
}