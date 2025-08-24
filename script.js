// Job data for HiTech Dot Com
const jobsData = [
  {
    id: "1",
    title: "Senior SAP Consultant",
    company: "HiTech Dot Com",
    department: "SAP Consulting",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    deadline: "2025-08-15T23:59:59",
    description:
      "Lead SAP implementation projects and provide technical expertise to clients across various modules including FICO, MM, and SD. Work with global clients on enterprise transformation initiatives.",
    requirements: [
      "4+ years experience in SAP consulting",
      "Strong knowledge of SAP FICO and MM modules",
      "Experience with S/4HANA implementations",
      "Excellent client communication skills",
    ],
    salary: "₹8-15 LPA",
    experience: "4-7 years",
    remote: true,
    skills: ["SAP FICO", "SAP MM", "S/4HANA", "Project Management"],
    applicants: 47,
    matchScore: 92,
  },
  {
    id: "2",
    title: "HR Business Partner",
    company: "HiTech Dot Com",
    department: "Human Resources",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    deadline: "2025-08-10T18:00:00",
    description:
      "Strategic HR support for business units, talent management, and organizational development initiatives. Drive HR policies and employee engagement programs.",
    requirements: [
      "MBA in HR or equivalent qualification",
      "3+ years experience in HR business partnering",
      "Strong analytical and problem-solving skills",
      "Knowledge of labor laws and compliance",
    ],
    salary: "₹6-12 LPA",
    experience: "3-6 years",
    remote: false,
    skills: ["HR Strategy", "Talent Management", "Employee Relations", "Compliance"],
    applicants: 23,
    matchScore: 78,
  },
  {
    id: "3",
    title: "Financial Analyst",
    company: "HiTech Dot Com",
    department: "Finance",
    location: "Delhi, NCR",
    type: "Full-time",
    deadline: "2025-08-20T17:30:00",
    description:
      "Financial planning, analysis, and reporting for corporate clients with focus on business intelligence and data-driven insights.",
    requirements: [
      "CA/CFA or MBA Finance",
      "2+ years in financial analysis",
      "Advanced Excel and financial modeling",
      "Experience with ERP systems",
    ],
    salary: "₹5-10 LPA",
    experience: "2-5 years",
    remote: true,
    skills: ["Financial Analysis", "Excel", "Financial Modeling", "ERP"],
    applicants: 31,
    matchScore: 85,
  },
  {
    id: "4",
    title: "IT Support Specialist",
    company: "HiTech Dot Com",
    location: "Chennai, Tamil Nadu",
    department: "Information Technology",
    type: "Full-time",
    deadline: "2025-08-05T20:00:00",
    description:
      "Provide technical support for IT infrastructure, troubleshoot system issues, and maintain network operations for client environments.",
    requirements: [
      "Bachelor's degree in IT/Computer Science",
      "2+ years experience in IT support",
      "Knowledge of Windows/Linux systems",
      "Strong problem-solving skills",
    ],
    salary: "₹4-8 LPA",
    experience: "2-4 years",
    remote: false,
    skills: ["Windows", "Linux", "Network Support", "Troubleshooting"],
    applicants: 19,
    matchScore: 96,
  },
  {
    id: "5",
    title: "Legal Compliance Officer",
    company: "HiTech Dot Com",
    department: "Legal & Compliance",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    deadline: "2025-08-12T16:00:00",
    description:
      "Ensure regulatory compliance, manage legal documentation, and provide guidance on corporate governance matters.",
    requirements: [
      "LLB with specialization in corporate law",
      "3+ years experience in compliance",
      "Knowledge of Indian corporate regulations",
      "Strong attention to detail",
    ],
    salary: "₹6-11 LPA",
    experience: "3-6 years",
    remote: false,
    skills: ["Corporate Law", "Compliance", "Risk Management", "Documentation"],
    applicants: 15,
    matchScore: 82,
  },
  {
    id: "6",
    title: "Digital Marketing Specialist",
    company: "HiTech Dot Com",
    department: "Sales & Marketing",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    deadline: "2025-08-18T19:00:00",
    description:
      "Develop and execute digital marketing campaigns, manage social media presence, and drive online engagement for our consultancy services.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2+ years experience in digital marketing",
      "Proficiency in Google Analytics and social media platforms",
      "Creative thinking and analytical skills",
    ],
    salary: "₹4-9 LPA",
    experience: "2-4 years",
    remote: true,
    skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
    applicants: 28,
    matchScore: 89,
  },
]

