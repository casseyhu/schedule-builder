import React from 'react';

var chosenSubjs = new Set();

const ScheduleSearch = () => {
    return (
        <div className='s-search-component'>
            <h5> Search Course </h5>
            <p> Search by Subject </p>
            <select id='subject-drop' className="browser-default" onFocus={populateSubj} onChange={populateCourseNum}>
                <option disabled defaultValue="selected"> Subject </option>
            </select>
            <select id='number-drop' className="browser-default">
                <option disabled defaultValue="selected"> Course Number </option>
            </select>
            <select id='section-drop' className="browser-default">
                <option disabled defaultValue="selected"> Section Number </option>
            </select>
            <div id="course-description" className='row'>
                <div className="col s3 push-s9">
                <button id='add-button' className="btn red waves-effect lighten-1 z-depth-0"> Add </button>
                </div>
                <div className="col s9 pull-s3">
                    Description blah blah blah blah blah blah blah 
                    blah blah blah blah blah blah blah blah blah blah 
                    blah blah blah blah
                </div>
            </div>
        </div>
    )
}


function populateSubj() {
    var select = document.getElementById("subject-drop");
    var subjOptions = ['AAS - Asian & Asian American Studies', 'ACC - Accounting', 'ACH - Arts, Culture and Humanities', 'ADV - Advising', 'AFH - Africana Studies/Humanities', 
    'AFS - Africana Studies/Social and Behavioral Sciences', 'AIM - Advancement on Individual Merit', 'AMR - American Studies', 'AMS - Applied Mathematics and Statistics', 
    'ANP - Biological Anthropology', 'ANT - Anthropology, Cultural and Archaeology', 'ARB - Arabic', 'ARH - Art History', 'ARS - Art, Studio', 'ASC - Academic Success & Tutoring Center', 
    'AST - Astronomy', 'ATM - Atmospheric and Oceanic Studies', 'BCP - Pharmacology', 'BIO - Biology', 'BME - Biomedical Engineering', 'BUS - Business Management', 'CAR - Career Development', 
    'CCS - Cinema and Cultural Studies', 'CDT - Consortium for Digital Arts Culture and Technology', 'CEF - School of Professional Development', 'CHE - Chemistry', 'CHI - Chinese Language', 
    'CIV - Civil Engineering', 'CLL - Classics of Literature', 'CLS - Classics', 'CLT - Comparative Literature', 'CME - Chemical and Molecular Engineering', 'CSE - Computer Science', 
    'CWL - Creative Writing and Literature', 'DAN - Dance', 'DIA - Digital Arts', 'EAS - Engineering and Applied Science', 'EBH - Human Evolutionary Biology', 'ECO - Economics', 
    'EDP - Environmental Design, Policy, and Planning', 'EEL - Select East European Languages', 'EEO - Electrical Engineering Online', 'EGL - English', 'ENS - Environmental Studies', 
    'ENV - Environmental Science', 'ESE - Electrical Engineering', 'ESG - Engineering Science', 'ESL - English as Second Language', 'ESM - Materials Science', 'EST - Technology and Society', 
    'EUR - European Studies', 'EXT - Externships', 'FLA - Foreign Language Teacher Preparation', 'FLM - Film', 'FRN - French', 'GEO - Geosciences', 'GER - Germanic Languages and Literature', 
    'GLI - Globalization Studies and International Relations', 'GLS - Global Studies', 'GRK - Greek', 'GSS - Geospatial Science', 'HAD - Clinical Laboratory Sciences', 'HAL - Athletic Training', 
    'HAN - Health Sciences', 'HAT - Respiratory Care', 'HBA - Anatomical Sciences', 'HBH - Pharmacology', 'HBM - Molecular Genetics and Microbiology', 'HBP - Pathology', 'HBW - Hebrew', 
    'HBY - Physiology and Biophysics', 'HDG - General Dentistry', 'HDO - Oral Biology and Pathology', 'HDP - Periodontics', 'HDV - Human Development', 'HIN - Hindi', 'HIS - History', 
    'HNI - Nursing One and Two Year Baccalaureate Courses', 'HON - Honors College', 'HUE - European Literature and Culture Courses in English', 'HUF - French Literature and Culture Courses in English', 
    'HUG - German Literature and Culture Courses in English', 'HUI - Italian Literature and Culture Courses in English', 'HUL - Romance Languages', 'HUR - Russian Literature and Culture Courses in English', 
    'HUS - Spanish Literature and Culture Courses in English', 'HWC - Social Work', 'IAE - Digital Intelligence Arts & Engineering', 'IAP - International Academic Programs', 'INT - International Studies', 
    'ISE - Information Systems', 'ITL - Italian', 'ITS - Information and Tech Studies', 'JDH - Judaic Studies:Humanities', 'JDS - Judaic Studies:Social and Behavioral Sciences', 'JPN - Japanese Language', 
    'JRN - Journalism', 'KOR - Korean', 'LAC - Latin American and Caribbean Studies', 'LAN - Uncommonly Taught Languages', 'LAT - Latin', 'LCR - Living/Learning Center: Community Service Learning', 
    'LDR - LLC: Leadership Development', 'LDS - Leadership and Service', 'LHD - Living/Learning:Human Sexual & Gender Development', 'LHW - Living/Learning Center in Health and Wellness', 
    'LIA - Living/Learning Center:Interdisciplinary Arts', 'LIN - Linguistics', 'LSE - Living/Learning Center:Science and Engineering', 'MAE - Mathematics Teacher Preparation', 'MAP - Mathematics Proficiency', 
    'MAR - Marine Sciences', 'MAT - Mathematics', 'MDA - Media Arts', 'MEC - Mechanical Engineering', 'MSL - Military Service Leadership', 'MUS - Music', 'MVL - Medieval Studies', 'OAE - Oral Academic English', 
    'PER - Persian', 'PHI - Philosophy', 'PHY - Physics', 'POL - Political Science', 'POR - Portuguese', 'PSY - Psychology', 'RLS - Religious Studies', 'RUS - Russian Language and Literature', 
    'SBU - Stony Brook University', 'SCH - University Scholars Program', 'SCI - Science Teacher Preparation', 'SKT - Sanskrit', 'SLN - Sign Language', 'SOC - Sociology', 'SPN - Hispanic Languages and Literature', 
    'SSE - Social Studies Education', 'SSO - Science and Society', 'SUS - Sustainability Studies', 'SWA - Swahili', 'THR - Theatre Arts', 'TRK - Turkish', 'UKR - Ukrainian', 'VIP - Vertically Integrated Projects', 
    'WAE - Writing Academic English', 'WRT - Writing', 'WSE - Women in Science & Engineering', "WST - Women's Studies"];
    
    for(var i = 0; i < subjOptions.length; i++) {
        var opt = subjOptions[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt.slice(0,4);
        select.appendChild(el);
    }
}

function populateCourseNum() {
    var e = document.getElementById("subject-drop");
    var subj = e.options[e.selectedIndex].value;
    chosenSubjs.add(subj);
    console.log(chosenSubjs);
    // get from firestore
}


export default ScheduleSearch