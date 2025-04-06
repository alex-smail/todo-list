import styles from './control-panel.module.css';
import { Button } from '../button/button';
import { Search } from '../search/search';
import { Sort } from '../sort/sort';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../store';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Button onClick={() => dispatch(setIsModalOpen(true))}>
				Добавить задачу
			</Button>
			<div className={styles.search}>
				<Search />
				<Sort />
			</div>
		</>
	);
};
