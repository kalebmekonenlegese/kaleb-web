const themeToggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
if (themeToggle) {
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    themeToggle.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  });
}

const contactForm = document.getElementById('contact-form');
const subscribeForm = document.getElementById('subscribe-form');
const formStatus = document.getElementById('form-status');
const subscribeStatus = document.getElementById('subscribe-status');

const openMailTo = (email, subject, body) => {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const scrollToStatus = (element) => {
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please provide your name, email, and message.';
      formStatus.classList.remove('success');
      formStatus.classList.add('error');
      scrollToStatus(formStatus);
      return;
    }

    if (!isValidEmail(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.classList.remove('success');
      formStatus.classList.add('error');
      scrollToStatus(formStatus);
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    openMailTo('kalebmekonen.kb@gmail.com', 'Website Contact Request', body);
    formStatus.textContent = 'Opening your email client...';
    formStatus.classList.remove('error');
    formStatus.classList.add('success');
    scrollToStatus(formStatus);
  });
}

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const subscribeEmail = document.getElementById('subscribe-email').value.trim();

    if (!subscribeEmail) {
      if (subscribeStatus) {
        subscribeStatus.textContent = 'Enter your email to subscribe.';
        subscribeStatus.classList.remove('success');
        subscribeStatus.classList.add('error');
        scrollToStatus(subscribeStatus);
      }
      return;
    }

    if (!isValidEmail(subscribeEmail)) {
      if (subscribeStatus) {
        subscribeStatus.textContent = 'Please enter a valid email address.';
        subscribeStatus.classList.remove('success');
        subscribeStatus.classList.add('error');
        scrollToStatus(subscribeStatus);
      }
      return;
    }

    const body = `Please add me to updates list.\n\nEmail: ${subscribeEmail}`;
    openMailTo('kalebmekonen.kb@gmail.com', 'Subscribe to updates', body);
    if (subscribeStatus) {
      subscribeStatus.textContent = 'Opening your email client to subscribe...';
      subscribeStatus.classList.remove('error');
      subscribeStatus.classList.add('success');
      scrollToStatus(subscribeStatus);
    }
  });
}

const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
progressBar.innerHTML = '<div class="progress-fill"></div>';
document.body.prepend(progressBar);
const progressFill = progressBar.querySelector('.progress-fill');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressFill.style.width = `${progress}%`;
});

const fadeElements = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

const heroTyping = document.getElementById('hero-typing');
if (heroTyping) {
  const phrases = [
    'Building web interfaces that feel fast.',
    'Learning AI and cybersecurity concepts.',
    'Turning ideas into practical digital solutions.',
    'Creating portfolio projects that tell a story.'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const cursor = document.createElement('span');
  cursor.className = 'cursor-blink';
  heroTyping.appendChild(cursor);

  const typePhrase = () => {
    const currentPhrase = phrases[phraseIndex];
    if (!deleting) {
      heroTyping.textContent = currentPhrase.slice(0, charIndex + 1);
      heroTyping.appendChild(cursor);
      charIndex += 1;
      if (charIndex === currentPhrase.length) {
        deleting = true;
        setTimeout(typePhrase, 2000);
        return;
      }
      setTimeout(typePhrase, 80);
    } else {
      heroTyping.textContent = currentPhrase.slice(0, charIndex - 1);
      heroTyping.appendChild(cursor);
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, 500);
        return;
      }
      setTimeout(typePhrase, 40);
    }
  };
  typePhrase();
}

const filterButtons = document.querySelectorAll('.filter-btn');
let resourceCards = [];
const activeFilterBadge = document.querySelector('.active-filter-badge');
const noResultsMessage = document.querySelector('.no-results-message');
const resourcesGridHeader = document.querySelector('.resources-grid-header');
const resourceSearch = document.getElementById('resource-search');
const clearFilterButton = document.getElementById('clear-filter');
const resourcesGrid = document.querySelector('.resources-grid');
const newsGrid = document.querySelector('.news-grid');
const projectsGrid = document.querySelector('.projects-grid');
const opportunitiesGrid = document.querySelector('.opportunities-grid');
const aboutStoryCards = document.querySelector('.story-cards');
const resourcesDataPath = 'resources.json';
const newsDataPath = 'news.json';
const supabaseConfig = window.SUPABASE_CONFIG || {};
const supabaseUrl = supabaseConfig.url || '';
const supabaseKey = supabaseConfig.key || '';
const supabaseNewsTable = supabaseConfig.newsTable || 'news';
const supabaseResourcesTable = supabaseConfig.resourcesTable || 'resources';
const supabaseProjectsTable = supabaseConfig.projectsTable || 'projects';
const supabaseOpportunitiesTable = supabaseConfig.opportunitiesTable || 'opportunities';
const supabaseAboutTable = supabaseConfig.aboutTable || 'about';
const useSupabase = Boolean(supabaseUrl && supabaseKey);
const supabaseBaseUrl = useSupabase ? `${supabaseUrl}/rest/v1` : '';
const supabaseHeaders = useSupabase
  ? {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Accept: 'application/json'
    }
  : {};
