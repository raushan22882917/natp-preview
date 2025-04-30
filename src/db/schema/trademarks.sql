-- Table definition for trademarks
create table public.trademarks (
  id uuid not null default gen_random_uuid(),
  owner_name text not null,
  application_number text not null,
  national_classes text null,
  application_date date null,
  description text null,
  logo_url text null,
  created_at timestamp with time zone not null default now(),
  constraint trademarks_pkey primary key (id),
  constraint trademarks_application_number_key unique (application_number)
) TABLESPACE pg_default;
