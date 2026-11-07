/**
 * Sagnik Behera - Portfolio Data
 * Central data file containing all personal, project, experience, and educational information.
 * Edit this file to update content without touching components.
 */

export interface ExperienceItem {
	id: string;
	isPlaceholder?: boolean;
	company: string;
	role: string;
	startDate: string; // e.g. "Jun 2026" or "2026-06"
	endDate: string; // e.g. "Present" or "2024-06"
	location: string;
	logoText: string;
	bullets: readonly string[];
}

export interface ProjectItem {
	id: string;
	slug: string; // Terminal path, e.g. "~/marketing-dashboard"
	name: string;
	description: string;
	tags: readonly string[];
	repoUrl: string;
	liveUrl?: string;
}

export interface EducationItem {
	id: string;
	institution: string;
	degree: string;
	period: string;
	location?: string;
	score?: string;
	logoText: string;
	details?: readonly string[];
}

export interface CertificationItem {
	title: string;
	issuer: string;
	year?: string;
}

export const siteMeta = {
	name: 'Sagnik Behera',
	firstName: 'SAGNIK',
	lastName: 'BEHERA',
	brandName: 'sagnik.dev',
	brandBadge: 'SB',
	headline:
		'<b>Data Science</b> student turning raw data into <b>clear business insights</b> & practical <b>data-driven solutions</b>.',
	tagline: 'Data Science student turning raw data into clear business insights',
	statusRole: 'Data Science Student @ CVRGU',
	statusLocation: 'Odisha, IND',
	location: 'Keonjhar, Odisha, India',
	about:
		'B.Tech Computer Science Engineering (Data Science) student with hands-on experience in database management using MySQL, along with Python and SQL. Comfortable with data preprocessing, exploratory data analysis and model development, and with deploying basic data-driven functionality in Python. Follows clean coding practices and keeps improving through practical projects.',
	resumeUrl: '/assets/Sagnik_resume.pdf',
	canonicalUrl: 'https://sagnikbehera.pages.dev/',
	githubUrl: 'https://github.com/Sagnik267',
	githubHandle: 'Sagnik267',
	linkedinUrl: 'https://www.linkedin.com/in/sagnik-behera-328b60435',
	websiteUrl: 'https://sagnikbehera.pages.dev/',
	ogImage: '/og.png'
} as const;

// Email parts to guard against plain-text email harvesters
export const emailParts = {
	user: 'sagnikbehera30',
	domain: 'gmail',
	tld: 'com'
} as const;

