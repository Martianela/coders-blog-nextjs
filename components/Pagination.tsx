import React from "react";
import { TDirection } from "../types";
import QueryString, * as qs from "qs";
import { useRouter } from "next/router";
interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}
const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {
  const router = useRouter();
  const isNextDisabled = (page: number): boolean => {
    return page >= pageCount;
  };
  const isPrevDisabled = (page: number): boolean => {
    return page <= 1;
  };
  const handlePagination = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled(page)) {
      return;
    }
    if (direction === -1 && isPrevDisabled(page)) {
      return;
    }
    const queryString = qs.stringify({
      // ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };
  return (
    <div className="flex gap-3 justify-center mt-24">
      <button
        onClick={() => handlePagination(-1)}
        className={`${"bg-primary px-4 py-2 text-white rounded-md "}${
          isPrevDisabled(page) ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePagination(+1)}
        className={`${"bg-primary px-4 py-2 text-white rounded-md "}${
          isNextDisabled(page) ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