// Categories data
const categoriesData = [
  {
    name: "SAP Consulting",
    count: 25,
    icon: "fas fa-cogs",
    description: "SAP implementation, support, and consulting services",
    trending: true,
  },
  {
    name: "Human Resources",
    count: 18,
    icon: "fas fa-users",
    description: "HR services, recruitment, and talent management",
    trending: false,
  },
  {
    name: "Finance",
    count: 12,
    icon: "fas fa-chart-line",
    description: "Financial analysis, planning, and advisory services",
    trending: true,
  },
  {
    name: "Information Technology",
    count: 22,
    icon: "fas fa-laptop-code",
    description: "IT support, infrastructure, and technical services",
    trending: false,
  },
  {
    name: "Legal & Compliance",
    count: 8,
    icon: "fas fa-balance-scale",
    description: "Legal services, compliance, and risk management",
    trending: false,
  },
  {
    name: "Sales & Marketing",
    count: 15,
    icon: "fas fa-bullseye",
    description: "Digital marketing, sales, and business development",
    trending: true,
  },
]

// Global variables
let currentTime = new Date()
let filteredJobs = []
let selectedJob = null

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  updateTime()
  setInterval(updateTime, 60000) // Update every minute

  // Initialize scroll animations
  initScrollAnimations()

  // Animate hero stats
  setTimeout(() => animateCounters(), 1000)
})

function initializeApp() {
  // Only initialize career-related functions if we're on the careers page
  if (document.getElementById("jobsContainer")) {
    filterAndDisplayJobs()
    displayCategories()
    updateStats()
  }
}

function setupEventListeners() {
  // Navigation
  setupNavigation()

  // Service Tabs Functionality (only on main page)
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const targetContent = document.getElementById(targetTab)
      if (targetContent) {
        targetContent.classList.add("active")
      }
    })
  })

  // Career Tabs Functionality (only on careers page)
  const careerTabButtons = document.querySelectorAll(".career-tab-btn")
  const careerTabContents = document.querySelectorAll(".career-tab-content")

  careerTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      careerTabButtons.forEach((btn) => btn.classList.remove("active"))
      careerTabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const targetContent = document.getElementById(`${targetTab}-tab`)
      if (targetContent) {
        targetContent.classList.add("active")
      }
    })
  })

  // Search and filter (only on careers page)
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  if (searchInput) {
    searchInput.addEventListener("input", filterAndDisplayJobs)
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterAndDisplayJobs)
  }

  // File upload
  const resumeFile = document.getElementById("resumeFile")
  if (resumeFile) {
    resumeFile.addEventListener("change", handleFileUpload)
  }

  // Application form
  const applicationForm = document.getElementById("applicationForm")
  if (applicationForm) {
    applicationForm.addEventListener("submit", handleApplicationSubmit)
  }

  // Contact form
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }

  // Modal close on overlay click
  const modalOverlay = document.getElementById("modalOverlay")
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal()
      }
    })
  }

  // Scroll to top button
  setupScrollToTop()

  // Smooth scrolling for navigation links
  setupSmoothScrolling()
}

function setupNavigation() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navbar = document.getElementById("navbar")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate hamburger bars
      const bars = navToggle.querySelectorAll(".bar")
      if (navMenu.classList.contains("active")) {
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
        bars[1].style.opacity = "0"
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
      } else {
        bars[0].style.transform = "none"
        bars[1].style.opacity = "1"
        bars[2].style.transform = "none"
      }
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active")
        const bars = navToggle?.querySelectorAll(".bar")
        if (bars) {
          bars[0].style.transform = "none"
          bars[1].style.opacity = "1"
          bars[2].style.transform = "none"
        }
      }
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    }
  })
}

