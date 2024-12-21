export const YOUTUBE_API_KEY = "AIzaSyDW8d0mNhNUxUe9a-jaYsCS2bB51xkwyK4";

export const YOUTUBE_VIDEOS_LIST =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_COMMENTS =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
  YOUTUBE_API_KEY +
  "&textFormat=plainText&part=snippet&videoId=";

export const KEYWORD_YOUTUBE_VIDEOS =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";
