// To run, install GreaseMonkey or TamperMonkey extension in your browser
// Copy this code into new user script, and enable

// ==UserScript==
// @name         Minimal StackOverflow
// @version      1.0
// @description  Declutter the stack exchange Q&A sites.
// @author       Joaquin P. Centeno
// @match        *://*.stackoverflow.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.superuser.com/*
// @match        *://*.meta.stackexchange.com/*
// @match        *://*.webapps.stackexchange.com/*
// @match        *://*.gaming.stackexchange.com/*
// @match        *://*.webmasters.stackexchange.com/*
// @match        *://*.cooking.stackexchange.com/*
// @match        *://*.gamedev.stackexchange.com/*
// @match        *://*.photo.stackexchange.com/*
// @match        *://*.stats.stackexchange.com/*
// @match        *://*.math.stackexchange.com/*
// @match        *://*.diy.stackexchange.com/*
// @match        *://*.gis.stackexchange.com/*
// @match        *://*.tex.stackexchange.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.money.stackexchange.com/*
// @match        *://*.english.stackexchange.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.ux.stackexchange.com/*
// @match        *://*.unix.stackexchange.com/*
// @match        *://*.wordpress.stackexchange.com/*
// @match        *://*.cstheory.stackexchange.com/*
// @match        *://*.apple.stackexchange.com/*
// @match        *://*.rpg.stackexchange.com/*
// @match        *://*.bicycles.stackexchange.com/*
// @match        *://*.softwareengineering.stackexchange.com/*
// @match        *://*.electronics.stackexchange.com/*
// @match        *://*.android.stackexchange.com/*
// @match        *://*.boardgames.stackexchange.com/*
// @match        *://*.physics.stackexchange.com/*
// @match        *://*.homebrew.stackexchange.com/*
// @match        *://*.security.stackexchange.com/*
// @match        *://*.writing.stackexchange.com/*
// @match        *://*.video.stackexchange.com/*
// @match        *://*.graphicdesign.stackexchange.com/*
// @match        *://*.dba.stackexchange.com/*
// @match        *://*.scifi.stackexchange.com/*
// @match        *://*.codereview.stackexchange.com/*
// @match        *://*.codegolf.stackexchange.com/*
// @match        *://*.quant.stackexchange.com/*
// @match        *://*.pm.stackexchange.com/*
// @match        *://*.skeptics.stackexchange.com/*
// @match        *://*.fitness.stackexchange.com/*
// @match        *://*.drupal.stackexchange.com/*
// @match        *://*.mechanics.stackexchange.com/*
// @match        *://*.parenting.stackexchange.com/*
// @match        *://*.sharepoint.stackexchange.com/*
// @match        *://*.music.stackexchange.com/*
// @match        *://*.sqa.stackexchange.com/*
// @match        *://*.judaism.stackexchange.com/*
// @match        *://*.german.stackexchange.com/*
// @match        *://*.japanese.stackexchange.com/*
// @match        *://*.philosophy.stackexchange.com/*
// @match        *://*.gardening.stackexchange.com/*
// @match        *://*.travel.stackexchange.com/*
// @match        *://*.crypto.stackexchange.com/*
// @match        *://*.dsp.stackexchange.com/*
// @match        *://*.french.stackexchange.com/*
// @match        *://*.christianity.stackexchange.com/*
// @match        *://*.bitcoin.stackexchange.com/*
// @match        *://*.linguistics.stackexchange.com/*
// @match        *://*.hermeneutics.stackexchange.com/*
// @match        *://*.history.stackexchange.com/*
// @match        *://*.bricks.stackexchange.com/*
// @match        *://*.spanish.stackexchange.com/*
// @match        *://*.scicomp.stackexchange.com/*
// @match        *://*.movies.stackexchange.com/*
// @match        *://*.chinese.stackexchange.com/*
// @match        *://*.biology.stackexchange.com/*
// @match        *://*.poker.stackexchange.com/*
// @match        *://*.mathematica.stackexchange.com/*
// @match        *://*.psychology.stackexchange.com/*
// @match        *://*.outdoors.stackexchange.com/*
// @match        *://*.martialarts.stackexchange.com/*
// @match        *://*.sports.stackexchange.com/*
// @match        *://*.academia.stackexchange.com/*
// @match        *://*.cs.stackexchange.com/*
// @match        *://*.workplace.stackexchange.com/*
// @match        *://*.windowsphone.stackexchange.com/*
// @match        *://*.chemistry.stackexchange.com/*
// @match        *://*.chess.stackexchange.com/*
// @match        *://*.raspberrypi.stackexchange.com/*
// @match        *://*.russian.stackexchange.com/*
// @match        *://*.islam.stackexchange.com/*
// @match        *://*.salesforce.stackexchange.com/*
// @match        *://*.patents.stackexchange.com/*
// @match        *://*.genealogy.stackexchange.com/*
// @match        *://*.robotics.stackexchange.com/*
// @match        *://*.expressionengine.stackexchange.com/*
// @match        *://*.politics.stackexchange.com/*
// @match        *://*.anime.stackexchange.com/*
// @match        *://*.magento.stackexchange.com/*
// @match        *://*.ell.stackexchange.com/*
// @match        *://*.sustainability.stackexchange.com/*
// @match        *://*.tridion.stackexchange.com/*
// @match        *://*.reverseengineering.stackexchange.com/*
// @match        *://*.networkengineering.stackexchange.com/*
// @match        *://*.opendata.stackexchange.com/*
// @match        *://*.freelancing.stackexchange.com/*
// @match        *://*.blender.stackexchange.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://*.space.stackexchange.com/*
// @match        *://*.sound.stackexchange.com/*
// @match        *://*.astronomy.stackexchange.com/*
// @match        *://*.tor.stackexchange.com/*
// @match        *://*.pets.stackexchange.com/*
// @match        *://*.ham.stackexchange.com/*
// @match        *://*.italian.stackexchange.com/*
// @match        *://*.pt.stackoverflow.com/*
// @match        *://*.aviation.stackexchange.com/*
// @match        *://*.ebooks.stackexchange.com/*
// @match        *://*.alcohol.stackexchange.com/*
// @match        *://*.softwarerecs.stackexchange.com/*
// @match        *://*.arduino.stackexchange.com/*
// @match        *://*.expatriates.stackexchange.com/*
// @match        *://*.matheducators.stackexchange.com/*
// @match        *://*.earthscience.stackexchange.com/*
// @match        *://*.joomla.stackexchange.com/*
// @match        *://*.datascience.stackexchange.com/*
// @match        *://*.puzzling.stackexchange.com/*
// @match        *://*.craftcms.stackexchange.com/*
// @match        *://*.buddhism.stackexchange.com/*
// @match        *://*.hinduism.stackexchange.com/*
// @match        *://*.communitybuilding.stackexchange.com/*
// @match        *://*.worldbuilding.stackexchange.com/*
// @match        *://*.ja.stackoverflow.com/*
// @match        *://*.emacs.stackexchange.com/*
// @match        *://*.hsm.stackexchange.com/*
// @match        *://*.economics.stackexchange.com/*
// @match        *://*.lifehacks.stackexchange.com/*
// @match        *://*.engineering.stackexchange.com/*
// @match        *://*.coffee.stackexchange.com/*
// @match        *://*.vi.stackexchange.com/*
// @match        *://*.musicfans.stackexchange.com/*
// @match        *://*.woodworking.stackexchange.com/*
// @match        *://*.civicrm.stackexchange.com/*
// @match        *://*.medicalsciences.stackexchange.com/*
// @match        *://*.ru.stackoverflow.com/*
// @match        *://*.rus.stackexchange.com/*
// @match        *://*.mythology.stackexchange.com/*
// @match        *://*.law.stackexchange.com/*
// @match        *://*.opensource.stackexchange.com/*
// @match        *://*.elementaryos.stackexchange.com/*
// @match        *://*.portuguese.stackexchange.com/*
// @match        *://*.computergraphics.stackexchange.com/*
// @match        *://*.hardwarerecs.stackexchange.com/*
// @match        *://*.es.stackoverflow.com/*
// @match        *://*.3dprinting.stackexchange.com/*
// @match        *://*.ethereum.stackexchange.com/*
// @match        *://*.latin.stackexchange.com/*
// @match        *://*.languagelearning.stackexchange.com/*
// @match        *://*.retrocomputing.stackexchange.com/*
// @match        *://*.crafts.stackexchange.com/*
// @match        *://*.korean.stackexchange.com/*
// @match        *://*.monero.stackexchange.com/*
// @match        *://*.ai.stackexchange.com/*
// @match        *://*.esperanto.stackexchange.com/*
// @match        *://*.sitecore.stackexchange.com/*
// @match        *://*.iot.stackexchange.com/*
// @match        *://*.literature.stackexchange.com/*
// @match        *://*.vegetarianism.stackexchange.com/*
// @match        *://*.ukrainian.stackexchange.com/*
// @match        *://*.devops.stackexchange.com/*
// @match        *://*.bioinformatics.stackexchange.com/*
// @match        *://*.cseducators.stackexchange.com/*
// @match        *://*.interpersonal.stackexchange.com/*
// @match        *://*.augur.stackexchange.com/*
// @match        *://*.iota.stackexchange.com/*
// @match        *://*.stellar.stackexchange.com/*
// @match        *://*.conlang.stackexchange.com/*
// @match        *://*.quantumcomputing.stackexchange.com/*
// @match        *://*.eosio.stackexchange.com/*
// @match        *://*.tezos.stackexchange.com*
// @run-at       document-end
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// ==/UserScript==


// NOTE: To get the list of Stackexchange websites I used:
//     Array.from($('.lv-item h2 a')).map(e => e.href)
// Then copied the output object from the browser console and edited it with
// vim macros.

(() => {

   'use strict';

    // This awful hack prevents the linter from raising warnings each time I
    // use the `$` from JQuery.
    let $ = (typeof asgg !== 'undefined')
        ? $
        : () => { throw 'Could not load JQuery'; };

    console.log('Minimal Stack Exchange');

    $('#left-sidebar').remove();
    $('#footer').remove();
    $('#sidebar').remove(); // Sugested questions ad
    $('.bottom-notice').remove(); // Asq question ad
    $('.hero-container').remove(); // Sign up ad

})();
