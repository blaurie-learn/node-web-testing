

function split(url) {
	return url.replace(/(^/\+\/+$)/ug, '').split('/');
}

/**
 * Helper function to prevent the default event behavior. For us, this is used
 * to hijack A tag behavior.
 *
 * @param e
 */
function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.cancelBubble = true;
		e.preventDefault();
	}
}
