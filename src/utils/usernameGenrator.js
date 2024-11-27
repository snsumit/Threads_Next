// Common English words for username generation
const words = [
    "Swift", "Blue", "Bright", "Crystal", "Dark", "Echo", "Fire", "Gold", 
    "Happy", "Ice", "Jazz", "Kind", "Light", "Moon", "Night", "Ocean", 
    "Pearl", "Quick", "Rain", "Star", "Time", "Ultra", "Void", "Wave", 
    "Zen","aether","alpha","beta","blaze","crystal","delta","dynamo","eclipse",
    "ember","falcon","frost","galaxy","gamma","glimmer","haven","horizon","ignite",
    "inferno","jade","jungle","karma", "knight","lunar","lyric","mirage","mystic","nebula",
    "nimbus","onyx","oracle","phantom","prism","quantum","quill","radiant", "raven","serene",
    "spectra","tidal","twilight","ultra","utopia","vista","vortex","whisper","wildfire","xenon",
    "yonder","zen","zenith","zephyr"
   
  ];
  
  export function generateUsername() {
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    return `${word1}${word2}`;
  }
  
  
  export async function isUsernameTaken(username) {
    // Implement database check here for future phase
    return false;
  }
  
  export async function getUniqueUsername() {
    let username;
    let attempts = 0;
    const maxAttempts = 100;
  
    do {
      username = generateUsername();
      const taken = await isUsernameTaken(username);
      if (!taken) return username;
      attempts++;
    } while (attempts < maxAttempts);
  
    throw new Error('Unable to generate unique username');
  }