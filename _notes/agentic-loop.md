---
title: "Agentic Loop: Model, Çağır, Değerlendir, Tekrar"
slug: agentic-loop
date: 2026-03-30
excerpt: "Claude Code, Claude Agent SDK ve benzeri sistemlerin iskeleti: model bir aksiyon önerir, harness çalıştırır, sonuç tekrar modele döner."
tags: [agent, sdk, mimari]
reading_time: "3 dk"
---

**Agentic loop**, modelin artık sadece "cevap veren" değil, **harekete geçen** bir bileşen olarak çalıştığı döngüdür. Claude Code, Claude Agent SDK ve benzeri tüm sistemlerin temelinde aynı iskelet vardır:

```
┌────────────────────────────────────┐
│  1. Model, input + tools alır      │
│  2. Ya metin ya tool_use üretir    │
│  3. Harness: tool_use'u çalıştırır │
│  4. tool_result'i modele geri ver  │
│  5. Model, sonraki adıma karar ver │
│  6. stop_reason="end_turn" olunca  │
│     döngü biter                    │
└────────────────────────────────────┘
```

## Harness'in görevi

Harness (SDK, CLI, senin kodun) modeli **güvenli bir sandbox**'ta tutar:

- Hangi tool'lara izin var, hangi dizinleri görebilir, hangi ağa çıkabilir.
- Maks tur sayısı (sonsuz döngü koruması).
- İnsan onayı gereken aksiyonlar (dosya silme, push, mail).

## Claude Agent SDK özellikleri

- **Hooks:** her aksiyonun öncesi/sonrası tetiklenir (log, pre-flight kontrolü).
- **Subagents:** paralel alt görevler için ayrı context'li mini-agentlar.
- **Memory:** oturumlar arası persist olan dosya tabanlı hafıza.
- **MCP:** Model Context Protocol ile harici araç / veri kaynağı bağlama.

## Production'da dikkat

1. **Tur limiti koy.** Model bazen kendi hatasını düzeltmek için sonsuz dener.
2. **Token bütçesi izle.** Her tur input'u büyütür — compaction ya da cache şart.
3. **Idempotency.** Tool çalıştırılması retry'da güvenli olmalı.
4. **Gözlemlenebilirlik.** Her turun input/output'unu structured log'la tut; incident sonrası tek kaynaktır.
5. **İnsan çıkışı.** Her loop, "bana sor" veya "dur" diyebilmelidir.

Agentic loop güçlü, ama ayağa düzgün kurulmamış bir loop: hızlı bir şekilde pahalı bir hataya dönüşür.
