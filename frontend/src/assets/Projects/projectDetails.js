import instagram_signup from './Instagram/signup.png'
import instagram_login from './Instagram/login.png'
import instagram_profile from './Instagram/profile.png'
import instagram_edit from './Instagram/edit.png'
import instagram_post from './Instagram/createpost.png'
import instagram_home from './Instagram/home.png'
import instagram_serach from './Instagram/search.png'

import pinterest_signup from './Pinterest/Sign-Up.png'
import pinterest_login from './Pinterest/Log-In.png'
import pinterest_profile from './Pinterest/Profile.png'
import pinterest_edit from './Pinterest/Edit.png'
import pinterest_updatedprofileImage from './Pinterest/WhatsApp Image 2024-12-09 at 11.22.28 PM.jpeg'
import pinterest_createpost from './Pinterest/Create Post.png'
import pinterest_profile_update from './Pinterest/Profile (Updated).png'
import pinterest_feed from './Pinterest/Feed.png'

import virtual_signup from './Virtual Lab/Sign Up.jpeg'
import virtual_login from './Virtual Lab/Login.jpeg'
import virtual_home from './Virtual Lab/Home.jpeg'
import virtual_semester from './Virtual Lab/Semester.jpeg'
import virtual_subjects from './Virtual Lab/Subjects.jpeg'
import virtual_practical_number from './Virtual Lab/Practical Number.jpeg'
import virtual_practical_details from './Virtual Lab/Practical Details.jpeg'

import music_signup from './Music Player/Sign Up Page.png'
import music_login from './Music Player/Login Page.png'
import music_home_all from './Music Player/Home Page.png'
import music_home_music from './Music Player/Home ( Music) Page.png'
import music_home_album from './Music Player/Home (Album) Page.png'
import music_userprofile from './Music Player/User Profile Page.png'
import music_editpopup from './Music Player/Edit Popup Page.png'
import music_add_album from './Music Player/Create Album Page.png'
import music_add_song from './Music Player/Add Song Page.png'
import music_add_existing_song from './Music Player/Add Existing Song Page.png'
import music_my_album from './Music Player/My Album Page.png'
import music_my_song from './Music Player/My Song Page.png'
import music_album from './Music Player/Album Page.png'
import music_create_playlist from './Music Player/Create Playlist Page.png'
import music_add_song_to_playlist from './Music Player/Adding Song to Playlsit Page.png'
import music_show_playlist from './Music Player/My Playlist Page.png'
import music_my_album_page from './Music Player/My Album Page.png'
import music_search from './Music Player/Search Page.png'
import music_song_detail from './Music Player/Song Information Page.png'

export const instagramImg = [
        { id: 1, image: instagram_signup, Name: "Signup" },
        { id: 2, image: instagram_login, Name: "Login" },
        { id: 3, image: instagram_profile, Name: "Profile" },
        { id: 4, image: instagram_edit, Name: "Edit" },
        { id: 5, image: instagram_post, Name: "Post" },
        { id: 6, image: instagram_home, Name: "Home" },
        { id: 7, image: instagram_serach, Name: "Search" }
    ];

export const pinterestImg = [
    { id: 1, image:pinterest_signup, Name: "Signup" },
    { id: 2, image: pinterest_login, Name: "Login" },
    { id: 3, image: pinterest_profile, Name: "Profile" },
    { id: 4, image: pinterest_edit, Name: "Edit" },
    { id: 5, image: pinterest_updatedprofileImage, Name: "Updated Profile After Uploading a Profle Image" },
    { id: 6, image: pinterest_createpost, Name: "Create Post" },
    { id: 7, image: pinterest_profile_update, Name: "Profile After Creating Post" },
    { id: 8, image: pinterest_feed, Name: "Feed , Where all users Post will be visible." }
]

export const virtualImg = [
    { id: 1, image:virtual_signup, Name: "Signup" },
    { id: 2, image: virtual_login, Name: "Login" },
    { id: 3, image: virtual_home, Name: "Home" },
    { id: 4, image: virtual_semester, Name: "Semester" },
    { id: 5, image: virtual_subjects, Name: "Subjects (Subjects of selected semester)." },
    { id: 6, image: virtual_practical_number, Name: "Practical Number" },
    { id: 7, image: virtual_practical_details, Name: "Practical Detail (Practical Detail of selected Practical Number)" },
]

