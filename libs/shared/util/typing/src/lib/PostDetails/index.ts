export interface IGetPostDetails {
  slug: string;
}

export interface IAuthorInfo {
  name: string;
  avatarURL: string;
  postCreatedDate: string;
}

export interface IPostDetails {
  category: string;
  title: string;
  description: string;
  authorInfo: IAuthorInfo;
  contentList: string[];
}
