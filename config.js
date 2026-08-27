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
 
// تبدیل خطاهای فنی دیتابیس به پیام قابل‌فهم برای کاربر
function friendlyError(error) {
  if (!error) return "خطای نامشخصی رخ داد.";
  const code = error.code || "";
  const msg = error.message || "";
 
  if (code === "23505" || msg.includes("duplicate key")) {
    return "این مقدار قبلاً ثبت شده است (احتمالاً کد ملی یا نام کاربری تکراری است).";
  }
  if (code === "23503" || msg.includes("foreign key")) {
    return "امکان ثبت وجود ندارد؛ یکی از موارد مرتبط پیدا نشد.";
  }
  if (code === "42501" || msg.includes("permission denied") || msg.includes("policy")) {
    return "شما اجازهٔ انجام این عملیات را ندارید.";
  }
  if (msg.includes("Failed to fetch") || msg.includes("network")) {
    return "خطا در ارتباط با سرور. اتصال اینترنت خود را بررسی کنید.";
  }
  return "خطایی رخ داد. لطفاً دوباره تلاش کنید.";
}
 