export const musicImg = [
    { id: 1, image:music_signup, Name: "Signup Page" },
    { id: 2, image: music_login, Name: "Login Page" },
    { id: 3, image: music_home_all, Name: "Home (All) Page" },
    { id: 4, image: music_home_music, Name: "Home (Music) Page" },
    { id: 5, image: music_home_album, Name: "Home (Album) Page" },
    { id: 6, image: music_album, Name: "Album Page" },
    { id: 7, image: music_create_playlist, Name: "Create Playlist Page" },
    { id: 8, image: music_search, Name: "Search Page" },
    { id: 9, image: music_add_song_to_playlist, Name: "Add Song to Playlist" },
    { id: 10, image: music_editpopup, Name: "Edit Profile Page" },
    { id: 11, image: music_userprofile, Name: "User Profile Page" },
    { id: 12, image: music_add_album, Name: "Create Album Page" },
    { id: 13, image: music_add_song, Name: "Add Song Page" },
    { id: 14, image: music_add_existing_song, Name: "Add Existing Song To Your Album Page" },
    { id: 15, image: music_my_album, Name: "My Album Page" },
    { id: 16, image: music_my_song, Name: "My Song Page" },
    { id: 17, image: music_show_playlist, Name: "Show Playlist Page" },
    { id: 18, image: music_my_album_page, Name: "My Album Page" },
    { id: 19, image: music_song_detail, Name: "Song Information Page" },
    
]

