// =============================================
// SKILLBRIDGE AI
// SMART SKILL GAP ANALYZER
// =============================================


// ---------------------------------------------
// ELEMENTS
// ---------------------------------------------

const chatBox =
    document.getElementById("chatBox");

const userInput =
    document.getElementById("userInput");


// ---------------------------------------------
// USER DATA
// ---------------------------------------------

let userData = {

    career: null,

    skills: [],

    step: "career"

};


// =============================================
// CAREER DATABASE
// =============================================

const careerDatabase = {


    // =========================================
    // AI ENGINEER
    // =========================================

    ai: {

        name:
            "AI / Machine Learning Engineer",

        keywords: [

            "ai engineer",

            "artificial intelligence",

            "machine learning engineer",

            "machine learning",

            "ml engineer"

        ],

        skills: [

            {

                name:
                    "Python Fundamentals",

                topics: [

                    "variables",

                    "data types",

                    "if else",

                    "conditions",

                    "loops",

                    "functions",

                    "strings"

                ],

                importance:
                    3

            },


            {

                name:
                    "Python Data Structures",

                topics: [

                    "lists",

                    "tuples",

                    "dictionaries",

                    "sets"

                ],

                importance:
                    3

            },


            {

                name:
                    "NumPy",

                topics: [

                    "numpy",

                    "arrays"

                ],

                importance:
                    3

            },


            {

                name:
                    "Pandas",

                topics: [

                    "pandas",

                    "dataframes"

                ],

                importance:
                    3

            },


            {

                name:
                    "Math & Statistics",

                topics: [

                    "statistics",

                    "probability",

                    "linear algebra"

                ],

                importance:
                    3

            },


            {

                name:
                    "Machine Learning",

                topics: [

                    "machine learning",

                    "supervised learning",

                    "unsupervised learning"

                ],

                importance:
                    3

            },


            {

                name:
                    "Scikit-learn",

                topics: [

                    "scikit learn",

                    "sklearn"

                ],

                importance:
                    2

            },


            {

                name:
                    "Deep Learning",

                topics: [

                    "deep learning",

                    "neural networks",

                    "tensorflow",

                    "pytorch"

                ],

                importance:
                    2

            },


            {

                name:
                    "SQL",

                topics: [

                    "sql"

                ],

                importance:
                    1

            }

        ],

        roadmap: [

            "Python Fundamentals",

            "Python Data Structures",

            "NumPy",

            "Pandas",

            "Statistics & Probability",

            "Machine Learning",

            "Scikit-learn",

            "Deep Learning",

            "AI Projects"

        ]

    },


    // =========================================
    // WEB DEVELOPER
    // =========================================

    web: {

        name:
            "Web Developer",

        keywords: [

            "web developer",

            "web development",

            "frontend",

            "front end",

            "backend",

            "full stack",

            "fullstack"

        ],

        skills: [

            {

                name:
                    "HTML",

                topics:
                    ["html"],

                importance:
                    3

            },


            {

                name:
                    "CSS",

                topics: [

                    "css",

                    "flexbox",

                    "grid"

                ],

                importance:
                    3

            },


            {

                name:
                    "JavaScript",

                topics: [

                    "javascript",

                    "js",

                    "dom"

                ],

                importance:
                    3

            },


            {

                name:
                    "Git & GitHub",

                topics: [

                    "git",

                    "github"

                ],

                importance:
                    2

            },


            {

                name:
                    "React",

                topics:
                    ["react"],

                importance:
                    2

            },


            {

                name:
                    "Backend",

                topics: [

                    "node",

                    "express",

                    "api"

                ],

                importance:
                    2

            }

        ],

        roadmap: [

            "HTML",

            "CSS",

            "JavaScript",

            "DOM & Projects",

            "Git & GitHub",

            "React",

            "Backend",

            "Full Stack Projects"

        ]

    },


    // =========================================
    // DATA ANALYST
    // =========================================

    data: {

        name:
            "Data Analyst",

        keywords: [

            "data analyst",

            "data analysis"

        ],

        skills: [

            {

                name:
                    "Excel",

                topics:
                    ["excel"],

                importance:
                    3

            },


            {

                name:
                    "SQL",

                topics:
                    ["sql"],

                importance:
                    3

            },


            {

                name:
                    "Python",

                topics:
                    ["python"],

                importance:
                    3

            },


            {

                name:
                    "Pandas",

                topics:
                    ["pandas"],

                importance:
                    3

            },


            {

                name:
                    "Statistics",

                topics: [

                    "statistics",

                    "probability"

                ],

                importance:
                    3

            },


            {

                name:
                    "Power BI",

                topics:
                    ["power bi"],

                importance:
                    2

            }

        ],

        roadmap: [

            "Excel",

            "SQL",

            "Python",

            "Pandas",

            "Statistics",

            "Data Visualization",

            "Power BI",

            "Portfolio Projects"

        ]

    },


    // =========================================
    // GAME DEVELOPER
    // =========================================

    game: {

        name:
            "Game Developer",

        keywords: [

            "game developer",

            "game development",

            "game dev"

        ],

        skills: [

            {

                name:
                    "Programming Fundamentals",

                topics: [

                    "variables",

                    "loops",

                    "functions",

                    "conditions"

                ],

                importance:
                    3

            },


            {

                name:
                    "OOP",

                topics:
                    ["oop"],

                importance:
                    3

            },


            {

                name:
                    "C# / C++",

                topics: [

                    "c#",

                    "c++"

                ],

                importance:
                    3

            },


            {

                name:
                    "Game Engine",

                topics: [

                    "unity",

                    "godot",

                    "unreal"

                ],

                importance:
                    3

            },


            {

                name:
                    "Game Design",

                topics: [

                    "game design",

                    "game mechanics"

                ],

                importance:
                    2

            },


            {

                name:
                    "3D / Blender",

                topics: [

                    "blender",

                    "3d"

                ],

                importance:
                    2

            }

        ],

        roadmap: [

            "Programming Fundamentals",

            "OOP",

            "C# or C++",

            "Game Engine",

            "Game Mechanics",

            "Build Small Games",

            "Portfolio Projects"

        ]

    }

};


