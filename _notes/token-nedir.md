---
title: "Token Nedir?"
slug: token-nedir
date: 2026-01-12
excerpt: "LLM'lerin para birimi olan token, yaklaşık bir kelime parçasıdır. Hem fiyatlandırmanın hem de context window limitinin temel birimidir."
tags: [temeller, token, maliyet]
reading_time: "3 dk"
---

Bir **token**, modelin metni işlerken kullandığı en küçük birimdir. Türkçe / İngilizce ortalamasında **1 token ≈ 4 karakter** veya **~0.75 kelime** olarak düşünebilirsin. "Merhaba" kelimesi tek token olabileceği gibi, "denklemlerdeki" gibi bir sözcük birden fazla tokena bölünür.

## Neden önemli?

Üç şey tokendan geçer:

- **Fiyatlandırma:** API kullanımında ödediğin her şey token bazındadır. Input ve output tokenları genelde farklı fiyatlandırılır.
- **Context window:** Modelin aynı anda tutabileceği maksimum token sayısıdır. Limit aşılırsa istek reddedilir ya da eski içerik kırpılır.
- **Latency:** Output token sayısı arttıkça cevap süresi doğrusal artar.

## Pratik örnek

Claude Sonnet 4.6 için tipik bir agentic turda:

```
System prompt        ~1,200 tok
Tools tanımı         ~3,500 tok
Önceki konuşma       ~8,000 tok
Kullanıcı mesajı        ~120 tok
----------------------------------
Input toplamı       ~12,820 tok
```

Aynı sistem promptu her turda yeniden gönderiliyorsa, **prompt caching** ile bu maliyetin büyük kısmı ortadan kalkar — bunu ayrı bir notta işleyeceğim.

## Hızlı tahmin

- 1 sayfa yazı ≈ **500–700 token**
- Orta bir README.md ≈ **1,500 token**
- Saatlik bir toplantı transkripti ≈ **8,000–12,000 token**

Bu çarpanlar, geliştirme sırasında "bu prompt pahalıya mı patlar?" sorusuna hızlı cevap vermek için yeterli.
