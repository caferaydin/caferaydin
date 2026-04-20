(function () {
  "use strict";

  const body = document.body;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  /* ---------------------------------------------------------------
   * 1. Mobile navigation
   * --------------------------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = body.getAttribute("data-nav") === "open";
      body.setAttribute("data-nav", isOpen ? "closed" : "open");
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }
  document.querySelectorAll(".site-nav a").forEach((a) => {
    a.addEventListener("click", () => {
      if (body.getAttribute("data-nav") === "open") {
        body.setAttribute("data-nav", "closed");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ---------------------------------------------------------------
   * 2. Scroll progress bar + sticky header state
   * --------------------------------------------------------------- */
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.setAttribute("aria-hidden", "true");
  document.body.appendChild(progressBar);

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      progressBar.style.width = pct + "%";
      body.classList.toggle("is-scrolled", h.scrollTop > 12);
      ticking = false;
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ---------------------------------------------------------------
   * 3. Scroll reveal (staggered)
   * --------------------------------------------------------------- */
  const targets = document.querySelectorAll(
    ".section-block, .hero, .timeline-item, .project, .stack-card, .card, .note-card"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentElement ? entry.target.parentElement.children : []);
            const pos = siblings.indexOf(entry.target);
            const delay = Math.min(pos >= 0 ? pos : 0, 8) * 45;
            entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------
   * 4. Card spotlight (mouse follow)
   * --------------------------------------------------------------- */
  if (!reduced && canHover) {
    const spotTargets = document.querySelectorAll(
      ".card, .note-card, .project, .stack-card"
    );
    spotTargets.forEach((el) => {
      el.classList.add("has-spotlight");
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--mx", x + "%");
        el.style.setProperty("--my", y + "%");
      });
      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--mx", "50%");
        el.style.setProperty("--my", "50%");
      });
    });
  }

  /* ---------------------------------------------------------------
   * 5. Hero word rotator (type / delete cycle)
   * --------------------------------------------------------------- */
  if (!reduced) {
    const rotator = document.querySelector("[data-rotator]");
    if (rotator) {
      const words = (rotator.dataset.rotator || "")
        .split("|")
        .map((s) => s.trim())
        .filter(Boolean);
      if (words.length > 1) {
        // Reserve width so layout doesn't jump too much
        const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");
        rotator.style.display = "inline-block";
        rotator.textContent = longest;
        const measured = rotator.getBoundingClientRect().width;
        rotator.style.minWidth = Math.ceil(measured) + "px";

        let i = 0;
        const cycle = async () => {
          while (true) {
            const word = words[i];
            for (let c = 1; c <= word.length; c++) {
              rotator.textContent = word.slice(0, c);
              await wait(55);
            }
            await wait(1800);
            for (let c = word.length - 1; c >= 0; c--) {
              rotator.textContent = word.slice(0, c);
              await wait(30);
            }
            await wait(240);
            i = (i + 1) % words.length;
          }
        };
        rotator.textContent = "";
        cycle();
      }
    }
  }

  /* ---------------------------------------------------------------
   * 6. Terminal typewriter replay
   * --------------------------------------------------------------- */
  if (!reduced) {
    const term = document.querySelector("[data-typewriter]");
    if (term) {
      const lines = Array.from(term.children);
      lines.forEach((l) => {
        l.style.opacity = "0";
        l.style.transform = "translateY(2px)";
        l.style.transition = "opacity .25s ease, transform .25s ease";
      });

      const play = async () => {
        for (const line of lines) {
          line.style.opacity = "1";
          line.style.transform = "translateY(0)";
          const jitter = 60 + Math.random() * 90;
          await wait(line.textContent.trim().startsWith("$") ? 220 : jitter);
        }
      };

      if ("IntersectionObserver" in window) {
        const io2 = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              play();
              io2.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        io2.observe(term);
      } else {
        play();
      }
    }
  }

  /* ---------------------------------------------------------------
   * 7. Subtle magnetic pull on primary CTA buttons
   * --------------------------------------------------------------- */
  if (!reduced && canHover) {
    document.querySelectorAll(".button-primary").forEach((btn) => {
      btn.classList.add("is-magnetic");
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        btn.style.transform =
          "translate(" + mx * 0.08 + "px, " + my * 0.12 + "px)";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }
})();
