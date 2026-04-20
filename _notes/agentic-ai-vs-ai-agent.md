---
title: "Agentic AI vs AI Agent vs Automation: Aradaki Farklar"
slug: agentic-ai-vs-ai-agent
date: 2026-04-19
excerpt: "2026'nın en karışık üç terimi: AI Agent, Agentic AI ve Automation. Hepsi 'iş yapan AI' gibi duruyor ama karar özerkliği ve kapsamları farklı."
tags: [agentic-ai, terminoloji, karşılaştırma]
reading_time: "4 dk"
---

2026'da aynı lansman sayfasında **"AI Agent"**, **"Agentic AI"** ve **"AI-powered automation"** terimlerini görüyorsan, bu üçünün ne olduğunu birbirinden ayırman gerekir. Aralarında fark, **karar özerkliği** ve **planlama derinliği**dir.

## Spektrum

```
Automation  ───▶  AI Agent  ───▶  Agentic AI
  sabit           tek-görev          çok-görev
 reaktif          proaktif          stratejik
```

## 1. Automation (AI-destekli otomasyon)

Önceden tanımlı bir akış; LLM sadece bir adımda yardımcı. İş akışı **sabit**, karar ağacı deterministik.

- Örnek: Gelen form → LLM kategorize et → Jira ticket aç.
- Kontrolü kod yazar, karar yeri sınırlıdır.
- Maliyet öngörülebilir, debug kolay.

## 2. AI Agent (tek-görev agent)

LLM, verilen **tek bir göreve** ulaşmak için tool kullanır, gerekirse birkaç tur döner. Göreve girer, hedefe ulaşınca durur.

- Örnek: "Bu dosyadaki hataları bul ve düzelt." → agent test çalıştırır, kod okur, değişiklik yapar, testi tekrar çalıştırır.
- Karar özerkliği: **orta**. Hedef senin, yol onun.
- Kontrol mekanizmaları: max tur, tool allowlist, human review.

## 3. Agentic AI (çok-amaçlı, planlayan sistem)

Sadece bir görevi değil, **üst düzey bir hedefi** alır; kendi alt görevlerini çıkarır, önceliklendirir, sub-agent'lar açar, ilerlemesini takip eder. Uzun soluklu.

- Örnek: "Yeni bir ürün lansmanı için research-yaz-review-publish sürecini yönet." → planner, researcher, writer, reviewer alt ajanları fırlatır, ilerlemeyi kaydeder.
- Karar özerkliği: **yüksek**. Yalnızca kapsam ve politika sende.
- Uzun-dönem bellek, self-improvement ve planlamayı içerir.

## Karıştırma noktası

Pek çok ürün "Agentic" etiketi kullanıyor ama aslında AI Agent seviyesinde. Ayırt etmek için bak:

- Ürün, **hedef** mi alıyor yoksa **görev** mi? → Hedef = agentic, görev = agent.
- Sistem, kendi alt görevlerini **planlıyor** mu? → Evet = agentic.
- Ajan birden fazla oturuma yayılan bir işi **sürdürebiliyor** mu? → Evet = agentic.
- Planı değiştirme yetkisi **modelde** mi? → Evet = agentic.

## Güvenlik perspektifi

Özerklik arttıkça **guardrails** da artmalı:

| | Tool izni | Onay | Max token | Human-in-loop |
|---|---|---|---|---|
| Automation | Dar | Gerekmiyor | Küçük | Tasarım gereği |
| AI Agent | Orta | Kritik aksiyonlarda | Orta | Kritik anda |
| Agentic AI | Geniş | Sık ve yapılandırılmış | Büyük | Faz çıkışlarında |

## Kısa kural

- **İşin biliniyorsa, kod yaz.** Automation.
- **Görev netse, agent ver.** AI Agent.
- **Hedef büyükse ve yol belirsizse, agentic sisteme bırak.** Ama gözden kaçma — agentic AI = güç + sorumluluk.
