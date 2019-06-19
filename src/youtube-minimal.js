// ==UserScript==
// @name         Youtube-Minimal
// @version      1.0
// @description  Remove the engaging and non essential parts of Youtube.
// @author       Joaquin P. Centeno
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// ==/UserScript==


/**
 * youtube-minimal.js
 *
 * Youtube consumes a big part of my lifetime. I like using the service. There
 * are lots of videos that I find useful. But I want to be intentional about
 * how I spend my time on it.
 *
 * This script is an attempt to reduce the site to a minimum set of features
 * needed to search and watch a video. It removes every element considered
 * engaging or non-essential.
 *
 * I know that on the long run, I will lose this battle. This is an
 * entertainment platform with plenty of resources, and a business based on
 * keeping the user engaged.
 */


(function() {

   'use strict';

    // This awful hack prevents the linter from raising warnings each time I
    // use the `$` from JQuery.
    let $ = (typeof asgg !== 'undefined') ? $ : () => {};

    // -------------------------------------------------------------------
    // Utilities
    // -------------------------------------------------------------------

    /**
     * Add some CSS style rules to the page.
     *
     * This is a new addition to the script. Many older functions rely on
     * JQuery to hide elements. Most of them could be made simpler by using
     * pure CSS.
     *
     * @param {String} style CSS rules to add to the page.
     * @return {Element} The <style> element added to the <head>.
     */
    function addCSS(style) {

        const newStyleNode = document.createElement('style');
        newStyleNode.textContent = style;

        const parent =
            document.getElementsByTagName ('head')[0]
            || document.body
            || document.documentElement;
        parent.appendChild(newStyleNode);

        return newStyleNode;
    }

    /** Periodically check if the URL has changed. If so, run the callback. */
    function pageChangeTrigger(callback, interval) {

        // State for `hasHrefChanged` */
        let knownHref = '';

        /** Returns true if the url changed. Updates `knownHref`. */
        function hasHrefChanged() {
            const newHref = window.location.href;
            const changed = knownHref != newHref; 
            if ( changed ) {
                console.log('[hasHrefChanged] URL changed!');
                console.log('[hasHrefChanged] old one was ' + knownHref);
                knownHref = newHref;
                console.log('[hasHrefChanged] new one is ' + knownHref);
            }
            return changed;
        }

        // Periodically check if the URL has changed.
        setInterval( () => {
            if ( hasHrefChanged() ) {
                callback(); // Run only if the URL changed
            }
        }, interval );

    }

    /** Return true if we are on the homepage. */
    function isHomepage() {
        return window.location.pathname === '/';
    }

    /** Return true if we are on a "/watch" page */
    function isWatchPage() {
        return window.location.pathname === "/watch"; 
    }

    /**
     * Call a function until it succeeds.
     *
     * @param {function} f Function that returns false if and only if it failed.
     * @param {Number} interval Interval between calls in milliseconds.
     */
    function doUntilSuccess(f, interval) {
        if ( ! f() ) {
            setTimeout(() => {
                doUntilSuccess(f, interval)
            }, interval);

        }
    }

    // -------------------------------------------------------------------
    // -------------------------------------------------------------------

    function noHomepageRecomendations() {
        if ( ! isHomepage() ) return true;
        return $('#contents').hide().length;
    }

    function noHomepageAd() {
        if ( ! isHomepage() ) return true;
        return $('#masthead-ad').remove().length;
    }

    /** Close the sidebar if open */
    function closeGuideSidebar() {

        const toggleButton = $('button[aria-label="Guide"]');
        if ( ! toggleButton.length ) { return; }

        if ( toggleButton.attr('aria-pressed') ) {
            toggleButton.click();
        }

        return true;
    }

    function noMiniGuide() {
        if ( ! isHomepage() ) return true;
        return $('ytd-mini-guide-renderer').remove().length; 
    }

    function disableAutoplay() {
        if ( ! isWatchPage() ) return true;

        const toggle = document.getElementById('toggle');
        if (toggle) {
            if (toggle.hasAttribute('checked')) {
                toggle.click(); // Uncheck
            }
            return true;
        } else {
            return false;
        }
    }

    // Pure CSS filters.
    addCSS(`

        /* ---------------------------------------------------------------------
         * Every page:
         * ------------------------------------------------------------------ */

        /* No popups.
         *
         * The other day they even dared to ask me my opinion on the ad
         * quality.
         *
         */
        ytd-popup-container {
            visibility: hidden;
        }

        /* Top-right buttonbar (upload video, sign-in, etc) */
        #buttons {
            /* Set low opacity. Can't hide because login can be necesary */
            opacity: 0.15;
        }

        /* Remove logo */
        ytd-topbar-logo-renderer {
            visibility: hidden;
        }

        /* ---------------------------------------------------------------------
         * Search Results
         * ------------------------------------------------------------------ */

        /* Hide text ads from the search results */
        ytd-promoted-sparkles-text-search-renderer {
            visibility: hidden;
        }

        /* ---------------------------------------------------------------------
         * Video Pages
         * ------------------------------------------------------------------ */

        /* Remove comments */
        #comments {
            visibility: hidden;
        }

        /* Remove sidebar */
        #related {
            visibility: hidden;
        }

        /* Subscribe button */
        #subscribe-button {
            visibility: hidden;
        }

        /* Related videos rendered over the player */
        .ytp-endscreen-content {
            visibility: hidden;
        }

        /* Remove channel merchandising ad (displayed near the video
         * description)
         */
        #merch-shelf {
            visibility: hidden;
        }

        /* Remove watch count, "like", "share", etc buttons from the watch page */
        #info {
            visibility: hidden;
        }

        /* ---------------------------------------------------------------------
         * Homepage
         * ------------------------------------------------------------------ */

        /* Remove ads from homepage */
        #masthead-ad {
            visibility: hidden;
        }

        /* Remove suggestions from homepage */
        ytd-two-column-browse-results-renderer {
            visibility: hidden;
        }

        /* Remove the "mini guide" left sidebar menu */
        ytd-mini-guide-renderer {
            visibility: hidden;
        }

    `);

    // **Disable autoplay**
    //
    // This is done once per tab so the user set it back on manually.
    //
    // Thats why it goes separate from the `pageChangeTrigger`. Those functions
    // are run once per page change. The interval can be set to a slow value
    // and still be ok.
    setInterval(disableAutoplay, 2000);

    pageChangeTrigger( () => {
        doUntilSuccess(noHomepageRecomendations, 500);
        doUntilSuccess(noHomepageAd, 500);
        doUntilSuccess(closeGuideSidebar, 500);
        doUntilSuccess(noMiniGuide, 500);
    }, 250);

})();
