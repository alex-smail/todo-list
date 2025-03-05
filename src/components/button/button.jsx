import styles from './button.module.css';
// eslint-disable-next-line react/prop-types
export const Button = ({ style, onClick, children }) => (
	<button className={`${styles.btn} ${styles[style]}`} onClick={onClick}>
		{children}
	</button>
);
