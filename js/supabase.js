// ======================================
// SUPABASE CONFIG
// ======================================

const SUPABASE_URL =
    "https://oqlbhowuulthnxrseunt.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_WriUr37j7o-EzKirI0wpHQ_v1moKgt0";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);