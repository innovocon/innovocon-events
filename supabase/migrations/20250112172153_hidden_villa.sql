/*
  # Add event details tables

  1. New Tables
    - `event_details`
      - `id` (text, primary key) - page identifier (home, hacknex, hackflag, zenith)
      - `title` (text)
      - `date` (text)
      - `venue` (text) 
      - `description` (text)
      - `prize_pool` (text)
      - `team_size` (text)
      - `organizers` (jsonb) - array of organizer objects
      - `sponsors` (jsonb) - array of sponsor objects
      - `communities` (jsonb) - array of community objects
      - `tracks` (jsonb) - array of track objects
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Allow public read access
    - Allow authenticated users to manage data
*/

CREATE TABLE IF NOT EXISTS event_details (
  id text PRIMARY KEY,
  title text NOT NULL,
  date text NOT NULL,
  venue text NOT NULL,
  description text NOT NULL,
  prize_pool text NOT NULL,
  team_size text NOT NULL,
  organizers jsonb NOT NULL DEFAULT '[]'::jsonb,
  sponsors jsonb NOT NULL DEFAULT '[]'::jsonb,
  communities jsonb NOT NULL DEFAULT '[]'::jsonb,
  tracks jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE event_details ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON event_details
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage data
CREATE POLICY "Allow authenticated users to manage event_details"
  ON event_details
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
CREATE TRIGGER update_event_details_updated_at
  BEFORE UPDATE ON event_details
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert initial data for each page
INSERT INTO event_details (id, title, date, venue, description, prize_pool, team_size, organizers, sponsors, communities, tracks) 
VALUES 
  ('hacknex', 
    'HackNex 2025',
    'February 15-16, 2025',
    'JIS College of Engineering, Kalyani',
    'Hack. Build. Revolutionize.',
    '$10,000',
    '2-4 Members',
    '[
      {
        "name": "John Doe",
        "type": "community",
        "designation": "Lead Organizer",
        "photo": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
        "role": "Event Director",
        "socialLinks": {
          "linkedin": "https://linkedin.com/in/johndoe",
          "twitter": "https://twitter.com/johndoe",
          "github": "https://github.com/johndoe"
        }
      }
    ]',
    '[
      {
        "name": "TechCorp",
        "type": "title",
        "logo": "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
        "website": "https://example.com",
        "description": "Leading technology solutions provider"
      }
    ]',
    '[
      {
        "name": "IEEE Student Branch JISCE",
        "logo": "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
        "description": "Technical community of JISCE",
        "joinLink": "https://example.com/join"
      }
    ]',
    '[
      {
        "title": "HealthTech",
        "description": "Innovate healthcare solutions using technology"
      }
    ]'
  ),
  ('hackflag',
    'HackFlag 2025',
    'February 15-16, 2025',
    'JIS College of Engineering, Kalyani',
    'Decode. Defend. Conquer.',
    '$5,000',
    '1-3 Members',
    '[
      {
        "name": "Jane Smith",
        "type": "community",
        "designation": "Security Lead",
        "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
        "role": "CTF Coordinator",
        "socialLinks": {
          "linkedin": "https://linkedin.com/in/janesmith",
          "twitter": "https://twitter.com/janesmith",
          "github": "https://github.com/janesmith"
        }
      }
    ]',
    '[
      {
        "name": "SecureGuard",
        "type": "title",
        "logo": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        "website": "https://example.com",
        "description": "Cybersecurity solutions provider"
      }
    ]',
    '[
      {
        "name": "CSI Student Branch JISCE",
        "logo": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        "description": "Computer Society of India JISCE Chapter",
        "joinLink": "https://example.com/join"
      }
    ]',
    '[
      {
        "title": "Web Security",
        "description": "Test your skills in web application security"
      }
    ]'
  ),
  ('zenith',
    'Zenith 2025',
    'February 16, 2025',
    'JIS College of Engineering, Kalyani',
    'Dominate. Conquer. Reign.',
    '$7,000',
    'Solo & Team',
    '[
      {
        "name": "Mike Johnson",
        "type": "community",
        "designation": "Gaming Lead",
        "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
        "role": "Tournament Director",
        "socialLinks": {
          "linkedin": "https://linkedin.com/in/mikejohnson",
          "twitter": "https://twitter.com/mikejohnson",
          "github": "https://github.com/mikejohnson"
        }
      }
    ]',
    '[
      {
        "name": "GameVerse",
        "type": "title",
        "logo": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
        "website": "https://example.com",
        "description": "Gaming and entertainment company"
      }
    ]',
    '[
      {
        "name": "GDSC JISCE",
        "logo": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
        "description": "Google Developer Student Clubs JISCE",
        "joinLink": "https://example.com/join"
      }
    ]',
    '[
      {
        "title": "Valorant",
        "description": "5v5 Tactical Shooter Tournament"
      }
    ]'
  );