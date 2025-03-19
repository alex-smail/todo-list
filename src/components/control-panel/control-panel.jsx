import { useContext } from 'react';
import styles from './control-panel.module.css';
import { Button } from '../button/button';
import { Search } from '../search/search';
import { Sort } from '../sort/sort';
import { AppContext } from '../../providers/TodoProvider';

export const ControlPanel = () => {
	const { setIsModalOpen } = useContext(AppContext);
	return (
		<>
			<Button onClick={() => setIsModalOpen(true)}>
				Добавить задачу
			</Button>
			<div className={styles.search}>
				<Search />
				<Sort />
			</div>
		</>
	);
};
