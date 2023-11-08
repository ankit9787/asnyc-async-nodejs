### About

This project has 3 JS files for testing http module with help of 
- callbacks
- async-await
- promises

## Files explained
- httpindex.js file is using basic http module to fetch API and as developer can see calling second API after first API is how much cubersome in sense of writing code, even code is messed up
- async-await is cleaner way of achiveing same, have used fetch module to call API, and just used async at function level and await for each call, this way second will only be called when first is done, used to achived linear calling of methods
- promises - promise is also great way of calling, but then also every promise needs to be resolve so code wise its cleaner than callbacks but still little messy in comparison to async-await