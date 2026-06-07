# Complete Content & Feature Overhaul — Dr. Mohammed Rabea Khairy Platform

> **Project path:** `/home/moaz-gazer/practices/dr_rabie_khairy/`
> This prompt replaces all existing content/data with the correct doctor identity and new features.
> Execute all tasks in order. Run a full health-check at the end.

---

## Doctor Identity (Ground Truth — Use Everywhere)

| Field | Value |
|---|---|
| **Full name (EN)** | Prof. Dr. Mohammed Rabea Khairy |
| **Full name (AR)** | أ.د. محمد ربيع خيري |
| **Title (EN)** | Professor of Medicine & Consultant ENT Surgeon — Rhinoplasty & Endoscopic Sinus Surgery |
| **Title (AR)** | أستاذ بكلية الطب وإستشاري الأنف والأذن والحنجرة وتجميل الأنف ومناظير الجيوب الأنفية |
| **Affiliation (EN)** | Faculty of Medicine — Cairo University |
| **Affiliation (AR)** | كلية الطب — جامعة القاهرة |
| **Specialty domain** | ENT (Ear, Nose & Throat) Surgery |
| **WhatsApp booking** | `01124427427` |

### Specializations list (AR):
```
جراحات الأنف والأذن والحنجرة
مناظير الجيوب الأنفية
اللوز واللحمية
ترقيع الطبلة
أنابيب التهوية
الشخير وصعوبة التنفس
```

### Specializations list (EN):
```
Ear, Nose & Throat (ENT) Surgery
Endoscopic Sinus Surgery
Tonsillectomy & Adenoidectomy
Tympanoplasty (Eardrum Repair)
Ventilation Tube Insertion
Snoring & Sleep-Disordered Breathing
Rhinoplasty (Nose Reshaping)
```

---

## Task 1 — Overhaul All Doctor Data Files

Update every data file and translation string to reflect the correct doctor identity and ENT specialty.

### `lib/data/doctor.ts`
Replace all content with:
- `name.en`: `"Prof. Dr. Mohammed Rabea Khairy"`
- `name.ar`: `"أ.د. محمد ربيع خيري"`
- `title.en`: `"Professor of Medicine & Consultant ENT Surgeon"`
- `title.ar`: `"أستاذ بكلية الطب وإستشاري الأنف والأذن والحنجرة"`
- `affiliation`: `"Faculty of Medicine, Cairo University"`
- `shortBio.en`: A 2-sentence biography about Prof. Dr. Mohammed Rabea Khairy as an ENT surgeon and rhinoplasty specialist at Cairo University.
- `shortBio.ar`: Same in Arabic.
- `specializations`: Use the EN specializations list above (7 items).
- `stats`: Update stat labels to be ENT-relevant:
  - Years of Experience: `25+`
  - Surgeries Performed: `10,000+`
  - Patients Treated: `50,000+`
  - Publications: `80+`

### `lib/data/services.ts`
Delete all existing hepatology/gastroenterology/internal medicine categories.
Replace with 3 new `ServiceCategory` entries — each with bilingual `{ en, ar }` fields:

**Category 1 — ENT Surgery (جراحات الأنف والأذن والحنجرة)**
Conditions:
- Chronic Sinusitis → Endoscopic Sinus Surgery (FESS)
- Tonsillitis & Adenoid Hypertrophy → Tonsillectomy / Adenoidectomy
- Ear Drum Perforation → Tympanoplasty

**Category 2 — Rhinoplasty & Nasal Surgery (تجميل الأنف والجراحات الأنفية)**
Conditions:
- Deviated Nasal Septum → Septoplasty
- Cosmetic Nose Reshaping → Open/Closed Rhinoplasty
- Nasal Polyps → Endoscopic Polypectomy

**Category 3 — Snoring & Breathing Disorders (الشخير وصعوبة التنفس)**
Conditions:
- Snoring / OSAS → UPPP, tongue base reduction, or CPAP guidance
- Nasal Obstruction → Turbinate reduction, septal correction
- Ventilation Tube (Grommets) → Myringotomy with tube insertion

Each condition must have bilingual `name`, `description`, `symptoms[]`, and `treatments[]` with `name`, `description`, `approach` — all in `{ en, ar }` format matching the existing TypeScript interface.

### `lib/data/timeline.ts`
Replace all timeline items with realistic ENT/academic career milestones for Prof. Dr. Mohammed Rabea Khairy:
- Medical degree (Cairo University)
- ENT residency / fellowship
- Rhinoplasty subspecialty training (include a European or Gulf institution)
- Academic appointment at Cairo University Faculty of Medicine
- Consultant certification
- Key achievements / awards in ENT surgery
Use the existing `TimelineItem` TypeScript interface. All `title`, `institution`, `description` fields must be bilingual `{ en, ar }`.