export const projectDetails = [
        {
            id: 1,
            title: "Pinterest Clone",
            domain: "Web Development",
            images: [pinterestImg[0].image, pinterestImg[1].image, pinterestImg[2].image, pinterestImg[3].image, pinterestImg[4].image, pinterestImg[5].image, pinterestImg[6].image, pinterestImg[7].image],
            imageName: [pinterestImg[0].Name, pinterestImg[1].Name, pinterestImg[2].Name, pinterestImg[3].Name, pinterestImg[4].Name, pinterestImg[5].Name, pinterestImg[6].Name, pinterestImg[7].Name],
            overview: "The Pinterest Clone is a web application replicating Pinterest's core features, allowing users to explore, upload, and save visual content. It is built with modern web development technologies for a seamless user experience.",
            features: [
                "User Authentication: Secure account creation and login with session or JWT-based authentication.",
                "Profile Management: Users can update their profiles and view/manage their uploads and saved pins.",
                "Pin Management: Upload images (pins) with titles, descriptions, and links, and organize them into boards.",
                "Search and Explore: Search pins by keywords, tags, or categories, and explore trending or recommended pins.",
                "Interactive Features: Like, comment on, and save pins to private or public boards.",
                "Responsive Design: Tailwind CSS ensures a mobile-friendly and visually appealing UI."
            ],
            technical_stack: [
                "Backend: Node.js with Express.js for API handling and server-side functionality.",
                "Frontend: EJS for dynamic templates and Tailwind CSS for styling.",
                "Database: MongoDB with Mongoose.js for scalable and flexible data storage.",
                "File Storage: Cloud storage (e.g., AWS S3) or local file system for image management.",
                "Deployment: Hosted on platforms like Heroku, Vercel, or AWS for accessibility."
            ],
            challenges_solutions: [
                "Efficient Image Storage: Images are compressed and served via a CDN for optimized loading times.",
                "Real-Time Features: AJAX or WebSocket enables interactions like saving pins and liking content.",
                "Scalability: Modular architecture allows for the easy addition of new features in the future."
            ],
            conclusion: "The Pinterest Clone demonstrates modern web development principles with features like authentication, image management, and a responsive design. It highlights full-stack development skills and provides a user-centric experience."
        },
        {
            id: 2,
            title: "Virtual Lab",
            domain: "App Development",
            images: [virtualImg[0].image, virtualImg[1].image, virtualImg[2].image, virtualImg[3].image, virtualImg[4].image, virtualImg[5].image, virtualImg[6].image],
            imageName: [virtualImg[0].Name, virtualImg[1].Name, virtualImg[2].Name, virtualImg[3].Name, virtualImg[4].Name, virtualImg[5].Name, virtualImg[6].Name],
            overview: "The Virtual Lab is an Android app designed to simulate practical lab exercises for computer engineering students, providing a hands-on learning experience with interactive features.",
            features: [
                "User Registration and Login",
                "Semester and Subject Selection",
                "Interactive Practical Buttons for Lab Exercises",
                "PDF Viewing of Practical Details",
                "SQLite Database for Storing User Data and Practical Information"
            ],
            technical_stack: [
                "Frontend: Android Studio with Java/Kotlin for Android development.",
                "Backend: SQLite for local database management.",
                "User Authentication: Secure login and registration functionality.",
                "Design: Tailored UI for ease of use in educational settings."
            ],
            challenges_solutions: [
                "Database Management: Using SQLite for storing user data and practical details.",
                "User Experience: Designing an intuitive interface for students and instructors."
            ],
            conclusion: "The Virtual Lab app provides a practical and interactive learning experience for computer engineering students, simulating lab exercises in a user-friendly environment."
        },
        {
            id: 3,
            title: "Music Player",
            domain: "Web Development",
            
            images: [musicImg[0].image, musicImg[1].image, musicImg[2].image, musicImg[3].image, musicImg[4].image, musicImg[5].image, musicImg[6].image,musicImg[7].image, musicImg[8].image,musicImg[9].image,musicImg[10].image,musicImg[11].image,musicImg[12].image,musicImg[13].image,musicImg[14].image,musicImg[15].image,musicImg[16].image,musicImg[17].image,musicImg[18].image],
            
            imageName: [musicImg[0].Name, musicImg[1].Name, musicImg[2].Name, musicImg[3].Name, musicImg[4].Name, musicImg[5].Name, musicImg[6].Name,musicImg[7].Name,musicImg[8].Name,musicImg[9].Name,musicImg[10].Name,musicImg[11].Name,musicImg[12].Name,musicImg[13].Name,musicImg[14].Name,musicImg[15].Name,musicImg[16].Name,musicImg[17].Name,musicImg[18].Name],

            overview: "The Music Player is a full-featured web application that enables users to explore, upload, and manage their own music collections. With interactive features like album and playlist creation, volume control, and seamless playback, it provides a dynamic and user-friendly experience.",
            features: [
                "User Authentication: Secure account management with encrypted authentication.",
                "Profile Management: Users can update their name, username, email, and profile image.",
                "Song Management: Users can upload their own songs and search for tracks.",
                "Album Creation: Users can create albums that are visible to all other users.",
                "Playlist Management: Users can create personal playlists (visible only to them) and add songs to them.",
                "Music Playback: Play, pause, next, and previous song controls, seek through any part of a song, and adjustable volume control.",
                "Responsive Design: Fully optimized for mobile and desktop using Tailwind CSS."
            ],
            technical_stack: [
                "Backend: Node.js with Express.js for handling user data, authentication, and song storage.",
                "Frontend: React.js with Tailwind CSS for a smooth and responsive UI.",
                "Database: MongoDB with Mongoose for storing user data, songs, playlists, and albums.",
                "Media Handling: Efficient audio streaming and buffering for seamless playback.",
                "Security: Encrypted authentication to protect user data.",
                "Deployment: Hosted on platforms like Vercel, Heroku, or AWS for global accessibility."
            ],
            challenges_solutions: [
                "Optimized Audio Streaming: Implemented buffering for smooth playback.",
                "User Privacy: Playlists are private to their creators, while albums remain public.",
                "State Management: React hooks and Context API ensure seamless UI updates.",
                "Scalability: Built with a modular approach for future features like lyrics display or collaborative playlists."
            ],
            conclusion: "The Music Player project combines modern web technologies with a user-centric design, allowing users to manage and enjoy their own music seamlessly. Its intuitive interface, real-time features, and secure authentication make it a powerful full-stack music streaming application."
        },        
        {
            id: 4,
            title: "Instagram Clone",
            domain: "Web Development",
            images: [instagramImg[0].image, instagramImg[1].image, instagramImg[2].image, instagramImg[3].image, instagramImg[4].image, instagramImg[5].image, instagramImg[6].image],
            imageName: [instagramImg[0].Name, instagramImg[1].Name, instagramImg[2].Name, instagramImg[3].Name, instagramImg[4].Name, instagramImg[5].Name, instagramImg[6].Name],
            overview: "The Instagram Clone is a web-based social media platform that mimics the core features of Instagram, such as account creation, posting images, following users, and interacting with posts.",
            features: [
                "User Authentication: Secure account creation, login, and session management.",
                "Profile Customization: Users can edit their profile pictures, bios, and posts.",
                "Post Creation: Upload images and videos, with captions, tags, and likes.",
                "Follow System: Follow and unfollow users, view their posts in a personalized feed.",
                "Real-Time Notifications: Get notified when someone likes or comments on your post.",
                "Responsive Design: Fully responsive layout for mobile and desktop usage."
            ],
            technical_stack: [
                "Backend: Node.js with Express.js for the API server.",
                "Frontend: EJS as the view engine for rendering dynamic content.",
                "Database: MongoDB with Mongoose.js for data modeling and storage.",
                "Authentication: JWT or session-based authentication for secure login.",
                "File Storage: Cloud storage (e.g., AWS S3) for image and video hosting.",
                "Real-Time Features: WebSockets for real-time notifications and chat features."
            ],
            challenges_solutions: [
                "Real-Time Interactions: WebSocket was integrated to ensure real-time notifications for likes, comments, and followers.",
                "Image Upload Optimization: Cloud storage services like AWS S3 were used for handling large media files efficiently.",
                "Scalability: The app is designed to scale with user growth, using modular code and cloud infrastructure."
            ],
            conclusion: "The Instagram Clone showcases the ability to build a real-world social media application with features such as real-time updates, media handling, and a user-friendly interface."
        }
    ];