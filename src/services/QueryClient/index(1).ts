import { QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
            retry: false,
        },
    },
});

export default queryClient;
