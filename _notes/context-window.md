---
title: "Context Window: Modelin Çalışma Masası"
slug: context-window
date: 2026-01-28
excerpt: "Context window, modelin aynı anda görebildiği toplam token miktarıdır. Hem girdi hem üretilen çıktı aynı pencerenin içinde yaşar."
tags: [temeller, context, mimari]
reading_time: "3 dk"
---

**Context window**, modelin tek bir istek içinde "hatırlayabildiği" toplam token sayısıdır. Sistem promptu, araç tanımları, konuşma geçmişi, kullanıcı mesajı ve modelin üreteceği cevap — hepsi bu pencerenin içine sığmak zorundadır.

## Claude'un pencereleri

- **Sonnet 4.6 / Opus 4.7:** standart 200K, genişletilmiş 1M token (beta).
- **Haiku 4.5:** 200K token.

200.000 token yaklaşık **~150.000 kelime** ya da **orta boy bir romanın tamamı** kadardır.

## Pencere neden "çalışma masası"?

Model, pencerenin dışındaki hiçbir şeyi bilmez. Önceki bir konuşma pencereden düştükten sonra modele göre "hiç olmamış" gibidir. Kalıcı hafıza yoktur — hafıza ya prompt'a yeniden enjekte edilerek ya da **RAG / bellek katmanı** ile dışarıda tutulur.

## Pratik kısıtlar

Büyük pencere bedava değildir:

- **Maliyet doğrusal artar:** 200K token input, 20K token inputtan ~10 kat pahalıdır.
- **Latency artar:** pencerenin boyutu büyüdükçe ilk token gelme süresi uzar.
- **Dikkat dağılır:** çok uzun contextlerde model orta kısımları daha zayıf hatırlar ("lost in the middle" etkisi).

## Karar verirken

1. Tüm bilgiyi her istekte göndermek zorunda mısın? → **Prompt caching** düşün.
2. Bilgi çok büyükse ve değişkense → **RAG** ile sadece ilgili parçayı çek.
3. Dinamik ajan kullanıyorsan → eski turları **compaction / özetleme** ile küçült.

Pencereyi sonuna kadar doldurmak performans değildir; doğru parçayı doğru yere koymak performanstır.
