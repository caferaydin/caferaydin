---
title: İletişim
description: Cafer Aydın iletişim kanalları — e-posta, GitHub, LinkedIn, telefon.
lang: tr
en_url: /en/contact/
permalink: /contact/
---

{% assign profile = site.data.profile %}

<section class="hero">
  <p class="eyebrow">İletişim</p>
  <h1>Teknik işbirliği için <span class="gradient">doğrudan</span> ulaş</h1>
  <p class="lead">E-posta birincil kanal, en hızlı geri dönüşü oradan alırsın. GitHub ve LinkedIn üzerinden de yazabilirsin.</p>
  <div class="cta-row">
    <a class="button button-primary" href="mailto:{{ profile.email }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      E-posta Gönder
    </a>
    <a class="button button-secondary" href="{{ profile.github }}" target="_blank" rel="noreferrer">GitHub</a>
    <a class="button button-secondary" href="{{ profile.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Kanallar</p>
      <h2 class="section-title">Doğrudan bağlantı</h2>
      <p class="section-text">Hızlı yanıt için e-posta. LinkedIn profesyonel bağlantılar ve referans süreçleri için, GitHub teknik içerik ve kod incelemesi için.</p>
    </div>
  </div>
  <ul class="contact-list">
    <li><span class="label">email</span><a href="mailto:{{ profile.email }}">{{ profile.email }}</a></li>
    <li><span class="label">phone</span><a href="tel:{{ profile.phone | replace: ' ', '' }}">{{ profile.phone }}</a></li>
    <li><span class="label">github</span><a href="{{ profile.github }}" target="_blank" rel="noreferrer">{{ profile.github }}</a></li>
    <li><span class="label">linkedin</span><a href="{{ profile.linkedin }}" target="_blank" rel="noreferrer">{{ profile.linkedin }}</a></li>
    <li><span class="label">location</span><span>{{ profile.location }} · UTC+3</span></li>
  </ul>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Mesaj Kalitesi</p>
      <h2 class="section-title">Hızlı ve doğru geri dönüş için</h2>
      <p class="section-text">Üç satırlık bir brief, tahmini 24 saat içinde net bir geri dönüş getirir.</p>
    </div>
  </div>
  <div class="grid">
    <article class="card span-4">
      <div class="card-icon">01</div>
      <h3>Problem tanımı</h3>
      <p>Hangi ihtiyacı çözmek istiyorsun? Mevcut sistem, darboğaz, kısıt varsa kısaca yaz.</p>
    </article>
    <article class="card span-4">
      <div class="card-icon">02</div>
      <h3>Hedef sonuç</h3>
      <p>Neyi başarmış olmak istiyorsun? Kabul kriterleri veya KPI varsa belirt.</p>
    </article>
    <article class="card span-4">
      <div class="card-icon">03</div>
      <h3>Zaman çerçevesi</h3>
      <p>İdeal başlangıç ve deadline’ı paylaşırsan modeli hızlıca önerebilirim.</p>
    </article>
  </div>
</section>
