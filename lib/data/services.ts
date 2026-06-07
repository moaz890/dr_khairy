// ENT medical services — bilingual condition-to-treatment mapping (EN / AR)

type T = { en: string; ar: string };

export interface Treatment {
  name: T;
  description: T;
  approach: T;
}

export interface Condition {
  id: string;
  name: T;
  description: T;
  symptoms: T[];
  treatments: Treatment[];
}

export interface ServiceCategory {
  id: string;
  label: T;
  icon: string;
  description: T;
  conditions: Condition[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ent-surgery",
    label: { en: "ENT Surgery", ar: "جراحات الأنف والأذن والحنجرة" },
    icon: "Activity",
    description: {
      en: "Comprehensive surgical management of ear, nose, and throat conditions using modern minimally invasive techniques.",
      ar: "إدارة جراحية شاملة لحالات الأنف والأذن والحنجرة باستخدام تقنيات حديثة طفيفة التوغل.",
    },
    conditions: [
      {
        id: "chronic-sinusitis",
        name: { en: "Chronic Sinusitis", ar: "التهاب الجيوب الأنفية المزمن" },
        description: {
          en: "Persistent inflammation of the paranasal sinuses causing nasal blockage, facial pressure, and recurrent infections.",
          ar: "التهاب مستمر في الجيوب الأنفية يسبب انسداد الأنف وضغطاً في الوجه وعدوى متكررة.",
        },
        symptoms: [
          { en: "Nasal congestion lasting >12 weeks", ar: "انسداد أنفي يستمر أكثر من ١٢ أسبوعاً" },
          { en: "Facial pain or pressure", ar: "ألم أو ضغط في الوجه" },
          { en: "Reduced sense of smell", ar: "ضعف حاسة الشم" },
          { en: "Thick nasal discharge", ar: "إفرازات أنفية كثيفة" },
          { en: "Post-nasal drip", ar: "تنقيط خلفي للأنف" },
        ],
        treatments: [
          {
            name: { en: "Endoscopic Sinus Surgery (FESS)", ar: "جراحة الجيوب الأنفية بالمنظار (FESS)" },
            description: {
              en: "Minimally invasive procedure to open blocked sinus pathways and restore normal drainage.",
              ar: "إجراء طفيف التوغل لفتح مسارات الجيوب المسدودة واستعادة التصريف الطبيعي.",
            },
            approach: {
              en: "Prof. Dr. Khairy performs functional endoscopic sinus surgery using high-definition endoscopes, removing diseased tissue while preserving healthy mucosa for rapid recovery.",
              ar: "يجري الأستاذ الدكتور خيري جراحة الجيوب الأنفية الوظيفية بالمنظار عالي الدقة، ويزيل الأنسجة المريضة مع الحفاظ على الغشاء المخاطي السليم للتعافي السريع.",
            },
          },
        ],
      },
      {
        id: "tonsillitis",
        name: { en: "Tonsillitis & Adenoid Hypertrophy", ar: "التهاب اللوز واللحمية المفرط" },
        description: {
          en: "Recurrent or chronic inflammation and enlargement of the tonsils and adenoids, especially common in children.",
          ar: "التهاب متكرر أو مزمن وتضخم في اللوزتين واللحمية، شائع خاصةً عند الأطفال.",
        },
        symptoms: [
          { en: "Recurrent sore throat", ar: "التهاب حلق متكرر" },
          { en: "Difficulty swallowing", ar: "صعوبة في البلع" },
          { en: "Snoring or mouth breathing", ar: "الشخير أو التنفس من الفم" },
          { en: "Enlarged neck lymph nodes", ar: "تضخم العقد اللمفاوية في الرقبة" },
          { en: "Frequent ear infections", ar: "التهابات أذن متكررة" },
        ],
        treatments: [
          {
            name: { en: "Tonsillectomy / Adenoidectomy", ar: "استئصال اللوز / اللحمية" },
            description: {
              en: "Surgical removal of enlarged or chronically infected tonsils and/or adenoids.",
              ar: "إزالة جراحية للوزتين و/أو اللحمية المتضخمة أو المصابة بالتهاب مزمن.",
            },
            approach: {
              en: "Modern coblation or electrocautery techniques minimise bleeding and post-operative pain. Prof. Khairy evaluates each case individually before recommending surgery.",
              ar: "تقنيات الكوبليشن أو الكي الحديثة تقلل النزيف والألم بعد العملية. يقيّم الأستاذ الدكتور خيري كل حالة على حدة قبل التوصية بالجراحة.",
            },
          },
        ],
      },
      {
        id: "tympanoplasty",
        name: { en: "Ear Drum Perforation", ar: "ثقب طبلة الأذن" },
        description: {
          en: "A hole or tear in the tympanic membrane causing hearing loss, ear discharge, or recurrent infections.",
          ar: "ثقب أو تمزق في طبلة الأذن يسبب فقدان السمع أو إفرازات أو التهابات متكررة.",
        },
        symptoms: [
          { en: "Hearing loss", ar: "فقدان السمع" },
          { en: "Ear discharge", ar: "إفرازات من الأذن" },
          { en: "Ear pain or discomfort", ar: "ألم أو انزعاج في الأذن" },
          { en: "Tinnitus (ringing)", ar: "طنين الأذن" },
          { en: "Recurrent ear infections", ar: "التهابات أذن متكررة" },
        ],
        treatments: [
          {
            name: { en: "Tympanoplasty (Eardrum Repair)", ar: "ترقيع الطبلة" },
            description: {
              en: "Microsurgical repair of the perforated eardrum to restore hearing and prevent infections.",
              ar: "إصلاح جراحي مجهري للطبلة المثقوبة لاستعادة السمع ومنع الالتهابات.",
            },
            approach: {
              en: "Under microscopic guidance, a graft is placed to reconstruct the eardrum. Prof. Khairy uses minimally invasive transcanal or post-auricular approaches depending on perforation size.",
              ar: "تحت توجيه المجهر، يُوضع رقعة لإعادة بناء الطبلة. يستخدم الأستاذ الدكتور خيري نهجاً طفيف التوغل عبر القناة أو خلف الأذن حسب حجم الثقب.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "rhinoplasty",
    label: { en: "Rhinoplasty & Nasal Surgery", ar: "تجميل الأنف والجراحات الأنفية" },
    icon: "Stethoscope",
    description: {
      en: "Functional and aesthetic nasal surgery to improve breathing, appearance, and quality of life.",
      ar: "جراحة أنفية وظيفية وجمالية لتحسين التنفس والمظهر وجودة الحياة.",
    },
    conditions: [
      {
        id: "deviated-septum",
        name: { en: "Deviated Nasal Septum", ar: "انحراف الحاجز الأنفي" },
        description: {
          en: "A crooked nasal septum blocking one or both nasal passages, causing breathing difficulty and snoring.",
          ar: "حاجز أنفي منحرف يعيق ممراً أو كليهما، مما يسبب صعوبة التنفس والشخير.",
        },
        symptoms: [
          { en: "Chronic nasal obstruction", ar: "انسداد أنفي مزمن" },
          { en: "Snoring", ar: "الشخير" },
          { en: "Frequent nosebleeds", ar: "نزيف أنفي متكرر" },
          { en: "Facial pain or headaches", ar: "ألم وجهي أو صداع" },
          { en: "Dry mouth from mouth breathing", ar: "جفاف الفم من التنفس بالفم" },
        ],
        treatments: [
          {
            name: { en: "Septoplasty", ar: "تصحيح الحاجز الأنفي" },
            description: {
              en: "Surgical straightening of the nasal septum to restore bilateral airflow.",
              ar: "تقويم جراحي للحاجز الأنفي لاستعادة تدفق الهواء في الجانبين.",
            },
            approach: {
              en: "Prof. Khairy performs endonasal septoplasty preserving the nasal structural support, often combined with turbinate reduction for optimal results.",
              ar: "يجري الأستاذ الدكتور خيري تصحيح الحاجز عبر الأنف مع الحفاظ على الدعامة الهيكلية، وغالباً يجمعه بتصغير المحارات لنتائج مثلى.",
            },
          },
        ],
      },
      {
        id: "rhinoplasty-cosmetic",
        name: { en: "Cosmetic Nose Reshaping", ar: "تجميل الأنف" },
        description: {
          en: "Surgical refinement of nasal shape, size, and proportion for aesthetic and functional improvement.",
          ar: "تحسين جراحي لشكل الأنف وحجمه وتناسقه لأغراض جمالية ووظيفية.",
        },
        symptoms: [
          { en: "Dissatisfaction with nasal appearance", ar: "عدم الرضا عن مظهر الأنف" },
          { en: "Nasal hump or dorsal bump", ar: "نتوء ظهر الأنف" },
          { en: "Wide or bulbous nasal tip", ar: "رأس أنف عريض أو منتفخ" },
          { en: "Asymmetric nostrils", ar: "منخارين غير متناسقين" },
          { en: "Post-traumatic nasal deformity", ar: "تشوه أنفي بعد إصابة" },
        ],
        treatments: [
          {
            name: { en: "Open / Closed Rhinoplasty", ar: "تجميل الأنف المفتوح / المغلق" },
            description: {
              en: "Precision reshaping of nasal bone and cartilage using open or closed surgical techniques.",
              ar: "إعادة تشكيل دقيقة لعظم وغضروف الأنف بتقنيات جراحية مفتوحة أو مغلقة.",
            },
            approach: {
              en: "Prof. Khairy tailors each rhinoplasty plan to facial proportions, using 3D analysis and European-trained techniques for natural, harmonious results.",
              ar: "يخصص الأستاذ الدكتور خيري خطة تجميل الأنف لكل مريض وفق تناسق الوجه، باستخدام تحليل ثلاثي الأبعاد وتقنيات أوروبية لنتائج طبيعية متناسقة.",
            },
          },
        ],
      },
      {
        id: "nasal-polyps",
        name: { en: "Nasal Polyps", ar: "اللحمية الأنفية" },
        description: {
          en: "Benign inflammatory growths in the nasal passages or sinuses causing blockage and loss of smell.",
          ar: "نموات التهابية حميدة في الممرات الأنفية أو الجيوب تسبب الانسداد وفقدان الشم.",
        },
        symptoms: [
          { en: "Complete nasal blockage", ar: "انسداد أنفي كامل" },
          { en: "Loss of smell (anosmia)", ar: "فقدان حاسة الشم" },
          { en: "Runny nose", ar: "سيلان الأنف" },
          { en: "Facial pressure", ar: "ضغط في الوجه" },
          { en: "Post-nasal drip", ar: "تنقيط خلفي للأنف" },
        ],
        treatments: [
          {
            name: { en: "Endoscopic Polypectomy", ar: "استئصال اللحمية بالمنظار" },
            description: {
              en: "Endoscopic removal of nasal polyps with restoration of sinus ventilation.",
              ar: "إزالة اللحمية الأنفية بالمنظار مع استعادة تهوية الجيوب.",
            },
            approach: {
              en: "Combined medical therapy (nasal steroids) with endoscopic polypectomy. Prof. Khairy uses powered microdebriders for precise, complete polyp removal.",
              ar: "علاج طبي مركب (ستيرويدات أنفية) مع استئصال بالمنظار. يستخدم الأستاذ الدكتور خيري أجهزة التفريغ الدقيقة لإزالة اللحمية بشكل كامل ودقيق.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "snoring-breathing",
    label: { en: "Snoring & Breathing Disorders", ar: "الشخير وصعوبة التنفس" },
    icon: "Heart",
    description: {
      en: "Diagnosis and treatment of snoring, sleep apnea, and upper airway obstruction in adults and children.",
      ar: "تشخيص وعلاج الشخير وانقطاع النفس أثناء النوم وانسداد المجرى الهوائي العلوي للبالغين والأطفال.",
    },
    conditions: [
      {
        id: "snoring-osas",
        name: { en: "Snoring / Obstructive Sleep Apnea (OSAS)", ar: "الشخير / انقطاع النفس الانسدادي أثناء النوم" },
        description: {
          en: "Partial or complete upper airway collapse during sleep causing loud snoring, oxygen desaturation, and daytime fatigue.",
          ar: "انهيار جزئي أو كامل في المجرى الهوائي العلوي أثناء النوم يسبب شخيراً عالياً وانخفاض الأكسجين وإرهاقاً نهارياً.",
        },
        symptoms: [
          { en: "Loud habitual snoring", ar: "شخير عالٍ ومتكرر" },
          { en: "Witnessed breathing pauses", ar: "توقف تنفس ملحوظ من المرافقين" },
          { en: "Daytime sleepiness", ar: "نعاس نهاري" },
          { en: "Morning headaches", ar: "صداع صباحي" },
          { en: "High blood pressure", ar: "ارتفاع ضغط الدم" },
        ],
        treatments: [
          {
            name: { en: "UPPP / Tongue Base Reduction / CPAP Guidance", ar: "UPPP / تصغير قاعدة اللسان / توجيه CPAP" },
            description: {
              en: "Multimodal treatment from surgical airway widening to CPAP therapy based on sleep study severity.",
              ar: "علاج متعدد الوسائل من توسيع المجرى الهوائي جراحياً إلى CPAP حسب شدة دراسة النوم.",
            },
            approach: {
              en: "Prof. Khairy coordinates polysomnography, evaluates airway anatomy endoscopically, and recommends UPPP, radiofrequency tongue base reduction, or CPAP based on individual findings.",
              ar: "ينسق الأستاذ الدكتور خيري تخطيط النوم، ويقيّم تشريح المجرى الهوائي بالمنظار، ويوصي بـ UPPP أو تردد قاعدة اللسان أو CPAP وفق النتائج الفردية.",
            },
          },
        ],
      },
      {
        id: "nasal-obstruction",
        name: { en: "Nasal Obstruction", ar: "انسداد الأنف" },
        description: {
          en: "Structural or functional blockage of nasal airflow affecting breathing, sleep, and exercise tolerance.",
          ar: "انسداد هيكلي أو وظيفي لتدفق الهواء الأنفي يؤثر على التنفس والنوم والقدرة على ممارسة الرياضة.",
        },
        symptoms: [
          { en: "Difficulty breathing through nose", ar: "صعوبة التنفس من الأنف" },
          { en: "Mouth breathing", ar: "التنفس من الفم" },
          { en: "Snoring", ar: "الشخير" },
          { en: "Dry throat on waking", ar: "جفاف الحلق عند الاستيقاظ" },
          { en: "Reduced exercise performance", ar: "انخفاض الأداء الرياضي" },
        ],
        treatments: [
          {
            name: { en: "Turbinate Reduction & Septal Correction", ar: "تصغير المحارات وتصحيح الحاجز" },
            description: {
              en: "Combined procedures to widen the nasal airway and restore comfortable nasal breathing.",
              ar: "إجراءات مركبة لتوسيع المجرى الأنفي واستعادة التنفس المريح من الأنف.",
            },
            approach: {
              en: "Radiofrequency or microdebrider turbinate reduction combined with septoplasty when indicated. Prof. Khairy prioritises functional outcomes alongside cosmetic harmony.",
              ar: "تصغير المحارات بالتردد أو المجهر مع تصحيح الحاجز عند الحاجة. يعطي الأستاذ الدكتور خيري الأولوية للنتائج الوظيفية إلى جانب التناسق الجمالي.",
            },
          },
        ],
      },
      {
        id: "ventilation-tubes",
        name: { en: "Ventilation Tube (Grommets)", ar: "أنابيب التهوية" },
        description: {
          en: "Fluid buildup behind the eardrum in children causing hearing loss and recurrent ear infections.",
          ar: "تراكم سوائل خلف طبلة الأذن عند الأطفال يسبب فقدان السمع والتهابات أذن متكررة.",
        },
        symptoms: [
          { en: "Hearing difficulty in children", ar: "صعوبة السمع عند الأطفال" },
          { en: "Speech delay", ar: "تأخر الكلام" },
          { en: "Recurrent ear infections", ar: "التهابات أذن متكررة" },
          { en: "Ear pulling or irritability", ar: "سحب الأذن أو تهيج" },
          { en: "Fluid behind eardrum on exam", ar: "سوائل خلف الطبلة عند الفحص" },
        ],
        treatments: [
          {
            name: { en: "Myringotomy with Tube Insertion", ar: "شق الطبلة مع إدخال الأنبوب" },
            description: {
              en: "Small incision in the eardrum with placement of a ventilation tube to drain fluid and equalise pressure.",
              ar: "شق صغير في الطبلة مع وضع أنبوب تهوية لتصريف السوائل وموازنة الضغط.",
            },
            approach: {
              en: "A quick outpatient procedure under general anaesthesia in children. Prof. Khairy schedules regular follow-up to monitor tube extrusion and hearing recovery.",
              ar: "إجراء سريع خارجي تحت تخدير عام للأطفال. يحدد الأستاذ الدكتور خيري متابعات منتظمة لمراقبة خروج الأنبوب واستعادة السمع.",
            },
          },
        ],
      },
    ],
  },
];
