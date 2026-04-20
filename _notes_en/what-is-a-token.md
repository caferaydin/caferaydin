---
title: "What Is a Token?"
slug: what-is-a-token
date: 2026-01-12
excerpt: "The currency of LLMs. A token is roughly a word-piece; it governs both pricing and the context window limit."
tags: [basics, token, cost]
reading_time: "3 min"
---

A **token** is the smallest unit a model uses to process text. On average, **1 token ≈ 4 characters** or **~0.75 of a word**. A short word like "hello" is one token; a long or uncommon word can split into several.

## Why it matters

Three things flow through tokens:

- **Pricing:** API usage is billed per token. Input and output tokens are usually priced differently.
- **Context window:** the maximum number of tokens the model can hold at once. Exceed it and the request is rejected or older content is truncated.
- **Latency:** response time grows roughly linearly with output token count.

## A real example

A typical agentic turn with Claude Sonnet 4.6:

```
System prompt         ~1,200 tok
Tool definitions      ~3,500 tok
Prior conversation    ~8,000 tok
User message            ~120 tok
------------------------------------
Total input          ~12,820 tok
```

If the same system prompt is re-sent every turn, **prompt caching** slashes the cost of that prefix by ~90% — covered in a separate note.

## Quick estimates

- 1 page of prose ≈ **500–700 tokens**
- A medium README ≈ **1,500 tokens**
- A one-hour meeting transcript ≈ **8,000–12,000 tokens**

These multipliers are enough to quickly answer "is this prompt going to be expensive?" during development.
