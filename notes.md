---
title: Notlar
description: Claude ve AI terminolojisi üzerine kısa, öz teknik notlar — token, context, prompt caching, tool use, agentic loop ve daha fazlası.
lang: tr
en_url: /en/notes/
permalink: /notes/
---

{% assign notes = site.notes | sort: "date" | reverse %}

<section class="hero">
  <p class="eyebrow">Knowledge · Notlar</p>
  <h1>Claude & AI terminolojisi — <span class="gradient">kısa ve öz</span></h1>
  <p class="lead">Günlük LLM / ajan pratiğinde karşıma çıkan kavramları, tek oturumda okunacak kısa kartlar halinde topluyorum. Her not bir terminoloji parçası; teori ile production pratiği birlikte.</p>
</section>

<section class="section-block">
  <div class="section-head">
    <div>
      <p class="eyebrow">Tüm Notlar</p>
      <h2 class="section-title">{{ notes.size }} başlık</h2>
      <p class="section-text">Tarihe göre en yeniden eskiye sıralı. Her kart ortalama 3 dakikalık bir okuma.</p>
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
        <span class="note-card-arrow">Devamını oku →</span>
      </a>
    {% endfor %}
  </div>
</section>
