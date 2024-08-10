import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  achievements: [
    { metric: "years Coding Exp.", value: 9 },
    { metric: "GitHub repos", value: 0 },
    { metric: "Commits this week", value: 0 },
    { metric: "LeetCode Contest Rating", value: 0 },
  ],
};

export const fetchContestRating = createAsyncThunk(
  'achievements/fetchContestRating',
  async () => {
    try {
      const response = await fetch("https://alfa-leetcode-api.onrender.com/hankwei0215/contest");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.contestRating;
    } catch (error) {
      console.error('Error fetching contest rating:', error);
      return null; // Return null or any default value in case of error
    }
  }
);

export const fetchGithubRepoNum = createAsyncThunk(
  'achievements/fetchGithubRepoNum',
  async () => {
    try {
      const response = await fetch("https://api.github.com/users/wei4r/repos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.length;
    } catch (error) {
      console.error('Error fetching GitHub repo number:', error);
      return 0; // Return 0 or any default value in case of error
    }
  }
);


export const fetchCommitsThisWeek = createAsyncThunk(
  'achievements/fetchCommitsThisWeek',
  async () => {
    try {
      // get all repos
      const reposResponse = await fetch("https://api.github.com/users/wei4r/repos");
      if (!reposResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const repos = await reposResponse.json();

      // cal date
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const since = oneWeekAgo.toISOString();

      // get commits nubmer of each repo
      const commitsPromises = repos.map(async (repo) => {
        const commitsUrl = `https://api.github.com/repos/wei4r/${repo.name}/commits?since=${since}&per_page=1`;
        const response = await fetch(commitsUrl, { method: 'HEAD' });
        const link = response.headers.get('Link');
        if (link) {
          const match = link.match(/page=(\d+)>; rel="last"/);
          return match ? parseInt(match[1]) : 0;
        }
        return 0;
      });

      // wait and sum
      const commitsResults = await Promise.all(commitsPromises);
      const totalCommits = commitsResults.reduce((sum, count) => sum + count, 0);

      return totalCommits;
    } catch (error) {
      console.error('Error fetching commits this week:', error);
      return 0; // return 0 or any default value in case of error
    }
  }
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContestRating.fulfilled, (state, action) => {
      const index = state.achievements.findIndex(
        (achievement) => achievement.metric === "LeetCode Contest Rating"
      );
      if (index !== -1) {
        state.achievements[index].value = action.payload;
      }
    });
    builder.addCase(fetchGithubRepoNum.fulfilled, (state, action) => {
      const index = state.achievements.findIndex(
        (achievement) => achievement.metric === "GitHub repos"
      );
      if (index !== -1) {
        state.achievements[index].value = action.payload;
      }
    });
    // fetch commits this week
    builder.addCase(fetchCommitsThisWeek.fulfilled, (state, action) => {
      const index = state.achievements.findIndex(
        (achievement) => achievement.metric === "Commits this week"
      );
      if (index !== -1) {
        state.achievements[index].value = action.payload;
      }
    });
  },
});

export default achievementsSlice.reducer;
