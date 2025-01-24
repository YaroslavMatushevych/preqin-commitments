import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider as QueryClientContext } from 'react-query';

export const QueryClientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientContext client={queryClient}>
            {children}
        </QueryClientContext>
    );
};
