/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './task-list.module.css';
import { trimText } from '../../utils';

export const TaskList = ({ filteredTodos }) => {
	return (
		<ul className={styles.ulContainer}>
			{filteredTodos.map(({ id, title }) => (
				<Link key={id} className={styles.link} to={`task/${id}`}>
					{trimText(title)}
				</Link>
			))}
		</ul>
	);
};