// =============================================
// SEND MESSAGE
// =============================================

function sendMessage() {

    const text =
        userInput.value.trim();

    if (text === "") {

        return;

    }


    addUserMessage(text);

    userInput.value = "";

    showTyping();


    setTimeout(() => {

        removeTyping();

        const response =
            generateResponse(text);

        addBotMessage(response);

    }, 650);

}


// =============================================
// ENTER KEY
// =============================================

userInput.addEventListener(

    "keydown",

    function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }

);


// =============================================
// QUICK CAREER
// =============================================

function quickCareer(career) {

    userInput.value =
        "I want to become an " +
        career;

    sendMessage();

}


// =============================================
// QUICK MESSAGE
// =============================================

function quickMessage(message) {

    userInput.value =
        message;

    sendMessage();

}


// =============================================
// ADD USER MESSAGE
// =============================================

function addUserMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message user-message";


    message.innerHTML = `

        <div class="bubble">

            ${escapeHTML(text)}

        </div>

    `;


    chatBox.appendChild(message);

    scrollChat();

}


// =============================================
// ADD BOT MESSAGE
// =============================================

function addBotMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message bot-message";


    message.innerHTML = `

        <div class="message-avatar">
            🤖
        </div>

        <div class="bubble">
            ${text}
        </div>

    `;


    chatBox.appendChild(message);

    scrollChat();

}


// =============================================
// TYPING ANIMATION
// =============================================

function showTyping() {

    const typing =
        document.createElement("div");


    typing.className =
        "message bot-message";


    typing.id =
        "typing";


    typing.innerHTML = `

        <div class="message-avatar">
            🤖
        </div>

        <div class="bubble">

            <div class="typing-dots">

                <span></span>

                <span></span>

                <span></span>

            </div>

        </div>

    `;


    chatBox.appendChild(typing);

    scrollChat();

}


function removeTyping() {

    const typing =
        document.getElementById("typing");


    if (typing) {

        typing.remove();

    }

}


// =============================================
// MAIN CHATBOT
// =============================================

