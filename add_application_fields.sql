-- Add new fields to the applications table

-- Add class column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND column_name = 'class'
    ) THEN
        ALTER TABLE applications ADD COLUMN class text;
    END IF;
END $$;

-- Add us_class column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND column_name = 'us_class'
    ) THEN
        ALTER TABLE applications ADD COLUMN us_class text;
    END IF;
END $$;

-- Add zip column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND column_name = 'zip'
    ) THEN
        ALTER TABLE applications ADD COLUMN zip text;
    END IF;
END $$;

-- Add city column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND column_name = 'city'
    ) THEN
        ALTER TABLE applications ADD COLUMN city text;
    END IF;
END $$;

-- Add country column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND column_name = 'country'
    ) THEN
        ALTER TABLE applications ADD COLUMN country text;
    END IF;
END $$;

-- Add agree column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'applications' 
        AND column_name = 'agree'
    ) THEN
        ALTER TABLE applications ADD COLUMN agree boolean;
    END IF;
END $$;

-- Add comments to explain the purpose of the columns
COMMENT ON COLUMN applications.class IS 'National trademark class';
COMMENT ON COLUMN applications.us_class IS 'US trademark class';
COMMENT ON COLUMN applications.zip IS 'ZIP/Postal code';
COMMENT ON COLUMN applications.city IS 'City';
COMMENT ON COLUMN applications.country IS 'Country';
COMMENT ON COLUMN applications.agree IS 'Agreement to terms';
