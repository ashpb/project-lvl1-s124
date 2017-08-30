#!/usr/bin/env node

import { runGameFlow } from '..';
import qaGenerator, { challengeDescription } from '../games/brain-gcd-game';

runGameFlow(qaGenerator, challengeDescription);
