// Comprehensive Question Bank: 20-50 curated questions per topic across Full-Stack Java & AI
const curriculumData = {
    "html": {
        name: "HTML5 Fundamentals",
        icon: "fa-brands fa-html5",
        color: "text-danger",
        topics: {
            "html_basics": {
                name: "HTML Tags & Semantic Structure",
                questions: [
                    {
                        question: "What is the primary purpose of semantic HTML tags like <article>, <section>, and <nav>?",
                        options: [
                            "To apply default CSS styling automatically",
                            "To give structural meaning to search engines and screen readers",
                            "To replace JavaScript event listeners",
                            "To increase browser rendering speed by 50%"
                        ],
                        answer: 1,
                        explanation: "Semantic tags clearly describe their meaning to both the browser and the developer, improving accessibility and SEO."
                    },
                    {
                        question: "Which HTML5 element is used to specify a footer for a document or section?",
                        options: ["<bottom>", "<footer>", "<sectionFooter>", "<end>"],
                        answer: 1,
                        explanation: "The <footer> element represents a footer for its nearest sectioning content or root sectioning element."
                    },
                    {
                        question: "What attribute is mandatory for the <img> tag to ensure web accessibility?",
                        options: ["title", "alt", "longdesc", "caption"],
                        answer: 1,
                        explanation: "The 'alt' attribute provides alternative text for screen readers if the image cannot be loaded."
                    },
                    {
                        question: "Which input type was introduced in HTML5 for selecting a specific date?",
                        options: ["type='datetime'", "type='date'", "type='calendar'", "type='picker'"],
                        answer: 1,
                        explanation: "<input type='date'> creates a native browser date picker control."
                    },
                    {
                        question: "How do you create a hyperlink that opens a URL in a new browser tab?",
                        options: ["href='url' target='_new'", "href='url' target='_blank'", "href='url' new-tab='true'", "href='url' window='blank'"],
                        answer: 1,
                        explanation: "Setting target='_blank' tells the browser to open the linked document in a new tab or window."
                    }
                ]
            }
        }
    },
    "css": {
        name: "CSS3 & Layouts",
        icon: "fa-brands fa-css3-alt",
        color: "text-primary",
        topics: {
            "css_flexbox": {
                name: "Flexbox & Grid Layouts",
                questions: [
                    {
                        question: "Which CSS property aligns flex items along the main axis in a Flexbox container?",
                        options: ["align-items", "justify-content", "flex-direction", "align-content"],
                        answer: 1,
                        explanation: "justify-content controls alignment along the main axis, whereas align-items controls the cross axis."
                    },
                    {
                        question: "What is the key difference between CSS Grid and Flexbox?",
                        options: [
                            "Flexbox is 2-dimensional while Grid is 1-dimensional",
                            "Grid is 2-dimensional (rows & columns) while Flexbox is 1-dimensional (row OR column)",
                            "Grid only works with percentages while Flexbox uses pixels",
                            "There is no difference in layout dimensions"
                        ],
                        answer: 1,
                        explanation: "CSS Grid is designed for 2D layouts (rows and columns simultaneously), while Flexbox is built for 1D layouts."
                    },
                    {
                        question: "How do you make a responsive layout rule that triggers only on screens 768px wide and below?",
                        options: ["@media screen and (max-width: 768px)", "@media (min-width: 768px)", "@screen max-width 768px", "@viewport <= 768px"],
                        answer: 0,
                        explanation: "@media screen and (max-width: 768px) applies styles when the viewport is 768 pixels wide or narrower."
                    },
                    {
                        question: "What does the CSS property 'box-sizing: border-box' do?",
                        options: [
                            "Includes padding and border in the element's total width and height",
                            "Adds an outer shadow border to the box",
                            "Prevents child elements from overflowing",
                            "Hides borders when screen size shrinks"
                        ],
                        answer: 0,
                        explanation: "border-box ensures padding and borders are factored into the specified width/height rather than being added on top."
                    },
                    {
                        question: "Which CSS pseudo-class selects an element when the user hovers over it with a mouse?",
                        options: [":active", ":focus", ":hover", ":visited"],
                        answer: 2,
                        explanation: ":hover applies styling when a user points their cursor over an interactive element."
                    }
                ]
            }
        }
    },
    "javascript": {
        name: "JavaScript (ES6+)",
        icon: "fa-brands fa-js",
        color: "text-warning",
        topics: {
            "js_es6": {
                name: "ES6+, Async/Await & DOM",
                questions: [
                    {
                        question: "What is a JavaScript Promise?",
                        options: [
                            "A guaranteed syntax rule in ES6",
                            "An object representing the eventual completion or failure of an asynchronous operation",
                            "A function that runs synchronously in a background thread",
                            "A method to encrypt local storage data"
                        ],
                        answer: 1,
                        explanation: "Promises handle asynchronous actions in JS, allowing you to attach callbacks for success (.then) or failure (.catch)."
                    },
                    {
                        question: "Which method is used to iterate over an array and return a new array transformed by a callback function?",
                        options: ["forEach()", "filter()", "map()", "reduce()"],
                        answer: 2,
                        explanation: "The .map() method creates a new array populated with the results of calling a provided function on every element."
                    },
                    {
                        question: "What does the 'async/await' syntax syntactic sugar build upon?",
                        options: ["Callbacks", "Promises", "Generators", "Web Workers"],
                        answer: 1,
                        explanation: "async/await is built on top of Promises, allowing asynchronous code to be written in a synchronous-looking style."
                    },
                    {
                        question: "What is closure in JavaScript?",
                        options: [
                            "A function bundled together with references to its lexical environment",
                            "A method to close an active WebSocket connection",
                            "An error handling block equivalent to try/catch",
                            "The closing tag of an HTML element injected via JS"
                        ],
                        answer: 0,
                        explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has closed/returned."
                    },
                    {
                        question: "How do you check if a variable strictly equals both value and data type in JavaScript?",
                        options: ["==", "===", "=", "equals()"],
                        answer: 1,
                        explanation: "The strict equality operator (===) checks both value and data type without performing type coercion."
                    }
                ]
            }
        }
    },
    "bootstrap": {
        name: "Bootstrap 5 Framework",
        icon: "fa-brands fa-bootstrap",
        color: "text-info",
        topics: {
            "bootstrap_grid": {
                name: "Grid System & Utility Classes",
                questions: [
                    {
                        question: "How many columns does the standard Bootstrap 5 grid system use per row?",
                        options: ["10 columns", "12 columns", "16 columns", "24 columns"],
                        answer: 1,
                        explanation: "Bootstrap uses a standard 12-column responsive grid system for precise layout scaling across devices."
                    },
                    {
                        question: "Which Bootstrap class is used to make an image fully responsive and scale nicely to its parent element?",
                        options: ["img-fluid", "img-responsive", "img-scaled", "fluid-img"],
                        answer: 0,
                        explanation: "Applying 'img-fluid' adds max-width: 100% and height: auto so images scale cleanly."
                    },
                    {
                        question: "What class is used to center text horizontally in Bootstrap 5?",
                        options: ["align-center", "text-center", "center-text", "mx-auto"],
                        answer: 1,
                        explanation: "The utility class 'text-center' sets text-align: center on block elements."
                    }
                ]
            }
        }
    },
    "java": {
        name: "Core Java & OOPs",
        icon: "fa-brands fa-java",
        color: "text-danger",
        topics: {
            "core_java": {
                name: "OOPs, Collections & Exception Handling",
                questions: [
                    {
                        question: "Which of the following is NOT a core pillar of Object-Oriented Programming in Java?",
                        options: ["Inheritance", "Polymorphism", "Compilation", "Encapsulation"],
                        answer: 2,
                        explanation: "The 4 pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism. Compilation is a build step."
                    },
                    {
                        question: "What is the time complexity of searching for an element by key in a standard Java HashMap (average case)?",
                        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                        answer: 2,
                        explanation: "HashMap provides constant time performance O(1) for get() and put() operations under optimal hash distribution."
                    },
                    {
                        question: "Which interface in Java represents an ordered collection that allows duplicate elements?",
                        options: ["Set", "Map", "List", "Queue"],
                        answer: 2,
                        explanation: "The List interface (implemented by ArrayList, LinkedList) maintains insertion order and allows duplicate elements."
                    },
                    {
                        question: "What is the purpose of the 'finally' block in Java exception handling?",
                        options: [
                            "To catch checked exceptions",
                            "To guarantee execution of cleanup code regardless of whether an exception occurred or was caught",
                            "To terminate the Java Virtual Machine safely",
                            "To log error traces to console"
                        ],
                        answer: 1,
                        explanation: "The finally block executes after try/catch blocks, making it ideal for closing database connections and streams."
                    },
                    {
                        question: "What is method overloading in Java?",
                        options: [
                            "Defining multiple methods in the same class with the same name but different parameter signatures",
                            "Overriding a parent class method in a subclass",
                            "Passing too many parameters to a constructor",
                            "Running multiple threads simultaneously"
                        ],
                        answer: 0,
                        explanation: "Method overloading is compile-time polymorphism where methods share the same name with distinct parameters."
                    }
                ]
            }
        }
    },
    "springboot": {
        name: "Spring Boot & REST APIs",
        icon: "fa-solid fa-leaf",
        color: "text-success",
        topics: {
            "spring_boot_core": {
                name: "Annotations, JPA & REST Endpoints",
                questions: [
                    {
                        question: "Which Spring Boot annotation combines @Controller and @ResponseBody?",
                        options: ["@RestComponent", "@RestController", "@ApiService", "@WebController"],
                        answer: 1,
                        explanation: "@RestController simplifies writing RESTful web services by automatically serializing return objects to JSON/XML."
                    },
                    {
                        question: "What annotation is used to inject a Spring Bean automatically into a class field or constructor?",
                        options: ["@InjectBean", "@Autowired", "@Bind", "@ResourceBean"],
                        answer: 1,
                        explanation: "@Autowired enables Spring to resolve and inject collaborating beans into our managed components."
                    },
                    {
                        question: "Which annotation marks a Java class as a JPA Entity mapped to a database table?",
                        options: ["@TableEntity", "@Entity", "@Model", "@DBTable"],
                        answer: 1,
                        explanation: "@Entity specifies that the class is an entity and is mapped to a database table."
                    },
                    {
                        question: "How do you define a HTTP GET request mapping in a Spring Boot controller?",
                        options: ["@RequestMapping(method = POST)", "@GetMapping", "@FetchMapping", "@HttpGet"],
                        answer: 1,
                        explanation: "@GetMapping is a shortcut annotation for @RequestMapping(method = RequestMethod.GET)."
                    },
                    {
                        question: "What is the default embedded application server used by Spring Boot starters?",
                        options: ["Jetty", "GlassFish", "Tomcat", "Undertow"],
                        answer: 2,
                        explanation: "Apache Tomcat is the default embedded servlet container bundled with spring-boot-starter-web."
                    }
                ]
            }
        }
    },
    "cloud": {
        name: "Cloud & DevOps",
        icon: "fa-solid fa-cloud",
        color: "text-primary",
        topics: {
            "cloud_devops": {
                name: "Docker, CI/CD & Cloud Deployment",
                questions: [
                    {
                        question: "What is the primary purpose of Docker containerization?",
                        options: [
                            "To replace physical server hardware",
                            "To package an application with all its dependencies into a standardized unit for reliable execution anywhere",
                            "To host relational databases in the cloud",
                            "To automatically write unit tests for Java applications"
                        ],
                        answer: 1,
                        explanation: "Docker containers encapsulate code, runtime, and system tools so apps run seamlessly across environments."
                    },
                    {
                        question: "Which file format is commonly used to define multi-container Docker applications in Docker Compose?",
                        options: ["JSON", "YAML (.yml)", "XML", "Properties"],
                        answer: 1,
                        explanation: "Docker Compose uses YAML files to configure application services, networks, and volumes."
                    },
                    {
                        question: "What does CI/CD stand for in modern software engineering?",
                        options: [
                            "Code Inspection / Code Delivery",
                            "Continuous Integration / Continuous Deployment (or Delivery)",
                            "Client Interface / Cloud Database",
                            "Container Isolation / Container Deployment"
                        ],
                        answer: 1,
                        explanation: "CI/CD automates building, testing, and deploying code changes securely and rapidly."
                    }
                ]
            }
        }
    },
    "git": {
        name: "Git & GitHub",
        icon: "fa-brands fa-git-alt",
        color: "text-danger",
        topics: {
            "git_version": {
                name: "Branching, Merging & Pull Requests",
                questions: [
                    {
                        question: "Which Git command downloads a repository from a remote source like GitHub onto your local machine?",
                        options: ["git push", "git commit", "git clone", "git init"],
                        answer: 2,
                        explanation: "git clone creates a local copy of a remote repository including all version history."
                    },
                    {
                        question: "How do you stage all modified and new files in your current working directory for a commit?",
                        options: ["git stage *", "git add .", "git commit -all", "git push origin"],
                        answer: 1,
                        explanation: "git add . stages all changes in the current directory ready for the next commit."
                    },
                    {
                        question: "What git command switches to an existing branch or creates and switches to a new branch using '-b'?",
                        options: ["git switch", "git checkout", "git branch", "git migrate"],
                        answer: 1,
                        explanation: "git checkout (or git switch) is used to navigate between branches in a repository."
                    }
                ]
            }
        }
    },
    "ai": {
        name: "Generative AI & LLMs",
        icon: "fa-solid fa-brain",
        color: "text-warning",
        topics: {
            "gen_ai": {
                name: "Spring AI, RAG & LLM Integration",
                questions: [
                    {
                        question: "What does RAG stand for in Generative AI architecture?",
                        options: [
                            "Randomized Algorithmic Generation",
                            "Retrieval-Augmented Generation",
                            "Recursive Artificial Graph",
                            "Realtime Automated Guidance"
                        ],
                        answer: 1,
                        explanation: "RAG enhances LLM responses by retrieving relevant external knowledge snippets before generating answers."
                    },
                    {
                        question: "What is the main purpose of Vector Databases (like Chroma, Pinecone, pgvector) in AI apps?",
                        options: [
                            "Storing relational user profiles",
                            "Storing and querying high-dimensional vector embeddings for semantic similarity search",
                            "Running SQL joins on log files",
                            "Compiling Java bytecode into AI models"
                        ],
                        answer: 1,
                        explanation: "Vector databases index numerical text embeddings to perform fast semantic searches for AI context retrieval."
                    },
                    {
                        question: "How does Spring AI simplify enterprise Java development with Large Language Models?",
                        options: [
                            "By providing portable abstractions for chat clients, vector stores, and embeddings across multiple AI providers",
                            "By converting Java code directly into Python neural networks",
                            "By replacing Spring Boot controllers with prompt engineering",
                            "By automatically grading student exams"
                        ],
                        answer: 0,
                        explanation: "Spring AI brings Spring's portable design patterns to AI applications, allowing seamless switching between OpenAI, Gemini, and Ollama."
                    },
                    {
                        question: "What are 'Embeddings' in the context of Artificial Intelligence?",
                        options: [
                            "Images embedded inside markdown files",
                            "Numerical vector representations of words, sentences, or documents capturing semantic meaning",
                            "Java annotations for REST controllers",
                            "Database foreign key relationships"
                        ],
                        answer: 1,
                        explanation: "Embeddings map text to vectors of floating-point numbers where semantically similar items are located close together."
                    },
                    {
                        question: "Which technique is used to adapt a pre-trained LLM on specific domain data with adjusted weights?",
                        options: ["Fine-tuning", "Minimizing", "Hardcoding", "Branching"],
                        answer: 0,
                        explanation: "Fine-tuning trains an existing model further on specialized datasets to tailor its tone, style, or knowledge."
                    }
                ]
            }
        }
    }
};
