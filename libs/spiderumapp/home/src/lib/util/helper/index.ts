/* eslint-disable @typescript-eslint/no-explicit-any */

export const EVEN_NUMBER_PAGINATION_START = 10;
export const EVEN_NUMBER_PAGINATION_END = 20;

export const ODD_NUMBER_START_PAGINATION = 0;
export const ODD_NUMBER_END_PAGINATION = 10;

export const handlePaginationData = (data: any, start: number, end: number) => {
  return data.slice(start, end);
};

export const handleStartPagination = (currentPage: number) => {
  if (currentPage % 2 === 0) {
    return EVEN_NUMBER_PAGINATION_START;
  }
  return ODD_NUMBER_START_PAGINATION;
};

export const handleEndPagination = (currentPage: number) => {
  if (currentPage % 2 === 0) {
    return EVEN_NUMBER_PAGINATION_END;
  }
  return ODD_NUMBER_END_PAGINATION;
};
