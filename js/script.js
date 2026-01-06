// Sample news data
const newsData = [
  {
    id: 1,
    title:
      "National Budget 2023-24 Focuses on Inflation Control and Social Safety Nets",
    category: "national",
    date: "2 hours ago",
    fullDate: "June 1, 2023, 10:30 AM",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "The government has proposed a Tk 7,61,785 crore national budget for the fiscal year 2023-24, with a strong emphasis on controlling inflation and expanding social safety programs.",
    content: `<p>The Finance Minister today presented the national budget for the fiscal year 2023-24 in Parliament, with a total outlay of Tk 7,61,785 crore, which is 15.2 percent of GDP.</p>
                         <p class="mt-4">The budget has given priority to controlling inflation, which has been a major concern for the economy. The government aims to bring down inflation to 6 percent by the end of the fiscal year.</p>
                         <p class="mt-4">A significant allocation has been made for social safety net programs, with Tk 1,26,272 crore earmarked for this sector, which is 16.6 percent of the total budget and 2.52 percent of GDP.</p>
                         <p class="mt-4">The budget also focuses on human resource development, agriculture, healthcare, and infrastructure development. The revenue target for the fiscal year has been set at Tk 5,00,000 crore.</p>`,
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Landmark Agreement",
    category: "international",
    date: "4 hours ago",
    fullDate: "June 1, 2023, 8:15 AM",
    image:
      "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "World leaders have agreed to a new climate pact with stricter emissions targets and increased funding for developing nations.",
    content: `<p>After two weeks of intense negotiations, world leaders at the Global Climate Summit have reached a landmark agreement to accelerate efforts to combat climate change.</p>
                         <p class="mt-4">The new pact commits countries to more ambitious emissions reduction targets, with developed nations pledging to achieve net-zero emissions by 2050.</p>
                         <p class="mt-4">A key component of the agreement is the establishment of a $100 billion annual fund to help developing nations transition to clean energy and adapt to the impacts of climate change.</p>
                         <p class="mt-4">The agreement also includes provisions for phasing out coal-fired power plants and increasing the share of renewable energy in the global energy mix to 50% by 2030.</p>`,
  },
  {
    id: 3,
    title: "Bangladesh Cricket Team Wins Series Against England",
    category: "sports",
    date: "6 hours ago",
    fullDate: "May 31, 2023, 5:45 PM",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "Historic victory at home ground with outstanding performance by new players in the final match of the series.",
    content: `<p>The Bangladesh cricket team created history today by defeating England in the final match of the series, securing a 2-1 victory in the three-match ODI series.</p>
                         <p class="mt-4">Young opener Tanzid Hasan was named Player of the Match for his brilliant century, while all-rounder Shakib Al Hasan's economical bowling in the middle overs turned the game in Bangladesh's favor.</p>
                         <p class="mt-4">This is Bangladesh's first series win against England at home since 2016, and it marks a significant milestone for the team under the new coaching staff.</p>
                         <p class="mt-4">Captain Tamim Iqbal expressed his delight at the team's performance, highlighting the contributions of the younger players who stepped up when it mattered most.</p>`,
  },
  {
    id: 4,
    title: "AI Breakthrough Revolutionizes Medical Diagnostics",
    category: "technology",
    date: "1 day ago",
    fullDate: "May 31, 2023, 11:20 AM",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "New AI system can detect diseases with 99% accuracy, significantly reducing diagnosis time and improving patient outcomes.",
    content: `<p>Researchers at the Institute of Medical Technology have developed an artificial intelligence system that can diagnose various diseases with unprecedented accuracy.</p>
                         <p class="mt-4">The AI model, trained on millions of medical images and patient records, can identify early signs of cancer, cardiovascular diseases, and neurological disorders with 99% accuracy.</p>
                         <p class="mt-4">This breakthrough has the potential to revolutionize medical diagnostics, particularly in rural areas where access to specialist doctors is limited.</p>
                         <p class="mt-4">The research team is now working with hospitals to implement the system in clinical settings, with initial trials showing promising results in reducing diagnosis time from weeks to minutes.</p>`,
  },
  {
    id: 5,
    title: "New Metro Rail Line Inaugurated in Dhaka",
    category: "national",
    date: "3 hours ago",
    fullDate: "June 1, 2023, 9:00 AM",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "The much-awaited metro rail line from Uttara to Motijheel opens to the public, promising relief from Dhaka's chronic traffic congestion.",
    content: `<p>The Prime Minister today inaugurated the first phase of the Dhaka Metro Rail, marking a new era in the city's public transportation system.</p>
                         <p class="mt-4">The initial phase covers 11.5 kilometers from Uttara to Agargaon, with the full line extending to Motijheel expected to be operational by the end of the year.</p>
                         <p class="mt-4">The metro rail is expected to carry up to 60,000 passengers per hour, significantly reducing travel time and traffic congestion in the city.</p>
                         <p class="mt-4">The project, funded by the Japanese International Cooperation Agency, is part of the government's efforts to develop a modern, efficient public transport system for the capital.</p>`,
  },
  {
    id: 6,
    title: "Stock Market Hits All-Time High",
    category: "business",
    date: "5 hours ago",
    fullDate: "June 1, 2023, 7:30 AM",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "Dhaka Stock Exchange's benchmark index crosses 7,500 points for the first time, driven by banking and pharmaceutical stocks.",
    content: `<p>The Dhaka Stock Exchange (DSE) today reached a historic milestone as the DSEX index crossed 7,500 points for the first time, closing at 7,512 points.</p>
                         <p class="mt-4">The rally was led by banking and pharmaceutical stocks, with investors showing strong confidence in the market following positive economic indicators.</p>
                         <p class="mt-4">Market analysts attribute the bull run to increased foreign investment, stable macroeconomic conditions, and encouraging corporate earnings reports.</p>
                         <p class="mt-4">The Bangladesh Securities and Exchange Commission has welcomed the market's performance but cautioned investors to remain vigilant and make informed decisions.</p>`,
  },
  {
    id: 7,
    title: "Football Transfer Window: Major Signings Expected",
    category: "sports",
    date: "1 day ago",
    fullDate: "May 31, 2023, 4:15 PM",
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "European football clubs prepare for summer transfer window with several high-profile players expected to change teams.",
    content: `<p>As the European football season comes to a close, clubs are already preparing for what promises to be an exciting summer transfer window.</p>
                         <p class="mt-4">Several high-profile players are expected to change clubs, with Manchester City, Real Madrid, and Bayern Munich reportedly ready to break transfer records.</p>
                         <p class="mt-4">The future of French superstar Kylian Mbappé remains the biggest talking point, with the player yet to confirm whether he will extend his contract with Paris Saint-Germain.</p>
                         <p class="mt-4">Clubs are also looking to strengthen their squads ahead of next season, with midfielders and strikers being the most sought-after positions in the market.</p>`,
  },
  {
    id: 8,
    title: "New Smartphone Features Under-display Camera",
    category: "technology",
    date: "2 days ago",
    fullDate: "May 30, 2023, 3:40 PM",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "Latest flagship smartphone eliminates the notch with an under-display camera, offering a truly full-screen experience.",
    content: `<p>Tech giant Samsung has unveiled its latest flagship smartphone featuring an under-display camera, marking a significant advancement in display technology.</p>
                         <p class="mt-4">The new technology allows the front-facing camera to be completely hidden under the screen, eliminating the need for notches or punch-hole cutouts.</p>
                         <p class="mt-4">The under-display camera becomes visible only when in use, providing a truly immersive full-screen experience for users.</p>
                         <p class="mt-4">The device also features a 200-megapixel main camera, a new generation of foldable display, and improved battery technology that promises two days of use on a single charge.</p>`,
  },
  {
    id: 9,
    title: "Government Announces New Education Policy",
    category: "national",
    date: "2 days ago",
    fullDate: "May 30, 2023, 11:10 AM",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "Comprehensive reforms aimed at modernizing the curriculum and improving the quality of education at all levels.",
    content: `<p>The Ministry of Education today announced a new National Education Policy, introducing comprehensive reforms to modernize the education system.</p>
                         <p class="mt-4">Key changes include a revised curriculum with increased focus on STEM (Science, Technology, Engineering, and Mathematics) subjects, digital literacy, and vocational training.</p>
                         <p class="mt-4">The policy also addresses teacher training and development, with plans to enhance the quality of teaching through continuous professional development programs.</p>
                         <p class="mt-4">The government has allocated additional funds for infrastructure development in educational institutions, particularly in rural areas.</p>`,
  },
  {
    id: 10,
    title: "Major Trade Agreement Signed with ASEAN",
    category: "international",
    date: "3 days ago",
    fullDate: "May 29, 2023, 2:25 PM",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description:
      "Bangladesh signs a comprehensive trade agreement with ASEAN countries, opening new markets for exports.",
    content: `<p>Bangladesh has signed a comprehensive trade agreement with the Association of Southeast Asian Nations (ASEAN), opening up new markets for the country's exports.</p>
                         <p class="mt-4">The agreement will reduce tariffs on a wide range of products, including ready-made garments, pharmaceuticals, leather goods, and agricultural products.</p>
                         <p class="mt-4">This is expected to boost Bangladesh's exports to ASEAN countries, which currently account for only 3% of the country's total exports.</p>
                         <p class="mt-4">The agreement also includes provisions for cooperation in areas such as technology transfer, investment promotion, and capacity building.</p>`,
  },
];

