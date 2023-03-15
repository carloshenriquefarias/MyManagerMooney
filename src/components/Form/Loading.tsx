import { Spinner } from "@chakra-ui/react";

export function Loading() {
    return (
      <div>
        <Spinner color="blue.500" />
        <p>Loading...</p>
      </div>
    );
}