function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn")

  window.addEventListener("scroll", () => {
    if (scrollToTopBtn) {
      scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none"
    }
  })

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  // Observe all animatable elements
  document
    .querySelectorAll(".service-card, .industry-card, .job-card, .value-item, .contact-info-item")
    .forEach((el) => {
      el.classList.add("scroll-animate")
      observer.observe(el)
    })
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function updateTime() {
  currentTime = new Date()
  if (document.getElementById("jobsContainer")) {
    filterAndDisplayJobs()
    updateStats()
  }
}

function filterAndDisplayJobs() {
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
  const selectedCategory = categoryFilter ? categoryFilter.value : "all"

  // Filter active jobs (not expired)
  const activeJobs = jobsData.filter((job) => {
    const deadline = new Date(job.deadline)
    return deadline > currentTime
  })

  // Apply search and category filters
  filteredJobs = activeJobs.filter((job) => {
    const matchesCategory = selectedCategory === "all" || job.department === selectedCategory
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm))

    return matchesCategory && matchesSearch
  })

  // Sort by match score
  filteredJobs.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))

  displayJobs()
  updateSearchResults()
}

function displayJobs() {
  const container = document.getElementById("jobsContainer")
  const noResults = document.getElementById("noResults")

  if (!container || !noResults) return

  if (filteredJobs.length === 0) {
    container.innerHTML = ""
    noResults.classList.remove("hidden")
    return
  }

  noResults.classList.add("hidden")
  container.innerHTML = filteredJobs.map((job) => createJobCard(job)).join("")

  // Re-initialize scroll animations for new job cards
  container.querySelectorAll(".job-card").forEach((card) => {
    card.classList.add("scroll-animate")
    // Trigger animation after a short delay
    setTimeout(() => card.classList.add("animate"), 100)
  })
}

function createJobCard(job) {
  const timeLeft = getTimeUntilDeadline(job.deadline)
  const isUrgent = getIsUrgent(job.deadline)
  const progress = getDeadlineProgress(job.deadline)

  return `
    <div class="job-card">
      <div class="job-header">
        <div class="job-title-row">
          <div class="job-title-section">
            <div class="job-title-badges">
              <h3 class="job-title">${job.title}</h3>
              ${job.matchScore >= 90 ? `<span class="badge match"><i class="fas fa-award"></i> ${job.matchScore}% Match</span>` : ""}
              ${isUrgent ? '<span class="badge urgent"><i class="fas fa-exclamation-triangle"></i> Urgent</span>' : ""}
              ${job.remote ? '<span class="badge remote"><i class="fas fa-home"></i> Remote</span>' : ""}
            </div>
            <div class="company-name">${job.company}</div>
            <div class="job-meta">
              <div class="job-meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${job.location}</span>
              </div>
              <div class="job-meta-item">
                <i class="fas fa-briefcase"></i>
                <span>${job.experience}</span>
              </div>
              <div class="job-meta-item">
                <i class="fas fa-users"></i>
                <span>${job.applicants} applicants</span>
              </div>
            </div>
            <div class="deadline-progress">
              <div class="deadline-info">
                <span class="deadline-label">Application Deadline</span>
                <span class="deadline-time ${isUrgent ? "urgent" : ""}">${timeLeft}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill ${isUrgent ? "urgent" : ""}" style="width: ${progress}%"></div>
              </div>
            </div>
          </div>
          <div class="job-salary-section">
            <div class="job-salary">${job.salary}</div>
            <div class="job-type">${job.type}</div>
          </div>
        </div>
      </div>
      <div class="job-content">
        <p class="job-description">${job.description}</p>
        <div class="skills-section">
          <div class="skills-label">Key Skills:</div>
          <div class="skills-list">
            ${job.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="job-footer">
        <div class="deadline-full">
          <i class="fas fa-calendar"></i>
          Deadline: ${formatDate(job.deadline)}
        </div>
        <button class="btn btn-primary ${isUrgent ? "urgent" : ""}" onclick="openApplicationModal('${job.id}')">
          Apply Now
        </button>
      </div>
    </div>
  `
}

