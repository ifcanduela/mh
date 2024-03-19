import { createClient } from "@supabase/supabase-js"

export default function useSupabase() {
	const runtimeConfig = useRuntimeConfig()

	const supabaseUrl = "https://piumxcungvlrwbwuzomy.supabase.co"
	const supabaseKey =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdW14Y3VuZ3Zscndid3V6b215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTk0MzIsImV4cCI6MjAyMTQ5NTQzMn0.GpxlaUSR7GDv_J9Y7S_5VkDKGQHc9gSxm35aCEFhhK8"

	return createClient(supabaseUrl, supabaseKey)
}
