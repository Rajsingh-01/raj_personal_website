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
    return await axios.post('http://localhost:3001/send-email', formData);
};
