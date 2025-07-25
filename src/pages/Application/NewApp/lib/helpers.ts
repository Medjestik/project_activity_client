import type { INewAppForm } from '../types/types';
import type { TFormValidationErrors } from '../../../../shared/components/Form/types/types';

import { required } from '../../../../shared/lib/validationRules';

export const validationSchema = {
	title: [required('Введите название')],
	description: [required('Введите описание')],
	company: [required('Введите компанию')],
};

export const shouldBlockSubmit = (
	values: INewAppForm,
	errors: TFormValidationErrors
): boolean => {
	return (
		!values.title.trim() ||
		!!errors.title ||
		!values.description.trim() ||
		!!errors.description ||
		!values.company.trim() ||
		!!errors.company
	);
};
