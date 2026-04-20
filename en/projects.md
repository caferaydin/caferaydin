---
title: Projects
description: Nationality Verification, Nakliye360, and selected enterprise delivery work.
lang: en
tr_url: /projects/
permalink: /en/projects/
---

{% assign projects = site.data.projects %}
{% assign experience = site.data.experience %}

<section class="hero">
  <p class="eyebrow">Projects</p>
  <h1>Selected projects and <span class="gradient">production</span> deliveries</h1>
  <p class="lead">This page is not a gallery. Each card reads as a technical summary with problem, role, technology, and maturity.</p>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Featured</p>
      <h2 class="section-title">Freelance and platform products</h2>
      <p class="section-text">A fintech identity-verification service and a logistics platform built as a modular monolith.</p>
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
          <span class="project-status {% if project.status_en == 'Active Development' %}active{% endif %}">{{ project.status_en }}</span>
        </div>
        <p class="project-summary">{{ project.summary_en }}</p>
        <div class="project-meta">
          <div>Role<strong>{{ project.role_en }}</strong></div>
          <div>Stack<strong>{{ project.stack }}</strong></div>
          <div>Status<strong>{{ project.status_en }}</strong></div>
        </div>
        <ul class="project-bullets">
          {% for b in project.bullets_en %}
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
      <p class="eyebrow">Enterprise Experience</p>
      <h2 class="section-title">Systems I've delivered inside companies</h2>
      <p class="section-text">Technical ownership across Kronos Energy, Netline, Publant, and Teknoloji Uzmanım.</p>
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
      <p class="eyebrow">Next Step</p>
      <h2 class="section-title">Let's work on something similar</h2>
      <p class="section-text">If you're planning a system that needs backend, architecture, or ERP/CRM integration work, reach out with scope, goals, and timeline.</p>
    </div>
  </div>
  <div class="cta-row">
    <a class="button button-primary" href="/en/contact/">Contact</a>
    <a class="button button-secondary" href="/en/expertise/">Browse Stack</a>
  </div>
</section>
