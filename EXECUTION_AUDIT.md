# 키오스크 실행 경로 및 수정 기록

확인일: 2026-10-05. 수정 전 main: `ba10fac5c22beb8f1bac8ec2d4ed0cd025df7681`.

## 확정한 배포 경로

`index.html` → `final.css?v=8` + `final.js?v=8` → `assets-final/*.webp`.

CSS 한 개, JavaScript 한 개만 로드합니다. HTML ID와 CSS 클래스가 이미 일치하는 final.js를 유지하는 것이 가장 작은 위험으로 복구·정리하는 방법입니다. app-final.js를 연결하려면 ID, 클래스, ASSETS 의존성, 가게별 이미지 매핑, 옵션과 현금 결제 규칙까지 함께 변경해야 하므로 채택하지 않았습니다.

실제 확인한 main의 index.html은 이미 final.js?v=7을 참조했습니다. 따라서 “index.html이 final.js를 참조하지 않는다”는 설명과 현재 저장소는 다릅니다. 정상 초기화 함수는 `home()`이며, `renderHome()`는 로드되지 않는 app-final.js에 있습니다. 현재 main의 초기 실행은 오류 없이 가게 3개를 표시했습니다. 비활성 파일의 오류를 현재 배포 오류로 단정하지 않았습니다.

## 유지·수정할 파일과 정확한 위치

아래 위치는 이 수정의 파일 기준입니다.

| 파일·위치 | 처리 | 목적 |
|---|---|---|
| index.html 8행, 81행 | final.css?v=8 / final.js?v=8로 캐시 버전 변경 | 단일 실행 경로를 명시하고 새 런타임 로드 |
| index.html 14·34·35·40·54·63·74행 | 기존 ID 유지 | stores / dine / take / modeText / catlist / grid / pay |
| final.js 2행 `S` | 카탈로그 내용 유지, 읽기 쉬운 형식으로 정리 | 가격·카테고리·옵션·이미지 경로 동일 |
| final.js 346행 `imageTag`, 349행 `imageUnavailable` | 이미지 오류 처리 추가 | 실제 누락 시 “이미지 준비 중”; 대체 사진 요청 없음 |
| final.js 358행 `home`, 367행 `enter`, 381행 `goHome` | 초기화와 가게 이동 상태 정리 | 이전 가게의 주문·돈·미션이 다음 가게로 넘어가지 않음 |
| final.js 391행 `setMode`, 400행 `setOrderType` | 정상 ID 유지 | 자유/미션, 매장/포장 토글 |
| final.js 405행 `renderCats`, 413행 `renderMenu` | 정상 선택자 유지 | 가게 → 큰 분류 → 메뉴 연결 |
| final.js 429행 `openItem`, 459행 `addCart` | 기존 옵션·500원 크기 추가금 유지, 완료 상태 방어 | 온도·크기·맵기·세트 음료 및 옵션별 장바구니 |
| final.js 469행 `renderCart`, 479행 `qty` | 완료한 주문의 결제 버튼 잠금 | 수량 증감·0개 삭제, 중복 결제 방지 |
| final.js 486행 `newMission` | 서로 다른 메뉴에서 두 번째 메뉴 선택 | 중복 메뉴 재추첨 반복 제거; 기존 1/2메뉴 미션 범위 유지 |
| final.js 510행 `canPay`, 511행 `openPayment`, 521행 `cardPay` | 빈 주문·완료 주문 결제 차단 | 카드 결제 진입·완료 검증 |
| final.js 528행 `cashPay`, 547행 `updMoney` | 기존 정확한 금액 결제 유지 | 부족/초과 차단, 하나 취소, 다시 내기 |
| final.js 556행 `checkMission`, 565행 `finishPay` | 실패 미션은 완료 처리하지 않고 수정 안내 | 가게/메뉴/수량/결제 방법/매장·포장 조건 확인 |
| final.js 565행 `finishPay` | 영수증에 옵션·현금 낸 금액·거스름돈 추가 | 주문한 내용 확인; 정확한 금액 결제이므로 거스름돈 0원 |
| final.js 594행 `closeModal` | 성공 영수증을 닫을 때 주문 상태 정리 | ×, 배경 클릭, 처음으로 모두 동일하게 처리 |
| final.css 마지막 2행 | 누락 이미지 라벨과 영수증 옵션 스타일 추가 | 기존 디자인 유지 |
| app-final.js 1~3행 | 비활성 구버전이라는 설명 추가, 본문 보존 | 배포 진입점으로 재연결하지 않도록 명시 |
| PHOTO_STATUS.txt, UNRESOLVED_IMAGES.md | 이미지 상태와 실제 파일 존재를 분리 | 검증 19개 / 검증 미해결 30개 / 실제 누락 0개 |
| tests/assets-baseline.json | 기존 49개 Git blob SHA 기록 | 이미지가 원본 그대로임을 검증 |
| tests/audit.py, tests/kiosk-flow.cjs | 정적 검사 및 Chromium 회귀 검사 추가 | 선택자·경로·해시·실제 클릭 흐름 검증 |
| .github/workflows/build-final-assets.yml | 기존 파일 존재 검사를 전체 검사로 확장 | main push / PR에서 회귀 검사 |

