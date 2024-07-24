 
// import React, { useState } from 'react';
// import axios from 'axios';

// const Expenses = () => {
//   const [userId, setUserId] = useState('');
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3002/api/expenses', { userId, date, amount, category, description });
//       alert('Expense added successfully');
//     } catch (error) {
//       console.error('Error adding expense:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Expense</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>User ID:</label>
//           <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Amount:</label>
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
//         </div>
//         <div>
//           <label>Description:</label>
//           <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <button type="submit">Add Expense</button>
//       </form>
//     </div>
//   );
// };

// export default Expenses;
 
import React, { useState } from 'react';
import axios from 'axios';

const Expenses = () => {
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/api/expenses', { userId, date, amount, category, description });
      alert('Expense added successfully');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Expenses;
