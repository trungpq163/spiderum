export const PUBLIC_ROUTE_CATEGORY = {
  CATEGORY: '/danh-muc',
  // Quan diem - tranh luan
  CATEGORY_OPINION_DEBATE: '/danh-muc/quan-diem-tranh-luan',
  // Truyen cam hung
  CATEGORY_INSPIRE: '/danh-muc/truyen-cam-hung',
  // Khoa hoc - cong nghe
  CATEGORY_SCIENCE_TECHNOLOGY: '/danh-muc/khoa-hoc-cong-nghe',
  // science2vn
  CATEGORY_SCIENCE2VN: '/danh-muc/science2vn',
  // The thao
  CATEGORY_SPORTS: '/danh-muc/the-thao',
  // Game
  CATEGORY_GAME: '/danh-muc/game',
  // spiderum event
  CATEGORY_EVENT: '/danh-muc/event',
  // otakulture
  CATEGORY_OTAKULTURE: '/danh-muc/otakulture',
  // Sang tac
  CATEGORY_COMPOSED: '/danh-muc/sang-tac',
  // comics
  CATEGORY_COMICS: '/danh-muc/comics',
  // film
  CATEGORY_FILM: '/danh-muc/film',
  // books
  CATEGORY_BOOKS: '/danh-muc/sach',
  // travel - food
  CATEGORY_TRAVEL_FOOD: '/danh-muc/du-lich-am-thuc',
  // skills
  CATEGORY_SKILLS: '/danh-muc/ky-nang',
  // music
  CATEGORY_MUSIC: '/danh-muc/am-nhac',
  // english zone
  CATEGORY_ENGLISH_ZONE: '/danh-muc/english-zone',
  // chat - talk
  CATEGORY_CHAT_TALK: '/danh-muc/chuyen-tro-tam-su',
};

export const PUBLIC_ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  LOGOUT: '/logout',
  FORGOT_PASSWORD: '/forgot-password',
  ...PUBLIC_ROUTE_CATEGORY,
  POST_DETAILS: '/bai-dang/:slug',
  USER_PROFILE: '/user/:slug',
  USER_ARTICLES: '/user/:slug/articles',
  USER_COMMENTS: '/user/:slug/comments',
  USER_DRAFTS: '/user/:slug/drafts',
  USER_SETTINGS: '/user/settings',
};
