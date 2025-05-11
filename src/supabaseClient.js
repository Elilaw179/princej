import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cskmlbudpmfpvlellefv.supabase.co';
const supabaseAnonKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNza21sYnVkcG1mcHZsZWxsZWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NDQ1MzAsImV4cCI6MjA2MjEyMDUzMH0.TnJsK-UtSWJcGaEtuXpWVEZ3dhlCbVqNmW9W17dOvdk'
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
