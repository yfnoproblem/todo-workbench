(() => {
  const ENHANCED_ATTR = "data-zine-select-enhanced";
  let activeInstance = null;
  let menuSeq = 0;

  const CHEVRON_SVG = `<svg class="zine-select-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 6.25L8 9.75l3.5-3.5"/></svg>`;
  const STAR_CHECK_SVG = `<svg class="zine-select-check" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1.5L9.6 6.4L14.5 8L9.6 9.6L8 14.5L6.4 9.6L1.5 8L6.4 6.4Z"/></svg>`;

  function closeActiveMenu(restoreFocus = false) {
    if (!activeInstance) return;
    const inst = activeInstance;
    activeInstance = null;
    inst.isOpen = false;
    inst.wrapper.classList.remove("is-open");
    inst.trigger.setAttribute("aria-expanded", "false");
    inst.menu.classList.remove("is-open");
    inst.menu.hidden = true;
    if (restoreFocus && inst.trigger.isConnected) {
      inst.trigger.focus();
    }
  }

  function positionMenu(inst) {
    if (!inst.trigger.isConnected) {
      closeActiveMenu(false);
      return;
    }
    const rect = inst.trigger.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      closeActiveMenu(false);
      return;
    }
    const menu = inst.menu;
    menu.style.minWidth = `${Math.max(rect.width, 132)}px`;
    menu.style.maxWidth = `${Math.min(window.innerWidth - 20, 320)}px`;

    menu.hidden = false;
    const menuRect = menu.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom - 12;
    const spaceAbove = rect.top - 12;
    const openUpward = spaceBelow < menuRect.height && spaceAbove > spaceBelow;

    const top = openUpward
      ? Math.max(10, rect.top - menuRect.height - 6)
      : Math.min(window.innerHeight - menuRect.height - 10, rect.bottom + 6);
    const left = Math.max(10, Math.min(rect.left, window.innerWidth - menuRect.width - 10));

    menu.style.top = `${top}px`;
    menu.style.left = `${left}px`;
    menu.classList.toggle("is-upward", openUpward);
  }

  function buildMenuOptions(inst) {
    const select = inst.select;
    const menu = inst.menu;
    menu.innerHTML = "";
    const options = Array.from(select.options);
    options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "zine-select-option";
      btn.setAttribute("role", "option");
      btn.dataset.index = String(index);
      btn.dataset.value = opt.value;
      const isSelected = index === select.selectedIndex;
      btn.setAttribute("aria-selected", isSelected ? "true" : "false");
      if (isSelected) btn.classList.add("is-selected");
      if (opt.disabled) {
        btn.disabled = true;
        btn.classList.add("is-disabled");
      }

      const labelSpan = document.createElement("span");
      labelSpan.className = "zine-select-option-label";
      labelSpan.textContent = opt.textContent || opt.label || "";

      btn.append(labelSpan);
      if (isSelected) {
        btn.insertAdjacentHTML("beforeend", STAR_CHECK_SVG);
      }

      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (opt.disabled) return;
        const changed = select.value !== opt.value || select.selectedIndex !== index;
        select.selectedIndex = index;
        select.value = opt.value;
        syncTriggerLabel(inst);
        closeActiveMenu(true);
        if (changed) {
          select.dispatchEvent(new Event("input", { bubbles: true }));
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });

      menu.append(btn);
    });
  }

  function syncTriggerLabel(inst) {
    const select = inst.select;
    const selectedOpt = select.options[select.selectedIndex] || select.options[0];
    inst.labelEl.textContent = selectedOpt ? selectedOpt.textContent : "";
    const isHidden = select.classList.contains("is-hidden") || select.hidden;
    inst.wrapper.classList.toggle("is-hidden", isHidden);
    inst.trigger.disabled = select.disabled;
  }

  function openMenu(inst) {
    if (inst.select.disabled || inst.select.hidden || inst.select.classList.contains("is-hidden")) return;
    if (activeInstance && activeInstance !== inst) {
      closeActiveMenu(false);
    }
    buildMenuOptions(inst);
    inst.isOpen = true;
    activeInstance = inst;
    inst.wrapper.classList.add("is-open");
    inst.trigger.setAttribute("aria-expanded", "true");
    positionMenu(inst);
    requestAnimationFrame(() => {
      if (inst.isOpen) {
        inst.menu.classList.add("is-open");
        const selectedBtn = inst.menu.querySelector(".zine-select-option.is-selected");
        if (selectedBtn) {
          selectedBtn.scrollIntoView({ block: "nearest" });
        }
      }
    });
  }

  function enhanceSelect(select) {
    if (!select || select.getAttribute(ENHANCED_ATTR) === "true") return;
    if (select.multiple || Number(select.size) > 1) return;

    select.setAttribute(ENHANCED_ATTR, "true");

    const wrapper = document.createElement("span");
    wrapper.className = "zine-select";
    if (select.classList.contains("top-select")) {
      wrapper.classList.add("is-top-select");
    }
    if (select.closest(".capture-meta-row")) {
      wrapper.classList.add("is-inline-meta");
    }
    if (select.closest(".inspector-meta-grid, .detail-grid")) {
      wrapper.classList.add("is-compact");
    }

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "zine-select-trigger";
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    const ariaLabel =
      select.getAttribute("aria-label") ||
      select.closest("label")?.querySelector(":scope > span")?.textContent?.trim() ||
      "";
    if (ariaLabel) trigger.setAttribute("aria-label", ariaLabel);

    const labelEl = document.createElement("span");
    labelEl.className = "zine-select-value";
    trigger.append(labelEl);
    trigger.insertAdjacentHTML("beforeend", CHEVRON_SVG);

    const menu = document.createElement("div");
    menuSeq += 1;
    menu.id = `zine-select-menu-${menuSeq}`;
    menu.className = "zine-select-menu";
    menu.setAttribute("role", "listbox");
    menu.hidden = true;
    trigger.setAttribute("aria-controls", menu.id);
    document.body.append(menu);

    select.parentNode.insertBefore(wrapper, select);
    wrapper.append(select, trigger);
    select.classList.add("zine-native-select");
    select.setAttribute("aria-hidden", "true");
    select.tabIndex = -1;

    const inst = { select, wrapper, trigger, labelEl, menu, isOpen: false };
    syncTriggerLabel(inst);

    // Watch programmatic value/options/class changes on native select
    const attrObserver = new MutationObserver(() => {
      syncTriggerLabel(inst);
      if (inst.isOpen) buildMenuOptions(inst);
    });
    attrObserver.observe(select, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "disabled", "hidden"],
    });

    // Patch .value and .selectedIndex setters on this select instance so programmatic updates sync immediately
    const valueDesc = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value");
    if (valueDesc && valueDesc.set && valueDesc.get) {
      Object.defineProperty(select, "value", {
        configurable: true,
        get() {
          return valueDesc.get.call(this);
        },
        set(nextVal) {
          valueDesc.set.call(this, nextVal);
          syncTriggerLabel(inst);
        },
      });
    }
    const indexDesc = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "selectedIndex");
    if (indexDesc && indexDesc.set && indexDesc.get) {
      Object.defineProperty(select, "selectedIndex", {
        configurable: true,
        get() {
          return indexDesc.get.call(this);
        },
        set(nextIdx) {
          indexDesc.set.call(this, nextIdx);
          syncTriggerLabel(inst);
        },
      });
    }

    select.addEventListener("change", () => syncTriggerLabel(inst));

    const parentForm = select.form;
    const onFormReset = () => {
      requestAnimationFrame(() => syncTriggerLabel(inst));
    };
    if (parentForm) {
      parentForm.addEventListener("reset", onFormReset);
    }

    const parentLabel = wrapper.closest("label");
    const onParentLabelClick = (event) => {
      if (event.target.closest(".zine-select-trigger, .zine-select-menu, input")) return;
      if (select.hidden || select.classList.contains("is-hidden")) return;
      event.preventDefault();
      event.stopPropagation();
      if (inst.isOpen) {
        closeActiveMenu(true);
      } else {
        openMenu(inst);
      }
    };
    if (parentLabel) {
      parentLabel.addEventListener("click", onParentLabelClick);
    }

    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (inst.isOpen) {
        closeActiveMenu(true);
      } else {
        openMenu(inst);
      }
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (!inst.isOpen) {
          openMenu(inst);
        }
        const target = inst.menu.querySelector(".zine-select-option.is-selected") || inst.menu.querySelector(".zine-select-option:not(:disabled)");
        target?.focus();
      } else if (event.key === "Escape" && inst.isOpen) {
        event.preventDefault();
        event.stopPropagation();
        closeActiveMenu(true);
      } else if (event.key === "Tab" && inst.isOpen) {
        closeActiveMenu(false);
      }
    });

    menu.addEventListener("keydown", (event) => {
      const items = Array.from(menu.querySelectorAll(".zine-select-option:not(:disabled)"));
      if (!items.length) return;
      const currentIdx = items.indexOf(document.activeElement);
      if (event.key === "ArrowDown") {
        event.preventDefault();
        items[(currentIdx + 1) % items.length].focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        items[(currentIdx - 1 + items.length) % items.length].focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        items[0].focus();
      } else if (event.key === "End") {
        event.preventDefault();
        items[items.length - 1].focus();
      } else if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeActiveMenu(true);
      } else if (event.key === "Tab") {
        closeActiveMenu(false);
      }
    });

    // Clean up detached portal menus when dynamic DOM rows re-render
    inst.cleanup = () => {
      attrObserver.disconnect();
      if (parentForm) parentForm.removeEventListener("reset", onFormReset);
      if (parentLabel) parentLabel.removeEventListener("click", onParentLabelClick);
      if (activeInstance === inst) activeInstance = null;
      menu.remove();
    };
    wrapper._zineCleanup = inst.cleanup;
  }

  function scanSelects(root = document) {
    if (root.nodeType === Node.ELEMENT_NODE && root.tagName === "SELECT") {
      enhanceSelect(root);
      return;
    }
    if (root.querySelectorAll) {
      root.querySelectorAll(`select:not([${ENHANCED_ATTR}="true"])`).forEach(enhanceSelect);
    }
  }

  document.addEventListener("click", (event) => {
    if (!activeInstance) return;
    if (activeInstance.wrapper.contains(event.target) || activeInstance.menu.contains(event.target)) return;
    const label = activeInstance.wrapper.closest("label");
    if (label && label.contains(event.target) && !event.target.closest("input, textarea, a, button")) return;
    closeActiveMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeInstance) {
      event.preventDefault();
      event.stopPropagation();
      closeActiveMenu(true);
    }
  });

  window.addEventListener("resize", () => {
    if (activeInstance) positionMenu(activeInstance);
  });

  window.addEventListener("blur", () => {
    if (activeInstance) closeActiveMenu(false);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && activeInstance) {
      closeActiveMenu(false);
    }
  });

  window.addEventListener(
    "scroll",
    (event) => {
      if (!activeInstance) return;
      if (activeInstance.menu.contains(event.target)) return;
      positionMenu(activeInstance);
    },
    true
  );

  // Observe dynamic DOM updates from app.js
  const domObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.removedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (node._zineCleanup) node._zineCleanup();
        node.querySelectorAll?.(".zine-select").forEach((el) => el._zineCleanup?.());
      }
      for (const node of m.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          scanSelects(node);
        }
      }
    }
  });

  function init() {
    scanSelects(document);
    domObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
