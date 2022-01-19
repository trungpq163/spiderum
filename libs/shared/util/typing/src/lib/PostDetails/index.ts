/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from '../Common';
import { ITag } from '../Tag';
import { ICatId } from '../Category';
import { ICreatorId } from '../User';

export interface IGetPostDetails {
  slug: string;
}

export interface IBlock {
  _id?: ObjectId;
  status?: number;
  type?: string;
  data?: {
    text?: string;
    alignment?: string;
    file?: {
      url?: string;
    };
    link?: string;
    meta?: {
      title?: string;
      description?: string;
      image?: {
        url?: string;
      };
    };
    caption?: string;
    dockLeft?: boolean;
    stretched?: boolean;
    expanded?: boolean;
    dockRight?: boolean;
  };
  post_id?: ObjectId;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface IPost {
  _id?: ObjectId;
  type?: number;
  status?: number;
  is_editor_pick?: boolean;
  reading_time?: number;
  tags?: ITag[];
  child_comments?: ObjectId[];
  power_point?: number;
  point?: number;
  up_point?: number;
  down_point?: number;
  date_point?: number;
  hot_point?: number;
  controlversial_point?: number;
  star?: boolean;
  views_count?: number;
  comment_count?: number;
  is_edit?: number;
  public_post?: boolean;
  title?: string;
  cat_id?: ICatId;
  creator_id?: ICreatorId;
  thumbnail?: string;
  url_description?: string;
  content?: string;
  new_title?: string;
  description?: string;
  slug?: string;
  created_at?: string;
  updated_at?: string;
  __v?: number;
  og_image_url?: string;
  property?: {
    thumbnailWidth?: number;
    thumbnailHeight?: number;
  };
  picked_at?: string;
  body?: {
    blocks?: IBlock[];
  };
}

export interface IPostPageOptions {
  view_single_comment?: boolean;
  flag_comment_id?: any;
  view_comment_section?: boolean;
}

export interface IPostDetails {
  post?: IPost;
  postPageOptions?: IPostPageOptions;
}
