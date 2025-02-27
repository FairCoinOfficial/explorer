'use client';

import { Flex, Icon, StackProps } from '@chakra-ui/react';
import { Info } from '@phosphor-icons/react';
import { useMemo } from 'react';

import { Text } from '../../../../ui/Text';
import { Tooltip } from '../../../../ui/Tooltip';
import { ExplorerErrorBoundary } from '../../ErrorBoundary';
import { StackingCycle } from '../StackingCycle';
import { StatSection } from '../StatSection';
import { useSuspenseCurrentStackingCycle } from './useCurrentStackingCycle';

function CurrentStackingCycleBase(props: StackProps) {
  const { currentCycleStackedSTX, blocksTilNextCycle, approximateDaysTilNextCycle } =
    useSuspenseCurrentStackingCycle();
  const currentCycleCaption = useMemo(() => {
    if (!blocksTilNextCycle) return null;
    return (
      <Flex alignItems={'center'}>
        <Text>Next cycle starts in</Text>
        &nbsp;
        <Tooltip
          content={`Next cycle starts in ${blocksTilNextCycle} block${
            blocksTilNextCycle !== 1 ? 's' : ''
          }. Calculation is based on ~10 minutes block time.`}
        >
          <Flex alignItems={'center'}>
            {approximateDaysTilNextCycle} day{approximateDaysTilNextCycle !== 1 ? 's' : ''}
            &nbsp;
            <Icon h={3} w={3}>
              <Info />
            </Icon>
          </Flex>
        </Tooltip>
      </Flex>
    );
  }, [approximateDaysTilNextCycle, blocksTilNextCycle]);
  return (
    <StackingCycle
      title="Current Stacking Cycle"
      stackedSTX={currentCycleStackedSTX}
      caption={currentCycleCaption}
      {...props}
    />
  );
}

export function CurrentStackingCycle(props: StackProps) {
  return (
    <ExplorerErrorBoundary
      renderContent={() => (
        <StatSection
          title={'Current Stacking Cycle'}
          bodyMainText={'-'}
          bodySecondaryText={<Text ml={1}>STX stacked</Text>}
          caption={'N/A'}
        />
      )}
    >
      <CurrentStackingCycleBase {...props} />
    </ExplorerErrorBoundary>
  );
}
