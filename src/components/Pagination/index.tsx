import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem';

interface PaginationProps{
    totalCountofRegisters: number;
    registerPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number){
    return [...new Array(to - from)]
    .map((_,index) =>{
        return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
    totalCountofRegisters,
    registerPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {

    const lastpage = Math.floor(totalCountofRegisters / registerPerPage);

    const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPage = currentPage < lastpage
    ? generatePagesArray(currentPage, Math.min( currentPage + siblingsCount, lastpage))
    : []

    return (
        // O STACK E VERTICAL POR PADRAO
        <Stack direction={["column", "row"]} spacing="6" mt="8" justify="space-between" align="center">
            
            <Box>
                <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">

                {/* Se a pagina atual e maior que 1 + siblingsCount coloque a primeira pagina */}
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1} onPageChange={onPageChange} />
                        {currentPage > (2 + siblingsCount) && <Text>...</Text>}
                    </>
                    
                )}

                {previousPage.length > 0 && previousPage.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent/>

                {nextPage.length > 0 && nextPage.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                {(currentPage + siblingsCount) < lastpage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastpage && <Text>...</Text>}
                        <PaginationItem onPageChange={onPageChange} number={lastpage} />                    
                    </>                    
                )}         
            </Stack>
            
        </Stack>
    );
}
