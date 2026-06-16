const WHATSAPP_NUMBER = "201124427427";

export function whatsappUrl(context?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({
    utm_source: "website",
    utm_medium: "whatsapp",
    ...(context ? { utm_campaign: context } : {}),
  });
  return `${base}?${params.toString()}`;
}

export const WHATSAPP_PHONE_DISPLAY = "01124427427";
