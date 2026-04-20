---
title: "Knowledge Pipeline: LLM'i Kalıcı Bir Wiki Küratörüne Dönüştürmek"
slug: knowledge-pipeline
date: 2026-04-20
excerpt: "Her soruda ham kaynaktan yeniden çekmek yerine, LLM seninle birlikte kalıcı bir wiki büyütüyor. RAW + WIKI + SCHEMA üçlüsüyle tanımlanmış, disiplinli bir bilgi birikim pattern'i."
tags: [hafıza, pattern, wiki, skill]
reading_time: "5 dk"
---

Bir önceki notta [LLM hafızası için beş yaklaşımı](/notes/llm-kalici-hafiza/) sıralamıştık. **Knowledge Pipeline**, bunların içinde "memory files" ile "knowledge graph"ın kesişiminde duran, açıkça tanımlanmış bir **LLM-Wiki pattern**'ı. Temel fikir: modele her soruda ham kaynaktan yeniden cevap ürettirmek yerine, ham kaynakla senin aranda **kalıcı bir wiki'nin** büyütülmesini sağlamak.

Pattern'in kaynağı: [github.com/selmakcby/knowledge-pipeline](https://github.com/selmakcby/knowledge-pipeline) · Selma Akçabay (MIT).

## Üç katmanlı mimari

```
RAW  ───▶  WIKI  ◀───  SCHEMA
 (kaynak)   (LLM'in      (CLAUDE.md —
             kurduğu       anayasa)
             sayfalar)
```

1. **RAW (`raw/`)** — ham kaynaklar: makale, PDF, transcript, ses kaydı. **Immutable**; ajan yalnız okur, sadece sen eklersin. Tek gerçeklik kaynağı.
2. **WIKI (vault kökü)** — tamamen LLM tarafından yönetilen markdown dosyaları: özetler, kavram sayfaları, çapraz referanslar, kararlar, sentezler. `[[bağlantı]]` sözdizimiyle bağlı. Kullanıcı okur, ajan yazar.
3. **SCHEMA (`CLAUDE.md`)** — ajanın "anayasası". Klasör yapısı, isimlendirme, iş akışları, yasaklar. Modeli genel sohbetçiden **disiplinli bir wiki bakıcısına** dönüştüren dosya.

## Üç operasyon

### INGEST — yeni kaynağı sisteme sok
Kaynağı oku → kullanıcıyla kritik bulguları tartış → `sources/` altına özet yaz → `index.md`'yi güncelle → etkilenen kavram/entity sayfalarını güncelle → çelişki varsa **flag'le** → `log.md`'ye zaman damgalı kaydet.

Tek bir kaynak tipik olarak **10-15 sayfayı** dokunur. Bu yüzden ajan yapar — insan yapmaz.

### QUERY — soruya cevap üret
`index.md`'yi oku → ilgili sayfaları çek → sentez et → **her iddiayı kaynakla** referansla. Kritik detay: değerli cevaplar (karşılaştırmalar, kurulan yeni bağlantılar) **tek seferlik tüketilmez**; yeni bir wiki sayfası olarak **geri dosyalanır**. Keşif de birikime döner.

### LINT — periyodik sağlık kontrolü
Çelişkiler, güncelliğini yitirmiş iddialar, orphan sayfalar, eksik çapraz referanslar, kavram boşlukları. Ajan, araştırılması gereken yeni soruları da önerir.

## Neden bu pattern, RAG yerine?

Orta ölçekli bir vault'ta (~100 kaynak, birkaç yüz sayfa) LLM'in `index.md`'yi okuyup doğrudan navigate etmesi, **embedding + vector search altyapısının yerini tutar**: kurulum maliyeti ~0, ek servis yok, cevaplar kaynaklı ve açıklamalı. RAG'i ancak scale bunu zorlayınca eklersin.

## Çiğnenmez kurallar

- `raw/` **immutable**; ajan yazamaz.
- Her iddia **kaynaklı**dır.
- Çelişki **silinmez, flag'lenir**: "Kaynak A X diyor; Kaynak B Y diyor."
- Link güncellemesi **çift yönlü** düşünülür.
- Her işlem `log.md`'de zaman damgalı kayıt altındadır.
- Sayfalar silinmez, `archive/`'a taşınır.

## Kullanım alanları

Pattern domain'den bağımsız — sadece schema değişir:

- **Kişisel gelişim günlüğü**: entries + themes + okuma notları
- **Tez / araştırma**: papers + theories + methods + experiments
- **Kitap okuma**: chapters + characters + themes + quotes
- **Ürün / ekip wiki'si**: Slack thread, toplantı transkripti, customer interview
- **Rekabet analizi, due diligence, hobby araştırması** — zaman içinde bilgi biriken her şey

## Neden işe yarıyor?

Wiki'nin zor kısmı okumak veya düşünmek değil — **muhasebe**: çapraz referans güncellemek, özet taze tutmak, çelişki yakalamak, yüzlerce sayfa arasında tutarlılığı korumak. İnsanlar wiki'yi bakım yükü değer artışından hızlı büyüyünce terk eder. LLM yorulmaz, referans güncellemesini unutmaz, tek turda 15 dosyaya dokunur.

**Bakım maliyeti sıfıra yaklaşır → wiki ayakta kalır.**

Senin rolün: kaynakları bulmak, doğru soruları sormak, eleştirel düşünmek. Gerisi ajanın işi.

## Memex'in geç kalmış cevabı

Vannevar Bush'un 1945'teki **Memex** vizyonu tam buydu — kişisel, aktif küratörlü, ilişkisel bir dokümantasyon sistemi. Bush'un çözemediği soru şuydu: *"Onu kim bakar?"* 2026 cevabı: **LLM.**

Başlangıç için repo'daki `SKILL.md`'yi bir Claude Code oturumuna yapıştırıp domain'ini anlattığında, ajan senin için `CLAUDE.md` + `index.md` + `log.md` iskeletini otomatik üretir.