function generateResponse(message) {

    const text =
        message.toLowerCase().trim();


    // RESET COMMAND

    if (

        text.includes("start again") ||

        text.includes("another career") ||

        text.includes("restart")

    ) {

        resetConversation();

        return `

            🔄 <strong>Fresh start!</strong>

            <br><br>

            Tell me which career you want to explore.

            <br><br>

            You can choose:

            <br>

            🤖 AI Engineer

            <br>

            🌐 Web Developer

            <br>

            📊 Data Analyst

            <br>

            🎮 Game Developer

        `;

    }


    // =========================================
    // STEP 1
    // CAREER SELECTION
    // =========================================

    if (userData.step === "career") {

        const career =
            detectCareer(text);


        if (!career) {

            return `

                👋 Tell me which career you want to explore.

                <br><br>

                Try:

                <br>

                🤖 AI Engineer

                <br>

                🌐 Web Developer

                <br>

                📊 Data Analyst

                <br>

                🎮 Game Developer

            `;

        }


        userData.career =
            career;

        userData.step =
            "skills";


        return `

            🎯 <strong>Great choice!</strong>

            <br><br>

            You selected:

            <br><br>

            <strong>${career.name}</strong>

            <br><br>

            Now tell me the skills and topics you actually know.

            <br><br>

            ⚠️ Try to be specific instead of only saying
            "I know basic Python".

            <br><br>

            Example:

            <br><br>

            "I know variables, loops, functions, strings and lists."

        `;

    }


    // =========================================
    // STEP 2
    // SKILL DETECTION
    // =========================================

    if (userData.step === "skills") {

        const detectedSkills =
            detectSkills(text);


        if (

            detectedSkills.length === 0

        ) {

            return `

                🤔 I couldn't identify specific skills.

                <br><br>

                Please mention the topics you actually know.

                <br><br>

                Example:

                <br>

                "Variables, loops, functions, strings and lists"

                <br><br>

                This helps me avoid giving misleading results.

            `;

        }


        userData.skills =
            detectedSkills;


        userData.step =
            "confirm";


        return `

            🧠 I detected these skills:

            <br><br>

            <strong>
                ${detectedSkills.join(", ")}
            </strong>

            <br><br>

            Is this correct?

            <br><br>

            Type:

            <br>

            <strong>Yes</strong>

            or

            <strong>No</strong>

        `;

    }


    // =========================================
    // STEP 3
    // CONFIRM
    // =========================================

    if (userData.step === "confirm") {

        if (

            text === "yes" ||

            text.includes("yes correct") ||

            text.includes("correct")

        ) {

            userData.step =
                "complete";


            const result =
                calculateAnalysis();


            showResults(result);


            return `

                ✅ <strong>Analysis complete!</strong>

                <br><br>

                I calculated your current
                <strong>Skill Coverage</strong>
                based only on the skills you confirmed.

                <br><br>

                ⚠️ The percentage is NOT your chance
                of getting a job.

                <br><br>

                📊 Your report is shown below!

            `;

        }


        if (

            text === "no" ||

            text.includes("wrong")

        ) {

            userData.skills =
                [];

            userData.step =
                "skills";


            return `

                No problem 👍

                <br><br>

                Please tell me your skills again.

                <br><br>

                Try listing specific topics.

            `;

        }


        return `

            Please answer:

            <br><br>

            <strong>Yes</strong> or <strong>No</strong>

        `;

    }


    // =========================================
    // STEP 4
    // AFTER ANALYSIS
    // =========================================

    if (userData.step === "complete") {

        if (

            text.includes("next") ||

            text.includes("learn next")

        ) {

            const next =
                getNextSkill();


            return `

                📚 Based on your reported skills,
                your next area to focus on is:

                <br><br>

                <strong>${next}</strong>

                <br><br>

                Learn it step by step and practice
                with small projects.

            `;

        }


        if (

            text.includes("why") ||

            text.includes("percentage") ||

            text.includes("score")

        ) {

            return `

                📊 Your percentage represents
                <strong>Skill Coverage</strong>.

                <br><br>

                It compares the skills you reported
                with the skill areas in the selected
                career checklist.

                <br><br>

                ⚠️ It does not measure intelligence,
                talent, or future job success.

            `;

        }


        return `

            🤖 Your analysis is complete!

            <br><br>

            You can ask:

            <br><br>

            👉 What should I learn next?

            <br>

            👉 Why is my score this?

            <br>

            👉 Start again

        `;

    }

}


