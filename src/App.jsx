import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Task, NotFound } from './pages';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/task/:id" element={<Task />} />
			<Route path="/404" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};

export default App;
