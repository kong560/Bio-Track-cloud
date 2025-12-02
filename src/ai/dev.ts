import {config} from 'dotenv';
config();

import {start} from 'genkit';
import {ai} from './genkit';
import './ai-species-recognition';

// This is a dummy call to 'ai' to ensure it's not tree-shaken.
typeof ai;

start();
