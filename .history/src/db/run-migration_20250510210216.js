// Script to run database migrations
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create Supabase client
const SUPABASE_URL = "https://koljfqumuugekkvmupcx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbGpmcXVtdXVnZWtrdm11cGN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NDUxNTIsImV4cCI6MjA2MTIyMTE1Mn0.q_Ti5BMmR2LXbXDshiDIVzI6Ke7A7XIIEcrrj0AxdqI";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

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

  // Get current file's directory in ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

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
