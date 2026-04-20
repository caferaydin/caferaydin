---
title: "LLM Hafızası: Context'i Oturumlar Arasında Kalıcı Kılmak"
slug: llm-kalici-hafiza
date: 2026-04-19
excerpt: "LLM'ler stateless; her oturum boş sayfa. Üretim sisteminde 'aynı modelle dün kaldığımız yerden' devam etmek için 5 farklı hafıza yaklaşımı var."
tags: [hafıza, memory, rag, mimari]
reading_time: "5 dk"
---

Bir LLM, her çağrıda **boş bir masayla** başlar. Dün konuştuğun şeyler, kullanıcının tercihleri, projenin durumu — model için hiç olmamış gibidir. Üretimde faydalı olmak için context'i oturumlar arasında **kalıcı hale getirmek** zorundasın. Pratikte bunun beş farklı yolu var; seçim, ne kadar veriyi nereye taşıdığınla ilgilidir.

## 1. Context re-injection — en basit yol

Her çağrıda "sen şu projedesin, şu dosyaları biliyorsun, kullanıcının tercihi şudur" diye sistem promptunu **baştan** enjekte edersin.

- **Avantaj:** Altyapı yok. Tek prompt, deterministik.
- **Dezavantaj:** Context büyüdükçe doğrusal pahalılanır; `context-window` sınırına hızlı yaklaşırsın.
- **Ne zaman:** < 5K tokenlık tercihler, tek oturumda birkaç tur.
- **İkiz kardeş:** Bunu **prompt caching** ile birleştirirsen sabit prefix'ler %90 indirimli gelir.

## 2. Memory files — model kendi not defterine yazsın

Modelin kalıcı bir dosya sistemine okuma/yazma hakkı olur. Claude Agent SDK ve Claude Code tam olarak bu modeli kullanıyor: `memory/` klasöründe markdown dosyaları, model yeni bilgiyi kendisi kaydediyor; sonraki oturum aynı dosyaları okuyor.

- **Avantaj:** Kullanıcı dosyaları **görür ve düzenler**. Explicit, debuggable.
- **Dezavantaj:** Büyüdükçe modelin "neyi okuyayım?" seçimi zorlaşır — dosya listesinin kendisi context şişirir.
- **Ne zaman:** Kişisel ajan, uzun soluklu proje asistanı, kullanıcı-özel tercihler.

## 3. RAG (Retrieval-Augmented Generation)

Geçmiş içeriği bir **vector store**'a embed edersin; her çağrıda kullanıcı sorusuyla en ilgili parçaları çekip prompt'a koyarsın.

- **Avantaj:** Milyonlarca dokümanla çalışabilir; maliyet retrieval'le sınırlıdır.
- **Dezavantaj:** Retrieval kalitesi = sistem kalitesi. Chunking, embedding modeli ve reranking tune edilmezse alakasız sonuç gelir.
- **Ne zaman:** Dokümantasyon Q&A, destek chatbot'u, dinamik veri kaynağı.

## 4. Summarization / compaction

Konuşma uzadıkça **eski turları özetler, orijinali atarsın**. Sonraki turlar özeti görür. Claude Code uzun oturumlarda bunu otomatik yapıyor — yan etkisi olan kararları (dosya değişiklikleri) özetin içine taşıyor.

- **Avantaj:** Context window'a sığma problemi çözülür.
- **Dezavantaj:** Özet = kayıp. Detay erir; "az önce söylemiştim" hissiyatı oluşur.
- **Ne zaman:** 20+ turluk agentik döngüler, uzun debug oturumları.

## 5. Knowledge graph / structured memory

Bilgiyi **node-relation** olarak saklarsın; sorgu semantik benzerlik değil, **ilişkisel hop** yapar. "Kullanıcı X, Y projesinde Z aracını kullandı" tipindeki çok-atlamalı soruları çözer.

- **Avantaj:** Yapısal sorgular, açıklayıcı ilişkiler, atomic bilgi.
- **Dezavantaj:** Ontology tasarımı ağır; ingestion pipeline'ı karmaşık.
- **Ne zaman:** Enterprise bilgi yönetimi, çok-aktörlü ekosistemler, audit gereken alanlar.

## Karar matrisi

| Senaryo | Birincil tercih |
|---------|-----------------|
| Küçük, kısa sohbet | Context re-injection |
| Kişisel agent / kullanıcı tercihleri | Memory files |
| Dokümantasyon Q&A, büyük corpus | RAG |
| Uzun agentic loop | Summarization + memory |
| Çok-aktörlü, ilişkisel bilgi | Knowledge graph |

## Kritik kural

Tek bir yaklaşımla yetinme. Production'da genelde **hibrit** çalışır:

- **short-term** için context re-injection (+ caching),
- **medium-term** için memory files,
- **long-term** için RAG veya knowledge graph.

Önce en sade katmanla başla, sistem büyüdükçe üstüne kur. "LLM'in hafızası var mı?" sorusu yanlış; doğru soru: "**benim** sistemimde hangi hafıza katmanı, hangi veriyi, ne kadar süre taşıyor?"
