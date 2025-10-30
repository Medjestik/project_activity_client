import type { ITab } from '../../../shared/components/Tabs/types/types';

export const tabs: ITab[] = [
	{ label: 'В работе', path: '/main/coordination/tabs/active' },
	{ label: 'Согласованные', path: '/main/coordination/tabs/completed' },
	{ label: 'На доработке', path: '/main/coordination/tabs/returned' },
	{ label: 'Отклоненные', path: '/main/coordination/tabs/cancelled' },
];
