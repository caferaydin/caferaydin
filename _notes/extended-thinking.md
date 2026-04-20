---
title: "Extended Thinking: Claude'un Düşünme Modu"
slug: extended-thinking
date: 2026-03-11
excerpt: "Claude, karmaşık problemlerde cevap üretmeden önce ayrı bir 'thinking' bloğunda muhakeme yapabilir. Ne zaman açılır, ne zaman kapatılır?"
tags: [reasoning, düşünme, modeller]
reading_time: "3 dk"
---

**Extended thinking**, Claude'un cevap vermeden önce arka planda adım adım muhakeme yaptığı moddur. API cevabında bunu **`thinking`** bloğu olarak görürsün; son `text` bloğu kullanıcıya sunulan net cevaptır.

## Ne işe yarar?

Model, düşünme bloğunda kendi kendine plan yapar, alternatifleri karşılaştırır, gereksinimleri gözden geçirir. Özellikle şu durumlarda sonucu iyileştirir:

- Çok adımlı matematik / mantık problemleri
- Kod refactoring, debugging
- Uzun dokümanlardan sentez çıkarma
- Tool kullanımında doğru aracı seçme

## Maliyeti

Thinking tokenları **output** olarak sayılır. Yani:

- Tipik istek: input + text output
- Thinking'li istek: input + **thinking output + text output**

Thinking kalitesi ile maliyeti karşılıklı. Basit bir özet için thinking açmak anlamsız para yakar; mimari karar verdiren bir analizde thinking = farklı seviye.

## Pratik kural

Thinking'i aç:

- Cevabın **yanlışlanabilir** ve ölçülebilir olduğu durumlarda (test geçti/kaldı, sayı doğru/yanlış).
- Zincirleme muhakeme gerektiren tasarım / review görevlerinde.
- Agentic akışlarda **bir sonraki adımı seçmeden önce**.

Thinking'i kapat:

- Yaratıcı yazım, kısa cevap, küçük sınıflandırma.
- Düşük latency gereken son-kullanıcı sohbet arayüzü.

Thinking token bütçesini (`budget_tokens`) de kontrol edebilirsin — "düşün ama 2.000 tokendan fazla değil" demek gibi.

## Görünürlük

Claude'un thinking içeriğini kullanıcıya göstermek zorunda değilsin. Çoğu production sistemi thinking'i **loglar ama göstermez**; kullanıcıya sadece final metni sunar.
