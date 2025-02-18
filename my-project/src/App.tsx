import {ReactNode} from 'react';
import LoginPage from './pages/Login/LoginPage';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import ProfilePage from './pages/Profile/ProfilePage';

// Protected Route Component
const ProtectedRoute = ({element}: {element: ReactNode}) => {
	const isAuthenticated = localStorage.getItem('isAuthenticated');

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return <>{element}</>; // Render the element if authenticated
};

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Route: Login Page */}
				<Route path="/login" element={<LoginPage />} />

				{/* Protected Route: Dashboard Page */}
				{/*<Route path="/home" element={<ProtectedRoute element={<MainPage />} />} />*/}
				<Route path="/" element={<MainPage />}>
					<Route path="profile" element={<ProfilePage />} /> {/* Now /profile works */}
				</Route>

				{/* Redirects any other route to the login page */}
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
