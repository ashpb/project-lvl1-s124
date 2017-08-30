#!/usr/bin/env node

import { runGameFlow } from '..';
import qaGenerator, { challengeDescription } from '../games/brain-even-game';

runGameFlow(qaGenerator, challengeDescription);
