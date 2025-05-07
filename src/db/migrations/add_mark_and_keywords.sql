-- Migration to add mark and keywords fields to trademarks table

-- Add mark column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'trademarks' 
        AND column_name = 'mark'
    ) THEN
        ALTER TABLE trademarks ADD COLUMN mark text;
    END IF;
END $$;

-- Add keywords column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'trademarks' 
        AND column_name = 'keywords'
    ) THEN
        ALTER TABLE trademarks ADD COLUMN keywords text[];
    END IF;
END $$;

-- Update existing records to set mark equal to owner_name if mark is null
UPDATE trademarks
SET mark = owner_name
WHERE mark IS NULL;

-- Create an index on the keywords column for better performance
CREATE INDEX IF NOT EXISTS idx_trademarks_keywords ON trademarks USING GIN (keywords);

-- Add comment to explain the purpose of the columns
COMMENT ON COLUMN trademarks.mark IS 'The trademark wordmark that appears as the headline';
COMMENT ON COLUMN trademarks.keywords IS 'Array of keywords/tags associated with the trademark';
