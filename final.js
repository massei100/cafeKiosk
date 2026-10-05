// Existing menu catalog: prices, options and image paths preserved.
const S = {
  "cafe": {
    "title": "카페",
    "desc": "커피 · 스무디 · 차 · 에이드 · 디저트",
    "hero": "assets-final/cafe_cafelatte.webp",
    "cats": {
      "커피": [
        {
          "n": "아메리카노",
          "p": 4000,
          "img": "assets-final/cafe_americano.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "카페라떼",
          "p": 4500,
          "img": "assets-final/cafe_cafelatte.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "바닐라라떼",
          "p": 5000,
          "img": "assets-final/cafe_vanillalatte.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "카라멜마키아토",
          "p": 5200,
          "img": "assets-final/cafe_caramelmacchiato.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "카페모카",
          "p": 5000,
          "img": "assets-final/cafe_cafemocha.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "아인슈페너",
          "p": 5500,
          "img": "assets-final/cafe_einspanner.webp",
          "size": 1
        }
      ],
      "스무디": [
        {
          "n": "딸기스무디",
          "p": 5500,
          "img": "assets-final/cafe_strawberrysmoothie.webp",
          "size": 1
        },
        {
          "n": "망고스무디",
          "p": 5500,
          "img": "assets-final/cafe_mangosmoothie.webp",
          "size": 1
        },
        {
          "n": "블루베리스무디",
          "p": 5800,
          "img": "assets-final/cafe_blueberrysmoothie.webp",
          "size": 1
        },
        {
          "n": "요거트스무디",
          "p": 5200,
          "img": "assets-final/cafe_yogurtsmoothie.webp",
          "size": 1
        }
      ],
      "차": [
        {
          "n": "레몬차",
          "p": 4200,
          "img": "assets-final/cafe_lemontea.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "자몽차",
          "p": 4500,
          "img": "assets-final/cafe_grapefruittea.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "녹차라떼",
          "p": 4500,
          "img": "assets-final/cafe_greentealatte.webp",
          "temp": 1,
          "size": 1
        },
        {
          "n": "초코라떼",
          "p": 4500,
          "img": "assets-final/cafe_chocolatelatte.webp",
          "temp": 1,
          "size": 1
        }
      ],
      "에이드": [
        {
          "n": "레몬에이드",
          "p": 4800,
          "img": "assets-final/cafe_lemonade.webp",
          "size": 1
        },
        {
          "n": "자몽에이드",
          "p": 5000,
          "img": "assets-final/cafe_grapefruitade.webp",
          "size": 1
        }
      ],
      "디저트": [
        {
          "n": "소프트아이스크림",
          "p": 1800,
          "img": "assets-final/cafe_softicecream.webp"
        }
      ]
    }
  },
  "burger": {
    "title": "햄버거 가게",
    "desc": "버거 · 세트 · 사이드 · 치킨 · 음료 · 디저트",
    "hero": "assets-final/burger_cheeseburgerset.webp",
    "cats": {
      "버거": [
        {
          "n": "불고기버거",
          "p": 4800,
          "img": "assets-final/burger_bulgogiburger.webp"
        },
        {
          "n": "치즈버거",
          "p": 5000,
          "img": "assets-final/burger_cheeseburger.webp"
        },
        {
          "n": "더블치즈버거",
          "p": 6500,
          "img": "assets-final/burger_doublecheeseburger.webp"
        },
        {
          "n": "베이컨버거",
          "p": 6200,
          "img": "assets-final/burger_baconburger.webp"
        },
        {
          "n": "치킨버거",
          "p": 5500,
          "img": "assets-final/burger_chickenburger.webp"
        },
        {
          "n": "새우버거",
          "p": 5600,
          "img": "assets-final/burger_shrimpburger.webp"
        }
      ],
      "세트": [
        {
          "n": "불고기버거 세트",
          "p": 7800,
          "img": "assets-final/burger_bulgogiset.webp",
          "set": 1
        },
        {
          "n": "치즈버거 세트",
          "p": 8000,
          "img": "assets-final/burger_cheeseburgerset.webp",
          "set": 1
        }
      ],
      "사이드": [
        {
          "n": "감자튀김",
          "p": 2500,
          "img": "assets-final/burger_frenchfries.webp",
          "size": 1
        },
        {
          "n": "어니언링",
          "p": 3000,
          "img": "assets-final/burger_onionrings.webp"
        },
        {
          "n": "치즈스틱",
          "p": 2800,
          "img": "assets-final/burger_cheesesticks.webp"
        }
      ],
      "치킨": [
        {
          "n": "치킨너겟",
          "p": 3200,
          "img": "assets-final/burger_chickennuggets.webp"
        }
      ],
      "음료": [
        {
          "n": "콜라",
          "p": 2200,
          "img": "assets-final/burger_cola.webp",
          "size": 1
        },
        {
          "n": "사이다",
          "p": 2200,
          "img": "assets-final/burger_cider.webp",
          "size": 1
        }
      ],
      "디저트": [
        {
          "n": "소프트아이스크림",
          "p": 1800,
          "img": "assets-final/burger_softicecream.webp"
        }
      ]
    }
  },
  "bunsik": {
    "title": "분식집",
    "desc": "떡볶이 · 김밥 · 튀김 · 면 · 음료",
    "hero": "assets-final/bunsik_assortedtempura.webp",
    "cats": {
      "떡볶이": [
        {
          "n": "떡볶이",
          "p": 4000,
          "img": "assets-final/bunsik_tteokbokki.webp",
          "spicy": 1
        },
        {
          "n": "치즈떡볶이",
          "p": 5000,
          "img": "assets-final/bunsik_cheesetteokbokki.webp",
          "spicy": 1
        },
        {
          "n": "로제떡볶이",
          "p": 5500,
          "img": "assets-final/bunsik_rosetteokbokki.webp",
          "spicy": 1
        },
        {
          "n": "라볶이",
          "p": 5000,
          "img": "assets-final/bunsik_rabokki.webp",
          "spicy": 1
        }
      ],
      "김밥": [
        {
          "n": "김밥",
          "p": 3000,
          "img": "assets-final/bunsik_gimbap.webp"
        },
        {
          "n": "참치김밥",
          "p": 4000,
          "img": "assets-final/bunsik_tunagimbap.webp"
        },
        {
          "n": "치즈김밥",
          "p": 3800,
          "img": "assets-final/bunsik_cheesegimbap.webp"
        },
        {
          "n": "돈가스김밥",
          "p": 4500,
          "img": "assets-final/bunsik_porkcutletgimbap.webp"
        }
      ],
      "튀김": [
        {
          "n": "모둠튀김",
          "p": 4500,
          "img": "assets-final/bunsik_assortedtempura.webp"
        },
        {
          "n": "김말이",
          "p": 3000,
          "img": "assets-final/bunsik_gimmari.webp"
        },
        {
          "n": "오징어튀김",
          "p": 3500,
          "img": "assets-final/bunsik_squidtempura.webp"
        },
        {
          "n": "야채튀김",
          "p": 3000,
          "img": "assets-final/bunsik_vegetabletempura.webp"
        }
      ],
      "면": [
        {
          "n": "라면",
          "p": 4000,
          "img": "assets-final/bunsik_ramen.webp",
          "spicy": 1
        },
        {
          "n": "쫄면",
          "p": 5000,
          "img": "assets-final/bunsik_jjolmyeon.webp",
          "spicy": 1
        },
        {
          "n": "우동",
          "p": 5000,
          "img": "assets-final/bunsik_udon.webp"
        }
      ],
      "음료": [
        {
          "n": "콜라",
          "p": 2000,
          "img": "assets-final/bunsik_cola.webp"
        },
        {
          "n": "사이다",
          "p": 2000,
          "img": "assets-final/bunsik_cider.webp"
        }
      ]
    }
  }
};

