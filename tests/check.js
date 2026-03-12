#!/usr/bin/env node
/**
 * TDD: structural checks for index.html
 * Run: node tests/check.js
 */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

let pass = 0, fail = 0;

function test(name, condition, hint) {
    if (condition) {
        console.log(`  ✓  ${name}`);
        pass++;
    } else {
        console.log(`  ✗  ${name}${hint ? '\n       → ' + hint : ''}`);
        fail++;
    }
}

console.log('\n=== HERO SECTION ===');
test(
    'PDF download button is removed',
    !html.includes('cv.pdf" download'),
    'Found <a href="cv.pdf" download ...> — should be removed'
);
test(
    'Telegram button present in hero',
    html.includes('https://t.me/s_nesteryuk') && html.includes('Написать в Telegram'),
    'Telegram button missing from hero'
);
test(
    'CV viewer button present in hero',
    html.includes('cv.html') && html.includes('Посмотреть CV'),
    'CV viewer button missing from hero'
);

console.log('\n=== ARTICLES SECTION ===');
test(
    'Articles right column has h-full',
    html.includes('flex flex-col gap-6 h-full') || html.includes('h-full flex flex-col gap-6'),
    'Right column div needs h-full for desktop height matching'
);
test(
    'Articles mobile carousel: snap-x + hide-scrollbar',
    html.includes('snap-x snap-mandatory') && html.includes('snap-start'),
    'Mobile carousel should have snap-x snap-mandatory wrapper and snap-start cards'
);
test(
    'Articles desktop grid hidden on mobile (lg:hidden → lg:grid)',
    html.includes('hidden lg:grid') && html.includes('lg:hidden'),
    'Desktop grid should be hidden on mobile; mobile carousel hidden on desktop'
);
test(
    'Featured article card present',
    html.includes('art-feat-card') && html.includes('ГЛАВНЫЙ МАТЕРИАЛ'),
    'Featured article card missing'
);
test(
    'Article 2 card present and clickable',
    html.includes("showPage('page-article-2')") || html.includes('href="#article-2"'),
    'Article 2 card missing'
);
test(
    'Article 3 card present and clickable',
    html.includes("showPage('page-article-3')") || html.includes('href="#article-3"'),
    'Article 3 card missing'
);

console.log('\n=== SKILLS CHAT ===');
test(
    'Chat avatar is img tag with hero.jpg',
    html.includes('skills-chat-avatar"><img src="images/hero.jpg"'),
    'Chat avatar should use <img src="images/hero.jpg"> inside .skills-chat-avatar'
);
test(
    '"И последнее?" not in scUserReplies array',
    !html.includes("'И последнее?'") && !html.includes('"И последнее?"'),
    'Remove "И последнее?" from scUserReplies and scNextLabels arrays'
);
test(
    'Telegram button in chat final row is blue (#3B5BDB)',
    (function() {
        // look in the JS innerHTML string, not in CSS
        const idx = html.indexOf('scFooter.innerHTML');
        if (idx === -1) return false;
        const segment = html.slice(idx, idx + 600);
        return segment.includes('#3B5BDB') || segment.includes('#3b5bdb');
    })(),
    'Chat final Telegram button should use #3B5BDB (dialog blue) not #2AABEE (Telegram blue)'
);
test(
    'Telegram button in chat final row is right-aligned',
    (function() {
        const idx = html.indexOf('scFooter.innerHTML');
        if (idx === -1) return false;
        const segment = html.slice(idx, idx + 600);
        return segment.includes('justify-content:flex-end') || segment.includes('justify-content: flex-end') || segment.includes('ml-auto') || segment.includes('margin-left:auto');
    })(),
    'Telegram button should be right-aligned in the final chat row'
);

console.log('\n=== GENERAL STRUCTURE ===');
test('page-home div present', html.includes('id="page-home"'), 'page-home div missing');
test('page-article-1 div present', html.includes('id="page-article-1"'), 'page-article-1 div missing');
test('scMessages id unique', (html.match(/id="scMessages"/g) || []).length === 1, 'scMessages id must appear exactly once');
test('scHandleNext global', html.includes('window.scHandleNext'), 'window.scHandleNext not defined');
test('IntersectionObserver for chat', html.includes('IntersectionObserver'), 'IntersectionObserver missing');
test('"На главную" → articles scroll', html.includes("showPage('page-home', 'articles')"), '"На главную" button not scrolling to articles');

console.log(`\n${'─'.repeat(40)}`);
console.log(`  Passed: ${pass}  |  Failed: ${fail}`);
console.log(`${'─'.repeat(40)}\n`);
process.exit(fail > 0 ? 1 : 0);
