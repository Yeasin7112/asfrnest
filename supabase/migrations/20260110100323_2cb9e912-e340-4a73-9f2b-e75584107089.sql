-- Create storage bucket for problem screenshots
INSERT INTO storage.buckets (id, name, public)
VALUES ('problem-screenshots', 'problem-screenshots', true);

-- Allow anyone to upload screenshots
CREATE POLICY "Anyone can upload screenshots"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'problem-screenshots');

-- Allow anyone to view screenshots
CREATE POLICY "Anyone can view screenshots"
ON storage.objects FOR SELECT
USING (bucket_id = 'problem-screenshots');

-- Allow admins to delete screenshots
CREATE POLICY "Admins can delete screenshots"
ON storage.objects FOR DELETE
USING (bucket_id = 'problem-screenshots' AND public.has_role(auth.uid(), 'admin'));

-- Add screenshot_url column to problem_submissions
ALTER TABLE public.problem_submissions
ADD COLUMN screenshot_url TEXT;