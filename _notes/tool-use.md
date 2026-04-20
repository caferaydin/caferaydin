---
title: "Tool Use: Modelin Dışarıya El Uzatması"
slug: tool-use
date: 2026-02-26
excerpt: "Function calling / tool use, modelin doğal dilde düşündüğü şeyi yapılandırılmış bir komuta çevirmesini sağlar. Agent'ların kalbidir."
tags: [agent, tool-use, api]
reading_time: "3 dk"
---

**Tool use** (bazı SDK'larda *function calling*), modele "şu araçları kullanabilirsin" demek ve modelin gerektiğinde **yapılandırılmış JSON** üreterek bu araçları çağırmasını sağlamaktır. API bu JSON'u parse edip senin kodun çalıştırır, sonucu modele geri verir, model devam eder.

## Sözleşme

Her tool üç şeyden oluşur:

```json
{
  "name": "get_weather",
  "description": "Şehir için güncel hava durumunu döner.",
  "input_schema": {
    "type": "object",
    "properties": {
      "city": {"type": "string"}
    },
    "required": ["city"]
  }
}
```

Model aracı çağırmaya karar verirse `tool_use` bloğu üretir; sen aracı çalıştırıp `tool_result` ile cevabı geri koyarsın.

## Kritik detaylar

- **Description her şeydir.** Model, tool'u ne zaman çağıracağını description'dan öğrenir. "Döviz kurunu getirir" yerine "Kullanıcı güncel döviz kuru sorduğunda çağır — sadece TCMB kurunu döner, yatırım tavsiyesi değildir" yaz.
- **Input schema sıkı olsun.** Gereksiz alan = hatalı çağrı riski. Required alanları net tut.
- **Paralellik:** Claude 4 ailesi tek turda **birden fazla tool'u paralel** çağırabilir. Kodun bunu desteklemeli.
- **Idempotency:** Aynı tool çağrısı retry'da güvenli olmalı. Model bazen tekrarlar.

## Ne zaman kullan?

- Model'in **erişimi olmayan** güncel veriye ihtiyacı varsa (API, DB sorgusu, hesaplama).
- Model'in **yan etkiye** yol açması gerekiyorsa (mail gönder, ödeme başlat).
- Model, deterministik bir iş için daha iyi bir araca güveniyorsa (matematik → calculator).

Tool use, "akıllı bir text generator"dan "iş yapabilen bir sistem"e geçiş anahtarıdır.
