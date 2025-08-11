import bcrypt from 'bcryptjs';
import { getDatabase } from './mongodb';

export interface AdminUser {
  _id?: string;
  email: string;
  passwordHash: string;
  role: 'admin';
  createdAt: Date;
  lastLogin?: Date;
}

export async function getAdminCollection() {
  const db = await getDatabase();
  return db.collection<AdminUser>('admin_users');
}

export async function verifyAdminCredentials(email: string, password: string): Promise<AdminUser | null> {
  try {
    const collection = await getAdminCollection();
    
    // Use index on email for fast lookup
    const admin = await collection.findOne(
      { email: email.toLowerCase() },
      { projection: { passwordHash: 1, email: 1, role: 1, _id: 1 } }
    );

    if (!admin) {
      return null;
    }

   
    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) {
      return null;
    }

    
    await collection.updateOne(
      { _id: admin._id },
      { $set: { lastLogin: new Date() } }
    );

    return admin;
  } catch (error) {
    console.error('Error verifying admin credentials:', error);
    return null;
  }
}

export async function createAdminUser(email: string, password: string): Promise<boolean> {
  try {
    const collection = await getAdminCollection();
    
    // Check if admin already exists
    const existingAdmin = await collection.findOne({ email: email.toLowerCase() });
    if (existingAdmin) {
      return false;
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create admin user
    const adminUser: AdminUser = {
      email: email.toLowerCase(),
      passwordHash,
      role: 'admin',
      createdAt: new Date(),
    };

    await collection.insertOne(adminUser);
    
    // Create index for faster queries
    await collection.createIndex({ email: 1 }, { unique: true });
    
    return true;
  } catch (error) {
    console.error('Error creating admin user:', error);
    return false;
  }
}

export async function initializeDefaultAdmin(): Promise<void> {
  try {
    const defaultEmail = process.env.ADMIN_EMAIL || 'admin@anantya2025.com';
    const defaultPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    const success = await createAdminUser(defaultEmail, defaultPassword);
    if (success) {
      console.log('✅ Default admin user created successfully');
    } else {
      console.log('ℹ️ Default admin user already exists');
    }
  } catch (error) {
    console.error('Error initializing default admin:', error);
  }
}
