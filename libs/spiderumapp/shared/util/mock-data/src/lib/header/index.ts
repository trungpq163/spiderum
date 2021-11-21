import { ROUTE } from '@spiderum/shared/util/route';

export interface ICategoryItem {
  name: string;
  slug: string;
  route: string;
}

export interface IAccountDropdownItem {
  name: string;
  route: string;
}

export const categoryItems: ICategoryItem[] = [
  {
    name: 'Quan điểm - Tranh luận',
    slug: 'option-debase',
    route: ROUTE.CATEGORY_OPINION_DEBATE,
  },
  {
    name: 'Truyện cảm hứng',
    slug: 'inspire',
    route: ROUTE.CATEGORY_INSPIRE,
  },
  {
    name: 'Khoa học - Công nghệ',
    slug: 'science-technology',
    route: ROUTE.CATEGORY_SCIENCE_TECHNOLOGY,
  },
  {
    name: 'science2vn',
    slug: 'science2vn',
    route: ROUTE.CATEGORY_SCIENCE2VN,
  },
  {
    name: 'Thể thao',
    slug: 'sports',
    route: ROUTE.CATEGORY_SPORTS,
  },
  {
    name: 'Game',
    slug: 'game',
    route: ROUTE.CATEGORY_GAME,
  },
  {
    name: 'Sự kiện Spiderum',
    slug: 'event',
    route: ROUTE.CATEGORY_EVENT,
  },
  {
    name: 'Otakulture',
    slug: 'otakulture',
    route: ROUTE.CATEGORY_OTAKULTURE,
  },
  {
    name: 'Sáng tác',
    slug: 'composed',
    route: ROUTE.CATEGORY_COMPOSED,
  },
  {
    name: 'Comics',
    slug: 'comics',
    route: ROUTE.CATEGORY_COMICS,
  },
  {
    name: 'Phim',
    slug: 'film',
    route: ROUTE.CATEGORY_FILM,
  },
  {
    name: 'Sách',
    slug: 'books',
    route: ROUTE.CATEGORY_BOOKS,
  },
  {
    name: 'Du lịch - Ẩm thực',
    slug: 'travel-food',
    route: ROUTE.CATEGORY_TRAVEL_FOOD,
  },
  {
    name: 'Kĩ năng',
    slug: 'skills',
    route: ROUTE.CATEGORY_SKILLS,
  },
  {
    name: 'Âm nhạc',
    slug: 'music',
    route: ROUTE.CATEGORY_MUSIC,
  },
  {
    name: 'English Zone',
    slug: 'english-zone',
    route: ROUTE.CATEGORY_ENGLISH_ZONE,
  },
  {
    name: 'Chuyện trò - Tâm sự',
    slug: 'chat-talk',
    route: ROUTE.CATEGORY_CHAT_TALK,
  },
];

export const accountDropdownItems: IAccountDropdownItem[] = [
  {
    name: 'Hồ sơ cá nhân',
    route: ROUTE.USER_PROFILE,
  },
  {
    name: 'Bài viết của bạn',
    route: ROUTE.USER_ARTICLES,
  },
  {
    name: 'Bình luận của bạn',
    route: ROUTE.USER_COMMENTS,
  },
  {
    name: 'Nháp của bạn',
    route: ROUTE.USER_DRAFTS,
  },
  {
    name: 'Tuỳ chỉnh tài khoản',
    route: ROUTE.USER_SETTINGS,
  },
];
