import {
  Container,
  Thumbnail,
  BottomContent,
  TopContent,
} from './primary-article.styles';
import { Avatar } from '@nextui-org/react';
import { BookmarkIcon } from '@heroicons/react/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/solid';

/* eslint-disable-next-line */
export interface PrimaryArticlesProps {}

export function PrimaryArticles(props: PrimaryArticlesProps) {
  return (
    <Container>
      <Thumbnail src="https://picsum.photos/500" />

      <TopContent.Wrapper>
        <div className="flex flex-row items-center justify-center top-heading">
          <TopContent.SubTitle>
            KHOA HỌC - CÔNG NGHỆ <span className="mx-1">|</span> 20 phút đọc
          </TopContent.SubTitle>
          {true && (
            <BookmarkSolidIcon
              // onClick={() => handleUnSavePostClick()}
              className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
              width="15"
            />
          )}

          {false && (
            <BookmarkIcon
              // onClick={() => handleSavePostClick()}
              className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
              width="15"
            />
          )}
        </div>

        <TopContent.Title>
          CON NGƯỜI ĐANG BỊ CHI PHỐI BỞI CHỦ NGHĨA “NHANH VÀ NGẮN HƠN NỮA”
        </TopContent.Title>

        <TopContent.Description>
          Hãy cẩn trọng trước những lựa chọn giải trí của bạn
        </TopContent.Description>
      </TopContent.Wrapper>

      <BottomContent.Wrapper>
        <Avatar text="sc" size={50} />
        <div>
          <BottomContent.Title>Đức Nhân</BottomContent.Title>
          <BottomContent.SubTitle>28 tháng 10</BottomContent.SubTitle>
        </div>
        <BottomContent.Actions>66</BottomContent.Actions>
        <BottomContent.Actions></BottomContent.Actions>
        <BottomContent.Actions></BottomContent.Actions>
      </BottomContent.Wrapper>
    </Container>
  );
}

export default PrimaryArticles;