### `lib/data/blog.ts`
Replace all 6 blog posts with ENT-relevant articles, all bilingual `{ en, ar }`:
- "Endoscopic Sinus Surgery: What to Expect Before, During & After"
- "5 Signs You May Have a Deviated Septum"
- "Rhinoplasty in Egypt: Safety, Recovery & Results"
- "Snoring vs Sleep Apnea: How to Tell the Difference"
- "Should My Child Have Their Tonsils Removed?"
- "Ventilation Tubes for Kids: A Parent's Complete Guide"

Replace all 6 myth/fact cards with ENT-relevant myths:
- Myth: "ENT surgery is only cosmetic." Fact: Most ENT procedures correct breathing/hearing problems.
- Myth: "Snoring is harmless." Fact: Can indicate sleep apnea with serious health consequences.
- Myth: "Children always outgrow tonsil problems." Fact: Chronic cases require surgical intervention.
- Myth: "Rhinoplasty results look unnatural." Fact: Modern techniques produce highly natural results.
- Myth: "Sinus surgery is very painful." Fact: FESS is minimally invasive with rapid recovery.
- Myth: "Ear tubes fall out on their own — no need for follow-up." Fact: Regular monitoring is essential.

### `lib/i18n/translations.ts`
Update all hardcoded doctor-specific strings to match the new identity:
- `hero.name.en/ar` → new name
- `hero.title.en/ar` → new title
- `hero.affiliation.en/ar` → new affiliation
- `hero.description.en/ar` → new 2-sentence ENT-focused description
- `hero.badges` → replace WHO/EASL/AASLD with ENT-relevant credentials:
  - EN: `"Egyptian ENT Society Member"`, `"Rhinoplasty Expert"`, `"Cairo University Professor"`
  - AR: `"عضو الجمعية المصرية للأنف والأذن والحنجرة"`, `"خبير تجميل الأنف"`, `"أستاذ جامعة القاهرة"`
- `footer.tagline.en/ar` → `"ENT Surgery & Rhinoplasty"` / `"جراحة الأنف والأذن والحنجرة وتجميل الأنف"`
- Update `services`, `blog`, `videos`, `about`, `conferences` section strings to reflect ENT specialty context where applicable.

---

## Task 2 — Replace "Register for Workshop" with WhatsApp CTA

**Problem:**
Every instance of "Register for Workshop" / "سجّل في الورشة" across the app (Navbar, Hero, Footer, Workshop page, Home CTA banner) links to `/workshop` and shows a registration form. The client wants this replaced with a direct WhatsApp messaging link to the clinic.

**Fix:**
- WhatsApp number: `01124427427`
- WhatsApp deep link: `https://wa.me/201124427427`
- Replace **every** `<Link href="/workshop">` or `<a href="/workshop">` that carries the workshop register CTA label with:
  ```tsx
  <a
    href="https://wa.me/201124427427"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gold"
  >
    <MessageCircle size={18} />
    {t.nav.bookWhatsApp}  {/* EN: "Book via WhatsApp" | AR: "احجز عبر واتساب" */}
  </a>
  ```
- Add `bookWhatsApp` key to `translations.ts`:
  - `en`: `"Book via WhatsApp"`
  - `ar`: `"احجز عبر واتساب"`
- Import `MessageCircle` from `lucide-react` wherever the WhatsApp button is used.
- The `/workshop` page itself can stay but its registration form should also be replaced with the WhatsApp button + clinic location info (see Task 3).
- Update Navbar `registerWorkshop` translation key label to match the new WhatsApp CTA label.

---

## Task 3 — Add Clinic Locations Section (Shared Across All Pages)

**Clinic Data:**

| Branch | Address (AR) | Address (EN) |
|---|---|---|
| التجمع الخامس | كايرو مديكال سنتر، بجوار مستشفى الشفا | Cairo Medical Center, next to Al-Shifa Hospital, New Cairo (5th Settlement) |
| الزقازيق | ميدان الصاغة، أول الكوبري العلوي، أمام وديع انطوان | Al-Sagha Square, Al-Kobri Al-Alawi St., opposite Wadea Anton, Zagazig |

**Booking:** WhatsApp & Phone `01124427427`

### 3a — Create a `ClinicLocations` component

