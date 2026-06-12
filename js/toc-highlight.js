(function() {
    const toc = document.querySelector('#TableOfContents');
    const content = document.querySelector('.post-content');

    if (!toc || !content) {
        return;
    }

    const ACTIVE_CLASS = 'active-toc';
    const tocMap = {};

    toc.querySelectorAll('a').forEach((node) => {
        const href = node.getAttribute('href') || '';
        const id = href.replace(/^#/, '');
        if (id) {
            tocMap[id] = node;
        }
    });

    const headings = content.querySelectorAll('h2, h3, h4, h5, h6');
    if (!headings.length) {
        return;
    }

    const deactivate = () => {
        toc.querySelectorAll('.' + ACTIVE_CLASS).forEach((node) => {
            node.classList.remove(ACTIVE_CLASS);
        });
    };

    const activate = (id) => {
        const target = tocMap[id];
        if (target) {
            target.classList.add(ACTIVE_CLASS);
        }
    };

    const findCurrentHeading = () => {
        let current = headings[0];
        headings.forEach((heading) => {
            const y = heading.getBoundingClientRect().top - 35;
            if (y <= 0) {
                current = heading;
            }
        });
        return current;
    };

    let activeId = '';
    const sync = () => {
        const current = findCurrentHeading();
        if (!current || current.id === activeId) {
            return;
        }
        deactivate();
        activate(current.id);
        activeId = current.id;
    };

    window.addEventListener('scroll', sync, { passive: true });
    sync();
})();
