// Legend SQL Parity site ? small vanilla-JS helpers (plan §6, §11.2). No frameworks.
(function ()
{
    "use strict";

    var STORAGE_KEY = "parity-site.showUntested";

    function applyGlobalToggle()
    {
        var show = window.localStorage.getItem(STORAGE_KEY) === "true";
        document.querySelectorAll(".show-untested-toggle").forEach(function (cb)
        {
            cb.checked = show;
        });
        document.querySelectorAll(".entry-row[data-untested='true']").forEach(function (row)
        {
            row.classList.toggle("show-untested-visible", show);
        });
    }

    window.parityToggleUntested = function (checkbox)
    {
        window.localStorage.setItem(STORAGE_KEY, checkbox.checked ? "true" : "false");
        applyGlobalToggle();
    };

    // Master-detail index page: highlight whichever sidebar entry was clicked, so the
    // detail iframe's currently-loaded page stays visually obvious in the nav.
    window.paritySelectNav = function (link)
    {
        var sidebar = link.closest(".sidebar");
        if (!sidebar)
        {
            return;
        }
        sidebar.querySelectorAll("a.active").forEach(function (a)
        {
            a.classList.remove("active");
            a.removeAttribute("aria-current");
        });
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    };

    window.parityFilter = function (input)
    {
        var query = input.value.trim().toLowerCase();
        var table = input.closest("main").querySelector("table.entries");
        if (!table)
        {
            return;
        }
        table.querySelectorAll("tr.entry-row").forEach(function (row)
        {
            if (query === "")
            {
                row.classList.remove("filtered-hidden");
                return;
            }
            var haystack = row.getAttribute("data-search") || "";
            var matches = haystack.indexOf(query) !== -1;
            row.classList.toggle("filtered-hidden", !matches);
            // Filtering always reveals matching rows regardless of the untested toggle.
            if (matches && row.getAttribute("data-untested") === "true")
            {
                row.classList.add("show-untested-visible");
            }
        });
    };

    document.addEventListener("DOMContentLoaded", applyGlobalToggle);
})();

