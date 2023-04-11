import { createClient } from '@supabase/supabase-js'

const URL = 'https://hnqvxicgfmoaolhnckgr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucXZ4aWNnZm1vYW9saG5ja2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMTE5MTksImV4cCI6MTk5NjY4NzkxOX0.9OB_6Tu7bVQ-3FerhY3YyD-BOt6KHCReMHINYIvbP2o';

export const supabase = createClient(URL, API_KEY);
