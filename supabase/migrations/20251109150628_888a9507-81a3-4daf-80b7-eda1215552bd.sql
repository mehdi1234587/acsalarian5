-- Create requests table for course requests
CREATE TABLE public.requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can insert requests" 
ON public.requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading (for admin purposes later if needed)
CREATE POLICY "Anyone can view requests" 
ON public.requests 
FOR SELECT 
USING (true);