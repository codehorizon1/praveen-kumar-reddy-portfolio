import { useEffect } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpeg";

function App() {
  /* =====================================================
     CINEMATIC SCROLL MOTION
  ===================================================== */

  useEffect(() => {
    const elements = document.querySelectorAll(
      [
        ".hero-content",
        ".hero-visual",
        ".section-heading",
        ".about-main",
        ".about-card",
        ".about-bottom > div",
        ".skills-intro",
        ".skill-category",
        ".skill-card",
        ".skills-footer",
        ".projects-intro",
        ".project",
        ".projects-footer",
        ".journey-intro",
        ".journey-item",
        ".journey-footer",
        ".contact-message",
        ".contact-item",
        ".contact-availability",
      ].join(", ")
    );

    elements.forEach((element) => {
      element.classList.add("scroll-motion");
    });

    let ticking = false;

    const updateScrollMotion = () => {
      const viewportHeight = window.innerHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        const elementCenter =
          rect.top + rect.height / 2;

        const viewportCenter =
          viewportHeight / 2;

        const distance =
          (elementCenter - viewportCenter) /
          viewportHeight;

        const progress = Math.max(
          -1,
          Math.min(1, distance)
        );

        element.style.setProperty(
          "--scroll-progress",
          progress.toFixed(4)
        );
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateScrollMotion
        );

        ticking = true;
      }
    };

    updateScrollMotion();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="portfolio">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="grid"></div>
      </div>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <div className="logo">
          PRAVEEN KUMAR REDDY
        </div>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#journey">
            Journey
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <a
          href="#contact"
          className="nav-button"
        >
          Let's Talk
        </a>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <main
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <div className="status">

            <span className="status-dot"></span>

            AVAILABLE FOR OPPORTUNITIES

          </div>


          <p className="intro">
            HELLO, I'M PRAVEEN KUMAR REDDY
          </p>


          <h1>

            <span className="normal-text">
              BUILDING
            </span>

            <br />

            <span className="gradient-text">
              DIGITAL
            </span>

            <br />

            <span className="normal-text">
              EXPERIENCES.
            </span>

          </h1>


          <p className="description">

            Full Stack Developer focused on building modern,
            responsive and meaningful web applications.

          </p>


          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              Explore My Work

              <span>
                ↗
              </span>

            </a>


            <a
              href="/Praveen-Kumar-Reddy-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Download Resume

              <span>
                ↓
              </span>

            </a>


            <a
              href="#contact"
              className="secondary-button"
            >
              Let's Connect
            </a>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>

          <div className="orbit orbit-two"></div>


          <div className="developer-card">

            <div className="card-top">

              <span>
                PRAVEEN KUMAR REDDY.DEV
              </span>

              <span>
                01
              </span>

            </div>


            <div className="profile-image-container">

              <img
                src={profileImage}
                alt="Praveen Kumar Reddy"
                className="profile-image"
              />

            </div>


            <div className="card-bottom">

              <span>
                MERN STACK
              </span>

              <span>
                2026
              </span>

            </div>

          </div>

        </div>


        {/* SCROLL INDICATOR */}

        <div className="scroll-indicator">

          <span></span>

          SCROLL TO EXPLORE

        </div>

      </main>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="about-container">


          <div className="section-heading">

            <div className="section-number">
              01
            </div>

            <div>

              <p className="section-label">
                GET TO KNOW ME
              </p>

              <h2>

                ABOUT

                <span>
                  {" "}ME.
                </span>

              </h2>

            </div>

          </div>


          <div className="about-grid">


            <div className="about-main">

              <p className="about-intro">

                I'm Praveen Kumar Reddy, a B.Tech Information
                Technology student with a strong interest in
                Full Stack Development.

              </p>


              <p className="about-text">

                I'm currently developing my skills in modern
                web technologies and building practical
                applications using frontend and backend
                technologies.

              </p>


              <p className="about-text">

                I enjoy learning by building, experimenting
                with new technologies and continuously improving
                my programming and problem-solving skills.

              </p>


              <div className="about-tags">

                <span>
                  FULL STACK
                </span>

                <span>
                  WEB DEVELOPMENT
                </span>

                <span>
                  UI / UX
                </span>

              </div>

            </div>


            <div className="about-cards">


              <div className="about-card">

                <div className="about-card-number">
                  01
                </div>

                <div className="about-card-icon">
                  {"</>"}
                </div>

                <h3>
                  FULL STACK
                </h3>

                <p>

                  Building modern applications across
                  frontend and backend technologies.

                </p>

              </div>


              <div className="about-card">

                <div className="about-card-number">
                  02
                </div>

                <div className="about-card-icon">
                  ↗
                </div>

                <h3>
                  PROBLEM SOLVER
                </h3>

                <p>

                  Improving my problem-solving and debugging
                  abilities through hands-on development.

                </p>

              </div>


              <div className="about-card">

                <div className="about-card-number">
                  03
                </div>

                <div className="about-card-icon">
                  ∞
                </div>

                <h3>
                  ALWAYS LEARNING
                </h3>

                <p>

                  Continuously learning new technologies and
                  improving my development skills.

                </p>

              </div>

            </div>

          </div>


          <div className="about-bottom">


            <div>

              <span className="bottom-label">
                EDUCATION
              </span>

              <strong>
                B.Tech — Information Technology
              </strong>

            </div>


            <div>

              <span className="bottom-label">
                COLLEGE
              </span>

              <strong>
                KCG College of Technology
              </strong>

            </div>


            <div>

              <span className="bottom-label">
                EXPECTED GRADUATION
              </span>

              <strong>
                MAY 2027
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="skills-section"
      >

        <div className="skills-container">


          <div className="section-heading skills-heading">

            <div className="section-number">
              02
            </div>

            <div>

              <p className="section-label">
                MY TOOLKIT
              </p>

              <h2>

                TECH

                <span>
                  {" "}STACK.
                </span>

              </h2>

            </div>

          </div>


          <div className="skills-intro">

            <p>

              Technologies I'm learning and using to build
              modern web applications.

            </p>


            <div className="skills-status">

              <span></span>

              CURRENTLY LEARNING

            </div>

          </div>


          {/* FRONTEND */}

          <div className="skill-category">

            <div className="category-header">

              <span className="category-number">
                01
              </span>

              <h3>
                FRONTEND
              </h3>

              <span className="category-line"></span>

              <span className="category-label">
                INTERFACE
              </span>

            </div>


            <div className="skill-grid">


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    01
                  </span>

                  <span className="skill-symbol html-symbol">
                    &lt;/&gt;
                  </span>

                </div>

                <h4>
                  HTML5
                </h4>

                <p>
                  Semantic structure and markup
                </p>

                <div className="skill-level">

                  <span>
                    FOUNDATION
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-html"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    02
                  </span>

                  <span className="skill-symbol css-symbol">
                    #
                  </span>

                </div>

                <h4>
                  CSS3
                </h4>

                <p>
                  Styling and responsive design
                </p>

                <div className="skill-level">

                  <span>
                    FOUNDATION
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-css"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    03
                  </span>

                  <span className="skill-symbol js-symbol">
                    JS
                  </span>

                </div>

                <h4>
                  JAVASCRIPT
                </h4>

                <p>
                  Logic and interactive experiences
                </p>

                <div className="skill-level">

                  <span>
                    DEVELOPING
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-js"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card featured-skill">

                <div className="skill-card-top">

                  <span className="skill-index">
                    04
                  </span>

                  <span className="skill-symbol react-symbol">
                    ⚛
                  </span>

                </div>

                <h4>
                  REACT.JS
                </h4>

                <p>
                  Component-based interfaces
                </p>

                <div className="skill-level">

                  <span>
                    DEVELOPING
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-react"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* BACKEND */}

          <div className="skill-category">

            <div className="category-header">

              <span className="category-number">
                02
              </span>

              <h3>
                BACKEND
              </h3>

              <span className="category-line"></span>

              <span className="category-label">
                SERVER
              </span>

            </div>


            <div className="skill-grid">


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    01
                  </span>

                  <span className="skill-symbol node-symbol">
                    N
                  </span>

                </div>

                <h4>
                  NODE.JS
                </h4>

                <p>
                  Server-side JavaScript
                </p>

                <div className="skill-level">

                  <span>
                    LEARNING
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-node"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    02
                  </span>

                  <span className="skill-symbol express-symbol">
                    EX
                  </span>

                </div>

                <h4>
                  EXPRESS.JS
                </h4>

                <p>
                  Backend APIs and routing
                </p>

                <div className="skill-level">

                  <span>
                    LEARNING
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-express"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    03
                  </span>

                  <span className="skill-symbol rest-symbol">
                    API
                  </span>

                </div>

                <h4>
                  REST APIs
                </h4>

                <p>
                  Application communication
                </p>

                <div className="skill-level">

                  <span>
                    LEARNING
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-api"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* DATABASE */}

          <div className="skill-category">

            <div className="category-header">

              <span className="category-number">
                03
              </span>

              <h3>
                DATABASE
              </h3>

              <span className="category-line"></span>

              <span className="category-label">
                DATA
              </span>

            </div>


            <div className="skill-grid">


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    01
                  </span>

                  <span className="skill-symbol mongo-symbol">
                    M
                  </span>

                </div>

                <h4>
                  MONGODB
                </h4>

                <p>
                  NoSQL database
                </p>

                <div className="skill-level">

                  <span>
                    LEARNING
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-mongo"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* TOOLS */}

          <div className="skill-category">

            <div className="category-header">

              <span className="category-number">
                04
              </span>

              <h3>
                TOOLS
              </h3>

              <span className="category-line"></span>

              <span className="category-label">
                WORKFLOW
              </span>

            </div>


            <div className="skill-grid">


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    01
                  </span>

                  <span className="skill-symbol git-symbol">
                    G
                  </span>

                </div>

                <h4>
                  GIT
                </h4>

                <p>
                  Version control
                </p>

                <div className="skill-level">

                  <span>
                    FAMILIAR
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-git"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    02
                  </span>

                  <span className="skill-symbol github-symbol">
                    GH
                  </span>

                </div>

                <h4>
                  GITHUB
                </h4>

                <p>
                  Repositories and collaboration
                </p>

                <div className="skill-level">

                  <span>
                    FAMILIAR
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-github"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    03
                  </span>

                  <span className="skill-symbol vscode-symbol">
                    &gt;_
                  </span>

                </div>

                <h4>
                  VS CODE
                </h4>

                <p>
                  Development environment
                </p>

                <div className="skill-level">

                  <span>
                    DAILY USE
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-vscode"></div>

                  </div>

                </div>

              </div>


              <div className="skill-card">

                <div className="skill-card-top">

                  <span className="skill-index">
                    04
                  </span>

                  <span className="skill-symbol figma-symbol">
                    F
                  </span>

                </div>

                <h4>
                  FIGMA
                </h4>

                <p>
                  UI/UX and interface design
                </p>

                <div className="skill-level">

                  <span>
                    FAMILIAR
                  </span>

                  <div className="level-track">

                    <div className="level-fill level-figma"></div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div className="skills-footer">

            <div className="skills-footer-line"></div>

            <p>
              ALWAYS LEARNING. ALWAYS BUILDING.
            </p>

            <div className="skills-footer-line"></div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="projects-section"
      >

        <div className="projects-container">


          <div className="section-heading projects-heading">

            <div className="section-number">
              03
            </div>

            <div>

              <p className="section-label">
                SELECTED WORK
              </p>

              <h2>

                PROJECTS

                <span>
                  .
                </span>

              </h2>

            </div>

          </div>


          <div className="projects-intro">

            <p>

              Projects built while developing my skills in
              full stack development and modern web technologies.

            </p>

            <span>
              03 PROJECTS
            </span>

          </div>


          {/* PROJECT 01 */}

          <article
            className="project project-featured"
          >

            <div className="project-number">
              01
            </div>


            <div className="project-preview udemy-preview">

              <div className="browser-window">

                <div className="browser-top">

                  <div className="browser-dots">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="browser-address">
                    praveen.dev / udemy-clone
                  </div>

                </div>


                <div className="udemy-screen">

                  <div className="fake-navbar">

                    <div className="fake-logo">
                      UDEMY
                    </div>

                    <div className="fake-search">
                      Search for anything
                    </div>

                    <div className="fake-menu">
                      Courses
                    </div>

                    <div className="fake-menu">
                      Login
                    </div>

                  </div>


                  <div className="udemy-content">

                    <div className="udemy-hero">

                      <small>
                        ONLINE LEARNING
                      </small>

                      <h4>

                        Expand your
                        <br />
                        knowledge.

                      </h4>

                      <p>

                        Learn from anywhere with
                        engaging online courses.

                      </p>

                    </div>


                    <div className="course-row">


                      <div className="course-card">

                        <div className="course-image purple"></div>

                        <strong>
                          Web Development
                        </strong>

                        <span>
                          Modern Web Technologies
                        </span>

                      </div>


                      <div className="course-card">

                        <div className="course-image blue"></div>

                        <strong>
                          JavaScript
                        </strong>

                        <span>
                          Build Interactive Apps
                        </span>

                      </div>


                      <div className="course-card">

                        <div className="course-image pink"></div>

                        <strong>
                          React Development
                        </strong>

                        <span>
                          Component Based UI
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="project-info">

              <div className="project-top">

                <span className="project-type">
                  FEATURED PROJECT
                </span>

                <span className="project-year">
                  2026
                </span>

              </div>


              <h3>

                UDEMY

                <br />

                <span>
                  CLONE.
                </span>

              </h3>


              <p className="project-description">

                A modern online learning platform interface
                inspired by popular education platforms.
                Built to practice responsive design,
                reusable components and interactive
                user experiences.

              </p>


              <div className="project-tech">

                <span>
                  REACT.JS
                </span>

                <span>
                  JAVASCRIPT
                </span>

                <span>
                  HTML
                </span>

                <span>
                  CSS
                </span>

              </div>


              <div className="project-actions">

                <a
                  href="#"
                  className="project-link primary-project-link"
                >

                  VIEW PROJECT

                  <span>
                    ↗
                  </span>

                </a>


                <a
                  href="#"
                  className="project-link"
                >

                  SOURCE CODE

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </article>


          {/* PROJECT 02 */}

          <article
            className="project project-reverse"
          >

            <div className="project-number">
              02
            </div>


            <div className="project-preview b2b-preview">

              <div className="b2b-interface">

                <div className="b2b-nav">

                  <div className="b2b-brand">
                    B2B
                  </div>

                  <div className="b2b-search">
                    Search products...
                  </div>

                  <div className="b2b-cart">
                    🛒
                  </div>

                </div>


                <div className="b2b-content">

                  <div className="b2b-sidebar">

                    <span>
                      Categories
                    </span>

                    <small>
                      Electronics
                    </small>

                    <small>
                      Components
                    </small>

                    <small>
                      Accessories
                    </small>

                    <small>
                      Equipment
                    </small>

                  </div>


                  <div className="b2b-products">

                    <div className="b2b-heading">

                      <small>
                        PRODUCTS
                      </small>

                      <h4>
                        Explore Products
                      </h4>

                    </div>


                    <div className="product-mini-grid">

                      <div className="mini-product">

                        <div></div>

                        <span>
                          Product A
                        </span>

                      </div>


                      <div className="mini-product">

                        <div></div>

                        <span>
                          Product B
                        </span>

                      </div>


                      <div className="mini-product">

                        <div></div>

                        <span>
                          Product C
                        </span>

                      </div>


                      <div className="mini-product">

                        <div></div>

                        <span>
                          Product D
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="project-info">

              <div className="project-top">

                <span className="project-type">
                  FULL STACK
                </span>

                <span className="project-year">
                  2026
                </span>

              </div>


              <h3>

                B2B PRODUCT

                <br />

                <span>
                  PORTAL.
                </span>

              </h3>


              <p className="project-description">

                A responsive B2B product catalog and buyer
                portal featuring product search, filtering,
                categories, detailed product views,
                authentication and buyer workflows.

              </p>


              <div className="project-tech">

                <span>
                  REACT.JS
                </span>

                <span>
                  NODE.JS
                </span>

                <span>
                  EXPRESS.JS
                </span>

                <span>
                  MONGODB
                </span>

                <span>
                  REST API
                </span>

                <span>
                  JWT
                </span>

              </div>


              <div className="project-actions">

                <a
                  href="#"
                  className="project-link"
                >

                  VIEW PROJECT

                  <span>
                    ↗
                  </span>

                </a>


                <a
                  href="#"
                  className="project-link"
                >

                  SOURCE CODE

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </article>


          {/* PROJECT 03 */}

          <article className="project">

            <div className="project-number">
              03
            </div>


            <div className="project-preview ai-preview">

              <div className="ai-interface">

                <div className="ai-topbar">

                  <span>
                    AI BUSINESS OPERATIONS
                  </span>

                  <span className="ai-online">
                    ● ONLINE
                  </span>

                </div>


                <div className="ai-body">

                  <div className="ai-sidebar">

                    <span className="active">
                      Overview
                    </span>

                    <span>
                      Tasks
                    </span>

                    <span>
                      Analytics
                    </span>

                    <span>
                      Reports
                    </span>

                  </div>


                  <div className="ai-dashboard">

                    <div className="ai-title">

                      <small>
                        AI ASSISTANT
                      </small>

                      <h4>
                        Business Operations
                      </h4>

                    </div>


                    <div className="ai-stats">

                      <div>

                        <span>
                          TASKS
                        </span>

                        <strong>
                          24
                        </strong>

                      </div>


                      <div>

                        <span>
                          COMPLETED
                        </span>

                        <strong>
                          18
                        </strong>

                      </div>


                      <div>

                        <span>
                          AUTOMATED
                        </span>

                        <strong>
                          76%
                        </strong>

                      </div>

                    </div>


                    <div className="ai-chart">

                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="project-info">

              <div className="project-top">

                <span className="project-type">
                  AI / FULL STACK
                </span>

                <span className="project-year">
                  2026
                </span>

              </div>


              <h3>

                AI BUSINESS

                <br />

                <span>
                  ASSISTANT.
                </span>

              </h3>


              <p className="project-description">

                An AI-assisted application designed to
                automate repetitive business operations
                and workflows using intelligent text
                processing and task assistance.

              </p>


              <div className="project-tech">

                <span>
                  REACT.JS
                </span>

                <span>
                  NODE.JS
                </span>

                <span>
                  EXPRESS.JS
                </span>

                <span>
                  MONGODB
                </span>

                <span>
                  LLM API
                </span>

              </div>


              <div className="project-actions">

                <a
                  href="#"
                  className="project-link"
                >

                  VIEW PROJECT

                  <span>
                    ↗
                  </span>

                </a>


                <a
                  href="#"
                  className="project-link"
                >

                  SOURCE CODE

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </article>


          <div className="projects-footer">

            <span>
              MORE PROJECTS COMING SOON
            </span>

            <div className="footer-line"></div>

            <span>
              BUILD • LEARN • REPEAT
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section
        id="journey"
        className="journey-section"
      >

        <div className="journey-container">


          <div className="section-heading journey-heading">

            <div className="section-number">
              04
            </div>

            <div>

              <p className="section-label">
                THE ROAD SO FAR
              </p>

              <h2>

                MY

                <span>
                  {" "}JOURNEY.
                </span>

              </h2>

            </div>

          </div>


          <div className="journey-intro">

            <p>

              Every project, challenge and new technology
              is part of my journey toward becoming a
              stronger software developer.

            </p>

            <span>
              LEARN • BUILD • IMPROVE
            </span>

          </div>


          <div className="journey-timeline">


            <div className="journey-item">

              <div className="journey-year">
                2025
              </div>

              <div className="journey-line">

                <div className="journey-dot"></div>

              </div>

              <div className="journey-content">

                <span className="journey-status">
                  FOUNDATION
                </span>

                <h3>
                  Started Building My Foundation
                </h3>

                <p>

                  Focused on strengthening my programming
                  fundamentals and learning the core
                  technologies required for web development.

                </p>

                <div className="journey-tags">

                  <span>
                    PROGRAMMING
                  </span>

                  <span>
                    WEB
                  </span>

                  <span>
                    GIT
                  </span>

                </div>

              </div>

            </div>


            <div className="journey-item">

              <div className="journey-year">
                2026
              </div>

              <div className="journey-line">

                <div className="journey-dot active"></div>

              </div>

              <div className="journey-content">

                <span className="journey-status active-status">
                  CURRENTLY
                </span>

                <h3>
                  Full Stack Development
                </h3>

                <p>

                  Developing full stack skills with React,
                  Node.js, Express.js and MongoDB while
                  building practical applications.

                </p>

                <div className="journey-tags">

                  <span>
                    REACT
                  </span>

                  <span>
                    NODE.JS
                  </span>

                  <span>
                    EXPRESS
                  </span>

                  <span>
                    MONGODB
                  </span>

                </div>

              </div>

            </div>


            <div className="journey-item">

              <div className="journey-year">
                NOW
              </div>

              <div className="journey-line">

                <div className="journey-dot active"></div>

              </div>

              <div className="journey-content">

                <span className="journey-status active-status">
                  BUILDING
                </span>

                <h3>
                  Turning Ideas Into Projects
                </h3>

                <p>

                  Applying my skills through projects such as
                  the B2B Product Catalog, AI Business Operations
                  Assistant and Udemy Clone.

                </p>

                <div className="journey-tags">

                  <span>
                    PROJECTS
                  </span>

                  <span>
                    FULL STACK
                  </span>

                  <span>
                    UI DESIGN
                  </span>

                </div>

              </div>

            </div>


            <div className="journey-item journey-future">

              <div className="journey-year">
                NEXT
              </div>

              <div className="journey-line">

                <div className="journey-dot future-dot"></div>

              </div>

              <div className="journey-content">

                <span className="journey-status">
                  THE GOAL
                </span>

                <h3>
                  Become a Strong Full Stack Developer
                </h3>

                <p>

                  Continue improving my development skills,
                  build production-ready applications and
                  prepare for a career in software development.

                </p>

                <div className="journey-tags">

                  <span>
                    FULL STACK
                  </span>

                  <span>
                    PROBLEM SOLVING
                  </span>

                  <span>
                    CAREER
                  </span>

                </div>

              </div>

            </div>

          </div>


          <div className="journey-footer">

            <div className="journey-footer-text">

              <span>
                THE JOURNEY
              </span>

              <strong>
                HAS JUST BEGUN.
              </strong>

            </div>

            <div className="journey-footer-arrow">
              ↓
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-container">


          <div className="section-heading contact-heading">

            <div className="section-number">
              05
            </div>

            <div>

              <p className="section-label">
                HAVE AN IDEA?
              </p>

              <h2>

                LET'S

                <span>
                  {" "}TALK.
                </span>

              </h2>

            </div>

          </div>


          <div className="contact-main">


            <div className="contact-message">

              <p className="contact-big-text">

                Have a project,
                <br />

                opportunity or
                <br />

                <span>
                  just want to connect?
                </span>

              </p>


              <p className="contact-description">

                I'm interested in learning, building new
                things and connecting with people who are
                passionate about technology.

              </p>


              <a
                href="mailto:kpraveenkumarreddy01@gmail.com"
                className="email-button"
              >

                <span>
                  GET IN TOUCH
                </span>

                <strong>
                  ↗
                </strong>

              </a>


              <a
                href="/Praveen-Kumar-Reddy-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="email-button resume-contact-button"
              >

                <span>
                  VIEW RESUME
                </span>

                <strong>
                  ↓
                </strong>

              </a>

            </div>


            <div className="contact-details">


              {/* EMAIL */}

              <a
                href="mailto:kpraveenkumarreddy01@gmail.com"
                className="contact-item"
              >

                <div className="contact-icon">
                  @
                </div>

                <div>

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    kpraveenkumarreddy01@gmail.com
                  </strong>

                </div>

                <div className="contact-arrow">
                  ↗
                </div>

              </a>


              {/* PHONE */}

              <a
                href="tel:+919380110272"
                className="contact-item"
              >

                <div className="contact-icon">
                  +
                </div>

                <div>

                  <span>
                    PHONE
                  </span>

                  <strong>
                    +91 93801 10272
                  </strong>

                </div>

                <div className="contact-arrow">
                  ↗
                </div>

              </a>


              {/* LINKEDIN */}

              <a
                href="#"
                className="contact-item"
              >

                <div className="contact-icon">
                  in
                </div>

                <div>

                  <span>
                    LINKEDIN
                  </span>

                  <strong>
                    Connect with me
                  </strong>

                </div>

                <div className="contact-arrow">
                  ↗
                </div>

              </a>


              {/* GITHUB */}

              <a
                href="#"
                className="contact-item"
              >

                <div className="contact-icon">
                  GH
                </div>

                <div>

                  <span>
                    GITHUB
                  </span>

                  <strong>
                    View my repositories
                  </strong>

                </div>

                <div className="contact-arrow">
                  ↗
                </div>

              </a>


              {/* LOCATION */}

              <div className="contact-item contact-location">

                <div className="contact-icon">
                  +
                </div>

                <div>

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    Chennai, India
                  </strong>

                </div>

              </div>

            </div>

          </div>


          <div className="contact-availability">

            <div className="availability-left">

              <span className="availability-dot"></span>

              <span>
                CURRENTLY OPEN TO OPPORTUNITIES
              </span>

            </div>

            <span>
              2026
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-logo">
          PRAVEEN KUMAR REDDY
        </div>

        <p>
          BUILDING DIGITAL EXPERIENCES.
        </p>

        <span>
          © 2026 PRAVEEN KUMAR REDDY
        </span>

      </footer>

    </div>
  );
}

export default App;