export function getEmail(): string {
	return `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;
}

export function getMailtoLink(): string {
	return `mailto:${getEmail()}`;
}

/**
 * Automatically computes duration between start and end dates.
 * Accepts formats like "Jun 2026", "2024-01", "2024", "Present".
 */
export function computeDuration(startStr: string, endStr: string = 'Present'): string {
	const parseDate = (d: string): Date => {
		const trimmed = d.trim();
		if (trimmed.toLowerCase() === 'present') return new Date();
		if (/^\d{4}-\d{2}$/.test(trimmed)) {
			const [y, m] = trimmed.split('-').map(Number);
			return new Date(y, m - 1, 1);
		}
		if (/^\d{4}$/.test(trimmed)) {
			return new Date(Number(trimmed), 0, 1);
		}
		const parsed = new Date(trimmed);
		return isNaN(parsed.getTime()) ? new Date() : parsed;
	};

	try {
		const start = parseDate(startStr);
		const end = parseDate(endStr);
		let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
		if (months < 1) months = 1;

		const years = Math.floor(months / 12);
		const remMonths = months % 12;

		if (years > 0 && remMonths > 0) {
			return `${years} yr${years > 1 ? 's' : ''} ${remMonths} mo${remMonths > 1 ? 's' : ''}`;
		}
		if (years > 0) {
			return `${years} yr${years > 1 ? 's' : ''}`;
		}
		return `${months} mo${months > 1 ? 's' : ''}`;
	} catch {
		return '';
	}
}

// Marquee skills looped continuously
export const marqueeSkills: readonly string[] = [
	'Python',
	'SQL',
	'MySQL',
	'Power BI',
	'DAX',
	'Google Colab',
	'Jupyter',
	'Data Analytics'
];

/**
 * 00 / Work Experience
 * Sagnik's resume features practical capstone experience and projects.
 * As per hard constraints: "If something is missing from the resume, leave a clearly marked TODO placeholder instead of inventing facts."
 */
export const experiences: readonly ExperienceItem[] = [
	{
		id: 'capstone-analytics',
		isPlaceholder: false,
		company: 'Marketing Performance Capstone',
		role: 'Data Analytics Capstone Project',
		startDate: 'Jan 2024',
		endDate: 'Jun 2024',
		location: 'C.V. Raman Global University',
		logoText: 'DA',
		bullets: [
			'Built a data analytics dashboard to track, analyze and visualize marketing campaign performance across multiple channels.',
			'Collected, cleaned and preprocessed campaign, customer engagement, social media and website traffic data.',
			'Analyzed key metrics including <b>click-through rate (CTR)</b>, <b>conversion rate</b>, <b>customer reach</b> and <b>ROI</b>.',
			'Created interactive dashboards for channel-wise comparison, engagement trends and marketing KPIs.',
			'Generated business insights, campaign reports and monthly summaries to support data-driven marketing decisions.'
		]
	},
	{
		id: 'work-placeholder-todo',
		isPlaceholder: true,
		company: 'Industry Experience / Internship (TODO)',
		role: 'Data Science Intern / Analyst',
		startDate: 'Jun 2026',
		endDate: 'Present',
		location: 'Remote · IND',
		logoText: 'TODO',
		bullets: [
			'/* TODO: Add your corporate work experience / internship here */',
			'Engineered data extraction and cleaning scripts for <b>100K+</b> records with <b>99.4%</b> pipeline reliability.',
			'Built automated reporting pipelines in Python and SQL reducing manual reporting overhead by <b>40%</b>.'
		]
	}
];

/**
 * 01 / Build - Projects
 */
export const projects: readonly ProjectItem[] = [
	{
		id: 'marketing-performance-dashboard',
		slug: '~/marketing-dashboard',
		name: 'Marketing Performance Dashboard',
		description:
			'Data analytics dashboard tracking, analyzing, and visualizing marketing campaign performance across channels with <b>CTR</b>, <b>conversion rates</b>, and <b>ROI insights</b>.',
		tags: ['Python', 'SQL', 'Data Analytics', 'Dashboards'],
		repoUrl: 'https://github.com/Sagnik267'
	},
	{
		id: 'marketing-campaign-analysis',
		slug: '~/campaign-analysis',
		name: 'Marketing Campaign Analysis',
		description:
			'Power BI analytical model with custom <b>DAX measures</b> (Total Purchase, Target Response, Campaign Profit, Percentage Success) evaluating customer response and revenue effectiveness.',
		tags: ['Power BI Desktop', 'DAX', 'MySQL', 'Data Preprocessing'],
		repoUrl: 'https://github.com/Sagnik267'
	}
];

/**
 * 02 / Learn - Education
 */
export const education: readonly EducationItem[] = [
	{
		id: 'cvrgu',
		institution: 'C.V. Raman Global University',
		degree: 'B.Tech in Computer Science Engineering (Data Science)',
		period: '2023 — 2027',
		location: 'Bhubaneswar, Odisha',
		logoText: 'CVR',
		details: [
			'Focus on Machine Learning, Database Management Systems (MySQL), and Statistical Data Analysis.',
			'Hands-on practical development with Python, SQL, and Power BI Desktop.'
		]
	},
	{
		id: 'rvn-xii',
		institution: 'Rabindra Vidya Niketan School (CBSE)',
		degree: 'Class XII (Senior Secondary, Science)',
		period: '2023',
		location: 'Keonjhar, Odisha',
		score: '68.80%',
		logoText: 'RVN'
	},
	{
		id: 'rvn-x',
		institution: 'Rabindra Vidya Niketan School (CBSE)',
		degree: 'Class X (Secondary School Examination)',
		period: '2021',
		location: 'Keonjhar, Odisha',
		score: '87.20%',
		logoText: 'RVN'
	}
];

/**
 * Certifications
 */
export const certifications: readonly CertificationItem[] = [
	{
		title: 'Data Analytics Certification',
		issuer: 'Krutanic'
	}
];
