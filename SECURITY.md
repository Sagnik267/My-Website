# Security Policy

## Reporting a Vulnerability

We take the security of this portfolio website seriously. If you discover a security vulnerability or have a security-related question, please report it responsibly so that we can address it promptly.

### Contact Information
- **Email:** sagnikbehera30@gmail.com
- **Preferred Languages:** English
- **Standard Security File:** [/.well-known/security.txt](/.well-known/security.txt)

Please do **NOT** open public GitHub issues or discussions for undisclosed security vulnerabilities.

### What to Include in Your Report
To help us triage and resolve the issue quickly, please include:
1. A clear description of the vulnerability and its potential impact.
2. Step-by-step reproduction instructions or a minimal proof-of-concept.
3. The affected URL, component, or asset.
4. Any relevant browser versions, environment details, or request/response headers.

### Response & Remediation Timeline
- **Initial Response:** Within 48 hours of receiving your report.
- **Triage & Status Update:** Within 5 business days.
- **Resolution & Deployment:** We aim to deploy fixes for verified vulnerabilities as soon as possible.

### Security Architecture of this Site
This website is architected with defense-in-depth principles:
- **100% Static Output:** Powered by SvelteKit and `@sveltejs/adapter-static` with pre-rendering. There are no server-side runtimes, databases, or backend APIs.
- **Zero Secrets:** No API keys, credentials, or environment secrets exist within the repository.
- **Strict Content-Security-Policy (CSP):** Configured with `default-src 'self'`, `connect-src 'none'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'none'`, and strict SHA-256 script hashing without `'unsafe-inline'` or `'unsafe-eval'`.
- **Hardened HTTP Response Headers:** Enforces HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and restrictive `Permissions-Policy`.
- **Scraper-Resistant Contact:** Email addresses are not exposed in plaintext in raw HTML files; mailto actions are dynamically assembled client-side.
- **Self-Hosted Assets:** Zero external CDNs, trackers, third-party analytics, or dynamic iframes. Fonts and assets are strictly self-hosted.
- **Automated CI Audits:** Dependabot scans dependencies weekly, and GitHub Actions CI enforces `npm audit --audit-level=high` on every commit and pull request.

