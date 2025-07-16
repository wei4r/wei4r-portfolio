import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Achievement {
  metric: string;
  value: number;
}

interface AchievementsState {
  achievements: Achievement[];
  loading: boolean;
  error: string | null;
}

const initialState: AchievementsState = {
  achievements: [
    { metric: "years Coding Exp.", value: 12 },
    { metric: "GitHub repos", value: 0 },
    { metric: "Commits this week", value: 0 },
    { metric: "LeetCode Contest Rating", value: 0 },
  ],
  loading: false,
  error: null,
};

interface LeetCodeContestResponse {
  contestRating: number;
}

interface GitHubRepo {
  name: string;
  [key: string]: any;
}

export const fetchContestRating = createAsyncThunk<number | null, void>(
  'achievements/fetchContestRating',
  async () => {
    try {
      const response = await fetch("https://alfa-leetcode-api.onrender.com/hankwei0215/contest");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: LeetCodeContestResponse = await response.json();
      return data.contestRating;
    } catch (error) {
      console.error('Error fetching contest rating:', error);
      return null;
    }
  }
);

export const fetchGithubRepoNum = createAsyncThunk<number, void>(
  'achievements/fetchGithubRepoNum',
  async () => {
    try {
      const response = await fetch("https://api.github.com/users/wei4r/repos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: GitHubRepo[] = await response.json();
      return data.length;
    } catch (error) {
      console.error('Error fetching GitHub repo number:', error);
      return 0;
    }
  }
);

export const fetchCommitsThisWeek = createAsyncThunk<number, void>(
  'achievements/fetchCommitsThisWeek',
  async () => {
    try {
      // get all repos
      const reposResponse = await fetch("https://api.github.com/users/wei4r/repos", {
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
      });
      if (!reposResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const repos: GitHubRepo[] = await reposResponse.json();

      // cal date
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const since = oneWeekAgo.toISOString();

      // get commits nubmer of each repo
      const commitsPromises = repos.map(async (repo): Promise<number> => {
        const commitsUrl = `https://api.github.com/repos/wei4r/${repo.name}/commits?since=${since}&per_page=1`;
        const response = await fetch(commitsUrl, { 
          method: 'HEAD', 
          headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
          } 
        });
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
      return 0;
    }
  }
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContestRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContestRating.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.achievements.findIndex(
          (achievement) => achievement.metric === "LeetCode Contest Rating"
        );
        if (index !== -1) {
          state.achievements[index].value = action.payload || 0;
        }
      })
      .addCase(fetchContestRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch contest rating';
      })
      .addCase(fetchGithubRepoNum.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGithubRepoNum.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.achievements.findIndex(
          (achievement) => achievement.metric === "GitHub repos"
        );
        if (index !== -1) {
          state.achievements[index].value = action.payload;
        }
      })
      .addCase(fetchGithubRepoNum.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch GitHub repos';
      })
      .addCase(fetchCommitsThisWeek.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommitsThisWeek.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.achievements.findIndex(
          (achievement) => achievement.metric === "Commits this week"
        );
        if (index !== -1) {
          state.achievements[index].value = action.payload;
        }
      })
      .addCase(fetchCommitsThisWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch commits this week';
      });
  },
});

export const { setLoading, setError } = achievementsSlice.actions;
export default achievementsSlice.reducer;
export type { Achievement, AchievementsState };