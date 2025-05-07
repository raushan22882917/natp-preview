# Database Migrations

This directory contains database schema definitions and migrations for the application.

## Running Migrations

To run a migration, use the following command:

```bash
node src/db/run-migration.js <migration-file-name>
```

For example, to run the migration to add the mark and keywords fields:

```bash
node src/db/run-migration.js add_mark_and_keywords.sql
```

## Available Migrations

- `add_mark_and_keywords.sql`: Adds the `mark` and `keywords` fields to the trademarks table

## Database Schema

The database schema is defined in the `schema` directory. The main tables are:

- `trademarks`: Stores trademark information
- `articles`: Stores articles associated with trademarks

## Trademarks Table

The trademarks table has the following structure:

```sql
create table public.trademarks (
  id uuid not null default gen_random_uuid(),
  owner_name text not null,
  mark text null,
  application_number text not null,
  national_classes text null,
  application_date date null,
  description text null,
  logo_url text null,
  keywords text[] null,
  created_at timestamp with time zone not null default now(),
  constraint trademarks_pkey primary key (id),
  constraint trademarks_application_number_key unique (application_number)
);
```

## Keywords

The `keywords` field is an array of strings that can be used to categorize trademarks. The application allows selecting up to 5 keywords per trademark.
