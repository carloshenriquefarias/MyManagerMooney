import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function handlePageChange(page: number) {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  function renderPageNumbers() {
    const pageNumbers = [];
    const maxPageNumbersToShow = 10;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
      let startPageNumber = currentPage - halfMaxPageNumbersToShow;
      let endPageNumber = currentPage + halfMaxPageNumbersToShow;

      if (startPageNumber <= 0) {
        startPageNumber = 1;
        endPageNumber = maxPageNumbersToShow;

      } else if (endPageNumber > totalPages) {
        endPageNumber = totalPages;
        startPageNumber = totalPages - maxPageNumbersToShow + 1;
      }

      for (let i = startPageNumber; i <= endPageNumber; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber) => (
      <Button
        key={pageNumber}
        size="sm"
        _hover={{ backgroundColor: "gray.300" }} 
        // bg="red"
        mx={2}
        variant={pageNumber === currentPage ? 'solid' : 'outline'}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </Button>
    ));
  };

  return (
    <Flex justify="center" mt={4}>
      <Box>
        <Button
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          Anterior
        </Button>

        {renderPageNumbers()}

        <Button
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          Próxima
        </Button>
      </Box>
    </Flex>
  );
};

export default Pagination;