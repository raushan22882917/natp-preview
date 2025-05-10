-- Add us_classes column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'trademarks' 
        AND column_name = 'us_classes'
    ) THEN
        ALTER TABLE trademarks ADD COLUMN us_classes text;
    END IF;
END $$;

-- Add comment to explain the purpose of the column
COMMENT ON COLUMN trademarks.us_classes IS 'US trademark classes associated with the trademark';
