/**
 * Navigation between pages
 *
 */

App.goto = function (identifier, fromUp) {
    var current = $('section.visible'),
        next = $('.' + identifier);

    if (!next || typeof fromUp !== 'boolean') {
        throw new Error('Wrong arguments');
    } else {

    }
};
