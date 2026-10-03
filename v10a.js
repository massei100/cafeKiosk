const $=id=>document.getElementById(id), won=n=>n.toLocaleString('ko-KR')+'원';
const I=(n,p,a,t=0,s=0)=>({n,p,a,t,s});
const S={
 cafe:{title:'카페',desc:'커피 · 스무디 · 차 · 에이드',hero:'cafe',cats:{
  '커피':[I('아메리카노',4000,'americano',1,1),I('카페라떼',4500,'latte',1,1),I('바닐라라떼',5000,'vanilla',1,1),I('카라멜마키아토',5200,'caramel',1,1),I('카페모카',5000,'mocha',1,1),I('아인슈페너',5500,'einspanner',0,1)],
  '스무디':[I('딸기스무디',5500,'strawberry',0,1),I('망고스무디',5500,'mango',0,1),I('블루베리스무디',5800,'blueberry',0,1),I('요거트스무디',5200,'yogurt',0,1)],
  '차':[I('레몬차',4200,'lemontea',1,1),I('자몽차',4500,'grapefruittea',1,1),I('녹차라떼',4500,'greentea',1,1),I('초코라떼',4500,'chocolatte',1,1)],
  '에이드':[I('레몬에이드',4800,'lemonade',0,1)]}},
 burger:{title:'햄버거 가게',desc:'버거 · 세트 · 사이드 · 치킨 · 음료 · 디저트',hero:'burger',cats:{
  '버거':[I('불고기버거',4800,'bulgogi'),I('치즈버거',5000,'cheeseburger'),I('더블치즈버거',6500,'doubleburger'),I('베이컨버거',6200,'baconburger'),I('치킨버거',5500,'chickenburger'),I('새우버거',5600,'shrimpburger')],
  '세트':[I('불고기버거 세트',7800,'bulgogiset'),I('치즈버거 세트',8000,'cheeseset')],
  '사이드':[I('감자튀김',2500,'fries',0,1),I('어니언링',3000,'onionrings'),I('치즈스틱',2800,'cheesesticks')],
  '치킨':[I('치킨너겟',3200,'nuggets')],
  '음료':[I('콜라',2200,'cola',0,1),I('사이다',2200,'cider',0,1)],
  '디저트':[I('소프트아이스크림',1800,'icecream')] }},
 bunsik:{title:'분식집',desc:'떡볶이 · 김밥 · 튀김 · 면',hero:'bunsik',cats:{
  '떡볶이':[I('떡볶이',4000,'tteok'),I('치즈떡볶이',5000,'cheesetteok'),I('로제떡볶이',5500,'rosetteok'),I('라볶이',5000,'rabokki')],
  '김밥':[I('김밥',3000,'gimbap'),I('참치김밥',4000,'tunagimbap'),I('치즈김밥',3800,'cheesegimbap'),I('돈가스김밥',4500,'cutletgimbap')],
  '튀김':[I('모둠튀김',4500,'tempura'),I('김말이',3000,'gimmari'),I('오징어튀김',3500,'squid'),I('야채튀김',3000,'vegtempura')],
  '면':[I('라면',4000,'ramen'),I('쫄면',5000,'jjolmyeon'),I('우동',5000,'udon')] }} };
let store=null,cat=null,mode='free',orderType='매장',cart=[],mission=null,money=0;
function defs(){return `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff7ef"/><stop offset="1" stop-color="#f1dfd0"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".75"/><stop offset=".5" stop-color="#d9f2f2" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient><filter id="sh"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#6d432e" flood-opacity=".22"/></filter></defs>`}
function wrap(inner){return `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">${defs()}<rect width="320" height="220" rx="28" fill="url(#bg)"/><ellipse cx="160" cy="188" rx="92" ry="13" fill="#b88b68" opacity=".18"/>${inner}</svg>`}