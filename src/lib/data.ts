export interface Project {
	id: string;
	title: string;
	tagline: string;
	description: string;
	details: readonly string[];
	tags: readonly string[];
}

export interface SkillCategory {
	category: string;
	items: readonly string[];
}

export interface EducationItem {
	institution: string;
	credential: string;
	year: string;
	score?: string;
	location?: string;
}

export interface CertificationItem {
	title: string;
	issuer: string;
}

export const siteMeta = {
	name: 'Sagnik Behera',
	largeName: 'SAGNIK BEHERA',
	tagline: 'Data Science student turning raw data into clear business insights',
	location: 'Keonjhar, Odisha, India',
	about:
		'B.Tech Computer Science Engineering (Data Science) student with hands-on experience in database management using MySQL, along with Python and SQL. Comfortable with data preprocessing, exploratory data analysis and model development, and with deploying basic data-driven functionality in Python. Follows clean coding practices and keeps improving through practical projects.',
	resumeUrl: '/assets/Sagnik_resume.pdf',
	canonicalUrl: 'https://sagnikbehera.pages.dev/',
	githubUrl: 'https://github.com/Sagnik267',
	linkedinUrl: 'https://www.linkedin.com/in/sagnik-behera-328b60435',
	ogImage: '/og.png'
} as const;

// Email parts to protect from automated static HTML web scrapers
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

// Strip of skill names for the scrolling ticker
export const tickerSkills: readonly string[] = [
	'Python',
	'SQL',
	'MySQL',
	'Flask',
	'Power BI',
	'DAX',
	'Google Colab',
	'Jupyter'
];

export const projects: readonly Project[] = [
	{
		id: 'marketing-performance-dashboard',
		title: 'Marketing Performance Dashboard',
		tagline: 'Data Analytics Capstone Project',
		description:
			'Built a data analytics dashboard to track, analyze and visualize marketing campaign performance across channels.',
		details: [
			'Built a data analytics dashboard to track, analyze and visualize marketing campaign performance across channels.',
			'Collected, cleaned and preprocessed campaign, customer engagement, social media and website traffic data.',
			'Analyzed key metrics including click-through rate, conversion rate, customer reach and ROI.',
			'Created interactive dashboards for channel-wise comparison, engagement trends and marketing KPIs.',
			'Generated business insights, campaign reports and monthly summaries to support data-driven marketing decisions.'
		],
		tags: ['Python', 'SQL', 'Data Analytics', 'Dashboards', 'KPI Tracking']
	},
	{
		id: 'marketing-campaign-analysis',
		title: 'Marketing Campaign Analysis',
		tagline: 'Power BI Desktop',
		description:
			'Collaborated on a Power BI project to transform, load and visualize marketing campaign data.',
		details: [
			'Collaborated on a Power BI project to transform, load and visualize marketing campaign data.',
			'Applied data cleaning and preprocessing techniques to prepare datasets for analysis.',
			'Implemented DAX measures: Total Purchase, Target Response, Campaign Profit, Percentage Success.',
			'Designed an interactive dashboard based on a reference layout, presenting customer response, revenue and campaign effectiveness.'
		],
		tags: ['Power BI Desktop', 'DAX', 'Data Preprocessing', 'ETL', 'Visualization']
	}
];

export const skillCategories: readonly SkillCategory[] = [
	{
		category: 'Languages',
		items: ['Python (Intermediate - ML & Flask)', 'SQL']
	},
	{
		category: 'Databases',
		items: ['MySQL']
	},
	{
		category: 'Tools & Platforms',
		items: ['Google Colab', 'Jupyter', 'Power BI Desktop']
	},
	{
		category: 'Core Skills',
		items: ['Teamwork', 'Problem Solving']
	}
];

export const educationHistory: readonly EducationItem[] = [
	{
		institution: 'C.V. Raman Global University',
		credential: 'B.Tech in Computer Science Engineering (Data Science)',
		year: 'Graduation Year: 2027'
	},
	{
		institution: 'Rabindra Vidya Niketan School (CBSE)',
		credential: 'Class XII, Science',
		year: '2023',
		score: '68.80%',
		location: 'Keonjhar, Odisha'
	},
	{
		institution: 'Rabindra Vidya Niketan School (CBSE)',
		credential: 'Class X',
		year: '2021',
		score: '87.20%',
		location: 'Keonjhar, Odisha'
	}
];

export const certifications: readonly CertificationItem[] = [
	{
		title: 'Data Analytics',
		issuer: 'Krutanic'
	}
];
