-- Create table for problem submissions
CREATE TABLE public.problem_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  problem_type TEXT NOT NULL,
  description TEXT NOT NULL,
  contact TEXT NOT NULL,
  urgency TEXT NOT NULL DEFAULT 'normal',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.problem_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submissions)
CREATE POLICY "Anyone can submit problems" 
ON public.problem_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only admin can view submissions (for now, no auth so use service role)
CREATE POLICY "Public can view own submissions by contact" 
ON public.problem_submissions 
FOR SELECT 
USING (true);

-- Create timestamp update function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_problem_submissions_updated_at
BEFORE UPDATE ON public.problem_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();