// Unified Supabase client helpers (uses js/supabaseClient.js)
const fetchData = async (tableName) => {
  if (window.supabaseClient && typeof window.supabaseClient.fetchData === 'function') {
    return window.supabaseClient.fetchData(tableName);
  }
  throw new Error('Supabase client not initialized');
};

let realtimeSupported = false;
const realtimeChannels = {};

const setupRealtimeFor = (tableName, onChange) => {
  try {
    if (window.supabaseClient && typeof window.supabaseClient.subscribeToTable === 'function') {
      realtimeSupported = true;
      const chan = window.supabaseClient.subscribeToTable(tableName, (payload) => {
        console.log(`Realtime payload for ${tableName}:`, payload);
        onChange && onChange(payload);
      });
      realtimeChannels[tableName] = chan;
      return chan;
    }
  } catch (err) {
    console.error('Error setting up realtime:', err);
  }
  return null;
};

// Fallback polling (used only when realtime not available)
const pollingIntervals = {};
const startPolling = (name, fn, ms = 12000) => {
  if (pollingIntervals[name]) return;
  pollingIntervals[name] = setInterval(() => {
    console.log(`Polling ${name}...`);
    fn().catch((e) => console.error(e));
  }, ms);
};

// Wrapper loaders that use Supabase client when available
const loadNews = async () => {
  if (useSupabase) return fetchData(supabaseNewsTable);
  return loadNewsData();
};

const loadResources = async () => {
  if (useSupabase) return fetchData(supabaseResourcesTable);
  return loadResourcesData();
};

const loadProjects = async () => {
  if (useSupabase) return fetchData(supabaseProjectsTable);
  return loadProjectsData();
};

const loadAbout = async () => {
  if (useSupabase) return fetchData(supabaseAboutTable);
  return loadAboutData();
};
let activeFilter = 'all';
let activeSearch = '';

const projectsData = [
  {
    title: 'Hotel Management Website',
    description: "A modern website developed for my family's hotel business to strengthen its online presence and support future digital services.",
    tech: 'HTML, CSS, JavaScript',
    status: 'Live',
    imageLabel: 'Hotel site',
    sourceUrl: 'mailto:kalebmekonen.kb@gmail.com?subject=Hotel%20Website%20Source%20Request&body=Hi%20Kaleb%2C%0A%0AI%20would%20like%20to%20request%20access%20to%20the%20source%20code%20for%20the%20Hotel%20Management%20Website.%0A%0AThanks!',
    sourceLabel: 'Request source',
    demoUrl: 'mailto:kalebmekonen.kb@gmail.com?subject=Hotel%20Website%20Demo%20Request&body=Hi%20Kaleb%2C%0A%0AI%20would%20like%20to%20see%20a%20demo%20of%20the%20Hotel%20Management%20Website.%0A%0AThanks!',
    demoLabel: 'Request demo'
  },
  {
    title: 'Walya Entertainment Branch Management System',
    description: 'Designed as a centralized digital management platform to coordinate branch operations and simplify administration across multiple regional locations.',
    tech: 'HTML, CSS, JavaScript',
    status: 'Concept & Planning',
    imageLabel: 'Branch system',
    sourceUrl: 'mailto:kalebmekonen.kb@gmail.com?subject=Walya%20Concept%20Access&body=Hi%20Kaleb%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20the%20Walya%20Entertainment%20Branch%20Management%20System.%0A%0AThanks!',
    sourceLabel: 'Request details',
    demoUrl: 'mailto:kalebmekonen.kb@gmail.com?subject=Walya%20Concept%20Discussion&body=Hi%20Kaleb%2C%0A%0AI%20am%20interested%20in%20the%20Walya%20Entertainment%20Branch%20Management%20System.%0A%0AThanks!',
    demoLabel: 'Contact me'
  },
  {
    title: 'DeliWay – Digital Delivery Platform',
    description: 'A business initiative inspired by real-world delivery challenges, aimed at connecting customers, local businesses, and delivery personnel through a simple digital platform.',
    tech: 'HTML, CSS, JavaScript',
    status: 'Concept & Planning',
    imageLabel: 'Delivery app',
    sourceUrl: 'mailto:kalebmekonen.kb@gmail.com?subject=DeliWay%20Concept%20Access&body=Hi%20Kaleb%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20the%20DeliWay%20Delivery%20Platform.%0A%0AThanks!',
    sourceLabel: 'Request details',
    demoUrl: 'mailto:kalebmekonen.kb@gmail.com?subject=DeliWay%20Concept%20Discussion&body=Hi%20Kaleb%2C%0A%0AI%20am%20interested%20in%20the%20DeliWay%20digital%20delivery%20platform.%0A%0AThanks!',
    demoLabel: 'Contact me'
  }
];

