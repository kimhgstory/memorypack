# 03) 포맷 예시

## 옵션 A — 문서형(JSON)
```json
{
  "title": "메모리팩 v1",
  "items": [
    { "q": "목적", "a": "메모/지시문을 규격 JSON으로 저장" }
  ],
  "tags": ["project","mvp"]
}
```

## 옵션 B — JSONL (라인당 {q,a})
```
{"q":"목적","a":"메모를 규격 JSON으로 저장"}
{"q":"대상","a":"솔로 메이커"}
```

## 옵션 C — QA 배열(JSON)
```json
{
  "title": "메모리팩 v1",
  "qa": [
    { "id": 1, "question": "목적", "answer": "메모를 규격 JSON으로 저장" }
  ],
  "tags": ["project","mvp"]
}
```
