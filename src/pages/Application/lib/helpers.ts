export const getStatusColor = (
	statusCode: string,
	userLevel: 'user' | 'department' | 'institute' | 'admin'
): 'green' | 'red' | 'yellow' | 'blue' => {
	// 1. Универсальные статусы
	if (statusCode === 'approved' || statusCode.startsWith('approved_'))
		return 'green';
	if (statusCode === 'rejected' || statusCode.startsWith('rejected_'))
		return 'red';
	if (statusCode.startsWith('returned_')) return 'yellow';

	// 2. Для статусов "в работе" и "передана" проверяем уровень пользователя
	const isDepartmentLevel =
		userLevel === 'department' &&
		(statusCode === 'work_department' || statusCode === 'await_department');

	const isInstituteLevel =
		userLevel === 'institute' &&
		(statusCode === 'work_institute' || statusCode === 'await_institute');

	const isCpdsLevel =
		userLevel === 'admin' &&
		(statusCode === 'work_cpds' || statusCode === 'await_cpds');

	if (isDepartmentLevel || isInstituteLevel || isCpdsLevel) return 'yellow';

	// 3. Всё остальное — синий
	return 'blue';
};

export const getUserLevel = (
	role: string
): 'user' | 'department' | 'institute' | 'admin' => {
	switch (role) {
		case 'mentor':
			return 'user';
		case 'department_validator':
			return 'department';
		case 'institute_validator':
			return 'institute';
		default:
			return 'admin';
	}
};