const aboutSectionsData = [
  {
    label: 'Childhood',
    title: 'Early curiosity at home',
    description: 'I remember taking apart old radios and looking at screens with very simple questions. That quiet curiosity made me feel like learning was the most natural thing to do.',
    mediaType: 'image',
    mediaUrl: 'images/about-childhood.jpg',
    alt: 'Childhood curiosity',
    order: 1
  },
  {
    label: 'Family Moments',
    title: 'Learning with my family',
    description: 'My brother and I shared the same old phone and the same internet connection. We talked about small projects, and I learned that the people around me mattered more than the tools themselves.',
    mediaType: 'image',
    mediaUrl: 'images/about-family.jpg',
    alt: 'Family support',
    order: 2,
    reverse: true
  },
  {
    label: 'First Turning Point',
    title: 'Finding code in the browser',
    description: 'The first time I made a simple webpage and saw it work, it felt real in a way books never did. That first turning point made me want to learn every small step behind the screen.',
    mediaType: 'video',
    mediaUrl: 'videos/about-turning-point.mp4',
    poster: 'images/about-turning-point.jpg',
    alt: 'First computer discovery',
    mediaRotate: true,
    order: 3
  },
  {
    label: 'First Challenge',
    title: 'Learning with limited resources',
    description: 'I often used a phone and free lessons to figure out how things worked, and there were days when slow internet meant I had to wait. Those struggles taught me patience and how to keep going without perfect conditions.',
    mediaType: 'image',
    mediaUrl: 'images/about-struggle.jpg',
    alt: 'Learning struggle',
    order: 4,
    reverse: true
  },
  {
    label: 'First Step',
    title: 'Building my first real page',
    description: 'My first project was a simple website that showed something I cared about. It was not perfect, but it proved I could take an idea and turn it into something people could open on a screen.',
    mediaType: 'video',
    mediaUrl: 'videos/about-first-step.mp4',
    poster: 'images/about-first-step.jpg',
    alt: 'First project',
    order: 5
  },
  {
    label: 'Today',
    title: 'Moving toward full-stack and beyond',
    description: 'Today I focus on full-stack development while learning new tools in AI and cybersecurity. I want to keep growing with real projects and build a professional path that reaches beyond where I started.',
    mediaType: 'image',
    mediaUrl: 'images/about-future.jpg',
    alt: 'Present and future vision',
    order: 6,
    reverse: true
  }
];

const opportunitiesData = [
  {
    category: 'Scholarship',
    title: 'Developer Learning Fund',
    description: 'Financial support for learners building web, AI, and cybersecurity skills through online courses and certifications.',
    url: 'https://supabase.com',
    buttonText: 'Learn more'
  },
  {
    category: 'Internship',
    title: 'Remote Tech Internship',
    description: 'Paid internship opportunities for self-taught developers to work on real software projects and build portfolio experience.',
    url: 'https://supabase.com',
    buttonText: 'Learn more'
  },
  {
    category: 'Fellowship',
    title: 'Growth Fellowship Program',
    description: 'A structured mentorship program for early-career developers looking to gain guided experience in product and engineering roles.',
    url: 'https://supabase.com',
    buttonText: 'Learn more'
  }
];

