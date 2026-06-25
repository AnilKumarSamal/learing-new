import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const verifyToken =(req,res,next)=>{
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];
if (!token) {
    return res.status(401).json({ success: false, error: 'Access Denied: No Token Provided' });
  }
try {
    // 2. Verify the token using your secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Attach the decrypted user payload to the request object
    req.user = verified; 
    
    // 4. Move to the next function (the Controller)
    next(); 
  } catch (error) {
    return res.status(403).json({ success: false, error: 'Invalid or Expired Token' });
  }
};