export default class SPA {
    constructor(o) {
        this.$mountPoint = o.el || "#app",
        this.$methods = o.methods || {};
        this.$beforeMount = o.beforeMount || function () {};
        this.$mounted = o.mounted || function () {};
        this.$ready = o.ready || function () {};
        this.$pages = {};
        this.$page = {};
        this.$defaultPage = o.defaultPage || 'index';
        this.$preloadPages = o.preloadPages || [];
        this.$preloadDelay = 500;
        this.data = o.data || function(){return{}};
        this.$init(); 
    }

    $init() {
        this.createNeededElements();
        this.$load(this.$getPage(), () => {
            setTimeout(() => {
                this.$preloadPages.forEach(name =>{
                    this.$mount(name, false)
                });
            }, this.$preloadDelay);
        });
        window.addEventListener("hashchange", () => {
            this.$load(this.$getPage());
            window.scroll(0, 0);
        });
    }

    static $id (id) {
        return document.getElementById(id);
    }
    static $q (search) {
        return Array.from(document.querySelectorAll(search));
    }

    static $fetch(url, fn) {
        var res = null;
        var r = new XMLHttpRequest();
        r.open('GET', url, true);
        r.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            fn(this.responseText);
        };
        r.send();
        r = null;
    }

    static $make (o) {
        o.type = o.type || 'div';
        o.attr = o.attr || {};
        o.html = o.html;

        var child = document.createElement(o.type);
        var parents = document.querySelectorAll(o.parent);
        var exists = false;

        Object.keys(o.attr).forEach(function (key) {
            var attr = o.attr[key];
            if (key === 'id') {
                var potentialChild = SPA.$id(attr);
                if (potentialChild) {
                    exists = true;
                    child = potentialChild;
                }
            }
            child.setAttribute(key, attr);
        });

        if (!exists) {
            parents.forEach(parent => {
                parent.append(child)
            })
        }

        if (o.html) {
            child.innerHTML = o.html;
        }
        return child;
    }

    static $meta (name) {
        return SPA.$q('meta[property="sniddl:page"][name="' + name + '"]')[0];
    }

    $getPage() {
        var split = location.hash.split('/');
        return split.slice(1)[0] || this.$defaultPage;
    }

    $getParams() {
        var split = location.hash.split('/');
        return split.slice(2);
    }

    $mount(name, visible=true, done=function(){}) {    
        var meta = SPA.$meta(name);
        SPA.$fetch(meta.getAttribute('content'), content => {
            var $data = {};
            var premount = this.$beforeMount(name, content, $data);
            var html = premount === false ? '' : premount || content;
            var page = SPA.$make({
                parent: '#pages',
                attr: { id: 'page-' + name, class: visible ? 'page-visible' : 'page-hidden' },
                html: html,
            });
            page.$shown = visible;
            page.$data = $data;
            this.$pages[name] = page;
            this.$mounted(page);
            done()
        });
    }

    $show(name) {
        var page = this.$pages[name];
        page.classList.add('page-visible');
        page.classList.remove('page-hidden');
        if (!page.$shown) {
            page.$shown = true;
            this.$ready(page);
        }
    }

    $hide(name) {
        var page = this.$pages[name];
        page.classList.remove('page-visible');
        page.classList.add('page-hidden');
    }

    createNeededElements() {
        SPA.$make({
            type: 'style',
            parent: 'head',
            attr: {id: 'sniddl-css'},
            html: '#app {overflow-x: hidden;}.page-hidden {display: none;}'
        });

        SPA.$make({
            parent: this.$mountPoint,
            attr: { id: 'pages' }
        });
        if (SPA.$meta('404')) {
            loadPageIntoDOM('404');
        } else {
            SPA.$make({
                parent: '#pages',
                attr: { id: 'page-404', class: 'page-hidden' },
                html: '<h1>404 - Not found</h1>'
            });
        }
    }

    $load(name, done=function(){}) {
        Object.keys(this.$pages).forEach(name => {
            this.$hide(name)
        });
        if (!this.$pages[name]) {
            this.$mount(name, () => {
                this.$show(name);
                done();
            });
        } else {
            this.$show(name);
            done();
        }
    }

}
