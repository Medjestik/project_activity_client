import type { FC } from 'react';
import type { IApplication } from '../../../../store/application/types';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../store/store';

import { Section } from '../../../../shared/components/Section/ui/section';
import { Preloader } from '../../../../shared/components/Preloader/ui/preloader';
import { Filter } from '../../../../shared/components/Filter/ui/filter';
import { Button } from '../../../../shared/components/Button/ui/button';
import {
	Table,
	TableHeader,
	TableMain,
	TableRow,
	TableMainColumn,
	TableColumn,
	TableControl,
} from '../../../../shared/components/Table/ui';
import { Icon } from '../../../../shared/components/Icon/ui/icon';

import { getAppsAction } from '../../../../store/application/actions';
import { getFullDate } from '../../../../shared/lib/formatDate';

import styles from '../styles/my-app.module.scss';

export const MyApp: FC = () => {
	const dispatch = useDispatch();
	const { applications, isLoading } = useSelector((state) => state.application);
	const [filteredApps, setFilteredApps] = useState(applications);

	useEffect(() => {
		dispatch(getAppsAction());
	}, [dispatch]);

	useEffect(() => {
		setFilteredApps(applications);
	}, [applications]);

	return (
		<Section sectionWidth='full'>
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<h1 className={styles.title}>Мои заявки</h1>
					<div className={styles.header}>
						<Filter<IApplication>
							data={applications}
							searchKey='title'
							placeholder='Поиск по названию...'
							onFilter={setFilteredApps}
						/>
						<Button text='Новая заявка' />
					</div>
					<Table>
						<TableHeader>
							<TableColumn
								text='№'
								textWeight='bold'
								columnType='header'
								columnSize='count'
							/>
							<TableColumn
								text='Название'
								textWeight='bold'
								columnType='header'
								columnSize='full'
							/>
							<TableColumn
								text='Компания'
								textWeight='bold'
								columnType='header'
								columnSize='full'
							/>
							<TableColumn
								text='Дата подачи'
								textWeight='bold'
								columnType='header'
								columnSize='large'
							/>
							<TableColumn
								text='Статус'
								textWeight='bold'
								columnType='header'
								columnSize='large'
							/>
						</TableHeader>
						{filteredApps.length > 0 ? (
							<TableMain>
								{filteredApps.map((item, i) => (
									<TableRow key={item.id}>
										<TableMainColumn>
											<TableColumn text={i + 1} columnSize='count' />
											<TableColumn text={item.title} columnSize='full' />
											<TableColumn text={item.company} columnSize='full' />
											<TableColumn
												text={getFullDate(item.creation_date)}
												columnSize='large'
											/>
											<TableColumn text={item.status.name} columnSize='large' />
										</TableMainColumn>
										<TableControl>
											<Icon icon='view' />
											<Icon icon='edit' />
										</TableControl>
									</TableRow>
								))}
							</TableMain>
						) : (
							<p className='table__caption_type_empty'>
								Заявки не найдены. Измените параметры поиска или создайте новую.
							</p>
						)}
					</Table>
				</>
			)}
		</Section>
	);
};
