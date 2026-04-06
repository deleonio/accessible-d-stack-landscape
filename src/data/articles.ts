import { Category } from '../types';

export const CATEGORIES: Category[] = [
	{ id: 'betrieb', name: { de: 'Betrieb', en: 'Operations', fr: 'Exploitation' }, color: '#00883d' },
	{ id: 'infrastruktur', name: { de: 'Infrastruktur', en: 'Infrastructure', fr: 'Infrastructure' }, color: '#c5192d' },
	{ id: 'plattform', name: { de: 'Plattform', en: 'Platform', fr: 'Plateforme' }, color: '#003d82' },
	{ id: 'zugang', name: { de: 'Zugang', en: 'Access', fr: 'Accès' }, color: '#f39c12' },
];

export { ARTICLES } from './articles.generated';
