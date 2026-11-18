import { useNavigate } from "react-router-dom";
import "./Blogs.css";

function Blogs() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Learn React JS",
      description: "Learn React JS from beginner to advanced.",
      image: "https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
      title: "Learn Bootstrap",
      description: "Build responsive websites with Bootstrap.",
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
      <div className="container text-center">
        <h4 style={{ color: "#00c0ff" }}>Blog</h4>
        <h1 style={{ fontSize: "45px" }}>Latest Blog Posts</h1>
      </div>

      <div className="container my-5">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-6 col-lg-4 mb-4 " key={blog.id}>
              <div
                className="card h-100 Blog-card"
                style={{
                  backgroundColor: "#3a2b71",
                  border: "none",
                  borderRadius: "22px",
                }}
              >
                <img
                  src={blog.image} onClick={()=> navigate(`/blogs/${blog.id}`)}
                  className="card-img-top"
                  alt={blog.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title text-info" onClick={()=> navigate(`/blogs/${blog.id}`)}>{blog.title}</h5>

                  <p className="card-text text-light">{blog.description}</p>

                  <p className=" text-secondary ">{blog.author}</p>

                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
