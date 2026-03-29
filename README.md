<!-- #  Photo Gallery App

A responsive **Photo Gallery Web App** built using **React + Vite +
Tailwind CSS**. The application fetches photos from the Picsum API,
displays them in a responsive grid, allows searching by author name, and
lets users mark photos as favourites.

------------------------------------------------------------------------

##  Features

-   Fetch photos from a public API
-   Responsive photo grid layout
-   Search photos by author name
-   Mark/unmark photos as favourites
-   Favourite photos persist after page refresh using localStorage
-   Loading spinner while fetching data
-   Error handling if API fails
-   Clean and modular React architecture

------------------------------------------------------------------------

## 🖼️ Application Screenshot

![App Screenshot](./screenshot.png)

------------------------------------------------------------------------

##  Tech Stack

### Frontend

-   React (Vite)
-   Tailwind CSS

### React Hooks Used

-   useState
-   useReducer
-   useEffect
-   useCallback
-   useMemo

------------------------------------------------------------------------

##  API Used

Picsum Photos API

    https://picsum.photos/v2/list?limit=30

This API returns a list of images along with metadata like author name
and image URL.

------------------------------------------------------------------------

## 📂 Project Structure

    src
    │
    ├── components
    │   ├── gallery
    │   │   ├── PhotoCard.jsx
    │   │   ├── PhotoGrid.jsx
    │   │   └── SearchBar.jsx
    │   │
    │   ├── layout
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   │
    │   └── ui
    │       ├── Loader.jsx
    │       ├── ErrorMessage.jsx
    │       └── ImageSkeleton.jsx
    │
    ├── hooks
    │   └── useFetchPhotos.js
    │
    ├── reducers
    │   └── favouritesReducer.js
    │
    ├── pages
    │   └── GalleryPage.jsx
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css

------------------------------------------------------------------------

##  Installation

### 1. Clone the repository

``` bash
git clone https://github.com/your-username/photo-gallery.git
```

### 2. Navigate to the project directory

``` bash
cd photo-gallery
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

The application will run at:

    http://localhost:5173

------------------------------------------------------------------------

## 📌 Key Implementation Details

### Custom Hook

`useFetchPhotos`

This hook is responsible for:

-   Fetching photos from the API
-   Managing loading state
-   Handling API errors

The hook returns:

    photos
    loading
    error

------------------------------------------------------------------------

### useReducer for Favourites

The favourites state is managed using **useReducer** instead of
useState.

Reducer actions:

    TOGGLE_FAV

When a user clicks the heart icon:

-   The photo is added to favourites
-   Clicking again removes it

Favourite photos are saved in **localStorage**, so they persist even
after refreshing the page.

------------------------------------------------------------------------

### Performance Optimization

#### useCallback

Used for the search handler to prevent unnecessary re-renders when
passing the function to child components.

#### useMemo

Used to compute the filtered photo list efficiently.

Filtering runs only when:

-   photos change
-   search query changes

------------------------------------------------------------------------

## 👨‍💻 Author

Built by **Lalit Mehra** as part of a **Frontend React Internship
Assignment**.

------------------------------------------------------------------------

## 📄 License

This project is created for educational and assignment purposes. -->


#  Photo Gallery App

A modern and responsive **Photo Gallery Web Application** built using **React, Vite, and Tailwind CSS**.  
This app fetches high-quality images from the Picsum API, displays them in a responsive grid, and allows users to search and manage their favourite photos.

---

##  Features

-  Fetch photos from a public API (Picsum)
-  Fully responsive grid layout
-  Search photos by author name
-  Mark and unmark photos as favourites
-  Persist favourites using **localStorage**
-  Loading spinner for better UX
-  Error handling for API failures
-  Clean, modular, and scalable React architecture

---

##  Application Preview

![App Screenshot](./screenshot.png)

---

##  Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS

### React Hooks Used
- `useState`
- `useReducer`
- `useEffect`
- `useCallback`
- `useMemo`

---

##  API Used

**Picsum Photos API**  
https://picsum.photos/v2/list?limit=30  

Provides a collection of images with metadata such as author name and image URLs.

---

##  Project Structure

```
src
│
├── components  
│   ├── gallery  
│   │   ├── PhotoCard.jsx  
│   │   ├── PhotoGrid.jsx  
│   │   └── SearchBar.jsx  
│   │  
│   ├── layout  
│   │   ├── Navbar.jsx  
│   │   └── Footer.jsx  
│   │  
│   └── ui  
│       ├── Loader.jsx  
│       ├── ErrorMessage.jsx  
│       └── ImageSkeleton.jsx  
│  
├── hooks  
│   └── useFetchPhotos.js  
│  
├── reducers  
│   └── favouritesReducer.js  
│  
├── pages  
│   └── GalleryPage.jsx  
│  
├── App.jsx  
├── main.jsx  
└── index.css  
```

---

##  Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/photo-gallery.git
```

### 2. Navigate to project folder
```bash
cd photo-gallery
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```

App will run at:  
 http://localhost:5173

---

##  Key Implementation Details

###  Custom Hook: `useFetchPhotos`

Handles:
- API data fetching
- Loading state management
- Error handling

Returns:
```js
photos, loading, error
```

---

###  State Management with `useReducer`

Used for managing favourites efficiently.

**Action:**
- `TOGGLE_FAV`

✔ Adds photo to favourites  
✔ Removes photo on second click  
✔ Syncs with `localStorage` for persistence  

---

###  Performance Optimization

#### `useCallback`
Prevents unnecessary re-renders when passing functions to child components.

#### `useMemo`
Optimizes filtering logic by recalculating only when dependencies change:
- photos
- search query

---

##  Future Improvements

- Add category-based filtering  
- Dark mode support  
- Improve mobile UX further  
- Pagination or infinite scrolling  
- User authentication for saving favourites  

---

##  Author

Developed by **Lalit Mehra**  
 Aspiring **Full Stack Developer**

---

##  License

This project is built for **learning and internship assignment purposes**.