import { IPost, ISetPost } from '@spiderum/shared/util/typing';
import { PrimaryArticles } from '../primary-article/primary-article';

/* eslint-disable-next-line */
export interface ISecondaryArticlesProps extends IPost {
  handleSavePost?: (data: ISetPost) => void;
  handleUnSavePost?: (data: ISetPost) => void;
  handleVotePost?: (data: ISetPost) => void;
  handleUnVotePost?: (data: ISetPost) => void;
}

export function SecondaryArticles(props: ISecondaryArticlesProps) {
  return <PrimaryArticles isSubArticle {...props} />;
}

export default SecondaryArticles;
