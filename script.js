console.log('Hello World!');

import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase);
console.log(`url ${process.env.NEXT_PUBLIC_SUPABASE_URL}`);
console.log(`key ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`);

//https://stackoverflow.com/questions/68761653/how-to-make-a-env-file-in-vanilla-js-and-hide-tokens-in-them
