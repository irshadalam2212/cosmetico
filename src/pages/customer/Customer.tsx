import { useState, ReactElement } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import CustomerTable from 'components/sections/dashboard/customers/CustomerTable';

const Customer = (): ReactElement => {
    const [search, setSearch] = useState<string>('');

    return (
        <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={5}
                flexWrap="wrap"
                gap={3}
            >
                <Typography variant="h4" color="common.white">
                    Customers
                </Typography>
                <Button
                    variant='outlined'
                    size='small'
                >
                    Add Customer
                </Button>
            </Stack>
            <Box width={1} flexGrow={1} minHeight={325}>
                <CustomerTable searchText={search} />
            </Box>
        </Paper>
    );
};

export default Customer;
