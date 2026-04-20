---
title: "Prompt Nasıl Yazılır? Pratik Bir Rehber"
slug: prompt-yazma-rehberi
date: 2026-04-08
excerpt: "İyi bir prompt; rol, bağlam, görev, kısıt ve çıktı formatından oluşur. Vague bir istek, vague bir cevap döner — netlik en büyük optimizasyondur."
tags: [prompt-engineering, rehber, temeller]
reading_time: "4 dk"
---

Prompt yazmak bir sihir değil; doğru bilgiyi doğru sırayla modele vermektir. LLM'ler iyi bir brief'e iyi cevap, kötü bir brief'e kötü cevap üretirler — tıpkı bir ekip arkadaşı gibi.

## 5 parçalı iskelet

İşe yarayan promptların çoğunda beş bölüm bulunur:

1. **Rol / kimlik:** "Kıdemli bir backend mühendissin."
2. **Bağlam:** "Spring Boot 3 + PostgreSQL üzerinde çalışan bir sipariş servisi var."
3. **Görev:** "Aşağıdaki migration script'ini incele ve production'a alma riskini değerlendir."
4. **Kısıt:** "Sadece listelenen konulara odaklan; stil yorumu yapma."
5. **Çıktı formatı:** "3 maddelik risk listesi + her madde için 1 cümlelik mitigation."

Bu beş parçayı markdown başlıklarıyla ayırmak modele yol gösterir.

## Somutluk, sihir değil

❌ "Kodu iyileştir."
✅ "Şu Python fonksiyonundaki `O(n²)` döngüyü `O(n)`'e indir ve değişen satırları açıkla. Tip ipuçları bozulmasın."

❌ "Beni tanıt."
✅ "İş LinkedIn bio'su yaz — 2 paragraf, 600 karakter, 'backend', 'distributed systems' anahtar kelimeleri geçsin, satış tonu olmasın."

## İşe yarayan teknikler

- **Örnek ver (few-shot):** 1-2 iyi örnek, uzun talimatın yerini tutar.
- **Negatif örnek ver:** "Şöyle yapma: …" modeli sınırlar.
- **Adım adım iste:** "Önce plan çıkar, sonra uygulamayı yaz." → kalite ciddi artar.
- **Rol ayır:** Sistem promptu = kalıcı kurallar; user prompt = her turda değişen iş.
- **Çıktıyı XML ya da JSON içine al:** `<risk>...</risk>` — parse etmek ve zincirleme modeller için güvenli.

## Ne zaman prompt değil, başka bir şey?

- Aynı veri, aynı soru, tekrarlı çağrı → **prompt caching**
- Her seferinde büyük dinamik veri → **RAG**
- Deterministik işlem (matematik, DB, tarih) → **tool use**
- Çok adımlı karar → **agent / thinking**

Prompt mühendisliği, cevabın %80'i sen bildiğin iş olduğu için çalışır. Eğer sen de ne istediğini bilmiyorsan, modelin cevabı da belirsiz olur.
