import type { FC, FormEvent } from 'react';
import type { INewAppForm } from '../types/types';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../store/store';

import { Section } from '../../../../shared/components/Section/ui/section';
import { Form } from '../../../../shared/components/Form/ui/form';
import {
	FormField,
	FormInput,
	FormButtons,
} from '../../../../shared/components/Form/components';
import { Button } from '../../../../shared/components/Button/ui/button';

import { useForm } from '../../../../hooks/useForm';
import { validationSchema, shouldBlockSubmit } from '../lib/helpers';

import { newAppAction } from '../../../../store/application/actions';

export const NewApp: FC = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.application);
	const [isBlockSubmit, setIsBlockSubmit] = useState<boolean>(true);
	const { values, handleChange, errors } = useForm<INewAppForm>(
		{ title: '', description: '', company: '' },
		validationSchema
	);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isBlockSubmit) {
			dispatch(newAppAction(values));
		}
	};

	useEffect(() => {
		setIsBlockSubmit(shouldBlockSubmit(values, errors));
	}, [values, errors]);

	return (
		<Section sectionWidth='full'>
			<Form
				name='form-add-new-app'
				onSubmit={handleSubmit}
				title='Создание новой заявки'
				formWidth='large'>
				<FormField
					title='Название:'
					fieldError={{
						text: errors.title || '',
						isShow: !!errors.title,
					}}>
					<FormInput
						name='title'
						value={values.title}
						onChange={handleChange}
					/>
				</FormField>
				<FormField
					title='Описание:'
					fieldError={{
						text: errors.description || '',
						isShow: !!errors.description,
					}}>
					<FormInput
						name='description'
						value={values.description}
						onChange={handleChange}
					/>
				</FormField>
				<FormField
					title='Компания:'
					fieldError={{ text: errors.company || '', isShow: !!errors.company }}>
					<FormInput
						name='company'
						value={values.company}
						onChange={handleChange}
					/>
				</FormField>
				<FormButtons>
					<Button
						type='submit'
						text='Создать'
						isBlock={isBlockSubmit || isLoading}
					/>
				</FormButtons>
			</Form>
		</Section>
	);
};
