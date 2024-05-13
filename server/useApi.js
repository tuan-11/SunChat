const axios = require('axios');
// import axios from "axios";
async function getToken() {
  try {
    const response = await axios.post('http://localhost:3000/token', {
      user_id: 'nvkhang',
    });
    console.log('Token:', response.data.token);
    return response.data.token;
  } catch (error) {
    if (error.response) {
      // Xử lý lỗi từ phía server
      console.log('Error server:', error.response.status, error.response.data);
    } else if (error.request) {
      // Xử lý lỗi không nhận được phản hồi từ server
      console.log('No response received from server');
    } else {
      // Xử lý lỗi khác
      console.log('Error:', error.message);
    }
    return null;
  }
}

module.exports = {
  getToken,
};
