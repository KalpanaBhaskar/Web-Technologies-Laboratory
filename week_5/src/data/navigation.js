// Navigation data structure for Arcade University website

export const navigationData = [
  {
    title: "About Us",
    path: "/about",
    submenu: [
      { label: "University Overview", path: "/about" },
      { label: "Vision & Mission", path: "/about/vision" },
      { label: "Leadership", path: "/about/leadership" },
      { label: "History", path: "/about/history" }
    ]
  },
  {
    title: "Academics",
    path: "/academics",
    submenu: [
      { label: "Undergraduate Programs", path: "/academics/undergraduate" },
      { label: "Postgraduate Programs", path: "/academics/postgraduate" },
      { label: "Schools & Departments", path: "/academics/schools" },
      { label: "Academic Calendar", path: "/academics/calendar" }
    ]
  },
  {
    title: "Admissions",
    path: "/admissions",
    submenu: [
      { label: "Undergraduate Admissions", path: "/admissions/undergraduate" },
      { label: "Postgraduate Admissions", path: "/admissions/postgraduate" },
      { label: "Application Process", path: "/admissions/application-process" },
      { label: "Scholarships & Financial Aid", path: "/admissions/scholarships" },
      { label: "Important Dates", path: "/admissions/dates" }
    ]
  },
  {
    title: "Research",
    path: "/research",
    submenu: [
      { label: "Research Overview", path: "/research" },
      { label: "Research Centers", path: "/research/centers" },
      { label: "Innovation & Entrepreneurship", path: "/research/innovation" },
      { label: "Research Highlights", path: "/research/highlights" }
    ]
  },
  {
    title: "Campus Life",
    path: "/campus-life",
    submenu: [
      { label: "Student Life", path: "/campus-life" },
      { label: "Housing", path: "/campus-life/housing" },
      { label: "Clubs & Organizations", path: "/campus-life/clubs" },
      { label: "Athletics", path: "/campus-life/athletics" },
      { label: "Campus Facilities", path: "/campus-life/facilities" }
    ]
  },
  {
    title: "Placements",
    path: "/placements",
    submenu: [
      { label: "Career Services", path: "/placements" },
      { label: "Placement Statistics", path: "/placements/statistics" },
      { label: "Recruiters", path: "/placements/recruiters" },
      { label: "Student Success Stories", path: "/placements/stories" }
    ]
  },
  {
    title: "Contact Us",
    path: "/contact",
    submenu: [
      { label: "Contact Information", path: "/contact" },
      { label: "Admissions Office", path: "/contact/admissions" },
      { label: "Campus Map", path: "/contact/map" }
    ]
  }
];
