console.log('Hello World!');

const supabaseUrl = 'https://zqasewvztxlptororaie.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxYXNld3Z6dHhscHRvcm9yYWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1MjgyNjAsImV4cCI6MjAwMTEwNDI2MH0.JJit0kmCJye8SUIrOZvQ482sgbqNh92uFDaa2gCPPKI';

const { createClient } = supabase;
const _supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase Instance: ', _supabase);
