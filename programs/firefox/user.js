/****************************************************************************
 * SmoothFox                                                                *
 * "Faber est suae quisque fortunae"                                        *
 * priority: better scrolling                                               *
 * version: October 2022b                                                   *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 * OPTION 3: NATURAL SMOOTH SCROLLING [MODIFIED]                            *
 ****************************************************************************/
// from https://github.com/AveYo/fox/blob/main/Natural%20Smooth%20Scrolling%20for%20user.js
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
// recommended for 120hz+ displays
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600); // 200
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650); // 250
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", 1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting", 1.0);
user_pref("mousewheel.default.delta_multiplier_y", 280);

/****************************************************************************
 * FasterFox                                                                *
 * "Non ducor duco."                                                        *
 * priority: speedy browsing                                                *
 * version: September 2022                                                  *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 *                                                                          *
 * [NOTE] For best performance on older hardware, you will need to test     *
 * these settings individually, especially Webrender.                       *
 *                                                                          *
 ****************************************************************************/


// PREF: force enable all Webrender prefs
// DISABLING WILL NOT BE SUPPORTED SOON | https://groups.google.com/a/mozilla.org/g/dev-platform/c/__ZtiiEn0u0/m/fbTlD-I4AAAJ?pli=1
// [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
// [3] https://www.reddit.com/r/firefox/comments/fo1jwz/make_firefox_faster/flhh5l2/
user_pref("gfx.webrender.all", true);

// PREF: Lazy Image Loading
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true); // default

// PREF: control how tabs are loaded when a session is restored.
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
user_pref("browser.sessionstore.restore_on_demand", true); // default
// user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true); // default

// PREF: JPEG XL image format
user_pref("image.jxl.enabled", true);


// PREF: CSS Masonry Layout
user_pref("layout.css.grid-template-masonry-value.enabled", true);


// PREF: Prioritized Task Scheduling API
// [1] https://blog.mozilla.org/performance/2022/06/02/prioritized-task-scheduling-api-is-prototyped-in-nightly/
// [2] https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
user_pref("dom.enable_web_task_scheduling", true);


// PREF: OffscreenCanvas
// [1] https://yashints.dev/blog/2019/05/11/offscreen-canvas
// [2] https://www.youtube.com/watch?v=CWvRA9E0DqU
// [3] https://developer.chrome.com/blog/offscreen-canvas/
// [4] https://groups.google.com/a/mozilla.org/g/dev-platform/c/kp9SZL-0wW0
user_pref("gfx.offscreencanvas.enabled", true);

// PREF: CSS Font Loading API in workers
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1072107
user_pref("layout.css.font-loading-api.workers.enabled", true);

// PREF: Enable animation-composition
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1785329
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1293490
user_pref("layout.css.animation-composition.enabled", true);

// PREF: Wasm GC
// [1] https://github.com/WebAssembly/gc/blob/main/proposals/gc/Overview.md
// user_pref("javascript.options.wasm_gc", true);

// PREF: Wasm Function References
// [1] https://github.com/WebAssembly/function-references/blob/master/proposals/function-references/Overview.md
// user_pref("javascript.options.wasm_function_references", true);

// PREF: Shadowrealms
// [1] https://github.com/tc39/proposal-shadowrealm/blob/main/explainer.md
// user_pref("javascript.options.experimental.shadow_realms", true);
