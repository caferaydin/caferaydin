---
title: Özgeçmiş
description: Cafer Aydın — Senior Software Developer özgeçmiş; deneyim, projeler, teknik stack, eğitim ve prensipler.
lang: tr
en_url: /en/cv/
permalink: /cv/
---

{% assign profile = site.data.profile %}
{% assign experience = site.data.experience %}
{% assign projects = site.data.projects %}
{% assign skills = site.data.skills %}
{% assign education = site.data.education %}

<section class="hero">
  <p class="eyebrow">Özgeçmiş · Curriculum Vitae</p>
  <h1>{{ profile.name }} — <span class="gradient">Senior Software Developer</span></h1>
  <p class="lead">{{ profile.summary_tr }}</p>
  <div class="hero-meta">
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{{ profile.location }}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.09 1 19 19 0 0 1-8.27-3.11 19 19 0 0 1-6-6A19 19 0 0 1 3.78 4.91 1 1 0 0 1 4.77 3.8h4a1 1 0 0 1 1 .75 11 11 0 0 0 .55 2.57 1 1 0 0 1-.23 1L8.09 9.91a16 16 0 0 0 6 6l1.78-1.78a1 1 0 0 1 1-.23 11 11 0 0 0 2.57.55 1 1 0 0 1 .75 1z"/></svg>{{ profile.phone }}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>{{ profile.email }}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg><a href="{{ profile.github }}" target="_blank" rel="noreferrer">{{ profile.github_handle }}</a></span>
  </div>
  <div class="cta-row">
    <a class="button button-primary" href="mailto:{{ profile.email }}">İletişim</a>
    <a class="button button-secondary" href="{{ profile.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Profil</p>
      <h2 class="section-title">Mühendislik bakışı ve teslim disiplini</h2>
    </div>
  </div>
  <div class="grid">
    <article class="card span-6">
      <div class="card-icon">01</div>
      <h3>Sistemleri bir bütün olarak okurum</h3>
      <p>Performans, güvenilirlik, bakım maliyeti ve ekip verimliliğini birlikte değerlendiririm. Bir kararın downstream etkilerini görmeden “bitti” demem.</p>
    </article>
    <article class="card span-6">
      <div class="card-icon">02</div>
      <h3>Ürün hedefini teknik parçaya bölerim</h3>
      <p>Büyük hedefi küçük, doğrulanabilir parçalara ayırır, kritik riskleri erken görünür kılarım. Teslim ritmini ve kaliteyi birlikte korurum.</p>
    </article>
    <article class="card span-6">
      <div class="card-icon">03</div>
      <h3>Mimariyi yaşayan bir karar olarak görürüm</h3>
      <p>Monolith, modular monolith, microservices — doğru seçim bağlama bağlıdır. Trade-off'ları açıkça yazar, geri alınabilir kararlarla ilerlerim.</p>
    </article>
    <article class="card span-6">
      <div class="card-icon">04</div>
      <h3>Operasyonel güven zorunludur</h3>
      <p>Correlation ID'li loglama, health check, retry, hata zarfı ve observability production-day 0'dan itibaren vardır.</p>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">İş Deneyimi</p>
      <h2 class="section-title">Teslim ettiğim sistemler</h2>
    </div>
  </div>
  <ol class="timeline" style="list-style:none; padding:0;">
    {% for job in experience %}
      <li class="timeline-item {% if job.current %}current{% endif %}">
        <div class="timeline-head">
          <h3 class="timeline-role">{{ job.role_tr }} · <span class="timeline-company">{{ job.company }}</span></h3>
          <span class="timeline-period">{{ job.start }} – {{ job.end_tr }}</span>
        </div>
        <ul class="timeline-bullets">
          {% for b in job.bullets_tr %}
            <li>{{ b }}</li>
          {% endfor %}
        </ul>
        <div class="chip-row">
          {% for tag in job.tags %}
            <span>{{ tag }}</span>
          {% endfor %}
        </div>
      </li>
    {% endfor %}
  </ol>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Öne Çıkan Projeler</p>
      <h2 class="section-title">Production teslimatları</h2>
    </div>
    <a class="button button-ghost" href="/projects/">Tüm Projeler →</a>
  </div>
  <div class="grid">
    {% for project in projects %}
      <article class="project half">
        <div class="project-head">
          <h3 class="project-title">
            {{ project.name }}
            <small>{{ project.client }} · {{ project.stack }}</small>
          </h3>
          <span class="project-status {% if project.status_tr == 'Active Development' %}active{% endif %}">{{ project.status_tr }}</span>
        </div>
        <p class="project-summary">{{ project.summary_tr }}</p>
        <div class="chip-row">
          {% for tag in project.tags limit: 5 %}
            <span>{{ tag }}</span>
          {% endfor %}
        </div>
        {% if project.link %}
          <a class="project-link" href="{{ project.link }}" target="_blank" rel="noreferrer">
            {{ project.link_label }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Teknik Yetkinlikler</p>
      <h2 class="section-title">Dil, framework ve altyapı</h2>
    </div>
  </div>
  <div class="stack-grid">
    {% for group in skills.groups %}
      <div class="stack-card">
        <h3>{{ group.title_tr }}</h3>
        <div class="chip-row">
          {% for item in group.items %}
            <span>{{ item }}</span>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Eğitim & Diller</p>
      <h2 class="section-title">Akademik arka plan</h2>
    </div>
  </div>
  <div class="grid">
    {% for edu in education %}
      <article class="card span-4">
        <div class="card-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h3>{{ edu.program_tr }}</h3>
        <p>{{ edu.school }}</p>
        <p class="meta-line">{{ edu.period }}</p>
      </article>
    {% endfor %}
  </div>
  <div style="margin-top:1.2rem; display:flex; gap:0.8rem; flex-wrap:wrap;">
    <span class="badge">Türkçe · Ana dil</span>
    <span class="badge">İngilizce · Teknik dokümantasyon / aktif kullanım</span>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Mühendislik Prensipleri</p>
      <h2 class="section-title">Günlük kararlarımı yöneten temel hatlar</h2>
    </div>
  </div>
  <ul class="inline-list">
    <li><strong>Sadelik ve netlik:</strong> Gerekli olmayan soyutlama, gelecekteki sorunu bugünden üretir.</li>
    <li><strong>Clean architecture & katmanlı sınırlar:</strong> Domain'i framework'ten ayrık tutarım.</li>
    <li><strong>Ölçülebilirlik:</strong> Teslim ettiğim şey loglanabilir, gözlemlenebilir ve alert'lanabilirdir.</li>
    <li><strong>Güvenlik öncelikli:</strong> Kimlik, veri ve log seviyesinde KVKK / GDPR uyumu baştan kurulur.</li>
    <li><strong>Bakım maliyeti bilinci:</strong> Bugün hızlı yazılan kodun, yarınki maliyetini kabul ederek yazarım.</li>
    <li><strong>Sorumluluk sahipliği:</strong> Teslim edilen kod, production davranışı ve incident cevabını birlikte sahiplenirim.</li>
  </ul>
</section>

<section class="section-block">
  <p class="eyebrow">Referanslar</p>
  <p class="section-text">Referanslar talep edilmesi halinde paylaşılabilir.</p>
</section>
