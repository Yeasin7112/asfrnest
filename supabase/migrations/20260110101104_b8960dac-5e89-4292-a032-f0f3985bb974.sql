-- Add user_id column to problem_submissions (nullable for anonymous submissions)
ALTER TABLE public.problem_submissions
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Add user_id column to service_orders (nullable for anonymous submissions)
ALTER TABLE public.service_orders
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Allow authenticated users to view their own submissions
CREATE POLICY "Users can view their own submissions"
ON public.problem_submissions
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Allow authenticated users to view their own orders
CREATE POLICY "Users can view their own orders"
ON public.service_orders
FOR SELECT
TO authenticated
USING (user_id = auth.uid());