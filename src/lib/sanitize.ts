import DOMPurify from 'isomorphic-dompurify';

const ALLOWED_TAGS = ['b', 'strong', 'em', 'i', 'span', 'code'];
const ALLOWED_ATTR: string[] = [];

/**
 * Sanitizes rich text containing safe inline formatting tags (e.g. <b>, <em>)
 * and strips any potential XSS vectors, scripts, inline event handlers, or malicious payloads.
 */
export function sanitizeHtml(dirty: string): string {
	if (!dirty || typeof dirty !== 'string') return '';
	return DOMPurify.sanitize(dirty, {
		ALLOWED_TAGS,
		ALLOWED_ATTR,
		ALLOW_DATA_ATTR: false
	});
}

