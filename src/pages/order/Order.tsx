import { ReactElement } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import OrderTable from 'components/sections/order/OrderTable';

const Orders = (): ReactElement => {

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
                    Orders
                </Typography>
                <Button
                    variant='outlined'
                    size='small'
                >
                    Add Order
                </Button>
            </Stack>
            <Box width={1} flexGrow={1} minHeight={325}>
                <OrderTable />
            </Box>
        </Paper>
    );
};

export default Orders;