function displayCategories() {
  const container = document.getElementById("categoriesGrid")
  if (!container) return

  container.innerHTML = categoriesData.map((category) => createCategoryCard(category)).join("")
}

function createCategoryCard(category) {
  return `
    <div class="category-card" onclick="selectCategory('${category.name}')">
      <div class="category-header">
        <div class="category-icon">
          <i class="${category.icon}"></i>
        </div>
        <div class="category-badges">
          <span class="category-count">${category.count}</span>
          ${category.trending ? '<span class="trending-badge"><i class="fas fa-bolt"></i> Trending</span>' : ""}
        </div>
      </div>
      <h3 class="category-title">${category.name}</h3>
      <p class="category-description">${category.description}</p>
      <button class="btn btn-outline">Explore ${category.count} Jobs</button>
    </div>
  `
}

function selectCategory(categoryName) {
  const categoryFilter = document.getElementById("categoryFilter")
  if (categoryFilter) {
    categoryFilter.value = categoryName
  }
  // Switch to jobs tab
  const jobsTabBtn = document.querySelector('[data-tab="jobs"]')
  if (jobsTabBtn) {
    jobsTabBtn.click()
  }
  filterAndDisplayJobs()
}

function updateSearchResults() {
  const resultsElement = document.getElementById("searchResults")
  if (!resultsElement) return

  if (filteredJobs.length > 0) {
    resultsElement.textContent = `Found ${filteredJobs.length} job${filteredJobs.length !== 1 ? "s" : ""} • Sorted by relevance`
  } else {
    resultsElement.textContent = ""
  }
}

function updateStats() {
  const activeJobs = jobsData.filter((job) => new Date(job.deadline) > currentTime)
  const urgentJobs = activeJobs.filter((job) => getIsUrgent(job.deadline))

  const totalJobsElement = document.getElementById("totalJobs")
  const urgentJobsElement = document.getElementById("urgentJobs")

  if (totalJobsElement) {
    totalJobsElement.textContent = activeJobs.length
  }
  if (urgentJobsElement) {
    urgentJobsElement.textContent = urgentJobs.length
  }
}

function getTimeUntilDeadline(deadline) {
  const deadlineDate = new Date(deadline)
  const diffTime = deadlineDate.getTime() - currentTime.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} left`
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} left`
  } else {
    return "Less than 1 hour left"
  }
}

function getIsUrgent(deadline) {
  const deadlineDate = new Date(deadline)
  const diffTime = deadlineDate.getTime() - currentTime.getTime()
  const diffHours = diffTime / (1000 * 60 * 60)
  return diffHours <= 24
}

function getDeadlineProgress(deadline) {
  const deadlineDate = new Date(deadline)
  const diffTime = deadlineDate.getTime() - currentTime.getTime()
  const totalTime = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
  const progress = Math.max(0, Math.min(100, ((totalTime - diffTime) / totalTime) * 100))
  return progress
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN")
}