const createOpportunityCard = (opportunity) => {
  return `
    <article class="card">
      <span class="eyebrow">${opportunity.category || 'Opportunity'}</span>
      <h3>${opportunity.title}</h3>
      <p>${opportunity.description}</p>
      ${opportunity.url ? `<a href="${opportunity.url}" class="btn btn-link" target="_blank" rel="noreferrer">${opportunity.buttonText || 'Learn more'}</a>` : ''}
    </article>
  `;
};

const renderOpportunityCards = (opportunities) => {
  if (!opportunitiesGrid) return;
  opportunitiesGrid.innerHTML = opportunities.map(createOpportunityCard).join('');
  const opportunityMessage = document.querySelector('.no-results-message');
  if (opportunityMessage) {
    opportunityMessage.style.display = opportunities.length === 0 ? 'block' : 'none';
  }
};

const createAboutCard = (section) => {
  let mediaHtml = '';
  const mediaClass = section.mediaRotate ? 'rotated-media' : '';
  if (section.mediaType === 'video') {
    mediaHtml = `
      <video class="${mediaClass}" controls muted poster="${section.poster || ''}">
        <source src="${section.mediaUrl}" type="video/mp4" />
        Your browser does not support this video format.
      </video>
    `;
  } else {
    mediaHtml = `
      <img src="${section.mediaUrl}" alt="${section.alt || section.title}" class="${mediaClass}" />
    `;
  }

  const reverseClass = section.reverse ? 'reverse' : '';
  return `
    <article class="story-card ${reverseClass}">
      <div class="story-card-image">
        ${mediaHtml}
      </div>
      <div class="story-card-content">
        ${section.label ? `<span class="story-card-year">${section.label}</span>` : ''}
        <h2>${section.title}</h2>
        <p>${section.description}</p>
      </div>
    </article>
  `;
};

const renderAboutCards = (sections) => {
  if (!aboutStoryCards) return;
  const sorted = Array.isArray(sections) ? [...sections].sort((a, b) => (a.order || 0) - (b.order || 0)) : [];
  aboutStoryCards.innerHTML = '';
  sorted.forEach((section) => {
    const card = document.createElement('article');
    card.className = 'story-card';
    if (section.reverse) card.classList.add('reverse');

    const imageWrap = document.createElement('div');
    imageWrap.className = 'story-card-image';
    if (section.mediaType === 'video') {
      const video = document.createElement('video');
      video.controls = true;
      video.muted = true;
      if (section.poster) video.poster = section.poster;
      const src = document.createElement('source');
      src.src = section.mediaUrl || '';
      src.type = 'video/mp4';
      video.appendChild(src);
      imageWrap.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = section.mediaUrl || '';
      img.alt = section.alt || section.title || '';
      imageWrap.appendChild(img);
    }

    const content = document.createElement('div');
    content.className = 'story-card-content';
    if (section.label) {
      const span = document.createElement('span');
      span.className = 'story-card-year';
      span.textContent = section.label;
      content.appendChild(span);
    }
    const h2 = document.createElement('h2');
    h2.textContent = section.title || '';
    const p = document.createElement('p');
    p.textContent = section.description || '';
    content.appendChild(h2);
    content.appendChild(p);

    card.appendChild(imageWrap);
    card.appendChild(content);
    aboutStoryCards.appendChild(card);
  });
};

