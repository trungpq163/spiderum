import * as React from 'react';

const IMAGE = 'image';
const PARAGRAPH = 'paragraph';
const BIGGER_HEADER = 'biggerHeader';
const PULL_QUOTE = 'pullquote';

export interface IRenderBlock {
  Image: React.Component;
}

export function renderBlock(): string {
  return 'spiderumapp-shared-util-render-block';
}
