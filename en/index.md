---
title: Home
description: Cafer Aydın — Senior Software Developer. Short notes on Claude and AI terminology, production backend projects, and distributed systems experience.
lang: en
tr_url: /
permalink: /en/
---

{% assign profile = site.data.profile %}
{% assign notes = site.notes_en | sort: "date" | reverse %}
{% assign projects = site.data.projects %}

<section class="hero">
  <div class="hero-grid">
    <div>
      <p class="eyebrow">Senior Software Developer · İstanbul</p>
      <h1>I build backend & distributed systems, and write about <span class="gradient" data-rotator="Claude|Agentic AI|LLMs|Multi-agent|Prompt Engineering">Claude</span>.</h1>
      <p class="lead">I ship enterprise software in Java and .NET, and I collect what I learn about AI / LLM concepts as short, focused notes. This site does three things: <strong>notes</strong>, <strong>projects</strong>, and <strong>CV</strong>.</p>
      <div class="cta-row">
        <a class="button button-primary" href="/en/notes/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Read Notes
        </a>
        <a class="button button-secondary" href="/en/projects/">Projects</a>
        <a class="button button-ghost" href="/en/cv/">CV</a>
      </div>
      <div class="hero-meta">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{{ profile.location }}</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>{{ profile.years_experience }} years</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>UTC+3</span>
      </div>
    </div>
    <div class="terminal" aria-hidden="true">
      <div class="terminal-bar">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="title">~/notes — zsh</span>
      </div>
      <div class="terminal-body" data-typewriter>
        <div><span class="prompt">$</span> ls notes/</div>
        <div><span class="key">what-is-a-token.md</span></div>
        <div><span class="key">context-window.md</span></div>
        <div><span class="com">// more coming soon...</span></div>
        <div><span class="com"></span></div>
        <div><span class="prompt">$</span> cat notes/context-window.md | head -1</div>
        <div><span class="str">"The context window is the</span></div>
        <div><span class="str">&nbsp;model's workbench."</span></div>
        <div><span class="prompt">$</span> <span class="caret"></span></div>
      </div>
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Latest Notes</p>
      <h2 class="section-title">Claude & AI terminology</h2>
      <p class="section-text">Concepts I run into in daily LLM work — short cards, one session to read.</p>
    </div>
    <a class="button button-ghost" href="/en/notes/">All Notes →</a>
  </div>
  <div class="note-grid">
    {% for note in notes limit: 6 %}
      <a class="note-card" href="{{ note.url | relative_url }}">
        <div class="note-card-head">
          <span class="note-card-date">{{ note.date | date: "%d %b %Y" }}</span>
          {% if note.reading_time %}<span class="note-card-read">{{ note.reading_time }}</span>{% endif %}
        </div>
        <h3 class="note-card-title">{{ note.title }}</h3>
        <p class="note-card-excerpt">{{ note.excerpt }}</p>
        <div class="note-card-tags">
          {% for t in note.tags limit: 3 %}<span>{{ t }}</span>{% endfor %}
        </div>
        <span class="note-card-arrow">Read more →</span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Work</p>
      <h2 class="section-title">Recent production deliveries</h2>
      <p class="section-text">The flip side of the day job: Java / .NET backend, microservices, ERP/CRM integrations.</p>
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
      <p class="eyebrow">Contact</p>
      <h2 class="section-title">A new system, advisory, or a technical conversation</h2>
      <p class="section-text">A short scope-goal-timeline note gets the fastest, most useful response.</p>
    </div>
  </div>
  <div class="cta-row">
    <a class="button button-primary" href="mailto:{{ profile.email }}">Email</a>
    <a class="button button-secondary" href="{{ profile.github }}" target="_blank" rel="noreferrer">GitHub</a>
    <a class="button button-secondary" href="{{ profile.linkedin }}" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</section>
