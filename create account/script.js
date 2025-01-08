    const btn7 = document.getElementById("class7");
    document.getElementById('classPage').style.display = 'none';
    btn7.onclick = async function () {
        document.getElementById('pageContainer').style.display = "none";
        document.getElementById('classPage').style.display = "block";
        try {
            const response1 = await fetch("classes/class12.html");
            if (!response1.ok) {
                throw new Error(`Failed to load class1.html: ${response1.status}`);
            }
            const htmlContent1 = await response1.text();
            document.getElementById("classPage").innerHTML = htmlContent1;
        } catch (error) {
            console.error("Error loading classes/class12.html:", error);
            document.getElementById("classPage").innerHTML = "<p>Error loading content for classPage.</p>";
        }
    };
    

    const btn8 = document.getElementById("class8");
    document.getElementById('classPage').style.display = 'none';
    btn8.onclick = async function () {
        document.getElementById('pageContainer').style.display = "none";
        document.getElementById('classPage').style.display = "block";
        try {
            const response1 = await fetch("classes/class8.html");
            if (!response1.ok) {
                throw new Error(`Failed to load class1.html: ${response1.status}`);
            }
            const htmlContent1 = await response1.text();
            document.getElementById("classPage").innerHTML = htmlContent1;
        } catch (error) {
            console.error("Error loading classes/class8.html:", error);
            document.getElementById("classPage").innerHTML = "<p>Error loading content for classPage.</p>";
        }
    };
    

    const btn9 = document.getElementById("class9");
    document.getElementById('classPage').style.display = 'none';
    btn9.onclick = async function () {
        document.getElementById('pageContainer').style.display = "none";
        document.getElementById('classPage').style.display = "block";
        try {
            const response1 = await fetch("classes/class9.html");
            if (!response1.ok) {
                throw new Error(`Failed to load class1.html: ${response1.status}`);
            }
            const htmlContent1 = await response1.text();
            document.getElementById("classPage").innerHTML = htmlContent1;
        } catch (error) {
            console.error("Error loading classes/class9.html:", error);
            document.getElementById("classPage").innerHTML = "<p>Error loading content for classPage.</p>";
        }
    };
    

    const btn10 = document.getElementById("class10");
    document.getElementById('classPage').style.display = 'none';
    btn10.onclick = async function () {
        document.getElementById('pageContainer').style.display = "none";
        document.getElementById('classPage').style.display = "block";
        try {
            const response1 = await fetch("classes/class10.html");
            if (!response1.ok) {
                throw new Error(`Failed to load class1.html: ${response1.status}`);
            }
            const htmlContent1 = await response1.text();
            document.getElementById("classPage").innerHTML = htmlContent1;
        } catch (error) {
            console.error("Error loading classes/class10.html:", error);
            document.getElementById("classPage").innerHTML = "<p>Error loading content for classPage.</p>";
        }
    };
    

    const btn11 = document.getElementById("class11");
    document.getElementById('classPage').style.display = 'none';
    btn11.onclick = async function () {
        document.getElementById('pageContainer').style.display = "none";
        document.getElementById('classPage').style.display = "block";
        try {
            const response1 = await fetch("classes/class11.html");
            if (!response1.ok) {
                throw new Error(`Failed to load class1.html: ${response1.status}`);
            }
            const htmlContent1 = await response1.text();
            document.getElementById("classPage").innerHTML = htmlContent1;
        } catch (error) {
            console.error("Error loading classes/class11.html:", error);
            document.getElementById("classPage").innerHTML = "<p>Error loading content for classPage.</p>";
        }
    };
    

    const btn12 = document.getElementById("class12");
    document.getElementById('classPage').style.display = 'none';
    btn12.onclick = async function () {
        document.getElementById('pageContainer').style.display = "none";
        document.getElementById('classPage').style.display = "block";
        try {
            const response1 = await fetch("classes/class12.html");
            if (!response1.ok) {
                throw new Error(`Failed to load class1.html: ${response1.status}`);
            }
            const htmlContent1 = await response1.text();
            document.getElementById("classPage").innerHTML = htmlContent1;
        } catch (error) {
            console.error("Error loading classes/class12.html:", error);
            document.getElementById("classPage").innerHTML = "<p>Error loading content for classPage.</p>";
        }
    };
    
    







    // Footer Buttons Click Styling
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach((button) => {
    button.onclick = function () {
        buttons.forEach((btn) => {
            if (btn === button) {
                btn.style.backgroundColor = "white";
                const icon = btn.querySelector("box-icon");
                if (icon) {
                    icon.setAttribute("color", "black");
                }
            } else {
                btn.style.backgroundColor = "";
                const icon = btn.querySelector("box-icon");
                if (icon) {
                    icon.setAttribute("color", "white");
                }
            }
        });
    };
    });
    // Profile Card Toggle
    const profileCard = document.getElementById('profileCard');
    profileCard.style.display = "none";
    document.getElementById('toggleButton').addEventListener('click', () => {
    profileCard.style.display = profileCard.style.display === 'none' ? 'block' : 'none';
    document.getElementById('home').style.display =
        profileCard.style.display === 'block' ? 'none' : 'block';
    });

    // Menu Toggle
    const toggleVisibility = (element) => element.classList.toggle('hidden');
    document.getElementById('menu-button').addEventListener('click', () => {
    toggleVisibility(document.getElementById('menu'));
    toggleVisibility(document.getElementById('overlay'));
    });
    document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    });
