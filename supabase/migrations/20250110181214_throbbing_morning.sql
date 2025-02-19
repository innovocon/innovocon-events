/*
  # Create events table

  1. New Tables
    - `events`
      - `id` (text, primary key)
      - `title` (text)
      - `date` (text)
      - `venue` (text)
      - `description` (text)
      - `prizePool` (text)
      - `teamSize` (text)
      - `organizers` (jsonb)
      - `sponsors` (jsonb)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policies for authenticated users to manage events
*/

CREATE TABLE IF NOT EXISTS events (
  id text PRIMARY KEY,
  title text NOT NULL,
  date text NOT NULL,
  venue text NOT NULL,
  description text NOT NULL,
  "prizePool" text NOT NULL,
  "teamSize" text NOT NULL,
  organizers jsonb NOT NULL DEFAULT '[]'::jsonb,
  sponsors jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Allow read access to everyone
CREATE POLICY "Allow public read access"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage events
CREATE POLICY "Allow authenticated users to manage events"
  ON events
  USING (auth.role() = 'authenticated');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();