// Define an interface to represent the structure of the resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission (page refresh)

    // Collect data from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create an object to hold the resume data
    const resumeData: ResumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills,
    };

    // Update the resume preview with the collected data
    updateResumePreview(resumeData);
}

// Function to update the resume preview with the entered data
function updateResumePreview(resumeData: ResumeData): void {
    // Update the content of the preview sections
    document.getElementById('previewName')!.innerText = resumeData.name;
    document.getElementById('previewEmail')!.innerText = resumeData.email;
    document.getElementById('previewPhone')!.innerText = resumeData.phone;
    document.getElementById('previewEducation')!.innerText = resumeData.education;
    document.getElementById('previewExperience')!.innerText = resumeData.experience;
    document.getElementById('previewSkills')!.innerText = resumeData.skills;
}



// Add event listener to the form for handling submit

document.getElementById('resumeForm')?.addEventListener('submit',handleFormSubmit);
