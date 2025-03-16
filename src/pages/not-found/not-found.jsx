import notFoundImage from '../../assets/404.png';
import style from './not-found.module.css';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
export const NotFound = () => {

	const navigate = useNavigate();

	return (
		<>
			<Button style="back" onClick={() => navigate('/')}>
				&#10094;
			</Button>
			<img className={style.img} src={notFoundImage} alt="404" />
		</>
	);
};
