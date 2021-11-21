export const PUBLIC_ROUTE_CATEGORY = {
  CATEGORY: '/category',
  // Quan diem - tranh luan
  CATEGORY_OPINION_DEBATE: '/category/option-debase',
  // Truyen cam hung
  CATEGORY_INSPIRE: '/category/inspire',
  // Khoa hoc - cong nghe
  CATEGORY_SCIENCE_TECHNOLOGY: '/category/science-technology',
  // science2vn
  CATEGORY_SCIENCE2VN: '/category/science2vn',
  // The thao
  CATEGORY_SPORTS: '/category/sports',
  // Game
  CATEGORY_GAME: '/category/game',
  // spiderum event
  CATEGORY_EVENT: '/category/event',
  // otakulture
  CATEGORY_OTAKULTURE: '/category/otakulture',
  // Sang tac
  CATEGORY_COMPOSED: '/category/composed',
  // comics
  CATEGORY_COMICS: '/category/comics',
  // film
  CATEGORY_FILM: '/category/film',
  // books
  CATEGORY_BOOKS: '/category/books',
  // travel - food
  CATEGORY_TRAVEL_FOOD: '/category/travel-food',
  // skills
  CATEGORY_SKILLS: '/category/skills',
  // music
  CATEGORY_MUSIC: '/category/music',
  // english zone
  CATEGORY_ENGLISH_ZONE: '/category/english-zone',
  // chat - talk
  CATEGORY_CHAT_TALK: '/category/chat-talk',
};

export const PUBLIC_ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  LOGOUT: '/logout',
  FORGOT_PASSWORD: '/forgot-password',
  ...PUBLIC_ROUTE_CATEGORY,
  USER_PROFILE: '/user/:slug',
  USER_ARTICLES: '/user/:slug/articles',
  USER_COMMENTS: '/user/:slug/comments',
  USER_DRAFTS: '/user/:slug/drafts',
  USER_SETTINGS: '/user/settings',
};
