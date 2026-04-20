---
title: CV
description: Cafer Aydın — Senior Software Developer curriculum vitae; experience, projects, technical stack, education, and principles.
lang: en
tr_url: /cv/
permalink: /en/cv/
---

{% assign profile = site.data.profile %}
{% assign experience = site.data.experience %}
{% assign projects = site.data.projects %}
{% assign skills = site.data.skills %}
{% assign education = site.data.education %}

<section class="hero">
  <p class="eyebrow">Curriculum Vitae</p>
  <h1>{{ profile.name }} — <span class="gradient">Senior Software Developer</span></h1>
  <p class="lead">{{ profile.summary_en }}</p>
  <div class="hero-meta">
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{{ profile.location }}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.09 1 19 19 0 0 1-8.27-3.11 19 19 0 0 1-6-6A19 19 0 0 1 3.78 4.91 1 1 0 0 1 4.77 3.8h4a1 1 0 0 1 1 .75 11 11 0 0 0 .55 2.57 1 1 0 0 1-.23 1L8.09 9.91a16 16 0 0 0 6 6l1.78-1.78a1 1 0 0 1 1-.23 11 11 0 0 0 2.57.55 1 1 0 0 1 .75 1z"/></svg>{{ profile.phone }}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>{{ profile.email }}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg><a href="{{ profile.github }}" target="_blank" rel="noreferrer">{{ profile.github_handle }}</a></span>
  </div>
  <div class="cta-row">
    <a class="button button-primary" href="mailto:{{ profile.email }}">Contact</a>
    <a class="button button-secondary" href="{{ profile.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Profile</p>
      <h2 class="section-title">Engineering lens and delivery discipline</h2>
    </div>
  </div>
  <div class="grid">
    <article class="card span-6">
      <div class="card-icon">01</div>
      <h3>I read systems as a whole</h3>
      <p>I evaluate performance, reliability, maintenance cost, and team productivity together. I don't call something "done" without understanding its downstream effects.</p>
    </article>
    <article class="card span-6">
      <div class="card-icon">02</div>
      <h3>I map product goals to technical slices</h3>
      <p>I decompose big goals into small, verifiable pieces and surface critical risks early. Delivery rhythm and quality move together, not against each other.</p>
    </article>
    <article class="card span-6">
      <div class="card-icon">03</div>
      <h3>Architecture is a living decision</h3>
      <p>Monolith, modular monolith, microservices — the right choice is context-dependent. I document trade-offs openly and prefer reversible decisions.</p>
    </article>
    <article class="card span-6">
      <div class="card-icon">04</div>
      <h3>Operational confidence is mandatory</h3>
      <p>Correlation-ID logging, health checks, retries, error envelopes, and observability exist from production day 0.</p>
    </article>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Experience</p>
      <h2 class="section-title">Systems I've delivered</h2>
    </div>
  </div>
  <ol class="timeline" style="list-style:none; padding:0;">
    {% for job in experience %}
      <li class="timeline-item {% if job.current %}current{% endif %}">
        <div class="timeline-head">
          <h3 class="timeline-role">{{ job.role_en }} · <span class="timeline-company">{{ job.company }}</span></h3>
          <span class="timeline-period">{{ job.start_en }} – {{ job.end_en }}</span>
        </div>
        <ul class="timeline-bullets">
          {% for b in job.bullets_en %}
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
      <p class="eyebrow">Featured Projects</p>
      <h2 class="section-title">Production deliveries</h2>
    </div>
    <a class="button button-ghost" href="/en/projects/">All Projects →</a>
  </div>
  <div class="grid">
    {% for project in projects %}
      <article class="project half">
        <div class="project-head">
          <h3 class="project-title">
            {{ project.name }}
            <small>{{ project.client }} · {{ project.stack }}</small>
          </h3>
          <span class="project-status {% if project.status_en == 'Active Development' %}active{% endif %}">{{ project.status_en }}</span>
        </div>
        <p class="project-summary">{{ project.summary_en }}</p>
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
      <p class="eyebrow">Technical Skills</p>
      <h2 class="section-title">Languages, frameworks, and infrastructure</h2>
    </div>
  </div>
  <div class="stack-grid">
    {% for group in skills.groups %}
      <div class="stack-card">
        <h3>{{ group.title_en }}</h3>
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
      <p class="eyebrow">Education & Languages</p>
      <h2 class="section-title">Academic background</h2>
    </div>
  </div>
  <div class="grid">
    {% for edu in education %}
      <article class="card span-4">
        <div class="card-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h3>{{ edu.program_en }}</h3>
        <p>{{ edu.school }}</p>
        <p class="meta-line">{{ edu.period_en }}</p>
      </article>
    {% endfor %}
  </div>
  <div style="margin-top:1.2rem; display:flex; gap:0.8rem; flex-wrap:wrap;">
    <span class="badge">Turkish · Native</span>
    <span class="badge">English · Technical working proficiency</span>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Engineering Principles</p>
      <h2 class="section-title">The lines that guide my daily decisions</h2>
    </div>
  </div>
  <ul class="inline-list">
    <li><strong>Simplicity and clarity:</strong> Unneeded abstraction creates tomorrow's problem today.</li>
    <li><strong>Clean architecture & layered boundaries:</strong> I keep the domain independent of the framework.</li>
    <li><strong>Observability:</strong> Whatever I ship is loggable, observable, and alertable.</li>
    <li><strong>Security-first:</strong> Identity, data, and log-level KVKK / GDPR compliance are in place from the start.</li>
    <li><strong>Maintenance-aware:</strong> I accept and own the future cost of the code I write today.</li>
    <li><strong>Ownership:</strong> I own the shipped code, its production behavior, and the incident response together.</li>
  </ul>
</section>

<section class="section-block">
  <p class="eyebrow">References</p>
  <p class="section-text">References available upon request.</p>
</section>
