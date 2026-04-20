---
title: Notes
description: Short, focused technical notes on Claude and AI terminology — tokens, context, prompt caching, tool use, agentic loops, and more.
lang: en
tr_url: /notes/
permalink: /en/notes/
---

{% assign notes = site.notes_en | sort: "date" | reverse %}

<section class="hero">
  <p class="eyebrow">Knowledge · Notes</p>
  <h1>Claude & AI terminology — <span class="gradient">short and focused</span></h1>
  <p class="lead">Concepts I hit during daily LLM and agent work, written up as single-session cards. Each note is one terminology piece where theory meets production practice.</p>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">All Notes</p>
      <h2 class="section-title">{{ notes.size }} entries</h2>
      <p class="section-text">Sorted newest first. Each card averages a 3-minute read.</p>
    </div>
  </div>
  <div class="note-grid">
    {% for note in notes %}
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