// DOM Elements
const newsGrid = document.getElementById("news-grid");
const homePage = document.getElementById("home-page");
const newsDetailsPage = document.getElementById("news-details-page");
const newsDetailsContent = document.getElementById("news-details-content");
const backToHomeBtn = document.getElementById("back-to-home");
const loadMoreBtn = document.getElementById("load-more");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryFilters = document.querySelectorAll(".category-filter");
const categoryLinks = document.querySelectorAll(".category-link");
const newsDetailsLinks = document.querySelectorAll(".news-details-link");
const themeToggle = document.getElementById("theme-toggle");
const currentDateElement = document.getElementById("current-date");
const breakingNewsElement = document.getElementById("breaking-news-text");

// State variables
let currentFilter = "all";
let displayedNewsCount = 6;
let isDarkMode = false;

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Set current date
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  currentDateElement.textContent = now.toLocaleDateString("en-US", options);

  // Load initial news
  renderNewsGrid();

  // Set up event listeners
  setupEventListeners();

  // Show skeleton loading state initially
  showSkeletonLoading();

  // Simulate loading delay
  setTimeout(() => {
    hideSkeletonLoading();
  }, 1000);
});

// Set up all event listeners
function setupEventListeners() {
  // Load more news button
  loadMoreBtn.addEventListener("click", loadMoreNews);

  // Back to home button
  backToHomeBtn.addEventListener("click", showHomePage);

  // Search functionality
  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  // Category filters
  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      currentFilter = this.getAttribute("data-category");
      displayedNewsCount = 6;
      renderNewsGrid();
      updateActiveFilter();
    });
  });

  // Category navigation links
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      currentFilter = this.getAttribute("data-category");
      displayedNewsCount = 6;
      renderNewsGrid();
      updateActiveFilter();
      scrollToNewsGrid();
    });
  });

  // News details links
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("news-details-link")) {
      e.preventDefault();
      const newsId = parseInt(e.target.getAttribute("data-id"));
      showNewsDetails(newsId);
    }
  });

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Breaking news updates
  setInterval(updateBreakingNews, 10000);
}

