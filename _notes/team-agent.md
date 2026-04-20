---
title: "Team Agent / Multi-Agent: Birden Fazla AI'ı Birlikte Çalıştırmak"
slug: team-agent
date: 2026-04-15
excerpt: "Tek bir agent her işi yapmaz. Team agent, farklı rollerdeki agentların bir orchestrator üzerinden görev paylaştığı mimaridir."
tags: [multi-agent, mimari, agent]
reading_time: "4 dk"
---

**Team agent** (ya da *multi-agent*), birden fazla AI ajanın belirli roller üstlenip bir orchestrator aracılığıyla birlikte çalıştığı mimaridir. Tek bir büyük agent yerine, küçük ve uzmanlaşmış birimler.

## Neden tek agent yetmiyor?

- **Context kirliliği:** Tek bir agent'ın context window'u her görevle şişer; uzak ilişkiler zayıflar.
- **Odak kaybı:** "Sen hem planlayıcı, hem yazar, hem reviewer'sın" talimatı rol karmaşası üretir.
- **Özelleşme:** Kod yazan modelin promptu, pazarlama yazısı yazan modelin promptundan çok farklı.
- **Paralelleşme:** Dört alt görevi dört ajan aynı anda yapabilir; tek ajan sıralı ilerler.

## Tipik roller

| Rol | Görev |
|-----|-------|
| **Planner** | İsteği parçalara böler, görev listesi çıkarır |
| **Researcher** | RAG / web araması yapar, kaynakları toplar |
| **Writer / Coder** | Asıl üretimi yapar |
| **Reviewer / Critic** | Çıktıyı değerlendirir, zayıf yerleri işaretler |
| **Orchestrator** | Görevleri dağıtır, sonuçları birleştirir |

## İletişim biçimleri

1. **Orchestrator-led:** Merkezde bir koordinatör; diğer ajanlar ona rapor eder. Kontrolü kolay.
2. **Peer-to-peer:** Ajanlar birbirine direkt mesaj atabilir. Esnek ama patlama ihtimali yüksek.
3. **Blackboard:** Ortak bir "tahta" (shared state / dosya) üzerinden asenkron haberleşme. Gözlemlenebilir.

## Production'da dikkat

- **Loop riski:** İki ajan birbirine sonsuza kadar sorabilir. Max-step limit koy.
- **Maliyet:** Her ajan ayrı API çağrısı — token faturası lineer artar.
- **Debug zorluğu:** Hata, hangi ajandan çıktı? Structured, ajan-etiketli loglar şart.
- **State tutarlılığı:** Paralel ajanlar aynı veriye yazarsa conflict çıkar; versiyonla veya sıralı uygula.

## Ne zaman multi-agent?

✅ Büyük, çok-aşamalı görev (araştırma → yazım → inceleme → publish)
✅ Farklı domain beceri gerektiren paralel iş
❌ Kısa, tek-cevap görevler — tek bir iyi prompt yeter
❌ Deterministik pipeline — `if/else` daha ucuz

Kural: **Tek agent'la çözebiliyorsan, tek agent'la çöz.** Multi-agent'ı, problemin parçalı yapısı zorladığında getir.
