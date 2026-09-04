import appointment_img from './appointment_img.png'
import header_img from './header_img.jpg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.jpg'
import leader from './leader.jpg'
import about from './about.jpg'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import about_img from './about_img.png'
import patient_care from './patient_care.jpg'
import patient_room from './patient_room.jpg'
import operation_room from './operation_room.jpg'
import post_discharge from './post_discharge.jpg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.png'
import doc21 from './doc21.png'
import doc22 from './doc22.png'
import doc23 from './doc23.png'
import doc24 from './doc24.png'
import doc25 from './doc25.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import Cardiologist from './Cardiologist.svg'
import Urologist from './Urologist.svg'
import Psychologist from './Psychologist.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    about,
    about_img,
    patient_care,
    patient_room,
    operation_room,
    post_discharge,
    chats_icon,
    verified_icon,
    leader,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
    {
        speciality: 'Cardiologist',
        image: Cardiologist
    },
     {
        speciality: 'Urologist',
        image: Urologist
    },
     {
        speciality: 'Psychologist',
        image: Psychologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Mathew Jonson',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '7 Years',
        about: 'Dr. Mathew Jonson is dedicated to providing holistic and personalized care for his patients. His patient-first philosophy emphasizes understanding the root causes of health issues and tailoring treatments to individual needs. He is passionate about promoting healthy lifestyles and empowering patients to take control of their health.',
        fees: 400,
        address: {
            line1: '56, MG Road, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sneha Nair',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Obstetrics & Gynecology)',
        experience: '3 Years',
        about: 'Dr. Sneha Nair is committed to addressing women’s health concerns with empathy and professionalism. She prioritizes building strong relationships with her patients and offers a holistic approach to care that empowers women to lead healthier lives.',
        fees: 602,
        address: {
            line1: '20, Koramangala, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Aamir Khan',
        image: doc3,
        speciality: 'Cardiologist',
        degree: 'MBBS, MD (Cardiology)',
        experience: '8 Years',
        about: 'Dr. Aamir Khan combines cutting-edge medical knowledge with a compassionate approach to patient care. He is deeply committed to improving cardiovascular health and focuses on patient education to reduce risks and enhance recovery. His collaborative approach ensures patients feel supported throughout their journey.',
        fees: 551,
        address: {
            line1: '56, MG Road, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Rajeshwar Rao',
        image: doc4,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 Years',
        about: 'Dr. Rajeshwar Rao is passionate about addressing neurological challenges with a comprehensive and empathetic approach. He believes in combining advanced diagnostics with personalized care to improve his patients quality of life. His focus is on simplifying complex medical conditions for his patients and their families.',
        fees: 550,
        address: {
            line1: '34, Indiranagar, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Vivek Sharma',
        image: doc5,
        speciality: 'Urologist',
        degree: 'MBBS, MCh (Urology)',
        experience: '4 Years',
        about: 'Dr. Vivek Sharma is focused on providing minimally invasive solutions for urological issues. He emphasizes the importance of early diagnosis and preventive measures. His goal is to enhance patient outcomes by offering innovative and compassionate care.',
        fees: 500,
        address: {
            line1: '21, Koramangala, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Fatima Sheikh',
        image: doc6,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '7 Years',
        about: 'Dr. Fatima Sheikh combines her expertise in dermatology with a compassionate approach to help patients achieve healthier skin. She focuses on providing personalized treatments that address both cosmetic and medical concerns.',
        fees: 300,
        address: {
            line1: '33, Sarjapur Road, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Irfan Qureshi',
        image: doc7,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '10 Years',
        about: 'Dr. Irfan Qureshi takes a comprehensive approach to gastrointestinal health, offering tailored dietary and medical plans for his patients. He prioritizes patient comfort and ensures that every individual receives clear and detailed guidance for managing their digestive health.',
        fees: 600,
        address: {
            line1: '18, JP Nagar, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Anjali Verma',
        image: doc8,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '3 Years',
        about:' Dr. Anjali Verma is dedicated to addressing neurological conditions with a patient-first approach. She believes in demystifying medical complexities and empowering her patients to take control of their health journey.',
        fees: 400,
        address: {
            line1: '23, JP Nagar, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Rachel Thomas',
        image: doc9,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '8 Years',
        about: 'Dr. Rachel Thomas is committed to delivering comprehensive and compassionate general healthcare. She focuses on understanding the unique needs of her patients and building lasting trust to achieve their health goals.',
        fees: 500,
        address: {
            line1: '36, Indiranagar, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Joseph D Souza',
        image: doc10,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '5 Years',
        about: 'Dr. Joseph D’Souza is dedicated to creating a safe and understanding environment for his patients. He emphasizes preventive healthcare and encourages proactive measures to maintain overall well-being. He values building strong, trust-based relationships with his patients.',
        fees: 400,
        address: {
            line1: '27, Sarjapur Road, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Vishal Iyer',
        image: doc11,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '7 Years',
        about: 'Dr. Vishal Iyer focuses on fostering healthy growth and development in children. His patient-centered approach ensures every child receives personalized attention, and he works closely with parents to address their concerns and promote wellness.',
        fees: 600,
        address: {
            line1: '14, HSR Layout, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Sofia D Silva',
        image: doc12,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '5 Years',
        about: 'Dr. Sofia D’Silva is dedicated to promoting heart health through personalized care. She prioritizes patient education and strives to make advanced cardiac care accessible to all.',
        fees: 500,
        address: {
            line1: '40, Bellandur, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Fahad Ali',
        image: doc13,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '7 Years',
        about: 'Dr. Fahad Ali is passionate about enhancing skin health and self-confidence through personalized dermatological care. He believes in using the latest advancements in dermatology while maintaining a patient-centered and approachable demeanor.',
        fees: 400,
        address: {
            line1: ' 30, Marathahalli, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Krishna Reddy',
        image: doc14,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '6 Years',
        about: 'Dr. Krishna Reddy is committed to making cardiac care accessible and effective. He believes in educating patients about heart health and empowering them to make informed decisions. His focus is on achieving sustainable and long-term heart health.',
        fees: 600,
        address: {
            line1: ' 40, Bellandur, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Meera Rao',
        image: doc15,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '6 Years',
        about: 'Dr. Meera Rao is focused on helping patients manage digestive health with a balanced and holistic approach. She ensures that her patients are equipped with the knowledge and resources they need to maintain long-term wellness.',
        fees: 600,
        address: {
            line1: '17, Marathahalli, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Arjun Menon',
        image: doc16,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '8 Years',
        about: 'Dr. Arjun Menon is dedicated to improving neurological health through detailed diagnostics and targeted treatments. He prioritizes patient comfort and believes in a collaborative approach to care that addresses both medical and emotional needs.',
        fees: 600,
        address: {
            line1: '25, Domlur, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Pradeep Kumar',
        image: doc17,
        speciality: 'Psychologist',
        degree: 'MBBS, MPhil (Clinical Psychology)',
        experience: '4 Years',
        about: 'Dr. Pradeep Kumar is deeply committed to addressing mental health challenges with empathy and understanding. He focuses on building a supportive environment for patients and uses evidence-based therapies to help them achieve mental wellness.',
        fees: 500,
        address: {
            line1: '35, Electronic City, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Sunil Jain',
        image: doc18,
        speciality: 'Urologist',
        degree: 'MBBS, MCh (Urology)',
        experience: '7 Years',
        about: 'Dr. Sunil Jain strives to provide patient-centered care in the field of urology. He believes in working closely with his patients to understand their concerns and create tailored treatment plans that enhance their quality of life.',
        fees: 400,
        address: {
            line1: '32, BTM Layout, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Kavita Patil',
        image: doc19,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Obstetrics & Gynecology)',
        experience: '6 Years',
        about: ' Dr. Kavita Patil is passionate about empowering women through education and personalized healthcare. She focuses on creating a welcoming environment to address the unique needs of her patients.',
        fees: 500,
        address: {
            line1: '24, Domlur, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Shabana Khan',
        image: doc20,
        speciality: 'Psychologist',
        degree: 'MBBS, MPhil (Clinical Psychology)',
        experience: '2 Years',
        about: 'Dr. Shabana Khan is committed to improving mental health by fostering a safe and understanding space for her patients. She uses evidence-based practices to guide individuals toward healing and self-awareness.',
        fees: 300,
        address: {
            line1: '14, BTM Layout, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc21',
        name: 'Dr. Mohammed Ansari',
        image: doc21,
        speciality: 'General physician',
        degree: 'MBBS, MD (General Medicine)',
        experience: '6 Years',
        about: 'Dr. Mohammed Ansari believes in delivering comprehensive care that addresses both immediate health concerns and long-term wellness. He is dedicated to fostering trust and open communication with his patients to ensure the best possible outcomes.',
        fees: 450,
        address: {
            line1: '22, Hebbal, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Lakshmi Srinivas',
        image: doc22,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '5 Years',
        about: ' Dr. Lakshmi Srinivas combines her expertise in dermatology with a patient-centered approach to enhance skin health. She is dedicated to helping her patients feel confident and comfortable in their own skin. ',
        fees: 400,
        address: {
            line1: '24, Domlur, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Ramesh Pillai',
        image: doc23,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '6 Years',
        about: 'Dr. Ramesh Pillai is focused on delivering advanced care for liver and gastrointestinal conditions. His approach includes patient education and lifestyle modifications to promote long-term health and recovery.',
        fees: 500,
        address: {
            line1: '45, Ulsoor, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc24',
        name: 'Dr. Peter Fernandes',
        image: doc24,
        speciality: 'Psychologist',
        degree: 'MBBS, MPhil (Clinical Psychology)',
        experience: '10 Years',
        about: 'Dr. Peter Fernandes emphasizes the importance of mental well-being in overall health. He focuses on creating a safe and comfortable environment where patients feel heard and supported as they navigate their challenges.',
        fees: 600,
        address: {
            line1: '28, Jayanagar, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
    {
        _id: 'doc25',
        name: 'Dr. Priya Sharma',
        image: doc25,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '3 Years',
        about: 'Dr. Priya Sharma believes in creating a nurturing and friendly environment for children and their families. She emphasizes preventive care and works closely with parents to ensure their child’s optimal growth and development.',
        fees: 550,
        address: {
            line1: '12, HSR Layout, Whitefield',
            line2: ' Bangalore, Karnataka - 560066, India.'
        }
    },
]
