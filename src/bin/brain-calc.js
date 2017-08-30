#!/usr/bin/env node

import { runGameFlow } from '..';
import qaGenerator, { challengeDescription } from '../games/brain-calc-game';

runGameFlow(qaGenerator, challengeDescription);
