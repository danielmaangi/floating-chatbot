/*
  # Create documents table with vector embeddings

  1. New Tables
    - `documents`
      - `id` (uuid, primary key)
      - `content` (text)
      - `embedding` (vector)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `documents` table
    - Add policy for authenticated users to read documents
*/

-- Enable the vector extension
create extension if not exists vector;

-- Create documents table
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  embedding vector(1536),
  created_at timestamptz default now()
);

-- Create a function to match documents based on embedding similarity
create or replace function match_documents(query_embedding vector(1536), match_count int)
returns table (id uuid, content text, similarity float)
language plpgsql
as $$
begin
  return query
  select
    documents.id,
    documents.content,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- Enable RLS
alter table documents enable row level security;

-- Create policy for reading documents
create policy "Allow read access to documents"
  on documents
  for select
  to authenticated
  using (true);