// =============================================
// DETECT CAREER
// =============================================

function detectCareer(text) {

    for (

        const key in careerDatabase

    ) {

        const career =
            careerDatabase[key];


        for (

            const keyword
            of career.keywords

        ) {

            if (

                text.includes(keyword)

            ) {

                return career;

            }

        }

    }


    return null;

}


// =============================================
// DETECT SKILLS
// =============================================

function detectSkills(text) {

    const allTopics = [

        "python",

        "variables",

        "data types",

        "if else",

        "conditions",

        "loops",

        "functions",

        "strings",

        "lists",

        "tuples",

        "dictionaries",

        "sets",

        "numpy",

        "arrays",

        "pandas",

        "dataframes",

        "statistics",

        "probability",

        "linear algebra",

        "machine learning",

        "supervised learning",

        "unsupervised learning",

        "scikit learn",

        "sklearn",

        "deep learning",

        "neural networks",

        "tensorflow",

        "pytorch",

        "sql",

        "html",

        "css",

        "flexbox",

        "grid",

        "javascript",

        "react",

        "dom",

        "git",

        "github",

        "node",

        "express",

        "api",

        "excel",

        "power bi",

        "unity",

        "godot",

        "unreal",

        "game design",

        "game mechanics",

        "blender",

        "oop",

        "c#",

        "c++"

    ];


    const detected = [];


    allTopics.forEach(

        function (topic) {

            if (

                text.includes(topic)

            ) {

                detected.push(topic);

            }

        }

    );


    // REMOVE DUPLICATES

    return [

        ...new Set(detected)

    ];

}


// =============================================
// CALCULATE ANALYSIS
// =============================================

function calculateAnalysis() {

    const career =
        userData.career;


    let totalWeight = 0;

    let earnedWeight = 0;


    const haveSkills = [];

    const missingSkills = [];


    career.skills.forEach(

        function (skill) {

            totalWeight +=
                skill.importance;


            let matchedTopics = 0;


            skill.topics.forEach(

                function (topic) {

                    if (

                        userData.skills.includes(topic)

                    ) {

                        matchedTopics++;

                    }

                }

            );


            const coverage =

                matchedTopics /
                skill.topics.length;


            earnedWeight +=

                coverage *
                skill.importance;


            if (

                coverage >= 0.5

            ) {

                haveSkills.push(
                    skill.name
                );

            }

            else {

                missingSkills.push(
                    skill.name
                );

            }

        }

    );


    const score =

        Math.round(

            (
                earnedWeight /
                totalWeight
            )

            * 100

        );


    return {

        score:

            Math.min(
                score,
                100
            ),

        haveSkills,

        missingSkills,

        roadmap:

            career.roadmap

    };

}


// =============================================
// SHOW RESULTS
// =============================================

