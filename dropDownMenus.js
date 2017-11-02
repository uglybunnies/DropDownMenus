(function() {
    'use strict';
    var self;
    var UB = UB || {};
    self = UB.DROPDOWN = {
        // initialize creatSubNav function and bind function
        init: function() {
            self.createSubNav();
            self.bind();
        },
        bind: function() {
            var links = document.querySelectorAll('.sub-nav');
            links.forEach(function(el) {
                var subNav = el.querySelectorAll('.subMenu');
                el.addEventListener('mouseover', function() {
                    el.classList.add('over');
                    subNav[0].style.height = subNav[0].scrollHeight + 'px';
                });
                el.addEventListener('mouseout', function() {
                    el.classList.remove('over');
                    subNav[0].style.height = '0';
                });
            });
        },
        createSubNav: function() {
            // menus object contains information needed for the submenus
            var menus = {
                mDesign: {
                    mDesign1: {
                        text: 'Web Design',
                        href: '#'
                    },
                    mDesign2: {
                        text: 'Interactive Design',
                        href: '#'
                    },
                    mDesign3: {
                        text: 'Graphic Design',
                        href: '#'
                    }
                },
                mArt: {
                    mArt1: {
                        text: 'Photography',
                        href: '#'
                    },
                    mArt2: {
                        text: 'Ad Art',
                        href: '#'
                    },
                    mArt3: {
                        text: 'Web Art',
                        href: '#'
                    }
                }
            };

            // create elements that will be cloned later
            var newUl = self.createElem('ul', 'subMenu');
            var newLi = self.createElem('li');
            var newA = self.createElem('a');

            // getOwnPropertyNames returns an array that can be iterated over with forEach
            Object.getOwnPropertyNames(menus).forEach(function(e) {
                var u = newUl.cloneNode();                // clone ul
                var pli = document.getElementById(e);     // get parent li
                pli.classList.add('sub-nav');             // add sub-nav className indicating a submenu exists
                // cycle through sub-items
                Object.getOwnPropertyNames(menus[e]).forEach(function(el) {
                    var li = newLi.cloneNode();           // clone li
                    var a = newA.cloneNode();             // clone a
                    a.textContent = menus[e][el].text;    // apply a text
                    a.href = menus[e][el].href;           // apply href
                    li.appendChild(a);                    // append a to li
                    u.appendChild(li);                    // append li to u
                });
                pli.appendChild(u);                       // append u to sub-nav li
            });
        },
        // helper function to create new elements
        createElem : function(el, className, id) {
            var o = document.createElement(el);
            if(className) {
                o.className = className;
            }
            if(id) {
                o.id = id;
            }
            return o;
        }
    };
    UB.DROPDOWN.init();
})();