function openApplicationModal(jobId) {
  selectedJob = jobsData.find((job) => job.id === jobId)
  if (!selectedJob) return

  selectedJob = jobsData.find((job) => job.id === jobId)
  if (!selectedJob) return

  const modalTitle = document.getElementById("modalTitle")
  if (modalTitle) {
    modalTitle.textContent = `Apply for ${selectedJob.title}`
  }

  // Update job summary
  const jobSummary = document.getElementById("jobSummary")
  if (jobSummary) {
    jobSummary.innerHTML = `
      <h3>Position Summary</h3>
      <div class="summary-grid">
        <div class="summary-item">
          <span class="summary-label">Company:</span>
          <span class="summary-value">${selectedJob.company}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Location:</span>
          <span class="summary-value">${selectedJob.location}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Department:</span>
          <span class="summary-value">${selectedJob.department}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Salary:</span>
          <span class="summary-value">${selectedJob.salary}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Experience:</span>
          <span class="summary-value">${selectedJob.experience}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Time Left:</span>
          <span class="summary-value ${getIsUrgent(selectedJob.deadline) ? "urgent" : ""}">${getTimeUntilDeadline(selectedJob.deadline)}</span>
        </div>
      </div>
    `
  }

  // Update requirements
  const requirementsSection = document.getElementById("requirementsSection")
  if (requirementsSection) {
    requirementsSection.innerHTML = `
      <h3>What We're Looking For</h3>
      <ul class="requirements-list">
        ${selectedJob.requirements
          .map(
            (req) => `
            <li>
              <i class="fas fa-check-circle"></i>
              <span>${req}</span>
            </li>
          `,
          )
          .join("")}
      </ul>
    `
  }

  const modalOverlay = document.getElementById("modalOverlay")
  if (modalOverlay) {
    modalOverlay.classList.remove("hidden")
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }
}

function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay")
  const applicationForm = document.getElementById("applicationForm")
  const fileSelected = document.getElementById("fileSelected")

  if (modalOverlay) {
    modalOverlay.classList.add("hidden")
    document.body.style.overflow = "auto" // Restore scrolling
  }
  if (applicationForm) {
    applicationForm.reset()
  }
  if (fileSelected) {
    fileSelected.classList.add("hidden")
  }
  selectedJob = null
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  const fileSelected = document.getElementById("fileSelected")
  const fileName = document.getElementById("fileName")

  if (file && fileSelected && fileName) {
    fileName.textContent = file.name
    fileSelected.classList.remove("hidden")
  } else if (fileSelected) {
    fileSelected.classList.add("hidden")
  }
}

function handleApplicationSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const applicationData = {
    jobId: selectedJob.id,
    fullName: document.getElementById("fullName")?.value,
    email: document.getElementById("email")?.value,
    phone: document.getElementById("phone")?.value,
    experience: document.getElementById("experience")?.value,
    coverLetter: document.getElementById("coverLetter")?.value,
    resume: document.getElementById("resumeFile")?.files[0],
  }

  // Show loading state
  const submitBtn = event.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    console.log("Application submitted:", applicationData)
    showNotification("Application submitted successfully! We'll contact you within 48 hours.", "success")
    closeModal()

    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
}

function handleContactSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const contactData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  }

  // Simple validation
  if (!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.message) {
    showNotification("Please fill in all required fields.", "error")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(contactData.email)) {
    showNotification("Please enter a valid email address.", "error")
    return
  }

  // Show loading state
  const submitBtn = event.target.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    console.log("Contact form submitted:", contactData)
    showNotification("Thank you for your message! We will get back to you within 24 hours.", "success")
    event.target.reset()

    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
}

function clearFilters() {
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  if (searchInput) {
    searchInput.value = ""
  }
  if (categoryFilter) {
    categoryFilter.value = "all"
  }
  filterAndDisplayJobs()
}

// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll("[data-target]")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 600;
    z-index: 10000;
    max-width: 400px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `

  // Set background color based on type
  if (type === "success") {
    notification.style.background = "linear-gradient(135deg, #10b981, #059669)"
  } else if (type === "error") {
    notification.style.background = "linear-gradient(135deg, #ef4444, #dc2626)"
  } else {
    notification.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)"
  }

  notification.textContent = message
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 5000)
}

// Select elements
const modal = document.getElementById("popupModal");
const closeBtn = document.querySelector(".close-btn");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupIcon = document.getElementById("popupIcon");

// Add click event on each service card
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    const description = card.querySelector("p").innerText;
    const icon = card.querySelector("i").className; // pick same icon as card

    // Put data in popup
    popupTitle.innerText = title;
    popupDescription.innerText = description;
    popupIcon.className = icon + " popup-icon"; // same icon in popup

    // Show popup
    modal.style.display = "flex";
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

