/* eslint-disable react/prop-types */
import styles from './input.module.css';

export const Input = ({ style, placeholder, value, onChange }) => (
	<input
		type="text"
		className={`${styles.input} ${styles[style]}`}
		placeholder={placeholder}
		value={value}
		onChange={onChange}
	/>
);
