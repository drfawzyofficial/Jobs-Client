    // Access Elements
    let search_btn = $(".search");
    let mobile_sidebar = $(".mobile-sidebar");
    let remove_sidebar = $(".remove-sidebar");
    let app_overlay = $(".app-overlay");
    let sidebar_search = $(".sidebar-search");
    let sidebar_mobilemenu = $(".sidebar-mobilemenu");
    let btn_accordion = $(".btn-accordion");

    // to open the sidebar
    search_btn.on("click", function (e) {
        e.stopPropagation();
        app_overlay.fadeIn();
        sidebar_search.fadeIn();
    });
    mobile_sidebar.on("click", function (e) {
        e.stopPropagation();
        app_overlay.fadeIn();
        sidebar_mobilemenu.fadeIn();
    });

    // Close Sidebar when clicking on remove button
    remove_sidebar.on("click", function () {
        sidebar_mobilemenu.fadeOut();
        sidebar_search.fadeOut();
        app_overlay.fadeOut();
    });

    // open accordion
    btn_accordion.on("click", function () {
        let plus_icon = $(".plus-icon");
        let minus_icon = $(".minus-icon");
        if (plus_icon.css("display") == "none") {

        }
        alert(icon_shape);
    });

    // Close Search Sidebar when clicking outside of it
    $(document).click(function (e) {
        if (sidebar_search.is(":visible") && !sidebar_search.is(e.target) && !sidebar_search.has(e.target).length) {
            sidebar_search.fadeOut();
            app_overlay.fadeOut();
        }
        if (sidebar_mobilemenu.is(":visible") && !sidebar_mobilemenu.is(e.target) && !sidebar_mobilemenu.has(e.target).length) {
            sidebar_mobilemenu.fadeOut();
            app_overlay.fadeOut();
        }
    });
