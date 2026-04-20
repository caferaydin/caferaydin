---
title: "LLM Halüsinasyonu: Kendinden Emin Bir Yanlış"
slug: llm-halusinasyon
date: 2026-04-02
excerpt: "Model uydurduğunu bilmez. Hallucination, yanlış cevabın kendinden emin bir tonla sunulmasıdır. Production sistemde bunu hafifletmenin yolları var."
tags: [güvenilirlik, hallucination, prompt]
reading_time: "4 dk"
---

**Hallucination**, bir LLM'in olmayan bir bilgiyi — API çağrısını, kaynağı, kodu, istatistiği — gerçekmiş gibi üretmesidir. Model "uydurduğunun" farkında değildir; kendi olasılık dağılımına göre "muhtemelen böyle olur" dediği cümleyi sunar.

## Neden olur?

- **Eğitim verisinin sınırları:** Model bilmediği şeyi "bilmiyorum" demek yerine, istatistiksel olarak en olası cümleyi üretir.
- **Özgüven kalibrasyonu kötüdür:** LLM'ler "ne kadar eminim?" sorusuna güvenilir cevap veremez.
- **Prompt'un boşlukları:** Promptta belirsiz kalan noktayı model kendisi doldurur.
- **Güncellik problemi:** Eğitim kesim tarihinden sonraki olaylar bilinmez ama sorgulanınca cevap üretilir.

## Belirtileri

Tipik hallucination işaretleri:

- Var olmayan bir kütüphane fonksiyonu (`pandas.magic_fix()`)
- Uydurma API endpoint'i, hatalı HTTP status kodu
- Kurgusal akademik referans — yazar adı gerçek, makale adı uydurma
- Çok spesifik sayılar ("%87,3") ama kaynaksız

## Üretim ortamında nasıl azaltılır?

1. **Grounding (RAG):** Cevap için kaynak dokümanları prompt'a iliştir ve "sadece bu kaynaklara dayan, dışına çıkma" de.
2. **Tool use:** Güncel/hassas veriyi modele değil, araca sor (DB, API, calculator).
3. **Structured output:** JSON schema ile çıktı şeklini sınırla — model "boş uyduracak" alanı azaltır.
4. **Temperature düşük tut:** Deterministik alanlarda 0 — 0.3.
5. **Citation zorunlu tut:** "Her iddia için kaynak numarası ver" talimatı ciddi fark yaratır.
6. **Self-check prompt'u:** "Emin değilsen 'Bilmiyorum' de" talimatı hallucination'u ~%30-50 azaltır (domain'e göre).

## Kısa kural

Model "kesinlikle doğru" konuşuyorsa, **bir tool ya da kaynak** söz konusu olmalı. Aksi halde "olasılıkla doğru" olarak davran; otomatik aksiyona geçirme. Finans, sağlık, hukuk alanlarında hallucination = incident, test etme ve human-in-the-loop zorunlu.
