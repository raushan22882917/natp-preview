// Script to run database migrations
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

// Create Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigration(filePath) {
  try {
    console.log(`Running migration: ${filePath}`);
    
    // Read the SQL file
    const sql = fs.readFileSync(filePath, 'utf8');
    
    // Execute the SQL
    const { error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('Migration failed:', error);
      return false;
    }
    
    console.log(`Migration successful: ${filePath}`);
    return true;
  } catch (error) {
    console.error('Error running migration:', error);
    return false;
  }
}

async function main() {
  // Get the migration file path from command line arguments
  const migrationFile = process.argv[2];
  
  if (!migrationFile) {
    console.error('Please provide a migration file path');
    process.exit(1);
  }
  
  const filePath = path.resolve(__dirname, 'migrations', migrationFile);
  
  if (!fs.existsSync(filePath)) {
    console.error(`Migration file not found: ${filePath}`);
    process.exit(1);
  }
  
  const success = await runMigration(filePath);
  
  if (!success) {
    console.error('Migration failed');
    process.exit(1);
  }
  
  console.log('Migration completed successfully');
}

main();