const fetchSupabaseTable = async (table, params = '') => {
  if (!useSupabase) return null;
  const response = await fetch(`${supabaseBaseUrl}/${table}${params}`, {
    method: 'GET',
    headers: supabaseHeaders,
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error(`Supabase request failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

const loadAboutData = () => {
  if (useSupabase) {
    return fetchSupabaseTable(supabaseAboutTable, '?select=*');
  }
  return Promise.resolve(aboutSectionsData);
};

const loadOpportunitiesData = () => {
  if (useSupabase) {
    return fetchSupabaseTable(supabaseOpportunitiesTable, '?select=*');
  }
  return Promise.resolve(opportunitiesData);
};

const loadResourcesData = () => {
  if (useSupabase) {
    return fetchSupabaseTable(supabaseResourcesTable, '?select=*');
  }
  return fetch(resourcesDataPath + '?_=' + Date.now(), { cache: 'no-store' }).then((response) => {
    if (!response.ok) throw new Error('Unable to load resources.');
    return response.json();
  });
};

const loadNewsData = () => {
  if (useSupabase) {
    return fetchSupabaseTable(supabaseNewsTable, '?select=*');
  }
  return fetch(newsDataPath + '?_=' + Date.now(), { cache: 'no-store' }).then((response) => {
    if (!response.ok) throw new Error('Unable to load news.');
    return response.json();
  });
};

const loadProjectsData = () => {
  if (useSupabase) {
    return fetchSupabaseTable(supabaseProjectsTable, '?select=*');
  }
  return Promise.resolve(projectsData);
};

const formatCategoryLabel = (category) => {
  return category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1);
};

const createResourceButton = (resource) => {
  if (!resource.url || !resource.buttonText) return '';
  const target = resource.openInNewTab ? ' target="_blank" rel="noreferrer"' : '';
  const download = resource.download ? ' download' : '';
  const buttonClass = resource.category === 'note' ? 'btn btn-primary' : 'btn btn-secondary';
  return `<a href="${resource.url}" class="${buttonClass}"${target}${download}>${resource.buttonText}</a>`;
};

const renderResourceCards = (resources) => {
  if (!resourcesGrid) return;
  resourcesGrid.innerHTML = '';
  resourceCards = [];

  const list = Array.isArray(resources) ? resources : (resources && resources.resources) ? resources.resources : [];

  list.forEach((resource) => {
    const card = document.createElement('article');
    card.className = 'resource-card';
    if (resource.category) card.dataset.category = resource.category;

    const tag = document.createElement('span');
    tag.className = 'resource-tag';
    tag.textContent = formatCategoryLabel(resource.category);

    const h3 = document.createElement('h3');
    h3.textContent = resource.title || '';

    const p = document.createElement('p');
    p.textContent = resource.description || '';

    const actions = document.createElement('div');
    if (resource.url && resource.buttonText) {
      const a = document.createElement('a');
      a.href = resource.url;
      a.textContent = resource.buttonText;
      a.className = resource.category === 'note' ? 'btn btn-primary' : 'btn btn-secondary';
      if (resource.openInNewTab) { a.target = '_blank'; a.rel = 'noreferrer'; }
      if (resource.download) a.setAttribute('download', '');
      actions.appendChild(a);
    }

    card.appendChild(tag);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(actions);

    resourcesGrid.appendChild(card);
    resourceCards.push(card);
  });

  updateResourceFilter(activeFilter, activeSearch);
};

const createNewsCard = (news) => {
  return `
    <article class="news-item">
      <span class="resource-tag">${news.category}</span>
      <h3>${news.title}</h3>
      <p>${news.summary}</p>
      <a href="${news.url}" class="btn btn-link" target="_blank" rel="noreferrer">${news.buttonText}</a>
    </article>
  `;
};

const renderNewsCards = (newsItems) => {
  if (!newsGrid) return;
  newsGrid.innerHTML = '';
  const list = Array.isArray(newsItems) ? newsItems : (newsItems && newsItems.news) ? newsItems.news : [];
  list.forEach((news) => {
    const article = document.createElement('article');
    article.className = 'news-item';

    const tag = document.createElement('span');
    tag.className = 'resource-tag';
    tag.textContent = news.category || '';

    const h3 = document.createElement('h3');
    h3.textContent = news.title || '';

    const p = document.createElement('p');
    p.textContent = news.summary || '';

    article.appendChild(tag);
    article.appendChild(h3);
    article.appendChild(p);

    if (news.url) {
      const a = document.createElement('a');
      a.className = 'btn btn-link';
      a.href = news.url;
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.textContent = news.buttonText || 'Read';
      article.appendChild(a);
    }

    newsGrid.appendChild(article);
  });
};

const createProjectButton = (project) => {
  const buttons = [];
  if (project.sourceUrl) {
    const label = project.sourceLabel || 'Source';
    const target = project.sourceUrl.startsWith('mailto:') ? '' : ' target="_blank" rel="noreferrer"';
    buttons.push(`<a href="${project.sourceUrl}" class="btn btn-secondary"${target}>${label}</a>`);
  }
  if (project.demoUrl) {
    const label = project.demoLabel || 'Demo';
    const target = project.demoUrl.startsWith('mailto:') ? '' : ' target="_blank" rel="noreferrer"';
    buttons.push(`<a href="${project.demoUrl}" class="btn btn-link"${target}>${label}</a>`);
  }
  return buttons.join('');
};

const createProjectCard = (project) => {
  const style = project.imageUrl ? `style="background-image: url('${project.imageUrl}');"` : '';
  const label = project.imageLabel || project.category || 'Project';
  const status = project.status ? `<p class="project-meta">${project.status}${project.tech ? ` | ${project.tech}` : ''}</p>` : project.tech ? `<p class="project-meta">${project.tech}</p>` : '';
  return `
    <article class="project-card">
      <div class="project-image" ${style}>
        <span class="project-image-label">${label}</span>
      </div>
      <div class="project-content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        ${status}
        <div class="project-links">
          ${createProjectButton(project)}
        </div>
      </div>
    </article>
  `;
};

const renderProjectCards = (projects) => {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = '';
  const list = Array.isArray(projects) ? projects : (projects && projects.projects) ? projects.projects : [];
  list.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'project-card';

    const imageWrap = document.createElement('div');
    imageWrap.className = 'project-image';
    if (project.imageUrl) imageWrap.style.backgroundImage = `url('${project.imageUrl}')`;
    const imageLabel = document.createElement('span');
    imageLabel.className = 'project-image-label';
    imageLabel.textContent = project.imageLabel || project.category || 'Project';
    imageWrap.appendChild(imageLabel);

    const content = document.createElement('div');
    content.className = 'project-content';
    const h2 = document.createElement('h2');
    h2.textContent = project.title || '';
    const p = document.createElement('p');
    p.textContent = project.description || '';

    const status = document.createElement('p');
    status.className = 'project-meta';
    if (project.status || project.tech) status.textContent = `${project.status || ''}${project.status && project.tech ? ' | ' : ''}${project.tech || ''}`;

    const links = document.createElement('div');
    links.className = 'project-links';
    if (project.sourceUrl) {
      const a = document.createElement('a');
      a.className = 'btn btn-secondary';
      a.href = project.sourceUrl;
      if (!project.sourceUrl.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noreferrer'; }
      a.textContent = project.sourceLabel || 'Source';
      links.appendChild(a);
    }
    if (project.demoUrl) {
      const a = document.createElement('a');
      a.className = 'btn btn-link';
      a.href = project.demoUrl;
      if (!project.demoUrl.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noreferrer'; }
      a.textContent = project.demoLabel || 'Demo';
      links.appendChild(a);
    }

    content.appendChild(h2);
    content.appendChild(p);
    if (status.textContent) content.appendChild(status);
    content.appendChild(links);

    article.appendChild(imageWrap);
    article.appendChild(content);
    projectsGrid.appendChild(article);
  });
  const projectMessage = document.querySelector('.no-results-message');
  if (projectMessage) {
    projectMessage.style.display = list.length === 0 ? 'block' : 'none';
  }
};

const updateResourceFilter = (filter, search = '') => {
  let visibleCount = 0;
  const query = search.toLowerCase().trim();

  resourceCards.forEach((card) => {
    const category = card.dataset.category;
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const matchesFilter = filter === 'all' || category === filter;
    const matchesSearch = !query || title.includes(query);
    const visible = matchesFilter && matchesSearch;
    card.classList.toggle('hidden', !visible);
    if (visible) visibleCount += 1;
  });

  if (activeFilterBadge) {
    activeFilterBadge.textContent = `Active filter: ${formatCategoryLabel(filter)}`;
  }

  if (noResultsMessage) {
    noResultsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  if (resourcesGridHeader) {
    resourcesGridHeader.style.display = visibleCount === 0 ? 'none' : 'flex';
  }
};

if (filterButtons.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.filter;
      updateResourceFilter(activeFilter, activeSearch);
    });
  });
}

if (resourceSearch) {
  resourceSearch.addEventListener('input', (event) => {
    activeSearch = event.target.value;
    updateResourceFilter(activeFilter, activeSearch);
  });
}

if (clearFilterButton) {
  clearFilterButton.addEventListener('click', () => {
    activeFilter = 'all';
    activeSearch = '';
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    if (resourceSearch) resourceSearch.value = '';
    updateResourceFilter(activeFilter, activeSearch);
  });
}

if (resourcesGrid) {
  loadResources()
    .then((data) => {
      const resources = Array.isArray(data) ? data : (data && data.resources) ? data.resources : [];
      if (Array.isArray(resources)) {
        renderResourceCards(resources);
      }
    })
    .catch((error) => {
      console.error(error);
      if (resourcesGrid) {
        resourcesGrid.innerHTML = '';
      }
      if (noResultsMessage) {
        noResultsMessage.textContent = 'Unable to load learning resources right now.';
        noResultsMessage.style.display = 'block';
      }
      if (resourcesGridHeader) {
        resourcesGridHeader.style.display = 'none';
      }
    });
  // setup realtime or polling
  if (useSupabase) {
    const chan = setupRealtimeFor(supabaseResourcesTable, () => loadResources().then((d) => renderResourceCards(Array.isArray(d) ? d : (d && d.resources) ? d.resources : [])));
    if (!chan) startPolling('resources', async () => renderResourceCards(await loadResources()));
  }
}

if (newsGrid) {
  loadNews()
    .then((data) => {
      const newsItems = Array.isArray(data) ? data : (data && data.news) ? data.news : [];
      if (Array.isArray(newsItems)) {
        renderNewsCards(newsItems);
      }
    })
    .catch((error) => {
      console.error(error);
      if (newsGrid) {
        newsGrid.innerHTML = '';
      }
      const newsMessage = document.querySelector('.no-results-message');
      if (newsMessage) {
        newsMessage.textContent = 'Unable to load news items right now.';
        newsMessage.style.display = 'block';
      }
    });
  if (useSupabase) {
    const chan = setupRealtimeFor(supabaseNewsTable, () => loadNews().then((d) => renderNewsCards(Array.isArray(d) ? d : (d && d.news) ? d.news : [])));
    if (!chan) startPolling('news', async () => renderNewsCards(await loadNews()));
  }
}

if (projectsGrid) {
  loadProjects()
    .then((data) => {
      const projects = Array.isArray(data) ? data : (data && data.projects) ? data.projects : [];
      if (Array.isArray(projects)) {
        renderProjectCards(projects);
      }
    })
    .catch((error) => {
      console.error(error);
      if (projectsGrid) {
        projectsGrid.innerHTML = '';
      }
      const projectMessage = document.querySelector('.no-results-message');
      if (projectMessage) {
        projectMessage.textContent = 'Unable to load projects right now.';
        projectMessage.style.display = 'block';
      }
    });
  if (useSupabase) {
    const chan = setupRealtimeFor(supabaseProjectsTable, () => loadProjects().then((d) => renderProjectCards(Array.isArray(d) ? d : (d && d.projects) ? d.projects : [])));
    if (!chan) startPolling('projects', async () => renderProjectCards(await loadProjects()));
  }
}

if (aboutStoryCards) {
  loadAbout()
    .then((data) => {
      const aboutSections = Array.isArray(data) ? data : (data && data.about) ? data.about : (Array.isArray(data) ? data : data);
      if (Array.isArray(aboutSections) && aboutSections.length) {
        renderAboutCards(aboutSections);
      }
    })
    .catch((error) => {
      console.error(error);
      if (aboutStoryCards) {
        aboutStoryCards.innerHTML = '<p class="no-results-message">Unable to load about content right now.</p>';
      }
    });
  if (useSupabase) {
    const chan = setupRealtimeFor(supabaseAboutTable, () => loadAbout().then((d) => renderAboutCards(Array.isArray(d) ? d : (d && d.about) ? d.about : d)));
    if (!chan) startPolling('about', async () => renderAboutCards(await loadAbout()));
  }
}

if (opportunitiesGrid) {
  loadOpportunitiesData()
    .then((data) => {
      const opportunities = useSupabase ? data : data;
      if (Array.isArray(opportunities)) {
        renderOpportunityCards(opportunities);
      }
    })
    .catch((error) => {
      console.error(error);
      if (opportunitiesGrid) {
        opportunitiesGrid.innerHTML = '';
      }
      const opportunityMessage = document.querySelector('.no-results-message');
      if (opportunityMessage) {
        opportunityMessage.textContent = 'Unable to load opportunities right now.';
        opportunityMessage.style.display = 'block';
      }
    });
}

updateResourceFilter(activeFilter, activeSearch);