// Sole deployed runtime: index.html -> final.css + final.js.
// Catalog paths and prices are retained from main; no photo substitution layer.
let store = null, cat = null, mode = 'free', orderType = '매장';
let cart = [], mission = null, money = 0, cashStack = [], paymentComplete = false;
const $ = id => document.getElementById(id);
const won = n => Number(n).toLocaleString('ko-KR') + '원';

function imageTag(path, alt, lazy = false) {
  return `<img src="${path}" alt="${alt}" ${lazy ? 'loading="lazy"' : ''} onerror="imageUnavailable(this)">`;
}
function imageUnavailable(image) {
  // Show an explicit label rather than borrowing another menu's photo.
  const label = document.createElement('div');
  label.className = 'image-unavailable';
  label.textContent = '이미지 준비 중';
  label.setAttribute('role', 'img');
  label.setAttribute('aria-label', `${image.alt} 이미지 준비 중`);
  image.replaceWith(label);
}
function home() {
  $('stores').innerHTML = Object.entries(S).map(([key, value]) => `
    <button class="store-card" onclick="enter('${key}')">
      ${imageTag(value.hero, value.title)}
      <div class="store-body"><div class="store-name">${value.title}</div>
        <div class="store-desc">${value.desc}</div><span class="store-go">주문 연습하기</span>
      </div>
    </button>`).join('');
}
function enter(key) {
  if (!S[key]) return;
  closeModal();
  store = key;
  cat = Object.keys(S[key].cats)[0];
  cart = []; mission = null; money = 0; cashStack = [];
  document.body.className = key;
  $('home').classList.add('hidden');
  $('app').classList.remove('hidden');
  $('brand').textContent = S[key].title + ' 키오스크';
  setMode('free'); setOrderType('매장');
  renderCats(); renderMenu(); renderCart();
  scrollTo(0, 0);
}
function goHome() {
  closeModal();
  cart = []; mission = null; money = 0; cashStack = [];
  renderCart();
  store = null; cat = null; mode = 'free';
  $('app').classList.add('hidden');
  $('home').classList.remove('hidden');
  document.body.className = '';
  scrollTo(0, 0);
}
function setMode(value) {
  mode = value;
  $('freeBtn').classList.toggle('on', value === 'free');
  $('missionBtn').classList.toggle('on', value === 'mission');
  $('missionBox').classList.toggle('hidden', value !== 'mission');
  $('modeText').textContent = value === 'free' ? '자유롭게 주문해 보세요.' : '미션을 보고 정확하게 주문해 보세요.';
  if (value === 'mission' && store) newMission();
  else mission = null;
}
function setOrderType(value) {
  orderType = value;
  $('dine').classList.toggle('on', value === '매장');
  $('take').classList.toggle('on', value === '포장');
}
function renderCats() {
  $('catlist').innerHTML = Object.keys(S[store].cats).map(value => `
    <button class="cat ${value === cat ? 'on' : ''}" onclick="chooseCat('${value}')">${value}</button>`).join('');
}
function chooseCat(value) {
  if (!store || !S[store].cats[value]) return;
  cat = value; renderCats(); renderMenu();
}
function renderMenu() {
  $('catTitle').textContent = cat;
  $('grid').innerHTML = S[store].cats[cat].map((item, index) => `
    <button class="item" onclick="openItem('${cat}',${index})">
      <div class="pic">${imageTag(item.img, item.n, true)}</div>
      <div class="itxt"><div class="iname">${item.n}</div>
        <div class="price">${won(item.p)}${item.size || item.set ? '~' : ''}</div>
      </div>
    </button>`).join('');
}
function grp(title, key, options, selected) {
  return `<div class="group"><b>${title}</b><div class="opts">${options.map(([value, extra = 0]) => `
    <button class="opt ${value === selected ? 'sel' : ''}" data-r="${key}" data-v="${value}" data-add="${extra}">
      ${value}${extra ? ` +${won(extra)}` : ''}
    </button>`).join('')}</div></div>`;
}
function openItem(category, index) {
  const item = store && S[store].cats[category]?.[index];
  if (!item || paymentComplete) return;
  const options = {
    temp: item.temp ? 'ICE' : '없음', size: item.size ? '보통' : '없음',
    spicy: item.spicy ? '보통맛' : '없음', setdrink: item.set ? '콜라' : '없음'
  };
  const extras = {};
  let html = `<div class="mh"><h3>${item.n}</h3><button class="x" onclick="closeModal()">×</button></div>
    <div class="mb"><div class="detail">${imageTag(item.img, item.n)}</div>`;
  if (item.temp) html += grp('온도를 선택하세요', 'temp', [['ICE'], ['HOT']], 'ICE');
  if (item.size) html += grp('크기를 선택하세요', 'size', [['보통'], ['큰 사이즈', 500]], '보통');
  if (item.spicy) html += grp('맵기를 선택하세요', 'spicy', [['순한맛'], ['보통맛'], ['매운맛']], '보통맛');
  if (item.set) html += grp('세트 음료를 선택하세요', 'setdrink', [['콜라'], ['사이다']], '콜라');
  html += '<button id="add" class="primary">장바구니에 담기</button></div>';
  openModal(html, root => {
    root.querySelectorAll('.opt').forEach(button => {
      button.onclick = () => {
        options[button.dataset.r] = button.dataset.v;
        extras[button.dataset.r] = Number(button.dataset.add);
        root.querySelectorAll(`[data-r="${button.dataset.r}"]`).forEach(other => other.classList.remove('sel'));
        button.classList.add('sel');
      };
    });
    root.querySelector('#add').onclick = () => {
      addCart(item, options, Object.values(extras).reduce((sum, value) => sum + value, 0));
      closeModal();
    };
  });
}
function addCart(item, options, extra = 0) {
  if (!store || paymentComplete) return;
  const price = item.p + extra;
  const key = [item.n, ...Object.values(options), price].join('|');
  const existing = cart.find(row => row.key === key);
  if (existing) existing.q++;
  else cart.push({ key, n: item.n, p: price, opts: Object.values(options).filter(value => value !== '없음'), q: 1 });
  renderCart();
}
function total() { return cart.reduce((sum, item) => sum + item.p * item.q, 0); }
function renderCart() {
  $('cartBox').innerHTML = cart.length ? cart.map((item, index) => `
    <div class="crow"><div class="cline"><span>${item.n}</span><span>${won(item.p * item.q)}</span></div>
      <div class="copt">${item.opts.join(' · ')}</div>
      <div class="qty"><button onclick="qty(${index},-1)">−</button><b>${item.q}</b>
        <button onclick="qty(${index},1)">+</button></div>
    </div>`).join('') : '<div class="empty">메뉴를 선택해 주세요.</div>';
  $('total').textContent = won(total());
  $('pay').disabled = !cart.length || paymentComplete;
}
function qty(index, delta) {
  if (!cart[index] || paymentComplete) return;
  cart[index].q += delta;
  if (cart[index].q <= 0) cart.splice(index, 1);
  renderCart();
}
function allItems() { return Object.values(S[store].cats).flat(); }
function newMission() {
  if (!store) return;
  closeModal(); cart = []; money = 0; cashStack = []; renderCart();
  const items = allItems(), pay = Math.random() < .5 ? '카드' : '현금';
  const ot = Math.random() < .5 ? '매장' : '포장';
  const first = items[Math.floor(Math.random() * items.length)];
  if (Math.random() < .5) {
    mission = { items: [first.n], pay, ot };
    $('missionText').textContent = `${ot}으로 ${first.n} 1개를 주문하고 ${pay}으로 결제하세요.`;
  } else {
    const others = items.filter(item => item.n !== first.n);
    const second = others[Math.floor(Math.random() * others.length)];
    mission = { items: [first.n, second.n], pay, ot };
    $('missionText').textContent = `${ot}으로 ${first.n} 1개와 ${second.n} 1개를 주문하고 ${pay}으로 결제하세요.`;
  }
}
function speakMission() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance($('missionText').textContent);
    utterance.lang = 'ko-KR'; utterance.rate = .9;
    speechSynthesis.speak(utterance);
  }
}
function canPay() { return Boolean(store && cart.length && total() > 0 && !paymentComplete); }
function openPayment() {
  if (!canPay()) return;
  openModal(`<div class="mh"><h3>결제 방법을 선택하세요</h3><button class="x" onclick="closeModal()">×</button></div>
    <div class="mb"><div class="methods"><button id="card" class="method"><span>카드 결제</span></button>
      <button id="cashm" class="method"><span>현금 결제</span></button></div>
      <div class="summary"><b>결제할 금액</b><br><strong>${won(total())}</strong></div></div>`, root => {
    root.querySelector('#card').onclick = cardPay;
    root.querySelector('#cashm').onclick = cashPay;
  });
}
function cardPay() {
  if (!canPay()) return;
  openModal(`<div class="mh"><h3>카드 결제</h3><button class="x" onclick="closeModal()">×</button></div>
    <div class="mb"><div class="card-device"><div class="card-visual"><i></i><b>CARD</b></div>
      <div class="card-slot">카드를 넣거나 태그해 주세요</div></div>
      <button class="primary" onclick="finishPay('카드')">카드 결제 완료</button></div>`);
}
function cashPay() {
  if (!canPay()) return;
  money = 0; cashStack = [];
  openModal(`<div class="mh"><h3>현금 결제</h3><button class="x" onclick="closeModal()">×</button></div>
    <div class="mb"><b>결제 금액과 같아지도록 지폐와 동전을 눌러 보세요.</b>
      <div class="cash">${[10000, 5000, 1000, 500, 100, 50, 10].map(value => `
        <button class="cash-${value >= 1000 ? 'bill' : 'coin'}" onclick="addMoney(${value})">${won(value)}</button>`).join('')}</div>
      <div class="summary"><div>결제 금액 <b>${won(total())}</b></div><div>낸 금액 <b id="paid">0원</b></div>
        <div id="cashHint">금액을 맞춰 주세요.</div></div>
      <div class="actions"><button class="secondary" onclick="undoMoney()">하나 취소</button>
        <button class="secondary" onclick="resetMoney()">다시 내기</button></div>
      <button id="cashPayBtn" class="primary" disabled onclick="finishPay('현금')">결제하기</button></div>`);
}
function addMoney(value) {
  if (!$('paid') || ![10000, 5000, 1000, 500, 100, 50, 10].includes(value)) return;
  money += value; cashStack.push(value); updMoney();
}
function undoMoney() { if (cashStack.length) money -= cashStack.pop(); updMoney(); }
function resetMoney() { money = 0; cashStack = []; updMoney(); }
function updMoney() {
  if (!$('paid')) return;
  $('paid').textContent = won(money);
  const difference = total() - money, button = $('cashPayBtn'), hint = $('cashHint');
  button.disabled = difference !== 0;
  hint.textContent = difference > 0 ? `${won(difference)} 더 내세요.` :
    difference < 0 ? `${won(-difference)} 너무 많이 냈어요.` : '정확해요! 결제할 수 있어요.';
  hint.className = difference > 0 ? 'cash-wait' : difference < 0 ? 'cash-over' : 'cash-ok';
}
function checkMission(method) {
  if (mode !== 'mission' || !mission) return { ok: true, msg: '주문 연습을 완료했어요!' };
  if (method !== mission.pay) return { ok: false, msg: `미션은 ${mission.pay} 결제예요.` };
  if (orderType !== mission.ot) return { ok: false, msg: `미션은 ${mission.ot} 주문이에요.` };
  const got = cart.flatMap(item => Array(item.q).fill(item.n)).sort();
  const wanted = [...mission.items].sort();
  const ok = wanted.length === got.length && wanted.every((name, index) => name === got[index]);
  return { ok, msg: ok ? '미션 성공! 정확하게 주문했어요.' : '미션의 메뉴와 수량을 다시 확인해 보세요.' };
}
function finishPay(method) {
  if (!canPay() || !['카드', '현금'].includes(method)) return;
  if (method === '현금' && money !== total()) return;
  const result = checkMission(method);
  if (!result.ok) {
    openModal(`<div class="mh"><h3>미션을 다시 확인하세요</h3><button class="x" onclick="closeModal()">×</button></div>
      <div class="mb"><div class="result bad">${result.msg}</div>
        <button class="primary" onclick="closeModal()">주문 수정하기</button></div>`);
    return;
  }
  paymentComplete = true;
  renderCart();
  const number = Math.floor(Math.random() * 900) + 100;
  const rows = cart.map(item => `<div class="rline"><span>${item.n} × ${item.q}</span><span>${won(item.p * item.q)}</span></div>
    ${item.opts.length ? `<div class="r-option">${item.opts.join(' · ')}</div>` : ''}`).join('');
  openModal(`<div class="mh"><h3>결제 완료</h3><button class="x" onclick="closeModal()">×</button></div>
    <div class="mb"><div class="result ok">${result.msg}</div><div class="receipt"><h4>${S[store].title}</h4>
      <p>주문 영수증</p><hr>${rows}<hr><div class="rline"><b>합계</b><b>${won(total())}</b></div>
      <div class="rline"><span>결제</span><span>${method}</span></div>
      <div class="rline"><span>주문 형태</span><span>${orderType}</span></div>
      ${method === '현금' ? `<div class="rline"><span>낸 금액</span><span>${won(money)}</span></div>
        <div class="rline"><span>거스름돈</span><span>0원</span></div>` : ''}
      <hr><div class="order">주문번호 ${number}</div></div><button class="primary" onclick="goHome()">처음으로</button></div>`);
}
function openModal(html, after) {
  $('modal').innerHTML = `<div class="overlay" onclick="if(event.target===this)closeModal()">
    <div class="modal" role="dialog" aria-modal="true">${html}</div></div>`;
  if (after) after($('modal'));
}
function closeModal() {
  $('modal').innerHTML = '';
  if (paymentComplete) {
    paymentComplete = false;
    cart = []; money = 0; cashStack = [];
    renderCart();
    if (mode === 'mission' && store) newMission();
  }
}
home();
