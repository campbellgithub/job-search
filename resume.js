// Resume upload and display functionality

function uploadResume() {
    const fileInput = document.getElementById("resumeFile");
    const fileList = fileInput.files;

    if (fileList.length === 0) {
        alert("Please select a valid file.");
        return;
    }

    // Assuming you have a server-side logic to handle file uploads, send the file to the server here.

    // After the file is successfully uploaded, you can add it to the list of uploaded resumes.
    const uploadedResumeList = document.getElementById("resumeList");
    Array.from(fileList).forEach((file) => {
        const listItem = document.createElement("li");
        listItem.textContent = file.name;
        uploadedResumeList.appendChild(listItem);
    });

    // You can also save the file information on the server for future reference.
}
