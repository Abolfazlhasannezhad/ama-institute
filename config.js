// تنظیمات اتصال به Supabase
// این دو مقدار از پروژهٔ خودت در Supabase گرفته شده و کاملاً امنه که در فرانت‌اند باشه

const SUPABASE_URL = "https://fgfyqmjqswxqppxdldaa.supabase.co";
const SUPABASE_KEY = "sb_publishable_Uxx6G4-G4xVafHU7C4HwBw_wYOOIfRR";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// نام دامنهٔ داخلی که برای ساخت ایمیل ساختگی از روی نام کاربری استفاده می‌شه
const INTERNAL_EMAIL_DOMAIN = "edu-system.internal";

function usernameToEmail(username) {
  return `${username}@${INTERNAL_EMAIL_DOMAIN}`;
}
