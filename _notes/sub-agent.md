---
title: "Sub-agent: Context'i Korumak için Alt Ajan Çağırmak"
slug: sub-agent
date: 2026-04-18
excerpt: "Sub-agent, ana ajanın uzun/gürültülü bir işi delege ettiği, kendi context'ine sahip mini ajandır. Ana context'i temiz tutar, paralelleşmeyi mümkün kılar."
tags: [subagent, agent-sdk, mimari]
reading_time: "4 dk"
---

**Sub-agent**, ana ajanın bir alt göreve özel olarak fırlattığı, **kendi context window'una sahip** bir mini ajandır. İşi yapar, sonucu tek bir mesaj olarak ana ajana döner ve biter. Team agent'ten farkı: sub-agent **ana ajanın emrindedir**; ortak değil, alt-görev yürütücüsüdür.

## Neden sub-agent?

1. **Context koruma:** Ana ajanın 100K tokenlık planını, 30K tokenlık bir araştırmayla kirletmemek için iş sub-agent'e gönderilir; ana ajana sadece özet gelir.
2. **Paralelleşme:** 4 farklı kaynağı aynı anda araştırmak için 4 sub-agent fırlatırsın; sıralı beklemezsin.
3. **Farklı model / prompt:** Ana ajan Opus, sub-agent Haiku olabilir — maliyet düşer, latency azalır.
4. **İzolasyon:** Sub-agent'ın hatası ana turu bozmaz.

## Claude Agent SDK'da sub-agent

Claude Code ve Agent SDK'da sub-agent tipik olarak şöyle çağrılır:

```
Agent(
  description="Research audit - brief only",
  subagent_type="Explore",
  prompt="Şu codebase'de API endpoint'leri nerede? Dosya yolu + line no listesi."
)
```

Ana ajan prompt yazar, sub-agent işi yapar, sonucu tek mesajla döner. Ana ajan sub-agent'ın tüm iç tool çağrılarını görmez — sadece final output.

## Sub-agent vs Tool call

| | Tool call | Sub-agent |
|---|---|---|
| Context | Ana ajanın context'inde | Ayrı context |
| Akıl yürütme | Yok (deterministik kod) | Var (mini LLM) |
| Süre | Milisaniye | Saniye / dakika |
| Maliyet | Çok düşük | Ayrı API çağrıları |
| Ne zaman | Net, tek adım | Keşif, araştırma, özet |

## Tuzaklar

- **Brief yaz, emir verme:** Sub-agent senin konuşma geçmişini görmez; her şeyi prompt'ta anlat.
- **Çıktı formatını söyle:** "300 kelime altında, bullet liste" gibi. Aksi halde serbest metin geri gelir.
- **Güven, ama doğrula:** Sub-agent'ın özeti, gerçekte yaptığını değil, yapmak istediğini anlatır. Kritik iş varsa değişikliği sen kontrol et.
- **Çağırma zinciri:** Sub-agent, sub-sub-agent çağırabilir. Max-depth koy.

## Kısa kural

Görev, ana ajanın kafasını bulandıracak kadar büyükse → sub-agent.
Görev, net bir IO ise → tool call.
Görev, eşit roller arası müzakere gerektiriyorsa → team agent.
