

const { MongoClient } = require('mongodb');

async function testAdminSystem() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    console.log('🔌 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('anantya2025');
    const adminCollection = db.collection('admin_users');

    // Check if admin collection exists
    const collections = await db.listCollections().toArray();
    const adminCollectionExists = collections.some(col => col.name === 'admin_users');
    
    if (adminCollectionExists) {
      console.log('✅ Admin collection exists');
      
      // Check admin users
      const adminCount = await adminCollection.countDocuments();
      console.log(`📊 Found ${adminCount} admin user(s)`);
      
      if (adminCount > 0) {
        const admins = await adminCollection.find({}, { projection: { passwordHash: 0 } }).toArray();
        console.log('👥 Admin users:', admins.map(a => ({ email: a.email, role: a.role, createdAt: a.createdAt })));
      }
    } else {
      console.log('❌ Admin collection does not exist');
    }

    // Test database connection
    const result = await db.command({ ping: 1 });
    console.log('🏓 Database ping result:', result);

  } catch (error) {
    console.error('❌ Error testing admin system:', error);
  } finally {
    await client.close();
    console.log('🔌 MongoDB connection closed');
  }
}

// Run the test
testAdminSystem().catch(console.error);
