import * as userService from '../services/user.service.js';

export const handleCreateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const user = await userService.createUser({ name, email });
    return res.status(201).json({ success: true, data: user });
  } catch (error) {
    // If email unique constraint fails or network drops
    return res.status(500).json({ success: false, error: error.message });
  }
};
export const handleGetUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(201).json({ success: true, data: users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const handleUpdateUser = async (req, res) => {

  console.log(req.params.id);
  try {
    const { name, email } = req.body;
    const userId= req.params.id
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required for update' });
    }

    const user = await userService.updateUser(userId,{ name, email });
    return res.status(201).json({ success: true, data: user });
  } catch (error) {
    // If email unique constraint fails or network drops
    return res.status(500).json({ success: false, error: error.message });
  }
};

// export const handleDeleteUser = async (req, res) => {
//   try {
//     const { name, email } = req.body;
    
//     if (!name || !email) {
//       return res.status(400).json({ error: 'Name and email are required' });
//     }

//     const user = await userService.createUser({ name, email });
//     return res.status(201).json({ success: true, data: user });
//   } catch (error) {
//     // If email unique constraint fails or network drops
//     return res.status(500).json({ success: false, error: error.message });
//   }
// };
// export const handleGetUserById = async (req, res) => {
//   try {
//     const { name, email } = req.body;
    
//     if (!name || !email) {
//       return res.status(400).json({ error: 'Name and email are required' });
//     }

//     const user = await userService.createUser({ name, email });
//     return res.status(201).json({ success: true, data: user });
//   } catch (error) {
//     // If email unique constraint fails or network drops
//     return res.status(500).json({ success: false, error: error.message });
//   }
// };

