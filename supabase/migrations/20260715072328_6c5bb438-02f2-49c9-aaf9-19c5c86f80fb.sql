CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 120
    AND length(email) BETWEEN 3 AND 254
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(city) BETWEEN 1 AND 120
    AND length(event_type) BETWEEN 1 AND 60
    AND length(message) BETWEEN 1 AND 2000
    AND event_date >= CURRENT_DATE - INTERVAL '1 day'
  );