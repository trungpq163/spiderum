import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`w-3/5 mx-auto leading-tight`}
`;

export const Title = styled.h1`
  ${tw`mt-1 font-sans text-4xl font-semibold leading-none text-black`}
`;

export const Category = styled.h2`
  ${tw`mt-5 text-sm font-medium text-sub-black`}
`;

export const Description = styled.p`
  ${tw`my-1 font-normal text-13 text-sub-black`}
`;

const AccountInfo = {
  Container: styled.div``,
  Name: styled.h3`
    ${tw`mb-0.8 font-sans text-xs font-semibold leading-none text-black`}
  `,
  PostedDate: styled.h6`
    ${tw`font-sans font-normal leading-none text-13 text-sub-black`}
  `,
};

export const Top = {
  Container: styled.div`
    ${tw`flex flex-row items-center justify-start mt-2 gap-x-1.2 mb-5`}
  `,
  AccountInfo,
};

export const Content = styled.div`
  ${tw`my-2 font-serif leading-8 text-black text-19`}

  .image-tool__caption span {
    ${tw`text-sub-black text-13`}
  }

  .unsplash__image-credits {
    ${tw`flex flex-row gap-x-0.4 items-center justify-center -mt-3`}
  }

  a {
    ${tw`font-serif font-medium text-black underline`}
  }

  blockquote.cdx-quote,
  blockquote.cdx-pull-quote {
    ${tw`p-0 bg-white`}
  }

  blockquote.cdx-quote .cdx-quote__text,
  blockquote.cdx-pull-quote .cdx-pull-quote__text {
    ${tw`pl-2 italic text-black border-l-4`}
    border-color: #292929;
  }

  blockquote.cdx-pull-quote .cdx-pull-quote__caption {
    ${tw`italic font-bold text-right text-black`}
  }

  blockquote.cdx-quote b {
    ${tw`font-serif font-medium text-black`}
  }

  .image-tool__caption {
    ${tw`mt-1 text-xs font-medium leading-tight text-center text-sub-black`}
  }

  img.image-tool__image-picture {
    ${tw`mx-auto`}
  }

  .ce-header {
    ${tw`leading-tight`}
  }
`;
