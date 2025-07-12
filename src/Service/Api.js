
//************** */ this comment code is way of defining to conenct with the user phone number when any user can reach their site and send msg it would be sended 2 types 1.email2. an sms through*****

/*import axios from 'axios';

export const sendMessage = async (formData) => {
  try {
    // Correct the URL here by removing the extra '/send-message' part
    const response = await axios.post('http://localhost:3001/api/contact/send-message', formData);
    return response; // Return response to be handled in the component
  } catch (error) {
    throw error; // Propagate the error to be handled in the component
  }
};

*/ 

// only for an email
import axios from 'axios';

export const sendMessage = async (formData) => {
    return await axios.post('https://backend-node-ilpj.onrender.com/api/contact', formData);
};
