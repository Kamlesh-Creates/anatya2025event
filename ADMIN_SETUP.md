# Admin Authentication System Setup

This document explains how to set up and use the new MongoDB-based admin authentication system for Anantya 2025.

## 🚀 What's New

The admin login system has been completely overhauled to use MongoDB instead of hardcoded credentials. This provides:

- **Faster authentication** - Direct database queries with proper indexing
- **Better security** - Password hashing with bcrypt
- **Scalability** - Multiple admin users support
- **Flexibility** - Easy to add/remove admin accounts

## 📋 Prerequisites

1. **MongoDB** - Either local installation or MongoDB Atlas
2. **Node.js** - Version 16 or higher
3. **Environment variables** - Properly configured `.env.local` file

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install the new dependencies:
- `bcryptjs` - For password hashing
- `@types/bcryptjs` - TypeScript types for bcryptjs

### 2. Environment Configuration

Create a `.env.local` file in your project root with:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017
# or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/

# Database Name
DB_NAME=anantya2025

# Admin Configuration (Optional - fallback credentials)
ADMIN_EMAIL=admin@anantya2025.com
ADMIN_PASSWORD=admin123

# JWT Secret for Admin Sessions (Change this in production!)
ADMIN_JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 3. Start the Application

```bash
npm run dev
```

The system will automatically:
- Connect to MongoDB
- Create the `admin_users` collection
- Initialize the default admin user (if it doesn't exist)
- Set up proper database indexes

## 🔐 Default Admin Credentials

When you first start the application, a default admin user is automatically created with:

- **Email**: `admin@anantya2025.com`
- **Password**: `admin123`

**⚠️ Important**: Change these credentials after first login for security!

## 🛠️ Admin Management

### Login

1. Navigate to `/admin/login`
2. Use your admin credentials
3. You'll be redirected to `/admin` dashboard

### Add New Admin Users

Only existing admins can create new admin accounts:

```bash
POST /api/admin/users
{
  "email": "newadmin@example.com",
  "password": "securepassword123"
}
```

### View Admin Users

```bash
GET /api/admin/users
```

Returns list of all admin users (passwords excluded).

## 🧪 Testing

### Test MongoDB Connection

```bash
npx tsx src/scripts/test-admin.ts
```

This script will:
- Test MongoDB connection
- Check if admin collection exists
- Count admin users
- Display admin information

### Test Admin API

```bash
# Initialize admin system
curl -X POST http://localhost:3000/api/admin/init

# Login
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@anantya2025.com","password":"admin123"}'
```

## 🔒 Security Features

1. **Password Hashing** - All passwords are hashed using bcrypt with 12 salt rounds
2. **JWT Tokens** - Secure session management with configurable expiration
3. **Database Indexing** - Fast email lookups with unique constraints
4. **Input Validation** - Proper email and password validation
5. **Error Handling** - Secure error messages without information leakage

## 📊 Performance Improvements

- **Database Indexing** - Email field is indexed for O(1) lookups
- **Connection Pooling** - MongoDB connections are reused efficiently
- **Projection Queries** - Only necessary fields are fetched
- **Async Operations** - Non-blocking authentication flow

## 🚨 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check `MONGODB_URI` in `.env.local`
   - Ensure MongoDB is running
   - Verify network connectivity

2. **Admin Login Fails**
   - Check if admin user exists in database
   - Verify credentials are correct
   - Check browser console for errors

3. **Slow Authentication**
   - Ensure MongoDB indexes are created
   - Check database connection performance
   - Verify network latency

### Debug Mode

Enable detailed logging by checking browser console and server logs for:
- Database connection status
- Admin initialization messages
- Authentication flow details

## 🔄 Migration from Old System

If you're upgrading from the previous hardcoded system:

1. **Backup** your existing data
2. **Update** environment variables
3. **Restart** the application
4. **Test** admin login with new system
5. **Remove** old hardcoded credentials

## 📝 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/login` | POST | Admin authentication |
| `/api/admin/logout` | POST | Admin logout |
| `/api/admin/init` | GET/POST | Initialize admin system |
| `/api/admin/users` | GET | List admin users |
| `/api/admin/users` | POST | Create new admin user |

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review server logs
3. Test with the provided test script
4. Verify environment configuration

---

**Note**: This system automatically creates the necessary database structure on first run. No manual database setup is required.