// Render news grid based on current filter
function renderNewsGrid() {
  // Clear current news grid
  newsGrid.innerHTML = "";

  // Filter news based on current category
  let filteredNews = newsData;
  if (currentFilter !== "all") {
    filteredNews = newsData.filter((news) => news.category === currentFilter);
  }

  // Display news up to the current count
  const newsToDisplay = filteredNews.slice(0, displayedNewsCount);

  // Create news cards
  newsToDisplay.forEach((news) => {
    const newsCard = createNewsCard(news);
    newsGrid.appendChild(newsCard);
  });

  // Show/hide load more button
  if (displayedNewsCount >= filteredNews.length) {
    loadMoreBtn.classList.add("hidden");
  } else {
    loadMoreBtn.classList.remove("hidden");
  }

  // Update active filter style
  updateActiveFilter();
}

// Create a news card element
function createNewsCard(news) {
  // Map category to color
  const categoryColors = {
    national: "bg-red-600",
    international: "bg-blue-600",
    sports: "bg-green-600",
    technology: "bg-purple-600",
    business: "bg-yellow-600",
    entertainment: "bg-pink-600",
  };

  const categoryColor = categoryColors[news.category] || "bg-gray-600";

  // Create card element
  const card = document.createElement("div");
  card.className = "card bg-base-100 shadow-md news-card";
  card.innerHTML = `
                <figure class="h-48 overflow-hidden">
                    <img src="${news.image}" alt="${
    news.title
  }" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </figure>
                <div class="card-body p-5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="badge ${categoryColor} text-white border-0 category-badge">${
    news.category.charAt(0).toUpperCase() + news.category.slice(1)
  }</span>
                        <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> ${
                          news.date
                        }</span>
                    </div>
                    <h3 class="card-title news-title text-xl">
                        <a href="#" class="hover:text-red-600 transition-colors news-details-link" data-id="${
                          news.id
                        }">${news.title}</a>
                    </h3>
                    <p class="text-gray-600">${news.description}</p>
                    <div class="card-actions justify-end mt-4">
                        <button class="btn btn-outline btn-sm news-details-link" data-id="${
                          news.id
                        }">Read More</button>
                    </div>
                </div>
            `;

  return card;
}

