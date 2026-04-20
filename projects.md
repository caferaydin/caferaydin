---
title: Projeler
description: Nationality Verification, Nakliye360 ve kurumsal projelerden seçili teknik teslimatlar.
lang: tr
en_url: /en/projects/
permalink: /projects/
---

{% assign projects = site.data.projects %}
{% assign experience = site.data.experience %}

<section class="hero">
  <p class="eyebrow">Projeler</p>
  <h1>Seçili projeler ve <span class="gradient">production</span> teslimatları</h1>
  <p class="lead">Bu sayfa bir galeri değil. Her kart; problem, rol, teknoloji ve olgunluk bilgisiyle birlikte okunabilir bir teknik özet sunar.</p>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Öne Çıkan</p>
      <h2 class="section-title">Freelance ve platform ürünleri</h2>
      <p class="section-text">Fintech kimlik doğrulama servisi ve modüler monolith yaklaşımıyla geliştirilen lojistik platformu.</p>
    </div>
  </div>
  <div class="grid">
    {% for project in projects %}
      <article class="project wide">
        <div class="project-head">
          <h2 class="project-title">
            {{ project.name }}
            <small>{{ project.client }} · {{ project.stack }}</small>
          </h2>
          <span class="project-status {% if project.status_tr == 'Active Development' %}active{% endif %}">{{ project.status_tr }}</span>
        </div>
        <p class="project-summary">{{ project.summary_tr }}</p>
        <div class="project-meta">
          <div>Rol<strong>{{ project.role_tr }}</strong></div>
          <div>Stack<strong>{{ project.stack }}</strong></div>
          <div>Status<strong>{{ project.status_tr }}</strong></div>
        </div>
        <ul class="project-bullets">
          {% for b in project.bullets_tr %}
            <li>{{ b }}</li>
          {% endfor %}
        </ul>
        <div class="chip-row">
          {% for tag in project.tags %}
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
      <p class="eyebrow">Kurumsal Deneyim</p>
      <h2 class="section-title">Şirketlerde teslim ettiğim sistemler</h2>
      <p class="section-text">Kronos Energy, Netline, Publant ve Teknoloji Uzmanım süreçlerinde yürüttüğüm teknik sorumluluklar.</p>
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
      <p class="eyebrow">Sıradaki Adım</p>
      <h2 class="section-title">Benzer bir ihtiyacı birlikte çalışalım</h2>
      <p class="section-text">Backend, mimari ya da ERP/CRM entegrasyonu gerektiren bir sistem planlıyorsan, kapsam-hedef-zaman netliğiyle bana yazabilirsin.</p>
    </div>
  </div>
  <div class="cta-row">
    <a class="button button-primary" href="/contact/">İletişim</a>
    <a class="button button-secondary" href="/expertise/">Stack'i İncele</a>
  </div>
</section>
