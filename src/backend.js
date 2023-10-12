import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rczlpbrswmmgbteefilv.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const { data: categories } = await supabase
  .from('categories')
  .select('*')

export const { data: resources } = await supabase
  .from('resources')
  .select('*')