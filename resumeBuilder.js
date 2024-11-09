var _a;
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission (page refresh)
    // Collect data from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create an object to hold the resume data
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    // Update the resume preview with the collected data
    updateResumePreview(resumeData);
}
// Function to update the resume preview with the entered data
function updateResumePreview(resumeData) {
    // Update the content of the preview sections
    document.getElementById('previewName').innerText = resumeData.name;
    document.getElementById('previewEmail').innerText = resumeData.email;
    document.getElementById('previewPhone').innerText = resumeData.phone;
    document.getElementById('previewEducation').innerText = resumeData.education;
    document.getElementById('previewExperience').innerText = resumeData.experience;
    document.getElementById('previewSkills').innerText = resumeData.skills;
}
// Add event listener to the form for handling submit
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
