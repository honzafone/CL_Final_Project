// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://lvoizjagakphmepozvpu.supabase.co'; // Vaše URL z Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2b2l6amFnYWtwaG1lcG96dnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNjEzMTYsImV4cCI6MjA0NTYzNzMxNn0.i5eTx8cpLz5dUVAjZSPvtNGNp4BCTSj8sHJJYFIgfYY'; // Váš Anon Public Key z Supabase
console.log(supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
