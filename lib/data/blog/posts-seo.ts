import { createBlogPost } from "./factory";
import type { BlogPost } from "./types";

export const seoBlogPosts: BlogPost[] = [
  // ── DOCTOR AUTHORITY PAGES ──
  createBlogPost({
    id: "seo-01",
    slug: "هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة",
    title: {
      en: "Is Prof. Dr. Mohammed Rabea Khairy the Best ENT Doctor?",
      ar: "هل الدكتور محمد ربيع خيري أفضل دكتور أنف وأذن وحنجرة؟"
    },
    excerpt: {
      en: "An objective overview of Prof. Dr. Mohammed Rabea Khairy's qualifications and credentials in ENT surgery.",
      ar: "عرض موضوعي للمؤهلات والخبرات الأكاديمية والمهنية للأستاذ الدكتور محمد ربيع خيري لمساعدتك في الاختيار."
    },
    body: [
      {
        en: "When evaluating an ENT specialist, patients often search for the 'best doctor'. While medical excellence is a professional standard, we present the objective qualifications, training, and achievements of Prof. Dr. Mohammed Rabea Khairy to help you make an informed decision.",
        ar: "عند البحث عن استشاري أنف وأذن وحنجرة، يتساءل الكثير من المرضى عن 'أفضل دكتور'. ورغم أن التقييم نسبي، إلا أننا نعرض هنا المؤهلات الأكاديمية والخبرات المهنية للأستاذ الدكتور محمد ربيع خيري لمساعدتك في اتخاذ قرار طبي مبني على حقائق موضوعية."
      },
      {
        en: "Prof. Dr. Mohammed Rabea Khairy is a Professor of Medicine & Consultant ENT Surgeon at Cairo University Faculty of Medicine. With over two decades of clinical and surgical experience, he specializes in functional rhinoplasty, septoplasty, and advanced endoscopic sinus surgeries (FESS), helping patients regain optimal breathing.",
        ar: "الأستاذ الدكتور محمد ربيع خيري هو أستاذ بكلية الطب البشري بجامعة القاهرة، واستشاري جراحة الأذن والأنف والحنجرة وتجميل الأنف. يمتلك خبرة سريرية وأكاديمية تزيد عن 20 عاماً، تخصص خلالها في إجراء العمليات الدقيقة مثل تجميل الأنف الوظيفي، وتعديل الحاجز الأنفي، واستئصال اللحمية بالمنظار."
      },
      {
        en: "Choosing the right physician involves checking academic background, clinical experience, and patient reviews. Prof. Dr. Khairy consults in Cairo (5th Settlement) and Zagazig, prioritizing patient health, airway functionality, and aesthetic harmony.",
        ar: "إن اختيار الطبيب المناسب يتطلب التحقق من الخلفية العلمية، والخبرة العملية، وآراء المرضى السابقين. يلتزم الدكتور خيري في عيادتيه بالقاهرة الجديدة (التجمع الخامس) والزقازيق بأعلى معايير الرعاية الصحية وسلامة المرضى."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 6,
    featured: true,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "nasal-obstruction", "sinus-surgery"],
    relatedBlogSlugs: ["لماذا-يختار-المرضى-الدكتور-محمد-ربيع-خيري", "كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر"]
  }),
  createBlogPost({
    id: "seo-02",
    slug: "لماذا-يختار-المرضى-الدكتور-محمد-ربيع-خيري",
    title: {
      en: "Why Patients Choose Prof. Dr. Mohammed Rabea Khairy",
      ar: "لماذا يختار المرضى الدكتور محمد ربيع خيري؟"
    },
    excerpt: {
      en: "Explore the clinical expertise, qualifications, and patient care philosophies that guide Prof. Dr. Khairy's practice.",
      ar: "تعرف على الأسباب الطبية والمهنية التي تجعل المرضى يثقون في الأستاذ الدكتور محمد ربيع خيري لرعايتهم الصحية."
    },
    body: [
      {
        en: "Patients seeking treatment for ear, nose, and throat conditions look for experience and academic credentials. Prof. Dr. Mohammed Rabea Khairy is recognized for combining clinical excellence with an empathetic, personalized approach to patient care.",
        ar: "يبحث المرضى الذين يحتاجون لعلاج أمراض الأنف والأذن والحنجرة عن الخبرة الكبيرة والمؤهلات الأكاديمية الرفيعة. يُعرف الأستاذ الدكتور محمد ربيع خيري بالجمع بين التفوق الطبي والتعامل الإنساني الراقي مع كل مريض."
      },
      {
        en: "As a Professor at Cairo University, he brings advanced academic knowledge to daily practice. Patients choose him for rhinoplasty and sinus surgeries because he emphasizes preserving breathing function alongside aesthetic improvements, avoiding aggressive, unnatural changes.",
        ar: "بوصفه أستاذاً في جامعة القاهرة العريقة، ينعكس التحصيل الأكاديمي والبحث العلمي على ممارسته الطبية اليومية. يثق به المرضى لإجراء جراحات تجميل الأنف والجيوب الأنفية لأن فلسفته تقوم على الحفاظ على مجرى الهواء ووظيفة التنفس بجانب التحسين الجمالي."
      },
      {
        en: "From detailed diagnostic discussions to post-operative follow-up, his clinics in New Cairo and Zagazig ensure a structured, safe, and transparent patient journey. Booking an appointment via WhatsApp is direct and patient-friendly.",
        ar: "بدءاً من التشخيص الدقيق بالفحص والمنظار وصولاً للمتابعة الدقيقة بعد الجراحة، توفر عياداتنا في التجمع الخامس والزقازيق رحلة علاجية متكاملة وآمنة. يمكنكم حجز استشارة مباشرة عبر رقم الواتساب المخصص للعيادة."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 5,
    featured: false,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "sinusitis"],
    relatedBlogSlugs: ["هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة", "السيرة-الذاتية-المهنية-للأستاذ-الدكتور-محمد-ربيع-خيري"]
  }),
  createBlogPost({
    id: "seo-03",
    slug: "كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر",
    title: {
      en: "How to Choose the Best Rhinoplasty Surgeon in Egypt",
      ar: "كيف تختار أفضل دكتور تجميل أنف في مصر؟"
    },
    excerpt: {
      en: "Practical criteria for evaluating and selecting a qualified rhinoplasty specialist in Egypt.",
      ar: "معايير عملية ونصائح طبية لمساعدتك في تقييم واختيار جراح تجميل الأنف المناسب والأكثر كفاءة في مصر."
    },
    body: [
      {
        en: "Rhinoplasty is one of the most complex procedures in facial surgery. Choosing the 'best' surgeon for your nose job requires careful evaluation of their surgical specialty, training background, and clinical focus.",
        ar: "تعد عملية تجميل الأنف من أدق وأعقد العمليات الجراحية في الوجه. يتطلب اختيار الجراح المناسب تقييماً دقيقاً لتخصصه الجراحي، وخلفيته الأكاديمية، ومعدلات نجاح عملياته السابقة."
      },
      {
        en: "First, verify that the surgeon is a specialist in Otolaryngology (ENT) or plastic surgery, and has academic affiliations. An ENT professor, like Dr. Mohammed Rabea Khairy, possesses deep knowledge of internal nasal anatomy, ensuring that cosmetic alterations do not compromise breathing.",
        ar: "أولاً، يجب التأكد من أن الجراح متخصص في جراحة الأنف والأذن والحنجرة أو جراحة التجميل ولديه درجة أستاذ أو استشاري. يتميز أستاذ الأنف والأذن، مثل د. محمد ربيع خيري، بفهم عميق للتشريح الداخلي للأنف ومجرى التنفس، مما يضمن عدم حدوث انسداد بعد التجميل."
      },
      {
        en: "Second, review the surgeon's before-and-after gallery to observe their aesthetic style, aiming for natural results. Avoid surgeons who make unrealistic promises or offer abnormally low prices, which can compromise patient safety and surgical outcomes.",
        ar: "ثانياً، راجع معرض صور الحالات قبل وبعد للتأكد من مهارة الجراح وميله للنتائج الطبيعية غير المتكلفة. تجنب تماماً الانسياق وراء الوعود غير الواقعية أو الأسعار الزهيدة بشكل مبالغ فيه والتي قد تضر بسلامتك."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 7,
    featured: true,
    primaryServiceSlug: "functional-rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "revision-rhinoplasty"],
    relatedBlogSlugs: ["ما-يجب-البحث-عنه-قبل-اختيار-جراح-تجميل-الأنف", "دكتور-محمد-ربيع-خيري-افضل-دكتور-تجميل-انف-في-مصر"]
  }),
  createBlogPost({
    id: "seo-04",
    slug: "ما-يجب-البحث-عنه-قبل-اختيار-جراح-تجميل-الأنف",
    title: {
      en: "What to Look for Before Choosing a Rhinoplasty Surgeon",
      ar: "ما الذي يجب البحث عنه قبل اختيار جراح تجميل الأنف؟"
    },
    excerpt: {
      en: "Key factors to verify, including qualifications, specialties, and clinical ethics, before scheduling a rhinoplasty.",
      ar: "عوامل أساسية يجب عليك التحقق منها، تشمل المؤهلات العلمية وأخلاقيات المهنة، قبل اتخاذ قرار عملية تجميل الأنف."
    },
    body: [
      {
        en: "Before undergoing rhinoplasty, thorough research is essential. Because it involves both cosmetic appearance and vital respiratory function, your choice of surgeon will directly impact your long-term health and satisfaction.",
        ar: "قبل إجراء تجميل الأنف، يعد البحث الدقيق أمراً حيوياً. نظراً لأن العملية تمس كلاً من المظهر الخارجي والوظيفة التنفسية، فإن اختيارك للجراح سيؤثر مباشرة على صحتك ورضاك على المدى الطويل."
      },
      {
        en: "Ensure the surgeon is certified and holds an active academic position at a reputable university hospital. Prof. Dr. Mohammed Rabea Khairy, Professor of ENT at Cairo University, highlights that patient safety, detailed nasal analysis, and realistic expectations are the foundations of successful rhinoplasty.",
        ar: "تأكد من أن الجراح حاصل على شهادات عليا ويشغل منصباً أكاديمياً نشطاً. يوضح أ.د. محمد ربيع خيري، أستاذ الأنف والأذن بجامعة القاهرة، أن سلامة المريض، والتحليل الدقيق لتشريح الأنف، ووضع توقعات واقعية هي أساس نجاح الجراحة."
      },
      {
        en: "Ask the surgeon about their approach to functional issues, like deviated septums or turbinate hypertrophy. A comprehensive examination using nasal endoscopy is a strong indicator of a thorough diagnosis.",
        ar: "اسأل الجراح عن خطته للتعامل مع المشاكل الوظيفية مثل انحراف الحاجز أو تضخم الغضاريف. الفحص الشامل باستخدام المنظار الضوئي داخل العيادة يعد مؤشراً قوياً على جودة ومصداقية التشخيص."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "septoplasty", "nasal-obstruction"],
    relatedBlogSlugs: ["كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر", "كم-سعر-عملية-تجميل-الأنف-في-مصر"]
  }),
  createBlogPost({
    id: "seo-05",
    slug: "دكتور-محمد-ربيع-خيري-افضل-دكتور-تجميل-انف-في-مصر",
    title: {
      en: "Is Dr. Mohammed Rabea Khairy the Best Rhinoplasty Surgeon in Egypt?",
      ar: "دكتور محمد ربيع خيري افضل دكتور تجميل انف في مصر ؟"
    },
    excerpt: {
      en: "Objective parameters to evaluate Prof. Dr. Mohammed Rabea Khairy's expertise in rhinoplasty surgery.",
      ar: "معايير موضوعية وحقائق علمية حول خبرة الأستاذ الدكتور محمد ربيع خيري في عمليات تجميل الأنف الوظيفي والتجميلي."
    },
    body: [
      {
        en: "Patients looking for the best rhinoplasty surgeon in Egypt often encounter various claims. Medical ethics guide us to present facts rather than marketing slogans. We highlight Prof. Dr. Mohammed Rabea Khairy's credentials to assist your research.",
        ar: "يبحث الكثير من المرضى عن أفضل دكتور لتجميل الأنف في مصر. وتماشياً مع أخلاقيات المهن الطبية، نعرض الحقائق المهنية للأستاذ الدكتور محمد ربيع خيري لمساعدتك في اتخاذ قرارك بناء على أسس سليمة."
      },
      {
        en: "Prof. Dr. Khairy is a Professor of ENT Surgery at Cairo University, specializing in functional and revision rhinoplasty. He focuses on rebuilding nasal structures using cartilage grafts, correcting previous surgical mistakes, and ensuring breathing remains unblocked.",
        ar: "الأستاذ الدكتور محمد ربيع خيري هو أستاذ جراحة الأنف والأذن والحنجرة بجامعة القاهرة، ومتخصص في عمليات تجميل الأنف الوظيفي وتصحيح عمليات الأنف السابقة (التجميل الترميمي)، معتمداً على زراعة الغضاريف الطبيعية للحفاظ على دعامة الأنف."
      },
      {
        en: "By combining academic knowledge with meticulous clinical skills, he performs procedures at top hospitals in Cairo and Zagazig. You can view patient testimonials and contact his clinic via WhatsApp for personalized advice.",
        ar: "بالجمع بين العلم الأكاديمي والمهارة الجراحية الدقيقة، يجري العمليات في كبرى المستشفيات المجهزة بالقاهرة والزقازيق. يمكنكم مراجعة تجارب المرضى والتواصل مع العيادة للاستفسار وحجز موعد استشارة."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "functional-rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "revision-rhinoplasty"],
    relatedBlogSlugs: ["كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر", "ما-يجب-البحث-عنه-قبل-اختيار-جراح-تجميل-الأنف"]
  }),

  // ── SEARCH INTENT PAGES ──
  createBlogPost({
    id: "seo-06",
    slug: "سعر-عملية-تجميل-الأنف-في-مصر",
    title: {
      en: "Rhinoplasty Cost in Egypt: Everything You Need to Know",
      ar: "كم سعر عملية تجميل الأنف في مصر؟"
    },
    excerpt: {
      en: "Detailed guide on factors affecting the cost of rhinoplasty in Egypt, including surgeon fees and hospital stay.",
      ar: "دليل طبي مفصل حول العوامل المحددة لتكلفة عملية تجميل الأنف في مصر والفرق بين العمليات الوظيفية والتجميلية."
    },
    body: [
      {
        en: "The cost of rhinoplasty (nose job) in Egypt varies significantly. It depends on whether the surgery is primary or revision, if it includes functional correction of a deviated septum, and the choice of hospital facility.",
        ar: "يتفاوت سعر عملية تجميل الأنف في مصر بناءً على عدة عوامل رئيسية: منها ما إذا كانت الجراحة للمرة الأولى أم عملية تصحيحية ترميمية، وهل تحتاج لإصلاح وظيفي مثل تقويم الحاجز الأنفي، ومستوى المستشفى الجراحي."
      },
      {
        en: "Surgeon qualifications are a primary factor. A Professor and Consultant surgeon, like Dr. Mohammed Rabea Khairy, ensures high surgical standards and proper post-operative care, which prevents costly revision surgeries later.",
        ar: "مؤهلات الجراح وخبرته هما العامل الأساسي. إن إجراء العملية مع أستاذ واستشاري مثل د. محمد ربيع خيري يضمن الالتزام بالمعايير الطبية العالمية وتجنب حدوث مضاعفات قد تضطر المريض لإجراء عمليات تصحيحية مكلفة لاحقاً."
      },
      {
        en: "Additionally, costs include anesthesia fees, hospital operating room usage, and pre-operative lab tests. For an accurate quote based on your specific nasal structure, contact Prof. Dr. Khairy's clinic for an endoscopic evaluation.",
        ar: "تشمل التكلفة الإجمالية أيضاً أتعاب طبيب التخدير، وتكلفة غرفة العمليات بالمستشفى، والتحاليل الطبية قبل العملية. للحصول على تقدير دقيق يناسب حالتك، يجب الخضوع للفحص بالمنظار في العيادة لتحديد الخطة الجراحية المطلوبة."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 8,
    featured: true,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "septoplasty"],
    relatedBlogSlugs: ["كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-07",
    slug: "هل-عملية-تجميل-الأنف-مؤلمة",
    title: {
      en: "Is Rhinoplasty Painful? Pain Management & Recovery",
      ar: "هل عملية تجميل الأنف مؤلمة؟"
    },
    excerpt: {
      en: "Learn about the sensory experience during and after rhinoplasty, and how post-operative discomfort is managed.",
      ar: "تعرف على حقيقة الألم المصاحب لعملية تجميل الأنف، وكيفية التحكم في التورم والانزعاج خلال فترة التعافي."
    },
    body: [
      {
        en: "One of the most common questions patients ask is: 'Is rhinoplasty painful?' Under general anesthesia, you will feel absolutely no pain during the surgical procedure itself.",
        ar: "من أكثر الأسئلة شيوعاً لدى المرضى: 'هل عملية تجميل الأنف مؤلمة؟'. تحت تأثير التخدير العام، لا يشعر المريض بأي ألم على الإطلاق أثناء إجراء الجراحة نفسها."
      },
      {
        en: "In the days following surgery, most patients report a feeling of congestion, facial pressure, and stiffness rather than sharp pain. This is highly manageable with standard oral pain relievers and cold compresses recommended by your doctor.",
        ar: "في الأيام الأولى بعد العملية، يشعر معظم المرضى بانسداد الأنف والضغط الخفيف في الوجه شبيه بالزكام، وليس بألم حاد. يمكن السيطرة التامة على هذا الشعور البسيط باستخدام المسكنات الموصوفة والكمادات الباردة."
      },
      {
        en: "Modern techniques, such as using soft nasal splints instead of traditional packing, minimize discomfort. Following Prof. Dr. Khairy's post-operative instructions ensures a smooth, comfortable recovery.",
        ar: "تساهم التقنيات الحديثة، مثل استخدام الدعامات اللينة والداخلية بدلاً من الحشوات القطنية التقليدية، في تقليل الألم بشكل كبير. إن اتباع إرشادات أ.د. محمد ربيع خيري يضمن لك تعافياً سريعاً ومريحاً."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty"],
    relatedBlogSlugs: ["متى-تظهر-نتائج-عملية-تجميل-الأنف", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-08",
    slug: "متى-تظهر-نتائج-عملية-تجميل-الأنف",
    title: {
      en: "When Do Rhinoplasty Results Appear? Recovery Timeline",
      ar: "متى تظهر نتائج عملية تجميل الأنف؟"
    },
    excerpt: {
      en: "Understanding the swelling resolution stages and when to expect the final shape of your nose.",
      ar: "دليل زمني لمراحل زوال التورم بعد تجميل الأنف ومتى تظهر الملامح النهائية لجسر وأرنبة الأنف."
    },
    body: [
      {
        en: "Rhinoplasty requires patience. While the primary structural changes are immediate, the final aesthetic outcome develops gradually as post-operative swelling resolves over several months.",
        ar: "تتطلب عملية تجميل الأنف الصبر. ورغم أن التغيرات الهيكلية الرئيسية تحدث فوراً، إلا أن النتيجة الجمالية النهائية تظهر تدريجياً مع زوال التورم الطبيعي على مدار أشهر."
      },
      {
        en: "About 70% to 80% of swelling disappears within the first 4 to 6 weeks after surgery, allowing you to appreciate the general shape of your new nose. However, minor swelling, especially around the nasal tip, persists longer.",
        ar: "يزول حوالي 70% إلى 80% من التورم خلال أول 4 إلى 6 أسابيع بعد الجراحة، حيث يبدأ شكل الأنف العام بالوضوح. ومع ذلك، يستمر بعض التورم الطفيف خاصة في منطقة أرنبة الأنف لفترة أطول."
      },
      {
        en: "The final, stable result is typically achieved at 1 year post-op, or up to 18 months for thick-skinned noses. Prof. Dr. Khairy schedules regular follow-up visits to monitor healing progress and advise on nasal massage techniques.",
        ar: "تظهر النتيجة المستقرة والنهائية عادةً بعد مرور عام كامل على العملية (وقد تصل إلى 18 شهراً لذوي البشرة السميكة). يحرص أ.د. محمد ربيع خيري على المتابعة الدورية للاطمئنان على التئام الأنسجة وسلامتها."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 5,
    featured: false,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty"],
    relatedBlogSlugs: ["هل-عملية-تجميل-الأنف-مؤلمة", "كم-تستغرق-عملية-تجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-09",
    slug: "هل-يمكن-تعديل-الأنف-بدون-جراحة",
    title: {
      en: "Can Nose Shape Be Adjusted Without Surgery?",
      ar: "هل يمكن تعديل الأنف بدون جراحة؟"
    },
    excerpt: {
      en: "Compare non-surgical nose jobs (fillers) with permanent surgical rhinoplasty options.",
      ar: "مقارنة طبية دقيقة بين تعديل الأنف بالفيلر غير الجراحي وعمليات تجميل الأنف الجراحية الدائمة."
    },
    body: [
      {
        en: "Non-surgical rhinoplasty, often utilizing dermal fillers, can temporarily mask minor irregularities like a small nasal hump. However, it cannot reduce nose size or fix internal breathing structures.",
        ar: "يمكن استخدام الفيلر لتعديل الأنف غير الجراحي لإخفاء التحدبات البسيطة مؤقتاً. ومع ذلك، لا يمكن للفيلر تصغير حجم الأنف أو علاج مشاكل التنفس الداخلية."
      },
      {
        en: "Fillers only add volume; they cannot correct a deviated septum or repair turbinate hypertrophy. For patients with nasal obstruction, surgical rhinoplasty is required to reconstruct the airway and achieve permanent alignment.",
        ar: "يضيف الفيلر حجماً إضافياً للأنف ولا يمكنه إطلاقاً إصلاح اعوجاج الحاجز الأنفي أو تضخم الغضاريف. بالنسبة للمرضى الذين يعانون من ضيق التنفس، تظل الجراحة هي الحل الوحيد والنهائي."
      },
      {
        en: "Additionally, nasal filler injections carry risk of serious vascular complications if performed incorrectly. Prof. Dr. Khairy recommends a detailed clinical examination to determine if your goals require surgical rhinoplasty for long-term health and aesthetics.",
        ar: "تجدر الإشارة إلى أن حقن الفيلر في الأنف يحمل مخاطر انسداد الأوعية الدموية إذا لم يجر بدقة. ينصح أ.د. محمد ربيع خيري بإجراء فحص سريري لتحديد الحل الأكثر أماناً واستدامة لمظهر أنفك وصحة تنفسك."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "septoplasty"],
    relatedBlogSlugs: ["كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر", "هل-يعود-اعوجاج-الحاجز-الأنفي-بعد-العملية"]
  }),
  createBlogPost({
    id: "seo-10",
    slug: "هل-يعود-اعوجاج-الحاجز-الأنفي-بعد-العملية",
    title: {
      en: "Can a Deviated Septum Return After Surgery?",
      ar: "هل يعود اعوجاج الحاجز الأنفي بعد العملية؟"
    },
    excerpt: {
      en: "Understand the structural stability of septoplasty and what causes nasal deviation to recur.",
      ar: "أسباب وعوامل رجوع اعوجاج الحاجز الأنفي بعد العملية وكيف يضمن الجراح ثبات النتائج على المدى الطويل."
    },
    body: [
      {
        en: "Septoplasty is performed to straighten the cartilaginous and bony septum inside the nose. A properly executed septoplasty offers permanent results, and the septum does not naturally bend again.",
        ar: "تجرى عملية تقويم الحاجز الأنفي لتعديل الغضاريف والعظام المعوجة داخل الأنف. تعطي العملية نتائج دائمة مدى الحياة إذا أُجريت بالطريقة الصحيحة، ولا يعود الحاجز للاعوجاج تلقائياً."
      },
      {
        en: "However, recurrence can happen if the nasal cartilage retains 'memory' and shifts, or due to post-operative trauma. Using advanced structural techniques, Prof. Dr. Khairy ensures cartilage is properly reinforced to prevent shifts.",
        ar: "ومع ذلك، قد يحدث تراجع طفيف في استقامة الحاجز إذا كان الغضروف يمتلك 'ذاكرة نسيجية' قوية تحركه عن موضعه، أو نتيجة تعرض الأنف لصدمة مباشرة بعد العملية. يعتمد د. خيري على تقنيات تثبيت متطورة لضمان ثبات الغضاريف."
      },
      {
        en: "Following post-operative instructions—such as avoiding physical contact sports during initial recovery and using prescribed nasal washes—is crucial to maintaining a straight septum and clear breathing.",
        ar: "إن الالتزام بنصائح فترة التعافي، مثل تجنب فرك الأنف أو ممارسة الرياضات العنيفة، يلعب دوراً حاسماً في الحفاظ على استقامة الحاجز وضمان تنفس مريح ودائم."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "nasal-obstruction"],
    relatedBlogSlugs: ["متى-أحتاج-إلى-عملية-الحاجز-الأنفي", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-11",
    slug: "هل-الشخير-يدل-على-مشكلة-صحية",
    title: {
      en: "Does Snoring Indicate a Health Issue? Sleep Apnea Risks",
      ar: "هل الشخير يدل على مشكلة صحية؟"
    },
    excerpt: {
      en: "Differentiate between simple snoring and obstructive sleep apnea, and when to seek medical evaluation.",
      ar: "تعرف على الفرق بين الشخير العادي وانقطاع النفس الانسدادي أثناء النوم وعلاقته بصحة القلب والضغط."
    },
    body: [
      {
        en: "Snoring occurs when air flow through the nose or mouth is physically obstructed. While occasional mild snoring may be harmless, chronic loud snoring is often a symptom of underlying health issues.",
        ar: "يحدث الشخير نتيجة ضيق مجرى الهواء وتدفق الهواء بصعوبة عبر الأنف أو البلعوم. وبينما قد يكون الشخير العابر غير ضار، إلا أن الشخير المزمن والمرتفع غالباً ما يشير لمشكلة صحية تستدعي الفحص."
      },
      {
        en: "Severe snoring can be a primary indicator of Obstructive Sleep Apnea (OSA). OSA causes repeated breathing pauses during sleep, leading to reduced oxygen levels, daytime fatigue, and increased risk of cardiovascular disease.",
        ar: "يمثل الشخير أحد أهم أعراض 'انقطاع النفس الانسدادي النومي'. تتسبب هذه الحالة في توقف متكرر للتنفس أثناء النوم، مما يقلل نسبة الأكسجين في الدم، ويزيد من مخاطر ارتفاع ضغط الدم والجلطات."
      },
      {
        en: "Prof. Dr. Mohammed Rabea Khairy performs detailed ENT examinations using flexible endoscopy to locate airway obstruction points. Treatment may involve lifestyle changes, CPAP therapy, or targeted surgical interventions.",
        ar: "يقوم أ.د. محمد ربيع خيري بفحص مجرى الهواء باستخدام المنظار المرن لتحديد مكان الانسداد بدقة (سواء بالأنف أو الحلق). تشمل الخيارات العلاجية تعديل نمط الحياة، أو استخدام أجهزة التنفس، أو التدخل الجراحي لتوسيع مجرى الهواء."
      }
    ],
    category: "sleep-breathing",
    date: "2024-06-23",
    readMinutes: 7,
    featured: true,
    primaryServiceSlug: "snoring",
    relatedServiceSlugs: ["snoring", "sleep-apnea", "nasal-obstruction"],
    relatedBlogSlugs: ["هل-طنين-الأذن-خطير", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-12",
    slug: "هل-طنين-الأذن-خطير",
    title: {
      en: "Is Tinnitus Dangerous? Causes & Evaluation",
      ar: "هل طنين الأذن خطير؟"
    },
    excerpt: {
      en: "Understand when ear ringing requires immediate medical attention and how it is diagnosed.",
      ar: "تعرف على دلالات طنين الأذن ومتى يعتبر مؤشراً لحالة صحية تستدعي التدخل الطبي الفوري."
    },
    body: [
      {
        en: "Tinnitus is the perception of ringing, buzzing, or clicking sounds in the ears without an external source. While it is usually not dangerous, it can sometimes indicate an underlying medical condition.",
        ar: "طنين الأذن هو سماع رنين أو وشيش داخلي دون وجود مصدر صوت خارجي. وعلى الرغم من أنه لا يشكل خطورة مباشرة في معظم الحالات، إلا أنه قد يكون عرضاً لمشكلة تحتاج لتشخيص دقيق."
      },
      {
        en: "Common causes include noise-induced hearing loss, ear canal blockage by wax, fluid in the middle ear, or vascular irregularities. Tinnitus requires prompt medical evaluation if it is one-sided, sudden, or accompanied by hearing loss or dizziness.",
        ar: "تشمل أسباب الطنين الشائعة: التعرض للضوضاء العالية، انسداد الشمع بالأذن، ارتشاح سوائل الأذن الوسطى، أو اضطرابات الأوعية الدموية. يصبح الطنين مقلقاً ويستدعي الفحص الفوري إذا كان في أذن واحدة فقط أو مصاحباً لدوخة."
      },
      {
        en: "Prof. Dr. Khairy conducts comprehensive evaluations, including hearing tests and middle ear pressure checks, to identify the root cause and customize an effective management plan.",
        ar: "يقوم الأستاذ الدكتور خيري بإجراء فحص شامل يتضمن قياس السمع وضغط الأذن لتحديد السبب الرئيسي للطنين، ووضع بروتوكول علاجي مناسب للحد من إزعاج الطنين وتحسين جودة الحياة."
      }
    ],
    category: "ear-conditions",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "tinnitus",
    relatedServiceSlugs: ["tinnitus", "hearing-loss", "ear-infection"],
    relatedBlogSlugs: ["لماذا-يحدث-طنين-الأذن", "هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة"]
  }),

  // ── RELATED SEARCH EXPANSION ──
  createBlogPost({
    id: "seo-13",
    slug: "لماذا-يحدث-طنين-الأذن",
    title: {
      en: "Why Does Tinnitus Happen? Main Causes Explained",
      ar: "لماذا يحدث طنين الأذن؟"
    },
    excerpt: {
      en: "Detailed look at the physiological and auditory causes behind ear ringing.",
      ar: "شرح علمي مفصل للأسباب العضوية والبيئية المؤدية لحدوث طنين ووشيش الأذن المستمر."
    },
    body: [
      {
        en: "Tinnitus is not a disease itself, but a symptom of an issue within the auditory system. It occurs when auditory nerves transmit abnormal signals to the brain, which decodes them as sound.",
        ar: "طنين الأذن ليس مرضاً بحد ذاته، بل هو عرض ناتج عن خلل في النظام السمعي. يحدث عندما ترسل الخلايا العصبية السمعية إشارات غير طبيعية يترجمها الدماغ كأصوات مستمرة."
      },
      {
        en: "The most common trigger is damage to the tiny hair cells in the inner ear, often caused by aging or exposure to loud noises. Other causes include Eustachian tube dysfunction, blood pressure spikes, and TMJ problems.",
        ar: "يعد تلف الخلايا الشعرية الدقيقة في الأذن الداخلية بسبب الشيخوخة أو الضوضاء هو السبب الأبرز. تشمل الأسباب الأخرى انسداد قناة استاكيوس، اضطراب ضغط الدم، ومشاكل مفصل الفك."
      },
      {
        en: "Getting a proper hearing evaluation from an ENT consultant is the first step. Prof. Dr. Khairy helps identify the precise trigger at his clinics in Cairo and Zagazig, providing effective medical therapies.",
        ar: "يعد إجراء فحص شامل للسمع الخطوة الأولى للعلاج. يساعد أ.د. محمد ربيع خيري في تحديد السبب الكامن وراء طنين الأذن وتوفير الحلول الطبية المناسبة لكل حالة."
      }
    ],
    category: "ear-conditions",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "tinnitus",
    relatedServiceSlugs: ["tinnitus", "hearing-loss"],
    relatedBlogSlugs: ["هل-طنين-الأذن-خطير", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-14",
    slug: "كيف-يتم-علاج-التهاب-الجيوب-الأنفية",
    title: {
      en: "How is Sinusitis Treated? Medical & Surgical Options",
      ar: "كيف يتم علاج التهاب الجيوب الأنفية؟"
    },
    excerpt: {
      en: "A comprehensive medical overview of treatments for acute and chronic sinus inflammation.",
      ar: "تعرف على طرق علاج التهاب الجيوب الأنفية المزمن بالأدوية ومتى نلجأ لعملية مناظير الجيوب الأنفية (FESS)."
    },
    body: [
      {
        en: "Sinusitis treatment depends on whether the infection is acute or chronic. Most acute cases are viral and resolve with supportive care, nasal washes, and local steroid sprays.",
        ar: "يعتمد علاج التهاب الجيوب الأنفية على ما إذا كان الالتهاب حاداً أم مزمناً. معظم الحالات الحادة تُعالج دوائياً بالبخاخات الموضعية وغسول الماء المالح المساعد."
      },
      {
        en: "For chronic sinusitis lasting over 12 weeks, medical therapy is customized. If medications fail and nasal polyps block sinus openings, Functional Endoscopic Sinus Surgery (FESS) is highly effective in restoring ventilation.",
        ar: "في حالات الالتهاب المزمن (أكثر من 12 أسبوعاً)، يوضع بروتوكول دوائي مكثف. وإذا لم يستجب المريض وكان هناك انسداد باللحمية، تصبح عملية الجيوب الأنفية بالمنظار هي الحل لفتح الجيوب وتصريف المخاط."
      },
      {
        en: "Prof. Dr. Khairy utilizes advanced endoscopes for minimally invasive sinus procedures, ensuring rapid recovery. Schedule a diagnostic appointment at our clinics in New Cairo or Zagazig.",
        ar: "يستخدم أ.د. محمد ربيع خيري أحدث المناظير الضوئية لإجراء جراحات الجيوب الأنفية بدقة متناهية ودون جروح خارجية، مما يضمن تعافياً سريعاً للمريض وعودة سريعة لحياته الطبيعية."
      }
    ],
    category: "sinusitis",
    date: "2024-06-23",
    readMinutes: 7,
    featured: true,
    primaryServiceSlug: "sinusitis",
    relatedServiceSlugs: ["sinusitis", "sinus-surgery", "nasal-polyps"],
    relatedBlogSlugs: ["هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-15",
    slug: "كم-تستغرق-عملية-تجميل-الأنف",
    title: {
      en: "How Long Does Rhinoplasty Surgery Take?",
      ar: "كم تستغرق عملية تجميل الأنف؟"
    },
    excerpt: {
      en: "Understand the average duration of rhinoplasty procedures and the surgical factors that affect timing.",
      ar: "تعرف على الوقت الفعلي المستغرق لإجراء عملية تجميل الأنف والفرق بين الحالات البسيطة والمعقدة."
    },
    body: [
      {
        en: "The time required for a rhinoplasty procedure varies. On average, a primary cosmetic or functional rhinoplasty takes between 1.5 to 3 hours to perform under general anesthesia.",
        ar: "يختلف الوقت المستغرق لإجراء عملية تجميل الأنف حسب طبيعة الحالة. وتستغرق الجراحة في المتوسط ما بين ساعة ونصف إلى ثلاث ساعات تحت التخدير الكلي."
      },
      {
        en: "Complex revision rhinoplasty, requiring rib or ear cartilage grafts to rebuild nasal support, can take 3 to 4 hours. Prof. Dr. Khairy focuses on precision and structural stability rather than speed to ensure natural results.",
        ar: "أما العمليات الترميمية والتصحيحية المعقدة، والتي تتطلب زراعة غضاريف من الأذن أو الضلع لإعادة بناء هيكل الأنف، فقد تستغرق من 3 إلى 4 ساعات. يركز د. خيري على الدقة المتناهية لضمان ثبات النتيجة."
      },
      {
        en: "After the procedure, patients stay in the recovery room for about 1 to 2 hours before being discharged on the same day. Detailed recovery guides are provided to ensure a safe post-operative experience.",
        ar: "بعد انتهاء الجراحة، يقضي المريض ساعة إلى ساعتين في غرفة الإفاقة للملاحظة قبل الخروج الآمن في نفس اليوم. تُسلم للمريض إرشادات دقيقة مكتوبة لاتباعها في المنزل لمرحلة تعافٍ مريحة."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "revision-rhinoplasty"],
    relatedBlogSlugs: ["هل-عملية-تجميل-الأنف-مؤلمة", "متى-تظهر-نتائج-عملية-تجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-16",
    slug: "متى-أحتاج-إلى-عملية-الحاجز-الأنفي",
    title: {
      en: "When Do I Need Septoplasty? Signs & Diagnosis",
      ar: "متى أحتاج إلى عملية الحاجز الأنفي؟"
    },
    excerpt: {
      en: "Clinical indications that point to the necessity of undergoing a septoplasty for breathing correction.",
      ar: "تعرف على الأعراض والعلامات الطبية التي تشير إلى ضرورة إجراء عملية تقويم الحاجز الأنفي لعلاج ضيق التنفس."
    },
    body: [
      {
        en: "A deviated septum occurs when the thin wall between your nostrils is displaced to one side. You need a septoplasty when this deviation causes significant nasal obstruction that fails to improve with medication.",
        ar: "يعني انحراف الحاجز الأنفي تحرك الجدار الفاصل بين فتحتي الأنف نحو جانب واحد. وتصبح الجراحة ضرورية عندما يتسبب هذا الانحراف في انسداد تنفسي مزمن لا يستجيب للعلاجات الدوائية."
      },
      {
        en: "Key symptoms include chronic difficulty breathing through one or both sides of the nose, frequent nosebleeds, facial pressure, and snoring. Dr. Mohammed Rabea Khairy evaluates the deviation using nasal endoscopy inside the clinic.",
        ar: "تشمل الأعراض الرئيسية: صعوبة التنفس المستمرة، نزيف الأنف المتكرر، آلام وضغط الوجه، والشخير. يقوم الأستاذ الدكتور محمد ربيع خيري بفحص وتقييم مدى انحراف الحاجز بالمنظار الضوئي داخل العيادة."
      },
      {
        en: "Septoplasty is a functional surgery focused on expanding the airway, often performed alongside turbinate reduction. To get a definitive diagnosis, you can schedule an evaluation via WhatsApp.",
        ar: "عملية الحاجز الأنفي هي عملية وظيفية بحتة تهدف لتوسيع مجرى الهواء، وغالباً ما تقترن بكي أو تصغير الغضاريف الأنفية المتضخمة. لحجز موعد فحص دقيق، يرجى التواصل مع منسقي العيادة عبر واتساب."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "nasal-obstruction"],
    relatedBlogSlugs: ["هل-يعود-اعوجاج-الحاجز-الأنفي-بعد-العملية", "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف"]
  }),

  // ── PATIENT DECISION PAGES ──
  createBlogPost({
    id: "seo-17",
    slug: "كيف-أختار-أفضل-دكتور-أنف-وأذن-وحنجرة",
    title: {
      en: "How to Choose the Best ENT Doctor for Your Condition",
      ar: "كيف أختار أفضل دكتور أنف وأذن وحنجرة؟"
    },
    excerpt: {
      en: "Essential guidelines to help patients research, compare, and select a qualified ENT specialist.",
      ar: "نصائح وإرشادات لمساعدتك في اختيار استشاري أنف وأذن وحنجرة مؤهل يتمتع بالخبرة الأكاديمية والمهنية المطلوبة."
    },
    body: [
      {
        en: "Finding the right ENT doctor is essential for proper diagnosis and treatment. Rather than relying on unverified advertisements, patients should look for objective criteria to evaluate professional competence.",
        ar: "إن العثور على طبيب الأنف والأذن والحنجرة المناسب هو المفتاح الأساسي للتشخيص والعلاج السليم. وبدلاً من الاعتماد على الإعلانات الترويجية، يجب على المريض البحث عن معايير موضوعية لتقييم الكفاءة."
      },
      {
        en: "Always check the physician's academic degree (such as Professor status at a major university hospital) and clinical experience. Prof. Dr. Mohammed Rabea Khairy, Professor at Cairo University, advises checking if the doctor performs detailed diagnostic examinations using endoscopes.",
        ar: "تحقق دائماً من الدرجة العلمية للطبيب (مثل درجة أستاذ بكلية الطب) وسنوات خبرته الإكلينيكية. يوصي أ.د. محمد ربيع خيري بالتأكد من أن العيادة مجهزة بالمناظير التشخيصية الحديثة التي تضمن فحصاً دقيقاً."
      },
      {
        en: "Furthermore, look for transparency regarding treatment outcomes and patient reviews. A consult with an academic expert ensures a evidence-based approach to your health. Contact our clinics in New Cairo and Zagazig for booking.",
        ar: "علاوة على ذلك، ابحث عن الوضوح والمصداقية في مناقشة البدائل العلاجية والنتائج المتوقعة. تضمن لك استشارة الخبير الأكاديمي علاجاً قائماً على الأدلة العلمية. احجز موعدك الآن عبر واتساب العيادة."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 7,
    featured: false,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "nasal-obstruction"],
    relatedBlogSlugs: ["هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة", "معايير-اختيار-استشاري-الأنف-والأذن"]
  }),
  createBlogPost({
    id: "seo-18",
    slug: "كيف-أختار-جراح-تجميل-الأنف-المناسب",
    title: {
      en: "How to Choose the Right Rhinoplasty Surgeon for You",
      ar: "كيف أختار جراح تجميل الأنف المناسب؟"
    },
    excerpt: {
      en: "Key questions and considerations for selecting a rhinoplasty specialist who prioritizes breathing functionality.",
      ar: "أسئلة هامة واعتبارات أساسية لمساعدتك في اختيار جراح تجميل الأنف الذي يضع سلامة التنفس والوظيفة الحيوية أولاً."
    },
    body: [
      {
        en: "Selecting a rhinoplasty surgeon is a critical decision. A successful outcome requires a professional who is expert in both external nasal aesthetics and internal airway anatomy.",
        ar: "يعد اختيار جراح تجميل الأنف قراراً مصيرياً. تتطلب النتيجة الناجحة والمستدامة طبيباً يمتلك خبرة واسعة في التجميل الخارجي وتعديل المجرى التنفسي الداخلي معاً."
      },
      {
        en: "Ensure the surgeon has extensive experience in functional rhinoplasty. Prof. Dr. Khairy emphasizes that the nose must breathe as good as it looks. Reviewing a surgeon's case gallery helps confirm they can customize results to match your facial harmony.",
        ar: "تأكد من أن الجراح يمتلك خبرة حقيقية في تجميل الأنف الوظيفي والترميمي. يشدد أ.د. محمد ربيع خيري على أن الأنف يجب أن يتنفس بشكل ممتاز بقدر ما يبدو جميلاً. مراجعة معرض صور الحالات تساعدك في التأكد من قدرته على تحقيق ذلك."
      },
      {
        en: "During your consultation, ask about their approach to managing cartilage and structural support. Prof. Dr. Khairy welcomes patient queries at his New Cairo and Zagazig clinics to ensure transparency and confidence.",
        ar: "خلال الجلسة الاستشارية، استفسر من الجراح عن كيفية تدعيم هيكل الأنف بالغضاريف لمنع الهبوط مستقبلاً. يرحب أ.د. محمد ربيع خيري بجميع أسئلة مرضاه في عيادات التجمع الخامس والزقازيق لبناء جسر من الثقة والشفافية."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "functional-rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "functional-rhinoplasty", "revision-rhinoplasty"],
    relatedBlogSlugs: ["كيف-تختار-أفضل-دكتور-تجميل-أنف-في-مصر", "ما-يجب-البحث-عنه-قبل-اختيار-جراح-تجميل-الأنف"]
  }),
  createBlogPost({
    id: "seo-19",
    slug: "ما-معايير-اختيار-استشاري-الأنف-والأذن",
    title: {
      en: "Criteria for Choosing a Senior ENT Consultant",
      ar: "ما معايير اختيار استشاري الأنف والأذن؟"
    },
    excerpt: {
      en: "Essential professional and academic standards to verify when selecting an ENT consultant.",
      ar: "تعرف على المعايير الطبية والأكاديمية اللازمة لتقييم كفاءة ومصداقية استشاري جراحات الأنف والأذن والحنجرة."
    },
    body: [
      {
        en: "When dealing with chronic sinus, ear, or airway issues, consulting a senior ENT specialist is vital. Patients should know the professional criteria that differentiate highly qualified consultants.",
        ar: "عند المعاناة من مشاكل مزمنة في الجيوب الأنفية أو الأذن أو انسداد التنفس، فإن استشارة طبيب ذو درجة استشاري كبير أمر ضروري. يجب على المرضى الإلمام بالمعايير المهنية التي تضمن كفاءة الطبيب."
      },
      {
        en: "Look for academic credentials, such as a doctoral degree and a teaching professorship at a university medical school. Prof. Dr. Mohammed Rabea Khairy, Professor at Cairo University, points out that university professors are at the forefront of surgical innovation and guidelines.",
        ar: "ابحث دائماً عن الخلفية الأكاديمية مثل درجة أستاذ دكتور في كلية طب حكومية عريقة. يشير أ.د. محمد ربيع خيري، أستاذ الأنف والأذن بجامعة القاهرة، إلى أن العمل الأكاديمي يبقي الطبيب على اطلاع دائم بأحدث الأبحاث العلمية والتقنيات."
      },
      {
        en: "Verify that the clinic utilizes modern diagnostic endoscopes, which allow the patient to see the condition and discuss treatment options transparently. Book an evaluation with Prof. Dr. Khairy via WhatsApp.",
        ar: "تأكد من أن عيادة الطبيب مجهزة بوحدات فحص ومناظير حديثة تتيح تشخيصاً دقيقاً وموثقاً بالصور والفيديو. يمكنكم حجز موعد فحص شامل واستشارة مع أ.د. محمد ربيع خيري عبر واتساب العيادة."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 6,
    featured: false,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "sinus-surgery", "nasal-obstruction"],
    relatedBlogSlugs: ["كيف-أختار-أفضل-دكتور-أنف-وأذن-وحنجرة", "هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة"]
  }),

  // ── BIOGRAPHY & TRUST PAGES ──
  createBlogPost({
    id: "seo-20",
    slug: "السيرة-الذاتية-المهنية-للأستاذ-الدكتور-محمد-ربيع-خيري",
    title: {
      en: "Prof. Dr. Mohammed Rabea Khairy Professional Biography & EEAT",
      ar: "السيرة الذاتية المهنية والأكاديمية للأستاذ الدكتور محمد ربيع خيري"
    },
    excerpt: {
      en: "Discover the academic background, qualifications, and professional affiliations of Prof. Dr. Mohammed Rabea Khairy.",
      ar: "تعرف على السيرة الذاتية المهنية والأكاديمية للأستاذ الدكتور محمد ربيع خيري، أستاذ الأنف والأذن بجامعة القاهرة وعضو الجمعيات الدولية."
    },
    body: [
      {
        en: "Prof. Dr. Mohammed Rabea Khairy is a prominent figure in Otolaryngology and Rhinoplasty in Egypt. Serving as a Professor of Medicine at Cairo University Faculty of Medicine, he contributes to training the next generation of surgeons and advancing research in ENT care.",
        ar: "يعد الأستاذ الدكتور محمد ربيع خيري قامة علمية بارزة في مجال جراحة الأنف والأذن والحنجرة وتجميل الأنف بمصر. وبوصفه أستاذاً بكلية الطب بجامعة القاهرة (القصر العيني)، فإنه يساهم بنشاط في تدريب أطباء المستقبل وتطوير الأبحاث الطبية."
      },
      {
        en: "Throughout his career spanning more than 20 years, he has successfully performed thousands of complex functional rhinoplasties, revision nose surgeries, and endoscopic sinus operations. He is an active participant in local and international conferences, sharing clinical insights on structural rhinoplasty.",
        ar: "على مدار مسيرته المهنية التي تتجاوز العشرين عاماً، أجرى د. خيري آلاف العمليات الجراحية الناجحة في تجميل الأنف، وتقويم الحاجز الأنفي، ومناظير الجيوب الأنفية المتقدمة. ويشارك بانتظام في المؤتمرات الطبية لعرض أحدث أبحاثه الجراحية."
      },
      {
        en: "Prof. Dr. Khairy is a member of major professional societies. His practice centers on clinical ethics, patient safety, and evidence-based medicine. Consultations are available at his Cairo/New Cairo and Zagazig clinics, with direct booking via WhatsApp.",
        ar: "يتمتع الأستاذ الدكتور خيري بعضوية كبرى الجمعيات الطبية المتخصصة، وترتكز ممارسته الطبية على الأمان التام للمريض والالتزام بأخلاقيات المهنة. يمكنكم زيارة عياداته في القاهرة الجديدة (التجمع الخامس) أو الزقازيق، والتواصل مباشرة لحجز المواعيد عبر واتساب."
      }
    ],
    category: "nose-conditions",
    date: "2024-06-23",
    readMinutes: 8,
    featured: true,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "rhinoplasty", "sinus-surgery"],
    relatedBlogSlugs: ["هل-الدكتور-محمد-ربيع-خيري-أفضل-دكتور-أنف-وأذن-وحنجرة", "لماذا-يختار-المرضى-الدكتور-محمد-ربيع-خيري"]
  }),

  // ── FAQ SEO CLUSTER PAGES ──
  createBlogPost({
    id: "seo-21",
    slug: "الأسئلة-الشائعة-حول-عمليات-الأنف-والأذن-وتجميل-الأنف",
    title: {
      en: "Frequently Asked Questions About ENT & Rhinoplasty Surgery",
      ar: "الأسئلة الشائعة حول عمليات الأنف والأذن وتجميل الأنف"
    },
    excerpt: {
      en: "Comprehensive FAQ guide on pricing, recovery, risks, and results for rhinoplasty and ENT surgeries.",
      ar: "دليل إجابات الأسئلة الشائعة حول عمليات تجميل الأنف والجيوب الأنفية: التكلفة، التعافي، والنتائج المتوقعة بالتفصيل."
    },
    body: [
      {
        en: "Understanding your surgical options requires answers to common concerns. We have compiled the most frequent patient questions regarding pricing, recovery timelines, and eligibility for rhinoplasty and ENT procedures.",
        ar: "يتطلب اتخاذ قرار الجراحة الحصول على إجابات واضحة وموثوقة. لقد جمعنا هنا أكثر الأسئلة شيوعاً التي يطرحها المرضى حول تكلفة العمليات، وفترات النقاهة، ومدى ملاءمة العمليات الجراحية لحالتهم."
      },
      {
        en: "For pricing, functional operations like septoplasty are often medically necessary. Recovery timelines vary: rhinoplasty patients generally return to work in 10 days, while sinus surgery patients recover in 5 to 7 days. Mild swelling can continue for up to a year.",
        ar: "فيما يخص الأسعار، تعد بعض العمليات مثل تقويم الحاجز الأنفي عمليات علاجية وظيفية ضرورية. وتتفاوت فترات التعافي: حيث يعود مريض تجميل الأنف لعمله خلال 10 أيام، بينما يحتاج مريض منظار الجيوب الأنفية من 5 إلى 7 أيام للراحة والتعافي التام."
      },
      {
        en: "Eligible candidates are generally healthy adults with realistic goals. A thorough examination using diagnostic endoscopes by Prof. Dr. Khairy is necessary to confirm your eligibility. Contact his clinic via WhatsApp for personalized guidance.",
        ar: "المرشحون المناسبون للجراحة هم البالغون الأصحاء الذين لديهم أهداف واقعية. ويعد الفحص السريري الدقيق بالمنظار مع أ.د. محمد ربيع خيري هو الخطوة لتأكيد مدى مناسبة العملية لك. تواصل معنا عبر واتساب لمعرفة المزيد وحجز موعدك."
      }
    ],
    category: "rhinoplasty",
    date: "2024-06-23",
    readMinutes: 8,
    featured: true,
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["rhinoplasty", "septoplasty", "sinus-surgery"],
    relatedBlogSlugs: ["سعر-عملية-تجميل-الأنف-في-مصر", "هل-عملية-تجميل-الأنف-مؤلمة"]
  })
];
