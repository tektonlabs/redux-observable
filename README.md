# redux-observable

This application will serve as an example on how to use react, redux and react-router in combination with redux-observable. In order to do this, we will showcase a movies to-watch list application (very similar to a To Do List Application but consuming a public Movies API to populate the list). The requirements are the following:

  * Have a search bar to allow users to look for all the movies matching the given input.
  * Perform a search when the given input has at least 3 characters and after 300ms of the last key stroke.
  * Show the search results in a list.
  * Let the user add a search result to his "To Watch" list.
  * Don't include movies already added to the user's "To Watch" list in the search results.
  * Allow the user to set a "To Watch" item his list as "Watched".
  * Allow the user to set a "Watched" item in his list as "To Watch".
  * Allow the user to remove a single item from his list.
  * Allow the user to clean his "Watched" list.
  * Have a bar to filter shown items according to their state ("To Watch", "Watched", "All").
