-- General House Keeping --
    [ ] - Commit code frequently
    [ ] - Use branches to help break down features
    [ ] - Comments on code

-- Database Setup --
    [ ] - Create a database name `saga_movies_weekend`
    [ ] - Run the queries from `database.sql` on the `saga_movies_weekend`

-- Setup --
    -- Feature List --
        [ ] - Take inventory of the existing code
        [ ] - List notes here ...
            -- App.js --
                [ ] - Home Page setup
                    [ ] - Setup Details Page
                        [ ] - Import Details Page
                    [ ] - Setup Movie Page
                        [ ] - Import Movie Page
                [ ] - Movie List component setup
            -- index.js --
                [ ] - Redux store setup along with Middleware
                [ ] - rootSaga setup
                    [ ] - Generator function for fetchAllMovies setup
            -- server.js --
                [ ] - movie.router.js setup
                [ ] - genre.router.js needs setup
                    [ ] - setup router.get to query database for genres
    -- Home/List Page --
        [x] - Header
        [x] - Nav bar?
        [ ] - When a movie poster is clicked, a user should be brought to the /details view for that movie
        [ ] - Setup a way to get to the Add Movie Page
    -- Details Page --
        [ ] - This should show all the details including ALL genres for the selected movie
            [ ] - Store this data in redux
            [ ] - GET request for a specific movie? req.params? :id?
        [ ] - The details page should a [Back to List] button
            [ ] - This should bring the user to the Home/List Page
            [ ] - Base mode does not require the movie details to load correctly after refresh of the browser
    -- Add Movie Page --
        [ ] - Setup form for Add Movie Page
            [ ] - An input field (for the movie title)
            [ ] - An input field (for the movie poster image URL)
            [ ] - A text area (for the movie description)
            [ ] - A dropdown (for the genres)
            [ ] - A [Cancel] button, which should bring the user to the Home/List Page
            [ ] - A [Save] button, which should save the inputs in the database and bring the user to the Home/List Page
                [ ] - Home/List page should render the new movie added

-- Base Mode Done --
    [ ] - Invest time in styling it up
        [ ] - Research cards for your movie posters on the list page
        [ ] - Research grids for your movie posters on the Movie List page

-- Development Stretch Goals --
    -- Refresh on Details Page --
        [ ] - Allow the app to maintain on refresh of our details page
    -- Edit Page --
        [ ] - Add to the detail page an [Edit] button that brings the user to the edit page
        [ ] - The Edit Page should ...
            [ ] - Input field (for changing the movie title), for the selected movie
            [ ] - Text area (for changing the movie description)
            [ ] - [Cancel] button, should bring the user to the Details Page
            [ ] - [Save] button, should update the title and description in the database and bring the user to the Details Page
    -- Other Ideas --
        [ ] - Display the current values in the input (title) and text area (description) on the Edit Page
        [ ] - Display all genres on Movie List Page. Research array_agg to make this possible
        [ ] - Allow the user to select many genres as they add
            [ ] - You'll have to change the INSERT statement for this
        [ ] - Move sagas and reducers out of you index.js and into separate files (ideally in src/redux/reducers and src/redux/sagas folders)
        [ ] - Allow the user to refresh the details or edit page.
            [ ] - The url for the details page -- /details/1 for movie with id of 1
            [ ] - Research react router params
        [ ] - Allow the user to add a genre to a movie
        [ ] - Allow the user to remove a genre from a movie
        [ ] - Only display the top 10 movies
            [ ] - Allow user to search for movie titles with a search bar on the home page
            [ ] - This can be done client side or server side (server side is a bigger stretch)
        [ ] - Create an Admin page
            [ ] - Add a link from the Home page to the Admin page.
            [ ] - The page should initially display a login form
                [ ] - Input for username (camera)
                [ ] - Input for password (action)
            [ ] - The page should display a form to add genres to the database
                [ ] - A list of all the genres with an [x] to remove them from the database
                [ ] - Side note -- this isn't actually secure, but it's fun and really good practice