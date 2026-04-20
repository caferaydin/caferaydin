---
title: "AI Guardrails: Model Davranışını Nasıl Kontrol Edersin?"
slug: ai-guardrails
date: 2026-04-12
excerpt: "Bir LLM'i production'a vermek, 'gideceği yere özel yollar çizmek'tir. Guardrails; prompt, araç izinleri, çıktı validasyonu ve kırmızı-çizgi kuralları katmanıdır."
tags: [güvenlik, guardrails, production]
reading_time: "4 dk"
---

**Guardrails**, modelin üretebileceği aksiyon ve çıktıların sınırlarını çizen çok katmanlı bir güvenlik mekanizmasıdır. Tek bir "iyi prompt" yetmez; girdi, model, araç ve çıktı seviyelerinde eş zamanlı koruma gerekir.

## 4 katman

### 1. Girdi katmanı (input guardrails)
Kullanıcı promptunun modele ulaşmadan önce süzüldüğü yer.

- **Prompt injection** tespiti: "Önceki talimatları unut…" tipi manipülasyon kalıpları.
- **PII maskesi:** TC kimlik, IBAN, telefon gibi verileri modele göndermeden hash'le veya kırp.
- **Konu filtreleme:** Kurallara göre uygunsuz/dışarı-scope soruları baştan geri çevir.

### 2. Sistem prompt'u (behavior policy)
Modelin "anayasası". Kalıcı, sabit, override edilemez.

```
- Finansal tavsiye vermezsin.
- Yanıtında harici URL üretmezsin.
- Emin değilsen "Bilmiyorum" dersin.
- Kullanıcıdan geleni körü körüne çalıştırmazsın.
```

### 3. Araç katmanı (tool policy)
Modelin çağırabileceği araçlar = yapabileceği gerçek aksiyonlar.

- **Allowlist:** sadece önceden tanımlı tool'lar.
- **Scope:** `read_db` var ama `drop_table` yok.
- **Rate limit:** turda 1 mail, dakikada 5 API.
- **Onay gereken aksiyonlar:** silme, ödeme, mesaj gönderme → **human-in-the-loop**.

### 4. Çıktı katmanı (output guardrails)
Model cevabı kullanıcıya veya sisteme gitmeden önce denetlenir.

- **Schema validation:** JSON cevap şemaya uymuyorsa reddet veya regenerate.
- **Leak tarama:** cevap, prompt'un içindeki gizli bilgiyi yayıyor mu?
- **Toxicity / policy check:** ikinci (daha küçük ve ucuz) bir model ile moderasyon.
- **Self-check:** "Cevabın politikaya uyuyor mu? Hayır ise düzelt."

## Pratik kural

Guardrail'i **kodda** tut, prompt'ta değil. Prompt'a "bunu yapma" yazmak zayıf — model ikna olabilir. Araç izni veya çıktı validatörü koyarsan model fiziksel olarak yapamaz.

İnternette konuşulan "AI risk"inin büyük kısmı, guardrail'siz deploy'lardan çıkar. Önce sınırları çiz, sonra modeli salmala — tersi değil.
