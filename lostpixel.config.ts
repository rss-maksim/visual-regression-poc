import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
    pageShots: {
        pages: [ { path: '/', name: 'landing' } ],
        baseUrl: 'http://172.17.0.1:3000',
    },
    customShots: {
        currentShotsPath: './screenshots',
    },
    lostPixelProjectId: 'cmai6ix5n36lpvgd9f78sszg3',
    apiKey: process.env.LOST_PIXEL_API_KEY,
};