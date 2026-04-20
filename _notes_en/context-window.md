---
title: "Context Window: The Model's Workbench"
slug: context-window
date: 2026-01-28
excerpt: "The context window is the total token budget a model can see in one request. Input and output both live inside the same window."
tags: [basics, context, architecture]
reading_time: "3 min"
---

The **context window** is the total number of tokens a model can "see" in a single request. The system prompt, tool definitions, conversation history, user message, and the response the model will generate all have to fit inside this window.

## Claude's windows

- **Sonnet 4.6 / Opus 4.7:** 200K tokens standard, 1M extended (beta).
- **Haiku 4.5:** 200K tokens.

200K tokens is roughly **~150,000 words**, or the length of a full-sized novel.

## Why "workbench"?

The model doesn't know anything that isn't in the window. Once a prior conversation scrolls out of it, as far as the model is concerned it never happened. There's no persistent memory — memory is either re-injected into the prompt, or held outside via **RAG / memory layers**.

## Practical constraints

A large window isn't free:

- **Cost scales linearly:** a 200K input is ~10× the cost of a 20K input.
- **Latency rises:** time-to-first-token grows with input size.
- **Attention dilutes:** on very long contexts, models recall the middle less reliably ("lost in the middle").

## Decision guide

1. Do you actually need to send all the information every time? → consider **prompt caching**.
2. Is the corpus large and changing? → use **RAG** to pull only the relevant slice.
3. In agentic loops, **compact or summarize** old turns instead of letting them pile up.

Filling the window to the brim isn't performance; placing the right piece in the right place is.
