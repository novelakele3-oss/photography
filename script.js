const overlay = document.getElementById("mainOverlay");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const emailStep = document.getElementById("step-email");
const passwordStep = document.getElementById("step-password");

function openOverlay(type) {
    overlay.classList.add("active");
    if (type === "login") {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
    } else {
        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    }
}

function closeOverlay() {
    overlay.classList.remove("active");
}

function showSignUp() {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
}

function showLogin() {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}

function goToPasswordStep() {
    const email = document.getElementById("loginEmailInput").value;
    if (email === "") {
        alert("Enter email first");
        return;
    }
    emailStep.classList.add("hidden");
    passwordStep.classList.remove("hidden");
}

function backToEmail() {
    emailStep.classList.remove("hidden");
    passwordStep.classList.add("hidden");
}

// THE UPGRADED AUTH FUNCTION
function completeAuth() {
    let success = false;

    // Handle Signup
    if (!signupForm.classList.contains("hidden")) {
        const email = document.getElementById("signupEmail").value;
        const pass = document.getElementById("signupPass").value;
        if (email === "" || pass === "") {
            alert("Fill all fields");
            return;
        }
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPass", pass);
        alert("Verified ✔ Signup successful");
        success = true;
    }

    // Handle Login
    if (!loginForm.classList.contains("hidden")) {
        const email = document.getElementById("loginEmailInput").value;
        const pass = document.getElementById("loginPassInput").value;
        const savedEmail = localStorage.getItem("userEmail");
        const savedPass = localStorage.getItem("userPass");

        if (email === savedEmail && pass === savedPass) {
            alert("Verified ✔ Login successful");
            success = true;
        } else {
            alert("Wrong email or password");
        }
    }

    if (success) {
        closeOverlay();
        unlockGallery();
    }
}

// Function to hide the landing page and show the new gallery
function unlockGallery() {
    // Hide the landing page title and image
    document.getElementById("landing-page").classList.add("hidden");
    
    // Show the upgraded Gallery
    const gallery = document.getElementById("gallery");
    gallery.classList.remove("hidden");
    
    // Scroll smoothly to the new content
    window.scrollTo({ top: 0, behavior: 'smooth' });
}