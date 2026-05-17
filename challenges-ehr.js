// 100 EHR challenges: medical abbreviations, ICD, vitals, clinical concepts

const EHR_CHALLENGES = [
  // ===== Medical Abbreviations (1-25) =====
  { title: 'BP Abbreviation', description: 'What does BP stand for?', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Type the expansion of BP (2 words).', starter: '',
    pattern: 'Blood\\s+Pressure', hint: 'BP = Blood ___' },

  { title: 'HR Abbreviation', description: 'What does HR stand for in vitals?', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Type the expansion (2 words).', starter: '',
    pattern: 'Heart\\s+Rate', hint: 'HR = ___ Rate' },

  { title: 'RR Abbreviation', description: 'What does RR stand for?', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Type the expansion.', starter: '',
    pattern: 'Respiratory\\s+Rate', hint: 'RR = ___ Rate' },

  { title: 'Temp Abbreviation', description: 'What does T or Temp commonly mean?', difficulty: 'easy', xp: 12, coins: 5,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*[Tt]emperature\\s*$', hint: 'Body ___' },

  { title: 'O2 Sat', description: 'SpO2 measures?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Two words.', starter: '',
    pattern: 'oxygen\\s+saturation', hint: 'Oxygen saturation' },

  { title: 'BMI', description: 'BMI stands for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Body\\s+Mass\\s+Index', hint: 'Body Mass Index' },

  { title: 'EHR Acronym', description: 'EHR stands for?', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Electronic\\s+Health\\s+Records?', hint: 'Electronic Health Record' },

  { title: 'EMR Acronym', description: 'EMR stands for?', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Electronic\\s+Medical\\s+Records?', hint: 'Electronic Medical Record' },

  { title: 'CBC', description: 'CBC stands for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Complete\\s+Blood\\s+Count', hint: 'Complete Blood Count' },

  { title: 'ECG / EKG', description: 'ECG/EKG measures activity of?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Single word (organ).', starter: '',
    pattern: '^\\s*heart\\s*$', hint: 'Electrocardiogram' },

  { title: 'EEG', description: 'EEG measures activity of?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Single word (organ).', starter: '',
    pattern: '^\\s*brain\\s*$', hint: 'Electroencephalogram' },

  { title: 'MRI Acronym', description: 'MRI stands for?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Magnetic\\s+Resonance\\s+Imaging', hint: 'Magnetic Resonance Imaging' },

  { title: 'CT Scan', description: 'CT stands for?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Type the 2-word expansion.', starter: '',
    pattern: 'Computed\\s+Tomography', hint: 'Computed Tomography' },

  { title: 'IV', description: 'IV stands for?', difficulty: 'easy', xp: 15, coins: 5,
    instruction: 'Two words.', starter: '',
    pattern: 'intra[\\s-]?venous|intravenous', hint: 'Intravenous' },

  { title: 'IM Injection', description: 'IM injection means delivered into?', difficulty: 'medium', xp: 22, coins: 10,
    instruction: 'Type single word.', starter: '',
    pattern: '^\\s*muscle\\s*$', hint: 'IM = Intramuscular = into muscle' },

  { title: 'SC Injection', description: 'SC injection means delivered into?', difficulty: 'medium', xp: 22, coins: 10,
    instruction: 'Type single word.', starter: '',
    pattern: '^\\s*(subcutaneous|fat|skin)\\s*$', hint: 'SC = Subcutaneous' },

  { title: 'PRN', description: 'Prescription "PRN" means?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type 3-word expansion (as needed).', starter: '',
    pattern: 'as\\s+needed', hint: 'PRN = "pro re nata" = as needed' },

  { title: 'BID', description: 'BID prescription means?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'How many times per day?', starter: '',
    pattern: '^\\s*(2|twice|two)\\s*$', hint: 'Bis in die = twice daily' },

  { title: 'TID', description: 'TID prescription means?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'How many times per day?', starter: '',
    pattern: '^\\s*(3|three|thrice)\\s*$', hint: 'Ter in die = three times daily' },

  { title: 'QID', description: 'QID prescription means?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'How many times per day?', starter: '',
    pattern: '^\\s*(4|four)\\s*$', hint: 'Quater in die = four times daily' },

  { title: 'NPO', description: 'NPO order means?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type the 3-word meaning (nothing by mouth).', starter: '',
    pattern: 'nothing\\s+by\\s+mouth', hint: 'Latin nil per os' },

  { title: 'STAT', description: 'STAT order means?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(immediately|now|urgent)\\s*$', hint: 'STAT = immediately' },

  { title: 'Dx', description: 'Dx is short for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*[Dd]iagnosis\\s*$', hint: 'Dx = Diagnosis' },

  { title: 'Rx', description: 'Rx is short for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(prescription|treatment|recipe)\\s*$', hint: 'Rx = prescription' },

  { title: 'Hx', description: 'Hx is short for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*[Hh]istory\\s*$', hint: 'Hx = History' },

  // ===== Vitals & Normal Ranges (26-50) =====
  { title: 'Normal Resting HR', description: 'Average adult resting heart rate (lower bound, bpm)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*60\\s*$', hint: 'Normal: 60-100 bpm' },

  { title: 'Normal Resting HR Upper', description: 'Upper bound of normal resting HR (bpm)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*100\\s*$', hint: '60-100 bpm' },

  { title: 'Normal Systolic BP', description: "Normal systolic BP upper limit (mmHg)?", difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*120\\s*$', hint: '120 / 80 mmHg' },

  { title: 'Normal Diastolic BP', description: "Normal diastolic BP upper limit (mmHg)?", difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*80\\s*$', hint: '120 / 80 mmHg' },

  { title: 'Normal RR', description: 'Normal adult respiratory rate lower bound (breaths/min)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*12\\s*$', hint: '12-20 breaths/min' },

  { title: 'Normal Body Temp C', description: "Normal body temperature in Celsius?", difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number (commonly 37).', starter: '',
    pattern: '^\\s*37(\\.0)?\\s*$', hint: '37°C / 98.6°F' },

  { title: 'Normal Body Temp F', description: 'Normal body temperature in Fahrenheit?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type the number (commonly 98.6).', starter: '',
    pattern: '^\\s*98(\\.6)?\\s*$', hint: '98.6°F' },

  { title: 'Normal SpO2', description: 'Normal oxygen saturation lower bound (%)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*95\\s*$', hint: '95-100%' },

  { title: 'Fever Threshold', description: 'Body temp considered a fever (°C)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*38(\\.0)?\\s*$', hint: '38.0°C / 100.4°F' },

  { title: 'Hypertension Stage 1', description: 'Systolic BP that defines Stage 1 hypertension (mmHg)?', difficulty: 'hard', xp: 42, coins: 22,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*130\\s*$', hint: '130-139 / 80-89' },

  { title: 'Hypotension Threshold', description: 'Systolic BP usually defining hypotension (mmHg)?', difficulty: 'hard', xp: 42, coins: 22,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*90\\s*$', hint: 'Less than 90 systolic' },

  { title: 'Tachycardia', description: 'Term for heart rate > 100 bpm?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*tachycardia\\s*$', hint: 'Tachy = fast, cardia = heart' },

  { title: 'Bradycardia', description: 'Term for heart rate < 60 bpm?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*bradycardia\\s*$', hint: 'Brady = slow' },

  { title: 'Tachypnea', description: 'Term for abnormally fast breathing?', difficulty: 'hard', xp: 38, coins: 20,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*tachypnea\\s*$', hint: 'Tachy + pnea' },

  { title: 'Apnea', description: 'Term for absence of breathing?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*apnea\\s*$', hint: '5 letters, starts with A' },

  { title: 'Dyspnea', description: 'Term for difficult breathing?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*dyspnea\\s*$', hint: 'Dys = bad/difficult' },

  { title: 'Hyperthermia', description: 'Term for body temp too high?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*hyperthermia\\s*$', hint: 'Hyper + thermia' },

  { title: 'Hypothermia', description: 'Term for body temp too low?', difficulty: 'easy', xp: 25, coins: 12,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*hypothermia\\s*$', hint: 'Hypo + thermia' },

  { title: 'Hypoxia', description: 'Term for low blood oxygen?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*hypoxia\\s*$', hint: '7 letters' },

  { title: 'Hyperglycemia', description: 'Term for high blood sugar?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*hyperglycemia\\s*$', hint: 'Hyper + glyc + emia' },

  { title: 'Hypoglycemia', description: 'Term for low blood sugar?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*hypoglycemia\\s*$', hint: 'Hypo + glyc + emia' },

  { title: 'Fasting Glucose Normal', description: 'Normal fasting glucose upper limit (mg/dL)?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*(99|100)\\s*$', hint: 'Less than 100 mg/dL' },

  { title: 'Diabetes Fasting', description: 'Fasting glucose that diagnoses diabetes (mg/dL)?', difficulty: 'hard', xp: 48, coins: 26,
    instruction: 'Type a number (≥ this value).', starter: '',
    pattern: '^\\s*126\\s*$', hint: '≥ 126 mg/dL fasting' },

  { title: 'HbA1c Diabetes', description: 'HbA1c % that diagnoses diabetes?', difficulty: 'hard', xp: 48, coins: 26,
    instruction: 'Type a number with decimal (e.g. 6.5).', starter: '',
    pattern: '^\\s*6\\.5\\s*$', hint: '≥ 6.5%' },

  { title: 'Cholesterol Total', description: 'Total cholesterol desirable upper limit (mg/dL)?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*200\\s*$', hint: 'Less than 200 mg/dL is desirable' },

  // ===== Specialties & Departments (51-70) =====
  { title: 'Heart Specialty', description: 'Doctor specializing in heart?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*cardiologist\\s*$', hint: 'Cardio = heart' },

  { title: 'Brain Specialty', description: 'Doctor specializing in nervous system?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*neurologist\\s*$', hint: 'Neuro = nerves' },

  { title: 'Skin Specialty', description: 'Doctor specializing in skin?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*dermatologist\\s*$', hint: 'Derma = skin' },

  { title: 'Children Specialty', description: 'Doctor specializing in children?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*pediatrician\\s*$', hint: 'Ped = child' },

  { title: 'Cancer Specialty', description: 'Doctor specializing in cancer?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*oncologist\\s*$', hint: 'Onco = tumor' },

  { title: 'Bones Specialty', description: 'Doctor specializing in bones?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type the specialist (orthopedist).', starter: '',
    pattern: '^\\s*orthop(a?edi[cs]t|edist)\\s*$', hint: 'Ortho = straight, ped = bone' },

  { title: 'Eye Specialty', description: 'Doctor specializing in eyes (medical)?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*ophthalmologist\\s*$', hint: 'Ophthalm = eye' },

  { title: 'Anesthesia Specialty', description: 'Doctor specializing in anesthesia?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*anesthesiologist\\s*$', hint: 'Provides anesthesia in surgery' },

  { title: 'Lungs Specialty', description: 'Doctor specializing in lungs?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word (pulmonologist).', starter: '',
    pattern: '^\\s*pulmonologist\\s*$', hint: 'Pulmo = lung' },

  { title: 'Kidney Specialty', description: 'Doctor specializing in kidneys?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*nephrologist\\s*$', hint: 'Nephro = kidney' },

  { title: 'ER Acronym', description: 'ER stands for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type the 2-word expansion.', starter: '',
    pattern: 'Emergency\\s+Room', hint: 'Emergency Room' },

  { title: 'ICU Acronym', description: 'ICU stands for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Intensive\\s+Care\\s+Unit', hint: 'Intensive Care Unit' },

  { title: 'NICU', description: 'NICU is the ICU for?', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Single word (group of patients).', starter: '',
    pattern: '^\\s*(neonates?|newborns?|babies)\\s*$', hint: 'Neonatal ICU' },

  { title: 'OR Acronym', description: "OR in a hospital means?", difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type the 2-word expansion.', starter: '',
    pattern: 'Operating\\s+Room', hint: 'Operating Room' },

  { title: 'OPD Acronym', description: 'OPD stands for?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Out[\\s-]?Patient\\s+Department', hint: 'Out-Patient Department' },

  { title: 'IPD Acronym', description: 'IPD stands for?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'In[\\s-]?Patient\\s+Department', hint: 'In-Patient Department' },

  { title: 'GP Acronym', description: 'GP stands for?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type the 2-word expansion.', starter: '',
    pattern: 'General\\s+Practitioner', hint: 'General Practitioner' },

  { title: 'PCP Acronym', description: 'PCP stands for? (in primary care)', difficulty: 'medium', xp: 25, coins: 12,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Primary\\s+Care\\s+(Physician|Provider)', hint: 'Primary Care Physician' },

  { title: 'Surgical Specialty Heart', description: 'Surgeon who operates on the heart?', difficulty: 'hard', xp: 40, coins: 22,
    instruction: 'Type two words (cardiac surgeon or cardiothoracic).', starter: '',
    pattern: '(cardiac\\s+surgeon|cardiothoracic\\s+surgeon)', hint: 'Cardiac surgeon' },

  { title: 'Surgical Specialty Brain', description: 'Surgeon who operates on brain & nerves?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*neurosurgeon\\s*$', hint: 'Neuro + surgeon' },

  // ===== Coding Systems & Standards (71-85) =====
  { title: 'ICD Code', description: 'ICD-10 codes classify what?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(diseases?|diagnos[ei]s)\\s*$', hint: 'International Classification of Diseases' },

  { title: 'ICD Acronym', description: 'ICD stands for?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the expansion.', starter: '',
    pattern: 'International\\s+Classification\\s+of\\s+Diseases', hint: 'International Classification of Diseases' },

  { title: 'CPT Codes', description: 'CPT codes are used for billing what?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Single word (procedures or diseases).', starter: '',
    pattern: '^\\s*procedures?\\s*$', hint: 'Current Procedural Terminology' },

  { title: 'LOINC Use', description: 'LOINC codes identify what?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Two words (lab tests).', starter: '',
    pattern: '(lab\\s+(tests?|observations?)|laboratory)', hint: 'Logical Observation Identifiers Names and Codes' },

  { title: 'SNOMED Use', description: "SNOMED is a coding system for medical?", difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(terms?|terminology|concepts?)\\s*$', hint: 'Standardized clinical terminology' },

  { title: 'HL7', description: 'HL7 is a standard for?', difficulty: 'hard', xp: 48, coins: 26,
    instruction: 'Single word (exchange / sharing / transfer).', starter: '',
    pattern: '^\\s*(exchange|interoperability|messaging)\\s*$', hint: 'Health data exchange / interoperability' },

  { title: 'FHIR', description: 'FHIR is a modern healthcare API standard. F stands for?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*Fast\\s*$', hint: 'Fast Healthcare Interoperability Resources' },

  { title: 'HIPAA Acronym', description: 'HIPAA stands for?', difficulty: 'hard', xp: 50, coins: 28,
    instruction: 'Type the expansion (starts with Health Insurance).', starter: '',
    pattern: 'Health\\s+Insurance\\s+Portability\\s+and\\s+Accountability', hint: 'US health privacy law' },

  { title: 'HIPAA Region', description: 'HIPAA is the privacy law of which country?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type the country (2-letter code or full).', starter: '',
    pattern: '^\\s*(USA?|United\\s+States(\\s+of\\s+America)?)\\s*$', hint: 'United States' },

  { title: 'GDPR Region', description: 'GDPR is the privacy law of which region?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type 2-letter code or full name.', starter: '',
    pattern: '^\\s*(EU|European\\s+Union|Europe)\\s*$', hint: 'European Union' },

  { title: 'PHI Acronym', description: 'PHI stands for?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Protected\\s+Health\\s+Information', hint: 'Protected Health Information' },

  { title: 'DICOM Standard', description: 'DICOM is a standard for medical?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(imaging|images?)\\s*$', hint: 'Digital Imaging and Communications in Medicine' },

  { title: 'Pharm Rx Symbol', description: 'Universal pharmacy symbol?', difficulty: 'easy', xp: 18, coins: 8,
    instruction: 'Type 2 letters.', starter: '',
    pattern: '^\\s*[Rr]x\\s*$', hint: 'Rx' },

  { title: 'Triage Color Red', description: 'Triage RED means?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word (immediate, delayed, minor, deceased).', starter: '',
    pattern: '^\\s*immediate\\s*$', hint: 'RED = needs immediate care' },

  { title: 'Triage Color Black', description: 'Triage BLACK means?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(deceased|dead|expectant)\\s*$', hint: 'BLACK = beyond saving' },

  // ===== Clinical / Anatomy (86-100) =====
  { title: 'Aspirin Class', description: 'Aspirin is what class of drug?', difficulty: 'medium', xp: 35, coins: 20,
    instruction: 'Single word or acronym (NSAID).', starter: '',
    pattern: '^\\s*NSAIDs?\\s*$', hint: 'Non-Steroidal Anti-Inflammatory Drug' },

  { title: 'Insulin Treats', description: 'Insulin is used to treat?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*diabetes\\s*$', hint: 'Diabetes' },

  { title: 'Antibiotic Treats', description: 'Antibiotics fight what type of organisms?', difficulty: 'easy', xp: 20, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*bacteri[ae]\\s*$', hint: 'Bacteria (not viruses)' },

  { title: 'Antiviral Treats', description: 'Antiviral drugs target?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*viruses?\\s*$', hint: 'Viruses' },

  { title: 'Heart Chambers', description: 'How many chambers in the human heart?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*4\\s*$', hint: '4 chambers' },

  { title: 'Adult Ribs', description: 'How many ribs does an adult human have?', difficulty: 'medium', xp: 28, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*24\\s*$', hint: '12 pairs = 24 ribs' },

  { title: 'Vertebrae Count', description: 'Bones in the human spine?', difficulty: 'hard', xp: 42, coins: 22,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*(33|26)\\s*$', hint: '33 vertebrae (26 in adult after fusion)' },

  { title: 'Adult Bones', description: 'How many bones in an adult human body?', difficulty: 'medium', xp: 30, coins: 15,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*206\\s*$', hint: '206 bones' },

  { title: 'Blood Cells', description: 'Red blood cells transport?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*oxygen\\s*$', hint: 'Hemoglobin carries oxygen' },

  { title: 'White Blood Cells', description: 'White blood cells primarily fight?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Single word.', starter: '',
    pattern: '^\\s*(infection|infections|pathogens)\\s*$', hint: 'They fight infection' },

  { title: 'Universal Donor', description: 'Universal blood donor type?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the blood type (e.g. O-).', starter: '',
    pattern: '^\\s*O[-]\\s*$', hint: 'O negative donates to all' },

  { title: 'Universal Recipient', description: 'Universal blood recipient type?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the blood type (e.g. AB+).', starter: '',
    pattern: '^\\s*AB\\+?\\s*$', hint: 'AB positive receives all' },

  { title: 'Adult HR Resting Avg', description: 'Average adult resting heart rate (rough single number)?', difficulty: 'easy', xp: 22, coins: 10,
    instruction: 'Type a number (between 60-100).', starter: '',
    pattern: '^\\s*[678][05]\\s*$', hint: '70, 75 or 80 bpm typically' },

  { title: 'CPR Compression Rate', description: 'CPR chest compression rate (per minute)?', difficulty: 'hard', xp: 45, coins: 25,
    instruction: 'Type a number.', starter: '',
    pattern: '^\\s*(100|120)\\s*$', hint: '100-120 per minute' },

  { title: 'AED Acronym', description: 'AED stands for?', difficulty: 'medium', xp: 32, coins: 18,
    instruction: 'Type the 3-word expansion.', starter: '',
    pattern: 'Automated\\s+External\\s+Defibrillator', hint: 'Automated External Defibrillator' },
];

module.exports = { EHR_CHALLENGES };