function showResults(result) {

    const section =
        document.getElementById(
            "resultSection"
        );


    section.classList.remove(
        "hidden"
    );


    animateScore(
        result.score
    );


    const description =
        document.getElementById(
            "scoreDescription"
        );


    if (

        result.score < 15

    ) {

        description.textContent =

            "Starting stage: You have begun building relevant skills.";

    }

    else if (

        result.score < 35

    ) {

        description.textContent =

            "Foundation stage: You have some relevant concepts.";

    }

    else if (

        result.score < 60

    ) {

        description.textContent =

            "Developing stage: You have built several relevant skills.";

    }

    else if (

        result.score < 80

    ) {

        description.textContent =

            "Strong coverage: Continue filling remaining skill gaps.";

    }

    else {

        description.textContent =

            "High skill coverage: Focus on projects and practical experience.";

    }


    // CURRENT SKILLS

    const currentContainer =
        document.getElementById(
            "currentSkills"
        );


    currentContainer.innerHTML =
        "";


    userData.skills.forEach(

        function (skill) {

            const tag =
                document.createElement(
                    "span"
                );


            tag.className =
                "skill-tag skill-have";


            tag.textContent =
                "✓ " + skill;


            currentContainer.appendChild(
                tag
            );

        }

    );


    // MISSING SKILLS

    const missingContainer =
        document.getElementById(
            "missingSkills"
        );


    missingContainer.innerHTML =
        "";


    result.missingSkills.forEach(

        function (skill) {

            const tag =
                document.createElement(
                    "span"
                );


            tag.className =
                "skill-tag skill-missing";


            tag.textContent =
                "• " + skill;


            missingContainer.appendChild(
                tag
            );

        }

    );


    // ROADMAP

    const roadmap =
        document.getElementById(
            "roadmap"
        );


    roadmap.innerHTML =
        "";


    result.roadmap.forEach(

        function (

            step,
            index

        ) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "roadmap-step";


            card.innerHTML = `

                <div class="step-number">

                    ${index + 1}

                </div>

                <strong>

                    ${step}

                </strong>

            `;


            roadmap.appendChild(
                card
            );

        }

    );


    setTimeout(

        function () {

            section.scrollIntoView({

                behavior:
                    "smooth"

            });

        },

        600

    );

}


// =============================================
// NEXT SKILL
// =============================================

function getNextSkill() {

    const career =
        userData.career;


    for (

        const skill
        of career.skills

    ) {

        let found = false;


        skill.topics.forEach(

            function (topic) {

                if (

                    userData.skills.includes(
                        topic
                    )

                ) {

                    found = true;

                }

            }

        );


        if (!found) {

            return skill.name;

        }

    }


    return "Build more real-world projects";

}


// =============================================
// SCORE ANIMATION
// =============================================

function animateScore(score) {

    const scoreText =
        document.getElementById(
            "scoreText"
        );


    const circle =
        document.getElementById(
            "scoreCircle"
        );


    const circumference =
        471;


    let current = 0;


    circle.style.strokeDashoffset =
        circumference;


    const interval =
        setInterval(

            function () {

                scoreText.textContent =
                    current + "%";


                const offset =

                    circumference -

                    (
                        current / 100
                    )

                    * circumference;


                circle.style.strokeDashoffset =
                    offset;


                if (

                    current >= score

                ) {

                    clearInterval(
                        interval
                    );

                }


                current++;

            },

            18

        );

}


// =============================================
// CLEAR CHAT
// =============================================

function clearChat() {

    resetConversation();


    chatBox.innerHTML = `

        <div class="message bot-message">

            <div class="message-avatar">

                🤖

            </div>

            <div class="bubble">

                <strong>Fresh start! 👋</strong>

                <br><br>

                Tell me which career you want
                to explore.

                <br><br>

                🤖 AI Engineer

                <br>

                🌐 Web Developer

                <br>

                📊 Data Analyst

                <br>

                🎮 Game Developer

            </div>

        </div>

    `;


    document

        .getElementById(
            "resultSection"
        )

        .classList.add(
            "hidden"
        );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// =============================================
// RESET
// =============================================

function resetConversation() {

    userData = {

        career: null,

        skills: [],

        step: "career"

    };

}


// =============================================
// SCROLL CHAT
// =============================================

function scrollChat() {

    chatBox.scrollTop =
        chatBox.scrollHeight;

}


// =============================================
// ESCAPE HTML
// =============================================

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


// =============================================
// BUTTON RIPPLE EFFECT
// =============================================

document

    .querySelectorAll(
        ".career-buttons button"
    )

    .forEach(

        function (button) {

            button.addEventListener(

                "click",

                function (event) {

                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "ripple";


                    const size =

                        Math.max(

                            button.offsetWidth,

                            button.offsetHeight

                        );


                    ripple.style.width =
                        size + "px";


                    ripple.style.height =
                        size + "px";


                    ripple.style.left =

                        event.offsetX -
                        size / 2 +
                        "px";


                    ripple.style.top =

                        event.offsetY -
                        size / 2 +
                        "px";


                    button.appendChild(
                        ripple
                    );


                    setTimeout(

                        function () {

                            ripple.remove();

                        },

                        600

                    );

                }

            );

        }

    );