Create `components/public/ClinicLocations.tsx` as a **client component** that:
- Accepts no props
- Uses `useLanguage()` for bilingual labels
- Renders a full-width dark-petrol section (`bg-[var(--petrol-950)]`) with two clinic cards side by side (grid, responsive: 1 col mobile → 2 cols desktop)
- Each clinic card shows:
  - Branch name badge (e.g. "التجمع الخامس" / "Fifth Settlement")
  - Full address in the active language
  - A "Get Directions" link (placeholder `href="#"`)
  - A WhatsApp button: `https://wa.me/201124427427`
- Below the two cards, a full-width centered row with a large phone/WhatsApp CTA:
  - 📞 `01124427427`
  - WhatsApp icon + "Book Appointment" / "احجز موعد" button linking to `https://wa.me/201124427427`
- Add the following bilingual keys to `translations.ts` under a new `clinics` namespace:
  ```
  clinics.heading.en: "Our Clinic Locations"
  clinics.heading.ar: "فروعنا"
  clinics.label.en: "Find Us"
  clinics.label.ar: "أين نحن"
  clinics.getDirections.en: "Get Directions"
  clinics.getDirections.ar: "احصل على الاتجاهات"
  clinics.bookWhatsApp.en: "Book via WhatsApp"
  clinics.bookWhatsApp.ar: "احجز عبر واتساب"
  clinics.phone.en: "Booking & WhatsApp"
  clinics.phone.ar: "للحجز والاستفسار"
  ```

### 3b — Add clinic data to `lib/data/clinics.ts`

Create `lib/data/clinics.ts`:
```ts
export interface Clinic {
  id: string;
  branch: { en: string; ar: string };
  address: { en: string; ar: string };
  phone: string;
  whatsapp: string;
  mapsUrl?: string;
}

export const clinics: Clinic[] = [
  {
    id: "c1",
    branch: { en: "Fifth Settlement (New Cairo)", ar: "التجمع الخامس" },
    address: {
      en: "Cairo Medical Center, next to Al-Shifa Hospital, 5th Settlement, New Cairo",
      ar: "كايرو مديكال سنتر، بجوار مستشفى الشفا، التجمع الخامس، القاهرة الجديدة",
    },
    phone: "01124427427",
    whatsapp: "https://wa.me/201124427427",
    mapsUrl: "#",
  },
  {
    id: "c2",
    branch: { en: "Zagazig", ar: "الزقازيق" },
    address: {
      en: "Al-Sagha Square, Al-Kobri Al-Alawi St., opposite Wadea Anton, Zagazig",
      ar: "ميدان الصاغة، أول الكوبري العلوي، أمام وديع انطوان، الزقازيق",
    },
    phone: "01124427427",
    whatsapp: "https://wa.me/201124427427",
    mapsUrl: "#",
  },
];
```

### 3c — Embed `ClinicLocations` in the public layout

In `app/(public)/layout.tsx`, place `<ClinicLocations />` **between `<main>` and `<Footer />`** so it appears automatically on every public page without adding it to each page individually:

```tsx
<LanguageProvider>
  <Navbar />
  <main>{children}</main>
  <ClinicLocations />   {/* ← insert here */}
  <Footer />
</LanguageProvider>
```

### 3d — Update Footer contact info

In `components/public/Footer.tsx`, replace the placeholder phone/email contact block with the real clinic data:
- Show both branch names with their addresses.
- Show the WhatsApp number `01124427427` as a `tel:` and `wa.me` link.
- Remove the placeholder `appointments@drrabiekhairy.com` email or replace with a generic inquiry note.

---

## Task 4 — Update Videos Data to ENT Specialty

In `lib/data/videos.ts`, replace all 9 video entries with ENT-relevant titles and descriptions:
- "Understanding Chronic Sinusitis — Causes & Surgical Solutions"
- "Rhinoplasty in 5 Minutes — What Really Happens in the Operating Room"
- "Tonsil Removal: When Is It Necessary for Children?"
- "Snoring vs Sleep Apnea — Prof. Khairy Explains the Difference"
- "Endoscopic Sinus Surgery (FESS) — Before & After Patient Journey"
- "Eardrum Repair (Tympanoplasty) — Patient Education Guide"
- "Ventilation Tubes for Kids — A Parent's Guide"
- "Deviated Septum: Can You Fix It Without Surgery?"
- "Rhinoplasty Recovery Timeline — Day by Day"

Keep the same data structure (`thumbnailGradient`, `category`, `duration`, `views`, `date`). Use realistic view counts and categories.

---

## Verification

After all tasks are complete, run:

```bash
for route in / /about /services /blog /videos /conferences /testimonials /workshop /dashboard /dashboard/media /dashboard/workshop /dashboard/blog; do
  echo -n "$route: "
  curl -s -o /dev/null -w "%{http_code}" http://localhost:3000$route
  echo
done
```

**All 12 routes must return `200`.**
