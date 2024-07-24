// import React, { useState } from 'react';
// import './Register.css'; // Ensure you have a corresponding CSS file for styles

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     let errorMessage = '';

//     switch (name) {
//       case 'username':
//         if (!/^[a-zA-Z]+$/.test(value)) {
//           errorMessage = 'Username should only contain English letters.';
//         }
//         break;
//       case 'email':
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || !value.endsWith('@gmail.com')) {
//           errorMessage = 'Please enter a valid Gmail address.';
//         }
//         break;
//       case 'phone':
//         if (!/^[6-9]\d{9}$/.test(value)) {
//           errorMessage = 'Please enter a valid Indian phone number.';
//         }
//         break;
//       case 'password':
//         if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)) {
//           errorMessage = 'Password must be at least 6 characters long and include a mix of upper, lower, numeric, and special characters.';
//         }
//         break;
//       case 'confirmPassword':
//         if (value !== formData.password) {
//           errorMessage = 'Passwords do not match.';
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors({ ...errors, [name]: errorMessage });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Submit form if there are no errors
//     if (!Object.values(errors).some(error => error)) {
//       // Proceed with form submission logic here
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <span className="error">{errors.username}</span>}
//       </div>
      
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
      
//       <div>
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         {errors.phone && <span className="error">{errors.phone}</span>}
//       </div>
      
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
      
//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//       </div>
      
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests
// import './Register.css'; // Ensure you have a corresponding CSS file for styles

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     validateField(name, value);
//   };

//   const validateField = (name, value) => {
//     let errorMessage = '';

//     switch (name) {
//       case 'username':
//         if (!/^[a-zA-Z]+$/.test(value)) {
//           errorMessage = 'Username should only contain English letters.';
//         }
//         break;
//       case 'email':
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || !value.endsWith('@gmail.com')) {
//           errorMessage = 'Please enter a valid Gmail address.';
//         }
//         break;
//       case 'phone':
//         if (!/^[6-9]\d{9}$/.test(value)) {
//           errorMessage = 'Please enter a valid Indian phone number.';
//         }
//         break;
//       case 'password':
//         if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)) {
//           errorMessage = 'Password must be at least 6 characters long and include a mix of upper, lower, numeric, and special characters.';
//         }
//         break;
//       case 'confirmPassword':
//         if (value !== formData.password) {
//           errorMessage = 'Passwords do not match.';
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors({ ...errors, [name]: errorMessage });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Submit form if there are no errors
//     if (!Object.values(errors).some(error => error)) {
//       try {
//         const response = await axios.post('/register', {
//           username: formData.username,
//           email: formData.email,
//           phone: formData.phone,
//           password: formData.password
//         });
//         alert(response.data.message);
//       } catch (error) {
//         console.error('There was an error registering the user!', error);
//         alert('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <span className="error">{errors.username}</span>}
//       </div>
      
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
      
//       <div>
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         {errors.phone && <span className="error">{errors.phone}</span>}
//       </div>
      
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
      
//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//       </div>
      
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './Register.css'; // Ensure you have a corresponding CSS file for styles

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'username':
        if (!/^[a-zA-Z]+$/.test(value)) {
          errorMessage = 'Username should only contain English letters.';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || !value.endsWith('@gmail.com')) {
          errorMessage = 'Please enter a valid Gmail address.';
        }
        break;
      case 'phoneNumber':
        if (!/^[6-9]\d{9}$/.test(value)) {
          errorMessage = 'Please enter a valid Indian phone number.';
        }
        break;
      case 'password':
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)) {
          errorMessage = 'Password must be at least 6 characters long and include a mix of upper, lower, numeric, and special characters.';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          errorMessage = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit form if there are no errors
    if (!Object.values(errors).some(error => error)) {
      try {
        const response = await axios.post('http://localhost:3002/api/users/register', {  // Ensure this matches your backend route
          username: formData.username,
          email: formData.email,
          phoneNumber: formData.phoneNumber,  // Ensure this matches your backend field name
          password: formData.password
        });
        alert(response.data.message);
      } catch (error) {
        console.error('There was an error registering the user!', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please correct the errors before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"  // Updated to match backend field name
          value={formData.phoneNumber}  // Updated to match backend field name
          onChange={handleChange}
        />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </div>
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
