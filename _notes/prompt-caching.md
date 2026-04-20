---
title: "Prompt Caching: Aynı Context'i Ucuza Okumak"
slug: prompt-caching
date: 2026-02-15
excerpt: "Tekrar eden büyük promptları Claude tarafında önbelleğe alıp sonraki çağrılarda %90'a varan indirimle okumanın yolu."
tags: [optimizasyon, caching, maliyet]
reading_time: "4 dk"
---

**Prompt caching**, prompt'un değişmeyen kısmını (sistem talimatı, araç tanımları, büyük doküman) Claude tarafında **5 dakikalık** bir cache'te tutmanı sağlar. Sonraki istekler aynı prefix'i tekrar okursa, o kısım için **~%90 daha ucuza** servis edilir.

## Cache nerede kırılır?

Prefix **byte-byte aynı** olmalı. Aşağıdakilerden biri değişirse cache invalid olur:

- Sistem mesajının tek bir karakteri
- Tool tanımlarının sırası ya da içeriği
- Messages array'inde cache'li mesajın öncesi

Bu yüzden cache'li bölümler **mesaj dizisinin başında** ve **sabit** tutulur. Değişken kısımlar (kullanıcı mesajı, dinamik veri) en sona gelir.

## Nasıl işaretlersin?

Anthropic SDK'da `cache_control` bloğu ile:

```python
system=[
  {"type": "text", "text": BIG_INSTRUCTIONS,
   "cache_control": {"type": "ephemeral"}}
],
tools=[
  {"name": "search", "description": "...", "input_schema": {...},
   "cache_control": {"type": "ephemeral"}}
]
```

Bir istekte en fazla **4 cache breakpoint** koyabilirsin.

## Ne zaman kazançlı?

- Agentic döngülerde her turda aynı tool/sistem promptu gidiyorsa → **büyük kazanç**
- Doküman soru-cevap uygulamasında aynı doküman birden fazla soruyla sorulacaksa → **büyük kazanç**
- Tek seferlik çağrı ise → **fark yok**, cache'e yazma kendisi maliyetli (1.25x input)

## Pratik örnek

Agentic bir CLI, her turda 12K token tool + sistem promptu gönderiyor. Cache olmadan 10 turda **120K token input** ödenir. Cache'li senaryoda ilk tur normal, sonraki 9 tur için input'un 12K'lık kısmı **~%90 indirimli** gelir. Tek bir oturumda **~100K token** tasarruf edersin.

Kısa kural: **sabit büyük, değişken küçük olsun.**
