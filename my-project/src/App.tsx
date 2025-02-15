import {ReactNode, useState} from 'react';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import {BrowserRouter, Outlet, Routes, Route, Navigate} from 'react-router-dom';

// Protected Route Component
const ProtectedRoute = ({element}: {element: ReactNode}) => {
	const isAuthenticated = localStorage.getItem('isAuthenticated');

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return <>{element}</>; // Render the element if authenticated
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				{/* Public Route: Login Page */}
				<Route path="/login" element={<LoginPage />} />

				{/* Protected Route: Dashboard Page */}
				<Route path="/dashboard" element={<ProtectedRoute element={<LoginPage />} />} />

				{/* Redirects any other route to the login page */}
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
