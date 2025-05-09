// import React, { useState } from 'react';
// import './styles/DoctorSignUp.css';
// import axios from 'axios';

// const DoctorSignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     password: '',
//     sex: '',
//     dateOfBirth: '',
//     bloodGroup: '',
//     age: '',
//     degrees: '',
//     institute: '',
//     specialty: '',
//     department: '',
//     availability: '',
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/doctors/dregister', formData);
//       setSuccessMessage(response.data.message);
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(error.response.data.message);
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="doctor-signup-container">
//       <h1>Doctor Registration</h1>
//       <form className="doctor-signup-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             placeholder="Enter your first name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             placeholder="Enter your last name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mobileNumber">Phone Number</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             name="mobileNumber"
//             placeholder="Enter your phone number"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="specialty">Specialization</label>
//           <input
//             type="text"
//             id="specialty"
//             name="specialty"
//             placeholder="Enter your specialty"
//             value={formData.specialty}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Show success or error messages */}
//         {successMessage && <div className="success-message">{successMessage}</div>}
//         {errorMessage && <div className="error-message">{errorMessage}</div>}

//         <button type="submit" className="signup-button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default DoctorSignUp;
import React, { useState } from 'react';
import './styles/DoctorSignUp.css';
import axios from 'axios';

const DoctorSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    sex: '',
    dateOfBirth: '',
    bloodGroup: '',
    age: '',
    degrees: '',
    institute: '',
    specialty: '',
    department: '',
    availability: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/doctors/dregister', formData);
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="doctor-signup-container">
      <h1>Doctor Registration</h1>
      <form className="doctor-signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Phone Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter your phone number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialization</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            placeholder="Enter your specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>

        {/* Show success or error messages */}
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" className="signup-button">Register</button>
      </form>
    </div>
  );
};

export default DoctorSignUp;