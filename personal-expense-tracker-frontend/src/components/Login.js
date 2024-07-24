import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize useNavigate

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format. Only @gmail.com is allowed.';
        }

        if (!validatePassword(password)) {
            newErrors.password = 'Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Handle login logic here
            console.log('Logging in with:', { email, password });

            // Redirect to UserHomePage upon successful login
            navigate('/user-home');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
