# 미해결 이미지 목록

2026-10-05, 기준 커밋 `ba10fac5c22beb8f1bac8ec2d4ed0cd025df7681`.

기존 PHOTO_STATUS.txt에서 검증·교체 미완료로 분류한 30개입니다. **30개 모두 실제 파일이 존재합니다.** 파일 존재와 사진 내용의 적합성 검증은 서로 다릅니다. 이번 수정에서는 이 파일을 교체하거나 다른 메뉴의 사진을 연결하지 않았습니다. 검증된 19개의 범위는 기존 미해결 목록의 여집합으로 복원했으며 새로 사진의 적합성을 보증하는 것은 아닙니다.

| 가게 | 메뉴 | 경로 | 파일 존재 | 사진 검증·교체 |
|---|---|---|---|---|
| 분식집 | 모둠튀김 | `assets-final/bunsik_assortedtempura.webp` | 있음 | 미해결 |
| 분식집 | 치즈김밥 | `assets-final/bunsik_cheesegimbap.webp` | 있음 | 미해결 |
| 분식집 | 치즈떡볶이 | `assets-final/bunsik_cheesetteokbokki.webp` | 있음 | 미해결 |
| 분식집 | 사이다 | `assets-final/bunsik_cider.webp` | 있음 | 미해결 |
| 분식집 | 콜라 | `assets-final/bunsik_cola.webp` | 있음 | 미해결 |
| 분식집 | 김밥 | `assets-final/bunsik_gimbap.webp` | 있음 | 미해결 |
| 분식집 | 김말이 | `assets-final/bunsik_gimmari.webp` | 있음 | 미해결 |
| 분식집 | 쫄면 | `assets-final/bunsik_jjolmyeon.webp` | 있음 | 미해결 |
| 분식집 | 돈가스김밥 | `assets-final/bunsik_porkcutletgimbap.webp` | 있음 | 미해결 |
| 분식집 | 라볶이 | `assets-final/bunsik_rabokki.webp` | 있음 | 미해결 |
| 분식집 | 라면 | `assets-final/bunsik_ramen.webp` | 있음 | 미해결 |
| 분식집 | 로제떡볶이 | `assets-final/bunsik_rosetteokbokki.webp` | 있음 | 미해결 |
| 분식집 | 오징어튀김 | `assets-final/bunsik_squidtempura.webp` | 있음 | 미해결 |
| 분식집 | 떡볶이 | `assets-final/bunsik_tteokbokki.webp` | 있음 | 미해결 |
| 분식집 | 참치김밥 | `assets-final/bunsik_tunagimbap.webp` | 있음 | 미해결 |
| 분식집 | 우동 | `assets-final/bunsik_udon.webp` | 있음 | 미해결 |
| 분식집 | 야채튀김 | `assets-final/bunsik_vegetabletempura.webp` | 있음 | 미해결 |
| 햄버거 가게 | 불고기버거 | `assets-final/burger_bulgogiburger.webp` | 있음 | 미해결 |
| 햄버거 가게 | 치즈버거 | `assets-final/burger_cheeseburger.webp` | 있음 | 미해결 |
| 햄버거 가게 | 사이다 | `assets-final/burger_cider.webp` | 있음 | 미해결 |
| 햄버거 가게 | 콜라 | `assets-final/burger_cola.webp` | 있음 | 미해결 |
| 햄버거 가게 | 소프트아이스크림 | `assets-final/burger_softicecream.webp` | 있음 | 미해결 |
| 카페 | 초코라떼 | `assets-final/cafe_chocolatelatte.webp` | 있음 | 미해결 |
| 카페 | 자몽에이드 | `assets-final/cafe_grapefruitade.webp` | 있음 | 미해결 |
| 카페 | 자몽차 | `assets-final/cafe_grapefruittea.webp` | 있음 | 미해결 |
| 카페 | 녹차라떼 | `assets-final/cafe_greentealatte.webp` | 있음 | 미해결 |
| 카페 | 레몬에이드 | `assets-final/cafe_lemonade.webp` | 있음 | 미해결 |
| 카페 | 레몬차 | `assets-final/cafe_lemontea.webp` | 있음 | 미해결 |
| 카페 | 소프트아이스크림 | `assets-final/cafe_softicecream.webp` | 있음 | 미해결 |
| 카페 | 요거트스무디 | `assets-final/cafe_yogurtsmoothie.webp` | 있음 | 미해결 |

## 실제 누락 파일

현재 참조 중인 49개 경로 중 실제 누락은 **0개**입니다. 향후 파일이 누락되면 `tests/audit.py`가 정확한 경로를 출력하며, 화면에는 “이미지 준비 중”만 표시합니다. 임의 대체 사진이나 외부 랜덤 이미지 요청은 사용하지 않습니다.