## 비활성 app-final.js의 선택자 대조

| 비활성 구버전 선택자 | 실제 HTML / 유지할 final.js 선택자 |
|---|---|
| storeGrid | stores |
| catList | catlist |
| menuGrid | grid |
| payBtn | pay |
| modeGuide | modeText |
| dineBtn | dine |
| takeBtn | take |

app-final.js에는 `window.ASSETS` 의존성과 카페 메뉴에 버거 파일명, 버거 메뉴에 카페 파일명을 연결한 구버전 매핑이 있습니다. HTML ID만 바꾸거나 script src만 app-final.js로 바꾸는 것은 안전한 수정이 아닙니다. app.js, style-final.css, v10*, sheet-*, webp*, cafe-photo-fix.js 등 이전 파일도 삭제하지 않았으며 index.html에서 로드하지 않습니다. 외부 랜덤 사진 교정 레이어도 실행하지 않습니다.

## 이미지 보존 및 남은 문제

PHOTO_STATUS.txt의 기존 미해결 목록 30개는 모두 assets-final 안에 존재합니다. 이 목록은 사진 검증·교체가 미완료된 항목이지 파일이 없는 항목이 아닙니다. 기존 19개는 기존 미해결 목록의 여집합으로 복원했습니다. 49개 모두 SHA를 대조해 원본과 동일함을 확인했으며 이미지 파일 변경은 없습니다.

미해결 30개는 [UNRESOLVED_IMAGES.md](UNRESOLVED_IMAGES.md)에 가게·메뉴·경로별로 남겼습니다. **사진의 내용 적합성은 여전히 미해결입니다.** 예를 들어 기존 불고기버거·치즈버거 파일은 커피 사진으로 보이며, 경로가 존재하고 디코딩된다는 사실로 메뉴에 맞는 사진이라고 판단하지 않습니다. 요청 범위에 따라 이번 작업에서는 임의 교체하지 않았습니다. 이전에 검증됐다고 기록된 19개에 대해 새로운 의미상 적합성 검증을 주장하지도 않습니다.

향후 실제 파일 누락 시 경로 검사에서 정확한 파일명을 출력하고 UI에는 “이미지 준비 중”을 표시합니다. 다른 메뉴 이미지, 이모티콘, 외부 랜덤 사진으로 대체하지 않습니다.

## 검증 결과

- JavaScript 구문 검사 통과.
- 단일 CSS/JS 참조, HTML ID와 JavaScript 선택자 일치 검사 통과.
- 수정 전후 카탈로그 JSON 동등성 검사 통과: 가격, 옵션, 분류 순서, 이미지 연결 동일.
- 기존 이미지 49개 Git blob SHA 검사 통과: 검증 19 / 미해결 30 / 실제 누락 0.
- 실제 Chromium에서 가게 대표 이미지 3개와 메뉴 이미지 49개의 디코딩·표시 확인.
- 세 가게 모두 카드·현금 결제와 영수증 표시 확인.
- 온도·크기 추가금·세트 음료·맵기 선택, 같은 옵션 합치기·다른 옵션 분리, 수량 감소·삭제 확인.
- 현금 부족/초과 차단, 하나 취소, 다시 내기, 정확한 금액 결제 확인.
- 성공 영수증의 ×/배경 클릭/처음으로 후 기존 주문 재결제 차단 확인.
- 생성 미션의 성공, 주문 형태·결제 방법·수량 실패와 수정 후 재시도 확인.
- 실제 누락 파일을 주입한 경우 메뉴/상세 화면의 안내 라벨과 주문 가능 여부 확인.
- 태블릿 크기 820×1180에서 가로 넘침 없음 확인.
- 브라우저 JavaScript 예외 0개.

실행 명령: `python3 tests/audit.py`, `node --check final.js`, `node tests/kiosk-flow.cjs`.
브라우저 검사에는 Playwright와 Chromium이 필요합니다. 선택적으로 `KIOSK_URL`로 이미 배포한 주소도 검사할 수 있습니다. 화면 검사와 파일 디코딩은 미해결 사진의 내용 적합성 검증을 대신하지 않습니다.
