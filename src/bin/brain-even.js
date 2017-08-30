#!/usr/bin/env node

import { runGameFlow } from '..';
import brainEven from '../games/brain-even-game';

runGameFlow(brainEven, 'Answer "yes" if number even otherwise answer "no"');
