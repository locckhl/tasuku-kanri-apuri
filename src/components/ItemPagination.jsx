import React from "react";
import { Pagination } from "react-bootstrap";

export default function ItemPagination({
  currentPage,
  setCurrentPage,
  itemLength,
  itemPerPage,
}) {

  const maxPage = Math.ceil(itemLength / itemPerPage)
  const handlePrev = () => {
    currentPage - 1 <= 0 ? setCurrentPage(1) : setCurrentPage(currentPage - 1)
  };
  const handleNext = () => {
    currentPage + 1 > maxPage ? setCurrentPage(1) : setCurrentPage(currentPage + 1)

  };
  return (
    <div>
      <Pagination className="justify-content-center">
        {/* <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last /> */}
        <Pagination.First
          onClick={() => {
            setCurrentPage(1);
          }}
        />
        <Pagination.Prev onClick={handlePrev} />
        {[...Array(maxPage)].map((x, i) => (
          <Pagination.Item
            className={i + 1 === currentPage ? "active" : ""}
            onClick={() => {
              setCurrentPage(i + 1);
            }}
          >
            {i + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next onClick={handleNext} />
        <Pagination.Last
          onClick={() => {
            setCurrentPage(maxPage);
          }}
        />
      </Pagination>
    </div>
  );
}
