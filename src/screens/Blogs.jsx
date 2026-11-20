import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import { motion } from "motion/react";
import { useState } from "react";

// Animation for individual elements
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Animation for multiple cards
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Blogs() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const blogs = [
    {
      id: 1,
      title: "Learn React JS",
      description: "Learn React JS from beginner to advanced.",
      image:
        "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      author: "Dildar Hussain",
      date: "November 09, 2026",
      content: `React is a popular JavaScript library used to build modern and interactive user interfaces. It allows developers to create reusable UI components, making applications easier to develop and maintain.

React uses JSX, which allows developers to write HTML-like syntax inside JavaScript. It also provides powerful features such as components, props, state, and hooks.

Some important React concepts include:

1. Components: Reusable building blocks of a React application.
2. JSX: HTML-like syntax used inside JavaScript.
3. Props: Used to pass data between components.
4. useState: Used to manage component state.
5. useEffect: Used to handle side effects.

React is widely used for building single-page applications, dashboards, e-commerce websites, and many other modern web applications.`,
    },

    {
      id: 2,
      title: "Learn JavaScript",
      description: "Understand JavaScript fundamentals.",
      image:
        "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      author: "Dildar Hussain",
      date: "November 09, 2026",
      content: `JavaScript is a powerful programming language used to make websites interactive and dynamic. It works alongside HTML and CSS to create modern web experiences.

JavaScript allows developers to handle user interactions, validate forms, update website content, and communicate with servers.

Some important JavaScript concepts include:

1. Variables: Used to store data.
2. Functions: Used to organize reusable code.
3. Arrays: Used to store multiple values.
4. Objects: Used to organize data in key-value pairs.
5. DOM Manipulation: Used to change HTML elements dynamically.
6. Events: Used to handle user actions such as clicks.
7. ES6 Features: Includes arrow functions, destructuring, spread operators, and more.

JavaScript is also used with technologies like React, Node.js, and Express.js to build complete web applications.`,
    },

    {
      id: 3,
      title: "Learn Express.js",
      description: "Build powerful backend applications using Express.js.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=870&auto=format&fit=crop",
      author: "Dildar Hussain",
      date: "November 12, 2026",
      content: `Express.js is a popular backend framework built on top of Node.js. It makes it easier to create web servers, APIs, and backend applications using JavaScript.

Express.js helps developers handle HTTP requests, manage routes, process data, and connect applications with databases.

Some important Express.js concepts include:

1. Routing: Used to define different application endpoints.
2. Middleware: Used to process requests and responses.
3. Request and Response: Used to communicate between clients and servers.
4. REST APIs: Used to build communication between frontend and backend.
5. Error Handling: Used to manage application errors.
6. HTTP Methods: Includes GET, POST, PUT, PATCH, and DELETE.
7. Database Integration: Connects applications with databases like MongoDB.

Express.js is commonly used with Node.js, MongoDB, and React to build full-stack web applications.`,
    },
    {
      id: 4,
      title: "Learn Python Programming",
      description:
        "Explore Python fundamentals and build real-world applications.",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=870&auto=format&fit=crop",
      author: "Dildar Hussain",
      date: "November 15, 2026",
      content: `Python is a powerful, beginner-friendly programming language used in web development, automation, artificial intelligence, and data science.

Its simple syntax makes it easier for developers to write readable code and build different types of applications.

Some important Python concepts include:

1. Variables: Used to store different types of data.
2. Data Types: Includes strings, integers, floats, lists, and dictionaries.
3. Conditional Statements: Used to make decisions in programs.
4. Loops: Used to repeat tasks efficiently.
5. Functions: Used to organize reusable code.
6. Object-Oriented Programming: Used to organize code using classes and objects.
7. File Handling: Used to read and write files.
8. Libraries: Includes NumPy, Pandas, and Requests.

Python is widely used with frameworks like Django and Flask to build web applications. It is also an important language for machine learning and artificial intelligence.`,
    },
    {
      id: 5,
      title: "AI and Automation",
      description:
        "Discover how artificial intelligence can automate everyday tasks.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=870&auto=format&fit=crop",
      author: "Dildar Hussain",
      date: "November 19, 2026",
      content: `Artificial Intelligence (AI) is a technology that enables machines and computer systems to perform tasks that normally require human intelligence.

AI automation combines artificial intelligence with automated workflows to reduce repetitive work, improve productivity, and make applications smarter.

Some important AI and automation concepts include:

1. Machine Learning: Enables systems to learn patterns from data.
2. Natural Language Processing: Helps computers understand and process human language.
3. AI Models: Power intelligent applications and automated systems.
4. Python Automation: Uses Python to automate repetitive tasks.
5. APIs: Allow different applications and AI services to communicate.
6. Chatbots: Provide automated conversations and customer support.
7. Workflow Automation: Connects different tools to perform tasks automatically.
8. AI Agents: Can use tools and information to complete multi-step tasks.

AI automation is used in businesses, web applications, customer support, data processing, and many other industries. Python is particularly useful for developing AI-powered automation systems.`,
    },

    {
      id: 6,
      title: "Learn Bootstrap",
      description: "Build responsive websites with Bootstrap.",
      image:
        "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      author: "Dildar Hussain",
      date: "November 09, 2026",
      content: `Bootstrap is a popular frontend CSS framework used to build responsive and mobile-friendly websites quickly.

It provides ready-made CSS classes and components that help developers create professional website layouts without writing all the CSS from scratch.

Some important Bootstrap features include:

1. Grid System: Create responsive layouts using rows and columns.
2. Containers: Organize and align website content.
3. Buttons: Create attractive buttons using predefined classes.
4. Navbar: Build responsive navigation bars.
5. Cards: Display content in organized card layouts.
6. Forms: Create styled input fields and forms.
7. Utilities: Manage spacing, colors, display, and alignment.

Bootstrap is especially useful for quickly building responsive websites and frontend projects. It works well with React, HTML, CSS, and JavaScript.`,
    },
  ];

  return (
    <>
      {/* Blog Heading */}
      <motion.div
        className="container text-center mt-4 mt-md-5 px-3"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        onAnimationComplete={() => setReady(true)}
        whileHover={ready ? { y: -12 } : undefined}
        transition={{ duration: 0.5 }}
      >
        <h4 style={{ color: "#00c0ff" }}>Blog</h4>
        <h1 className="section-title">Latest Blog Posts</h1>
      </motion.div>

      {/* Blog Cards */}
      <div className="container my-4 my-md-5">
        <motion.div
          className="row gy-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogs.map((blog, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={`${blog.id}-${index}`}
            >
              <motion.div
                className="card h-100 Blog-card"
                variants={fadeUp}
                onAnimationComplete={() => setReady(true)}
                whileHover={ready ? { y: -12 } : undefined}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={blog.image}
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                  className="card-img-top blog-img"
                  alt={blog.title}
                  loading="lazy"
                />

                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title text-info"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  >
                    {blog.title}
                  </h5>

                  <p className="card-text text-light">{blog.description}</p>

                  <p className="text-secondary">{blog.author}</p>

                  <button
                    className="btn btn-info mt-auto align-self-start"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Blogs;
