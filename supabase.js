import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabase_url = 'https://knlxjuneogvzjnauntlx.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubHhqdW5lb2d2empuYXVudGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MzM2ODIsImV4cCI6MTk2NjEwOTY4Mn0.wsW5zSbCncLaltEmZzGcTG3sEr4fnM5SrVQvLmFV_TE';
const supabase = createClient(supabase_url, supabase_key, {
  localStorage: AsyncStorage,
});

export default supabase;