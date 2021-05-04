import { ResponsiveFunnel } from '@nivo/funnel';
import { ResponsiveStream } from '@nivo/stream'
import styled from 'styled-components';

// import { data } from './tempData';

const TableWrapper = styled.div `
    height: 100%;
`

export const DataTable = ({data} /* see data tab */ ) => {
    return (
        <TableWrapper>
        <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        shapeBlending={0.56}
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        labelColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
    </TableWrapper>
    );
};