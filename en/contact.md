---
title: Contact
description: Cafer Aydın contact channels — email, GitHub, LinkedIn, phone.
lang: en
tr_url: /contact/
permalink: /en/contact/
---

{% assign profile = site.data.profile %}

<section class="hero">
  <p class="eyebrow">Contact</p>
  <h1>Reach out <span class="gradient">directly</span> for technical work</h1>
  <p class="lead">Email is the primary channel — fastest response there. You can also reach me via GitHub and LinkedIn.</p>
  <div class="cta-row">
    <a class="button button-primary" href="mailto:{{ profile.email }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      Send Email
    </a>
    <a class="button button-secondary" href="{{ profile.github }}" target="_blank" rel="noreferrer">GitHub</a>
    <a class="button button-secondary" href="{{ profile.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Channels</p>
      <h2 class="section-title">Direct connections</h2>
      <p class="section-text">Email for a fast reply. LinkedIn for professional connections and references. GitHub for technical content and code review.</p>
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
      <p class="eyebrow">Message Quality</p>
      <h2 class="section-title">For a faster, more accurate response</h2>
      <p class="section-text">A three-line brief usually gets a clear response within 24 hours.</p>
    </div>
  </div>
  <div class="grid">
    <article class="card span-4">
      <div class="card-icon">01</div>
      <h3>Problem statement</h3>
      <p>What problem are you trying to solve? Current system, bottleneck, or constraint if any.</p>
    </article>
    <article class="card span-4">
      <div class="card-icon">02</div>
      <h3>Target outcome</h3>
      <p>What does success look like? Acceptance criteria or KPIs if any.</p>
    </article>
    <article class="card span-4">
      <div class="card-icon">03</div>
      <h3>Timeline</h3>
      <p>Ideal start date and deadline — this helps me propose the right engagement model quickly.</p>
    </article>
  </div>
</section>