// Load more news
function loadMoreNews() {
  // Show loading state
  loadMoreBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i> Loading...';
  loadMoreBtn.disabled = true;

  // Simulate loading delay
  setTimeout(() => {
    displayedNewsCount += 3;
    renderNewsGrid();

    // Reset button
    loadMoreBtn.innerHTML = '<i class="fas fa-redo mr-2"></i> Load More News';
    loadMoreBtn.disabled = false;

    // Scroll to newly loaded content
    const newCards = document.querySelectorAll(".news-card");
    if (newCards.length > 0) {
      newCards[newCards.length - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, 800);
}

// Show news details page
function showNewsDetails(newsId) {
  // Find the news item
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) return;

  // Map category to color
  const categoryColors = {
    national: "badge-red",
    international: "badge-blue",
    sports: "badge-green",
    technology: "badge-purple",
    business: "badge-yellow",
    entertainment: "badge-pink",
  };

  const categoryColor = categoryColors[newsItem.category] || "badge-gray";

  // Create news details content
  newsDetailsContent.innerHTML = `
                <article class="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <div class="flex flex-col md:flex-row justify-between items-start mb-6">
                        <div>
                            <span class="badge ${categoryColor} text-white border-0 badge-lg mb-3">${
    newsItem.category.charAt(0).toUpperCase() + newsItem.category.slice(1)
  }</span>
                            <h1 class="news-title text-3xl md:text-4xl font-bold mb-4">${
                              newsItem.title
                            }</h1>
                            <div class="flex items-center text-gray-600">
                                <i class="far fa-clock mr-2"></i>
                                <span>${newsItem.fullDate}</span>
                                <span class="mx-3">|</span>
                                <i class="far fa-eye mr-2"></i>
                                <span>1.2M views</span>
                            </div>
                        </div>
                        <div class="mt-4 md:mt-0">
                            <div class="flex space-x-2">
                                <button class="btn btn-circle btn-outline">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button class="btn btn-circle btn-outline">
                                    <i class="far fa-bookmark"></i>
                                </button>
                                <button class="btn btn-circle btn-outline">
                                    <i class="fas fa-print"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <figure class="mb-8">
                        <img src="${newsItem.image}" alt="${
    newsItem.title
  }" class="w-full h-auto max-h-96 object-cover rounded-lg" />
                        <figcaption class="text-gray-500 text-sm mt-2">Photo: Associated Press</figcaption>
                    </figure>
                    
                    <div class="news-content prose max-w-none">
                        <p class="lead text-xl font-medium text-gray-700 mb-6">${
                          newsItem.description
                        }</p>
                        ${newsItem.content}
                        
                        <div class="border-t border-b py-6 my-8">
                            <h3 class="text-xl font-bold mb-4">Key Points</h3>
                            <ul class="list-disc pl-5 space-y-2">
                                <li>This development marks a significant milestone in the field</li>
                                <li>Experts believe it will have far-reaching implications</li>
                                <li>The technology is expected to be widely adopted within two years</li>
                                <li>Regulatory approval is pending but expected soon</li>
                            </ul>
                        </div>
                        
                        <p class="font-medium">The announcement has been met with enthusiasm from industry experts, who believe this innovation will transform the landscape and create new opportunities for growth and development.</p>
                    </div>
                    
                    <div class="mt-10 pt-6 border-t">
                        <h3 class="text-xl font-bold mb-4">Related News</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href="#" class="flex items-center p-3 hover:bg-gray-50 rounded-lg news-details-link" data-id="${
                              newsItem.id === 1 ? 5 : 1
                            }">
                                <div class="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                    <img src="${
                                      newsItem.id === 1
                                        ? newsData[4].image
                                        : newsData[0].image
                                    }" class="w-full h-full object-cover" />
                                </div>
                                <div class="ml-4">
                                    <h4 class="font-medium hover:text-red-600">${
                                      newsItem.id === 1
                                        ? newsData[4].title
                                        : newsData[0].title
                                    }</h4>
                                    <p class="text-gray-500 text-sm">${
                                      newsItem.id === 1
                                        ? newsData[4].date
                                        : newsData[0].date
                                    }</p>
                                </div>
                            </a>
                            <a href="#" class="flex items-center p-3 hover:bg-gray-50 rounded-lg news-details-link" data-id="${
                              newsItem.id === 1 ? 9 : 5
                            }">
                                <div class="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                    <img src="${
                                      newsItem.id === 1
                                        ? newsData[8].image
                                        : newsData[4].image
                                    }" class="w-full h-full object-cover" />
                                </div>
                                <div class="ml-4">
                                    <h4 class="font-medium hover:text-red-600">${
                                      newsItem.id === 1
                                        ? newsData[8].title
                                        : newsData[4].title
                                    }</h4>
                                    <p class="text-gray-500 text-sm">${
                                      newsItem.id === 1
                                        ? newsData[8].date
                                        : newsData[4].date
                                    }</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </article>
            `;

  // Show news details page and hide home page
  homePage.classList.add("hidden");
  newsDetailsPage.classList.remove("hidden");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show home page
function showHomePage() {
  homePage.classList.remove("hidden");
  newsDetailsPage.classList.add("hidden");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Perform search
function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === "") {
    // If search is empty, reset to current filter
    renderNewsGrid();
    return;
  }

  // Filter news based on search term
  const filteredNews = newsData.filter(
    (news) =>
      news.title.toLowerCase().includes(searchTerm) ||
      news.description.toLowerCase().includes(searchTerm) ||
      news.content.toLowerCase().includes(searchTerm)
  );

  // Update news grid with search results
  updateNewsGridWithSearchResults(filteredNews, searchTerm);
}

// Update news grid with search results
function updateNewsGridWithSearchResults(filteredNews, searchTerm) {
  // Clear current news grid
  newsGrid.innerHTML = "";

  if (filteredNews.length === 0) {
    // Show no results message
    newsGrid.innerHTML = `
                    <div class="col-span-full text-center py-10">
                        <i class="fas fa-search text-5xl text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">No results found for "${searchTerm}"</h3>
                        <p class="text-gray-600">Try adjusting your search terms or browse our categories.</p>
                    </div>
                `;
    loadMoreBtn.classList.add("hidden");
    return;
  }

  // Display search results
  filteredNews.forEach((news) => {
    const newsCard = createNewsCard(news);
    newsGrid.appendChild(newsCard);
  });

  // Hide load more button for search results
  loadMoreBtn.classList.add("hidden");
}

// Update active filter style
function updateActiveFilter() {
  // Remove active class from all filters
  categoryFilters.forEach((filter) => {
    filter.classList.remove("font-bold", "text-red-600");
  });

  // Add active class to current filter
  const activeFilter = document.querySelector(
    `.category-filter[data-category="${currentFilter}"]`
  );
  if (activeFilter) {
    activeFilter.classList.add("font-bold", "text-red-600");
  }
}

// Scroll to news grid
function scrollToNewsGrid() {
  const newsGridElement = document.getElementById("news-grid");
  if (newsGridElement) {
    newsGridElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Toggle dark/light theme
function toggleTheme() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Update breaking news
function updateBreakingNews() {
  const breakingNewsOptions = [
    "National Budget 2023-24 to be announced today",
    "Dhaka Metro Rail opens to public from today",
    "Bangladesh wins ODI series against England",
    "Stock market hits all-time high",
    "Major breakthrough in AI medical diagnostics",
  ];

  const randomIndex = Math.floor(Math.random() * breakingNewsOptions.length);
  breakingNewsElement.textContent = breakingNewsOptions[randomIndex];

  // Add animation
  breakingNewsElement.parentElement.classList.add("animate-pulse");
  setTimeout(() => {
    breakingNewsElement.parentElement.classList.remove("animate-pulse");
  }, 1000);
}

// Show skeleton loading state
function showSkeletonLoading() {
  const skeletonHTML = `
                <div class="col-span-1 md:col-span-2 lg:col-span-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${Array(6)
                          .fill()
                          .map(
                            () => `
                            <div class="card bg-base-100 shadow-md">
                                <div class="skeleton h-48 w-full"></div>
                                <div class="card-body p-5">
                                    <div class="skeleton h-4 w-1/4 mb-2"></div>
                                    <div class="skeleton h-6 w-full mb-3"></div>
                                    <div class="skeleton h-4 w-full mb-2"></div>
                                    <div class="skeleton h-4 w-2/3"></div>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;

  newsGrid.innerHTML = skeletonHTML;
}

// Hide skeleton loading
function hideSkeletonLoading() {
  renderNewsGrid();
}
