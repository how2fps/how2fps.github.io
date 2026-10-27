window.portfolioData = {
  "projects": [
    {
      "id": "sproutteach",
      "title": "SproutTeach",
      "category": "Interactive teaching platform · Frontend & backend",
      "description": "A classroom platform for creating quizzes, running live lessons and reviewing student understanding. Teachers can annotate a shared whiteboard and revisit session reports; students join with a room code.",
      "technologies": [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "TanStack Query",
        "Konva",
        "Node.js",
        "Express",
        "MySQL",
        "Redis",
        "Lua",
        "Socket.IO",
        "Passport",
        "Cloudflare R2",
        "Docker"
      ],
      "technologyGroups": [
        {
          "title": "Frontend",
          "description": "React and TypeScript, built with Vite, power the teacher and student views. Tailwind CSS and Radix UI provide the interface components. TanStack Query and Axios manage API data; React Hook Form and Zod handle quiz forms. Konva supports whiteboard drawing, dnd-kit reorders questions, Socket.IO receives live updates, and jsPDF exports reports.",
          "technologies": [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "TanStack Query",
            "Konva"
          ]
        },
        {
          "title": "Backend",
          "description": "Node.js, Express and TypeScript provide the API. MySQL stores users, quizzes and session history. Redis holds live room state and login sessions, with Lua scripts for atomic quiz updates. Socket.IO and Redis Pub/Sub deliver classroom events. Passport supports Google and Microsoft sign-in; images upload to Cloudflare R2 through the AWS S3 SDK. Docker packages the backend.",
          "technologies": [
            "Node.js",
            "Express",
            "MySQL",
            "Redis",
            "Lua",
            "Socket.IO",
            "Passport",
            "Cloudflare R2",
            "Docker"
          ]
        }
      ],
      "previewNote": "Screenshots reconstructed locally from the original frontend with sample classroom data. The hosted app is currently offline.",
      "screenshots": [
        {
          "src": "./pictures/sproutteach/02-dashboard.webp",
          "alt": "SproutTeach teacher dashboard showing a quiz library and active classroom sessions",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/02-dashboard-480.webp",
          "title": "Teacher dashboard",
          "caption": "Quiz library, draft lessons and active classroom sessions."
        },
        {
          "src": "./pictures/sproutteach/11-question-editor.webp",
          "alt": "SproutTeach question editor with a geometry question, image and answer options",
          "width": 1600,
          "height": 1200,
          "thumbnail": "./pictures/sproutteach/11-question-editor-480.webp",
          "title": "Question editor",
          "caption": "Create questions, add images and choose the correct answers."
        },
        {
          "src": "./pictures/sproutteach/04-classroom-lobby.webp",
          "alt": "SproutTeach classroom lobby with a room code and sample participant list",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/04-classroom-lobby-480.webp",
          "title": "Classroom lobby",
          "caption": "Students join a live room before the lesson begins."
        },
        {
          "src": "./pictures/sproutteach/05-teacher-live-quiz.webp",
          "alt": "SproutTeach teacher presentation with a geometry question and live response controls",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/05-teacher-live-quiz-480.webp",
          "title": "Live lesson",
          "caption": "Present questions and follow student responses as they arrive."
        },
        {
          "src": "./pictures/sproutteach/06-whiteboard-review.webp",
          "alt": "SproutTeach whiteboard review with handwritten geometry annotations and answer distribution",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/06-whiteboard-review-480.webp",
          "title": "Shared whiteboard",
          "caption": "Annotate a question and review the class response distribution."
        },
        {
          "src": "./pictures/sproutteach/07-student-quiz.webp",
          "alt": "SproutTeach student view showing a geometry question and multiple choice answers",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/07-student-quiz-480.webp",
          "title": "Student view",
          "caption": "A focused question and answer interface for classroom participants."
        },
        {
          "src": "./pictures/sproutteach/08-class-results.webp",
          "alt": "SproutTeach class results with a sample leaderboard and quiz summary",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/08-class-results-480.webp",
          "title": "Class results",
          "caption": "Review the class summary and leaderboard after a quiz."
        },
        {
          "src": "./pictures/sproutteach/09-session-report.webp",
          "alt": "SproutTeach session report showing question analysis and saved whiteboard annotations",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/09-session-report-480.webp",
          "title": "Session report",
          "caption": "Revisit question analysis and saved whiteboard snapshots."
        },
        {
          "src": "./pictures/sproutteach/10-student-mobile.webp",
          "alt": "SproutTeach student question interface on a tall mobile viewport",
          "width": 390,
          "height": 1200,
          "thumbnail": "./pictures/sproutteach/10-student-mobile-480.webp",
          "title": "Mobile student view",
          "caption": "The student question interface captured on a tall phone viewport."
        },
        {
          "src": "./pictures/sproutteach/03-quiz-builder.webp",
          "alt": "SproutTeach quiz builder with lesson details and question authoring controls",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/03-quiz-builder-480.webp",
          "title": "Quiz details",
          "caption": "Set up a lesson title, description and question list."
        },
        {
          "src": "./pictures/sproutteach/01-landing.webp",
          "alt": "SproutTeach public landing page introducing the teaching platform",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/sproutteach/01-landing-480.webp",
          "title": "Landing page",
          "caption": "The public introduction and classroom entry point."
        }
      ],
      "links": [
        {
          "label": "Frontend source",
          "href": "https://github.com/how2fps/teaching-app"
        },
        {
          "label": "Backend source",
          "href": "https://github.com/how2fps/teaching-app-backend"
        }
      ],
      "image": {
        "src": "./pictures/sproutteach/02-dashboard.webp",
        "alt": "SproutTeach teacher dashboard showing a quiz library and active classroom sessions",
        "width": 1600,
        "height": 1000
      },
      "brief": {
        "role": "Full-stack development",
        "features": [
          "Live quizzes and room codes",
          "Shared classroom whiteboard",
          "Session reports and results"
        ]
      }
    },
    {
      "id": "envorya-pos",
      "title": "Envorya POS",
      "category": "Envorya POS · Full-stack spa POS",
      "description": "Envorya POS is a multi-branch point-of-sale and operations platform for spa, wellness and TCM businesses. It brings appointments, customer packages and credit, sales, inventory and reporting into one app, with separate staff, customer and management workflows.",
      "technologies": [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Material UI",
        "i18next",
        "Chart.js",
        "PWA",
        "Node.js",
        "JavaScript",
        "Express",
        "MongoDB",
        "JWT",
        "Firebase Storage",
        "Pusher",
        "Mailjet",
        "Vercel"
      ],
      "technologyGroups": [
        {
          "title": "Frontend",
          "description": "React and TypeScript power the POS, booking and customer screens, with Vite for development and PWA packaging. React Router organises the different workflows. Tailwind CSS, Flowbite and Material UI provide interface components; i18next supports English and Chinese. Axios handles API requests, Chart.js visualises reports, and jsPDF and spreadsheet exports support record sharing. ZXing enables QR scanning.",
          "technologies": [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Material UI",
            "i18next",
            "Chart.js",
            "PWA"
          ]
        },
        {
          "title": "Backend",
          "description": "A Node.js and Express API, written in JavaScript, manages branch operations and business rules. MongoDB stores records; shared payment calculations, transactions and retry protection support packages, store credit and refunds. JWT, bcrypt and branch-scoped permissions separate staff, owner and customer access. Firebase Storage handles images, Pusher delivers live updates, and Mailjet sends verification emails and receipts. Vercel hosts the API and scheduled maintenance routes.",
          "technologies": [
            "Node.js",
            "JavaScript",
            "Express",
            "MongoDB",
            "JWT",
            "Firebase Storage",
            "Pusher",
            "Mailjet",
            "Vercel"
          ]
        }
      ],
      "previewNote": "Original Envorya POS frontend rendered locally with fictional business data, including customer details and sales figures.",
      "screenshots": [
        {
          "src": "./pictures/envogue/01-dashboard.webp",
          "alt": "Envorya POS appointment board with fictional customers and colour-coded therapist bookings",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/envogue/01-dashboard-480.webp",
          "title": "Appointment board",
          "caption": "Follow appointments, therapist availability and service progress in one view."
        },
        {
          "src": "./pictures/envogue/02-staff-calendar.webp",
          "alt": "Envorya POS weekly staff schedule with sample working hours, training and leave",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/envogue/02-staff-calendar-480.webp",
          "title": "Staff schedules",
          "caption": "Review the weekly rota alongside leave and training blocks."
        },
        {
          "src": "./pictures/envogue/03-service-catalogue.webp",
          "alt": "Envorya POS customer catalogue with sample spa treatments and prices",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/envogue/03-service-catalogue-480.webp",
          "title": "Service catalogue",
          "caption": "Browse treatments and prices from the customer ordering screen."
        },
        {
          "src": "./pictures/envogue/09-booking.webp",
          "alt": "Envorya POS booking panel with a selected treatment time and fictional therapist",
          "width": 1600,
          "height": 1100,
          "thumbnail": "./pictures/envogue/09-booking-480.webp",
          "title": "Booking a treatment",
          "caption": "Choose a time and an available therapist before confirming a booking."
        },
        {
          "src": "./pictures/envogue/04-customer-profile.webp",
          "alt": "Envorya POS customer record with a fictional profile, package balance, store credit and past order",
          "width": 1600,
          "height": 1100,
          "thumbnail": "./pictures/envogue/04-customer-profile-480.webp",
          "title": "Customer packages & credit",
          "caption": "Bring together customer notes, package balances, store credit and purchase history."
        },
        {
          "src": "./pictures/envogue/05-order-history.webp",
          "alt": "Envorya POS order history showing fictional customer orders and payment statuses",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/envogue/05-order-history-480.webp",
          "title": "Order history",
          "caption": "Search and review services, payment status and receipt details."
        },
        {
          "src": "./pictures/envogue/06-inventory.webp",
          "alt": "Envorya POS inventory table with sample wellness products, quantities and stock values",
          "width": 1600,
          "height": 1000,
          "thumbnail": "./pictures/envogue/06-inventory-480.webp",
          "title": "Inventory management",
          "caption": "Track stock quantities, retail prices, costs and in-house supplies."
        },
        {
          "src": "./pictures/envogue/07-sales-reports.webp",
          "alt": "Envorya POS sales report with fictional payment totals, category breakdown and revenue chart",
          "width": 1600,
          "height": 1100,
          "thumbnail": "./pictures/envogue/07-sales-reports-480.webp",
          "title": "Sales reports",
          "caption": "Explore payment collections, service categories and revenue trends. All figures shown are fictional."
        },
        {
          "src": "./pictures/envogue/08-tablet-dashboard.webp",
          "alt": "Envorya POS appointment board captured on a tablet with fictional appointments",
          "width": 1024,
          "height": 1366,
          "thumbnail": "./pictures/envogue/08-tablet-dashboard-480.webp",
          "title": "Tablet reception view",
          "caption": "The original appointment board on a portrait tablet viewport."
        }
      ],
      "links": [],
      "image": {
        "src": "./pictures/envogue/01-dashboard.webp",
        "alt": "Envorya POS appointment board with fictional customers and colour-coded therapist bookings",
        "width": 1600,
        "height": 1000
      },
      "brief": {
        "role": "Full-stack development",
        "features": [
          "Appointments and staff schedules",
          "Customer packages and credit",
          "Sales, stock and reporting"
        ]
      }
    },
    {
      "id": "smart-device-manager",
      "title": "Smart Device Manager",
      "category": "GovTech · IoT device management",
      "description": "An interactive floor plan for monitoring IoT devices and adjusting their settings, built for GovTech.",
      "technologies": [
        "React",
        "Redux",
        "Leaflet",
        "Ant Design",
        "Material UI"
      ],
      "technologyGroups": [],
      "previewNote": "",
      "screenshots": [],
      "links": [
        {
          "label": "Open image",
          "href": "./pictures/optimized/GovTechProject.webp"
        }
      ],
      "image": {
        "src": "./pictures/optimized/GovTechProject.webp",
        "alt": "Device controls alongside a floor plan showing connected IoT devices",
        "width": 960,
        "height": 463
      },
      "brief": {
        "role": "Frontend development",
        "features": [
          "Interactive device floor plan",
          "IoT device monitoring",
          "Device setting controls"
        ]
      }
    },
    {
      "id": "invmngr",
      "title": "InvMngr",
      "category": "Temasek Polytechnic · Full-stack inventory manager",
      "description": "A full-stack inventory management project from my time at Temasek Polytechnic. It connects stock and reorder levels with customer and vendor records, sales and purchase orders, delivery/receipt status and outstanding balances. A dashboard highlights work that needs attention, while user roles and activity records support day-to-day administration.",
      "galleryTitle": "Inside the app",
      "previewNote": "Screenshots show the original Angular frontend running locally with an in-memory API replacement. Products, people, contacts, orders, balances and activity records are fictional demonstration data. No production database, email service or account was used.",
      "links": [
        {
          "label": "Frontend source",
          "href": "https://github.com/how2fps/InvMngr-frontend"
        },
        {
          "label": "API source",
          "href": "https://github.com/how2fps/InvMngr-api"
        }
      ],
      "technologyGroups": [
        {
          "title": "Angular frontend",
          "description": "Angular 11 routes organise the dashboard, inventory, customers, vendors, orders, users and activity log. Bootstrap and ng-bootstrap provide tables, forms, dialogs and navigation. Reactive forms support data entry, ngx-pagination manages list pages, and RxJS streams coordinate requests and debounced search. The inventory list highlights quantities at or below their reorder threshold.",
          "technologies": [
            "Angular 11",
            "TypeScript",
            "Bootstrap 4",
            "ng-bootstrap",
            "Reactive Forms",
            "RxJS",
            "ngx-pagination",
            "Font Awesome"
          ]
        },
        {
          "title": "Express API and MongoDB",
          "description": "A TypeScript/Express server separates routes, controllers and models for each business area. The native MongoDB driver handles records, generated reference counters, searches and paginated lists. express-validator checks incoming fields, and dashboard endpoints aggregate low-stock counts, pending orders and monthly totals.",
          "technologies": [
            "Node.js",
            "Express",
            "TypeScript",
            "MongoDB",
            "express-validator",
            "REST API"
          ]
        },
        {
          "title": "Stock and order workflows",
          "description": "Sales orders store line-item quantities, prices, discounts and delivery/payment flags. Creating a sale decrements inventory and adds unpaid amounts to the customer’s receivables. Purchase orders track vendors, expected arrivals and receipt status; received goods increase stock, and unpaid purchases affect vendor payables. Item detail pages connect stock to its purchase and sales history.",
          "technologies": [
            "Inventory tracking",
            "Sales orders",
            "Purchase orders",
            "Receivables",
            "Payables",
            "MongoDB bulkWrite"
          ]
        },
        {
          "title": "Accounts, roles and activity",
          "description": "The implementation uses JWT access/refresh tokens, bcrypt password hashing and role checks for New User, Worker, Manager and Administrator accounts. Angular guards control route access, while API middleware also checks authentication and allowed roles. User activity records link actions to their actor and affected record. The API includes email-based password-reset handling with SendGrid.",
          "technologies": [
            "JWT",
            "bcrypt",
            "Role-based access",
            "Angular route guards",
            "Activity logs",
            "SendGrid"
          ]
        }
      ],
      "technologies": [
        "Angular 11",
        "TypeScript",
        "Bootstrap 4",
        "ng-bootstrap",
        "Reactive Forms",
        "RxJS",
        "ngx-pagination",
        "Font Awesome",
        "Node.js",
        "Express",
        "MongoDB",
        "express-validator",
        "REST API",
        "Inventory tracking",
        "Sales orders",
        "Purchase orders",
        "Receivables",
        "Payables",
        "MongoDB bulkWrite",
        "JWT",
        "bcrypt",
        "Role-based access",
        "Angular route guards",
        "Activity logs",
        "SendGrid"
      ],
      "screenshots": [
        {
          "src": "./pictures/inventory/01-dashboard.webp",
          "thumbnail": "./pictures/inventory/01-dashboard-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Operations dashboard",
          "caption": "Low-stock alerts, pending deliveries and receipts, monthly totals and outstanding balances at a glance.",
          "alt": "Operations dashboard — Low-stock alerts, pending deliveries and receipts, monthly totals and outstanding balances at a glance."
        },
        {
          "src": "./pictures/inventory/02-inventory.webp",
          "thumbnail": "./pictures/inventory/02-inventory-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Stock and reorder levels",
          "caption": "Browse SKUs, search stock records and spot low quantities highlighted against their reorder levels.",
          "alt": "Stock and reorder levels — Browse SKUs, search stock records and spot low quantities highlighted against their reorder levels."
        },
        {
          "src": "./pictures/inventory/03-item-history.webp",
          "thumbnail": "./pictures/inventory/03-item-history-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Item purchase history",
          "caption": "An individual stock record combines quantity and reorder settings with linked order history.",
          "alt": "Item purchase history — An individual stock record combines quantity and reorder settings with linked order history."
        },
        {
          "src": "./pictures/inventory/04-sales-orders.webp",
          "thumbnail": "./pictures/inventory/04-sales-orders-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Sales and deliveries",
          "caption": "Review customer orders alongside delivery dates and delivered/paid status.",
          "alt": "Sales and deliveries — Review customer orders alongside delivery dates and delivered/paid status."
        },
        {
          "src": "./pictures/inventory/05-purchase-orders.webp",
          "thumbnail": "./pictures/inventory/05-purchase-orders-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Purchasing and receipts",
          "caption": "Track vendor orders, expected arrivals and received/paid status.",
          "alt": "Purchasing and receipts — Track vendor orders, expected arrivals and received/paid status."
        },
        {
          "src": "./pictures/inventory/06-customers.webp",
          "thumbnail": "./pictures/inventory/06-customers-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Customer balances",
          "caption": "Customer contact records sit alongside their outstanding receivables.",
          "alt": "Customer balances — Customer contact records sit alongside their outstanding receivables."
        },
        {
          "src": "./pictures/inventory/07-user-roles.webp",
          "thumbnail": "./pictures/inventory/07-user-roles-480.webp",
          "width": 1265,
          "height": 712,
          "title": "User roles",
          "caption": "The original user list shows Administrator, Manager and Worker roles using fictional accounts.",
          "alt": "User roles — The original user list shows Administrator, Manager and Worker roles using fictional accounts."
        },
        {
          "src": "./pictures/inventory/08-activity-log.webp",
          "thumbnail": "./pictures/inventory/08-activity-log-480.webp",
          "width": 1265,
          "height": 712,
          "title": "Activity history",
          "caption": "Actions are listed with the user reference, affected record and timestamp.",
          "alt": "Activity history — Actions are listed with the user reference, affected record and timestamp."
        }
      ],
      "image": {
        "src": "./pictures/inventory/01-dashboard.webp",
        "alt": "Operations dashboard — Low-stock alerts, pending deliveries and receipts, monthly totals and outstanding balances at a glance.",
        "width": 1265,
        "height": 712
      },
      "brief": {
        "role": "Full-stack development",
        "features": [
          "Stock and reorder tracking",
          "Sales and purchase workflows",
          "User roles and activity history"
        ]
      }
    },
    {
      "id": "know",
      "title": "kNow",
      "category": "Android app · Location-based stories",
      "description": "A native Android prototype for discovering what people are sharing nearby. Photo and video stories become markers on a live map: explore clusters, search for a place, open a story, and get walking directions to its location. Profiles and custom map collections bring personal stories together.",
      "technologies": [
        "Java 11",
        "Android",
        "XML layouts",
        "View Binding",
        "Data Binding",
        "ViewModel",
        "Material Design",
        "Google Maps SDK",
        "Maps Utils",
        "Google Places",
        "Directions API",
        "Retrofit",
        "Gson",
        "CameraX",
        "LiveData",
        "Firebase Storage",
        "Glide",
        "Media3 ExoPlayer",
        "Firebase Auth",
        "Cloud Firestore"
      ],
      "technologyGroups": [
        {
          "title": "Android interface",
          "description": "Java fragments separate map exploration, capture, upload, story playback and profiles. View Binding and Data Binding connect XML layouts to the interface; shared ViewModels carry media and location state between screens.",
          "technologies": [
            "Java 11",
            "Android",
            "XML layouts",
            "View Binding",
            "Data Binding",
            "ViewModel",
            "Material Design"
          ]
        },
        {
          "title": "Maps and discovery",
          "description": "MapManager listens for changes in the Firestore media collection and updates story markers. Maps Utils groups nearby stories into clusters, while MarkerHandler builds thumbnail-based marker artwork. Filters select categories or stories from the past 24 hours. Places supplies location search; RouteHandler requests walking directions through Retrofit and draws the returned route.",
          "technologies": [
            "Google Maps SDK",
            "Maps Utils",
            "Google Places",
            "Directions API",
            "Retrofit",
            "Gson"
          ]
        },
        {
          "title": "Camera and story publishing",
          "description": "CameraX supports still photos and video recording with a 60-second limit. MediaViewModel uploads media and a thumbnail to Firebase Storage and exposes their download URLs through LiveData. The publishing flow combines those URLs with a caption, category, GPS coordinates and selected custom maps. Glide loads images and Media3 ExoPlayer plays video stories.",
          "technologies": [
            "CameraX",
            "LiveData",
            "Firebase Storage",
            "Glide",
            "Media3 ExoPlayer"
          ]
        },
        {
          "title": "Firebase and social features",
          "description": "Firebase Authentication handles sign-in. Cloud Firestore stores user profiles, story metadata and custom map records, while Storage holds media files. FirestoreManager wraps document and array operations; FollowManager uses those operations to maintain follower and following lists. This Android client uses Firebase services directly rather than a separate application server.",
          "technologies": [
            "Firebase Auth",
            "Cloud Firestore",
            "Firebase Storage"
          ]
        }
      ],
      "previewNote": "Original app screenshots are shown first. The following seven previews are reconstructed from the Android XML layouts, Java code and bundled icons, using sample names, counts, map artwork and illustrated story media. The reconstructed previews are not emulator captures.",
      "screenshots": [
        {
          "src": "./pictures/optimized/kNow.webp",
          "thumbnail": "./pictures/optimized/kNow-480.webp",
          "width": 821,
          "height": 416,
          "title": "Original app screenshots",
          "caption": "Original kNow screenshots showing map exploration, place search, a profile and the story viewer.",
          "alt": "Four original kNow app screenshots showing the map, location search, profile and story viewer"
        },
        {
          "src": "./pictures/know/01-explore.webp",
          "thumbnail": "./pictures/know/01-explore-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "Explore nearby",
          "caption": "Clustered story markers, location search and category chips follow the explore layout. The map and marker media are illustrative fixtures.",
          "alt": "kNow reconstructed explore nearby screen with sample content"
        },
        {
          "src": "./pictures/know/02-place-search.webp",
          "thumbnail": "./pictures/know/02-place-search-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "Find a place",
          "caption": "The search result list appears beneath the location field, using sample place names.",
          "alt": "kNow reconstructed find a place screen with sample content"
        },
        {
          "src": "./pictures/know/03-profile.webp",
          "thumbnail": "./pictures/know/03-profile-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "Profile and collections",
          "caption": "The profile combines an avatar, follower counts, map collections and a three-column story gallery. Names, counts and media are sample content.",
          "alt": "kNow reconstructed profile and collections screen with sample content"
        },
        {
          "src": "./pictures/know/04-story.webp",
          "thumbnail": "./pictures/know/04-story-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "View a story",
          "caption": "A full-screen story with creator information and illustrative media.",
          "alt": "kNow reconstructed view a story screen with sample content"
        },
        {
          "src": "./pictures/know/05-publish.webp",
          "thumbnail": "./pictures/know/05-publish-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "Publish a story",
          "caption": "The upload form combines a media preview, caption, category chips, map selection and a Post button.",
          "alt": "kNow reconstructed publish a story screen with sample content"
        },
        {
          "src": "./pictures/know/06-create-map.webp",
          "thumbnail": "./pictures/know/06-create-map-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "Create a custom map",
          "caption": "A circular cover picker, Set cover action and map name field follow the original map creation layout.",
          "alt": "kNow reconstructed create a custom map screen with sample content"
        },
        {
          "src": "./pictures/know/07-edit-profile.webp",
          "thumbnail": "./pictures/know/07-edit-profile-480.webp",
          "width": 1080,
          "height": 2160,
          "title": "Edit a profile",
          "caption": "The profile editor provides avatar, name and username editing.",
          "alt": "kNow reconstructed edit a profile screen with sample content"
        }
      ],
      "links": [
        {
          "label": "Source code",
          "href": "https://github.com/ChimJohn/kNow"
        }
      ],
      "image": {
        "src": "./pictures/optimized/kNow.webp",
        "alt": "Four original kNow app screenshots showing the map, location search, profile and story viewer",
        "width": 821,
        "height": 416
      },
      "brief": {
        "role": "Android app development",
        "features": [
          "Map-based story discovery",
          "Photo and video publishing",
          "Profiles and custom maps"
        ]
      }
    },
    {
      "id": "picapixel",
      "title": "Pic’A’Pixel",
      "category": "SUTD DTI · Arduino & interactive lighting",
      "description": "A team design-and-technology project exploring how a bus stop could become a place for shared interaction. Visitors pick a pixel and colour on a digital panel, contributing to a collective illuminated ceiling artwork. A secondary bus-boarding mode uses lighting and on-screen arrival/departure messages. The project combines a React interface, a Node serial bridge, Firestore and an Arduino-connected LED prototype.",
      "technologies": [
        "Participatory design",
        "Interactive lighting",
        "Arduino",
        "LED prototype",
        "React",
        "JavaScript",
        "Material UI",
        "@uiw/react-color",
        "WebSocket",
        "Node.js",
        "Express",
        "Cloud Firestore",
        "SerialPort",
        "ReadlineParser",
        "ws",
        "Arduino serial",
        "User testing",
        "Prototype evaluation",
        "Design iteration"
      ],
      "technologyGroups": [
        {
          "title": "Design goal and interaction",
          "description": "The DTI poster identifies boredom and limited interaction at the bus stop as the starting problem. The proposal pairs a shared colour-selection panel with an overhead pixel board, giving waiting passengers a small contribution to make together. Its secondary function signals bus arrival and boarding points.",
          "technologies": [
            "Participatory design",
            "Interactive lighting",
            "Arduino",
            "LED prototype"
          ]
        },
        {
          "title": "React colour-selection interface",
          "description": "PixelGrid renders a coordinate-labelled grid with selectable cells. ColorPickerModal uses a colour wheel, converts HSVA selections into RGB strings, updates the selected cell and posts the colour, coordinates and new grid to /pixel. The app listens for bus-arrival and bus-leaving WebSocket messages and swaps the header into the matching status.",
          "technologies": [
            "React",
            "JavaScript",
            "Material UI",
            "@uiw/react-color",
            "WebSocket"
          ]
        },
        {
          "title": "Persistence and hardware bridge",
          "description": "The Express server reads and writes the grid in Cloud Firestore. It opens a configurable Arduino serial port at 9600 baud, pads RGB channels to three digits and sends coordinate-tagged colour commands. The supplied implementation maps grid cells [3,10] through [6,10] to the four prototype cells; it does not drive every cell of the conceptual ceiling. Serial bus events are relayed to the interface through a WebSocket server.",
          "technologies": [
            "Node.js",
            "Express",
            "Cloud Firestore",
            "SerialPort",
            "ReadlineParser",
            "ws",
            "Arduino serial"
          ]
        },
        {
          "title": "Testing and next steps",
          "description": "The poster reports that most participants found the installation easy to use and that feedback supported its community-interaction goal, while noting difficulty for some participants. Proposed improvements include more sustainable materials, pixel animation, gradient control, selecting multiple pixels, bus interval information and a montage of changing artwork. These are documented next steps rather than features claimed as implemented.",
          "technologies": [
            "User testing",
            "Prototype evaluation",
            "Design iteration"
          ]
        }
      ],
      "previewNote": "The supplied DTI poster leads the gallery, followed by the original exhibition image and curated details from the poster. The day/night bus-stop views are design visualisations; the four-cell LED unit is the prototype pictured in the poster.",
      "screenshots": [
        {
          "src": "./pictures/picapixel/02-design-poster.webp",
          "thumbnail": "./pictures/picapixel/02-design-poster-480.webp",
          "width": 1413,
          "height": 2000,
          "title": "DTI project poster",
          "caption": "The original poster brings together the problem, design goal, site, proposed interaction, prototype and user-testing feedback.",
          "alt": "DTI project poster — The original poster brings together the problem, design goal, site, proposed interaction, prototype and user-testing feedback."
        },
        {
          "src": "./pictures/optimized/Pic'A'Pixel.webp",
          "alt": "The Pic’A’Pixel exhibition space, with visitors and a large projected display",
          "width": 960,
          "height": 445,
          "thumbnail": "./pictures/optimized/Pic'A'Pixel-480.webp",
          "title": "Exhibition setting",
          "caption": "The original project image shows Pic’A’Pixel presented in an exhibition setting."
        },
        {
          "src": "./pictures/picapixel/03-bus-stop-concept.webp",
          "thumbnail": "./pictures/picapixel/03-bus-stop-concept-480.webp",
          "width": 1410,
          "height": 795,
          "title": "Day and night concept",
          "caption": "Design visualisations show the proposed pixel ceiling and interaction panel near Upper Changi MRT and SUTD. These images describe the concept rather than a completed bus-stop installation.",
          "alt": "Day and night concept — Design visualisations show the proposed pixel ceiling and interaction panel near Upper Changi MRT and SUTD. These images describe the concept rather than a completed bus-stop installation."
        },
        {
          "src": "./pictures/picapixel/04-led-prototype.webp",
          "thumbnail": "./pictures/picapixel/04-led-prototype-480.webp",
          "width": 780,
          "height": 330,
          "title": "Four-cell LED prototype",
          "caption": "The prototype pictured in the poster demonstrates independently coloured illuminated cells. The linked server code maps four grid positions to four hardware coordinates.",
          "alt": "Four-cell LED prototype — The prototype pictured in the poster demonstrates independently coloured illuminated cells. The linked server code maps four grid positions to four hardware coordinates."
        }
      ],
      "links": [
        {
          "label": "DTI project poster (PDF)",
          "href": "./pictures/picapixel/dti-project.pdf"
        },
        {
          "label": "Frontend source",
          "href": "https://github.com/how2fps/dti-ui"
        },
        {
          "label": "Backend source",
          "href": "https://github.com/how2fps/dti-backend"
        }
      ],
      "image": {
        "src": "./pictures/optimized/Pic'A'Pixel.webp",
        "alt": "The Pic’A’Pixel exhibition space, with visitors and a large projected display",
        "width": 960,
        "height": 445
      },
      "galleryTitle": "From concept to prototype",
      "brief": {
        "role": "Team project · web and hardware",
        "features": [
          "Shared pixel colour selection",
          "Arduino-connected LED prototype",
          "Bus arrival and departure cues"
        ]
      }
    },
    {
      "id": "tappin-queen",
      "title": "Tappin Queen",
      "category": "Physical prototype",
      "description": "Tappin Queen, shown with the team and physical prototype.",
      "technologies": [],
      "technologyGroups": [],
      "previewNote": "",
      "screenshots": [],
      "links": [
        {
          "label": "Open image",
          "href": "./pictures/optimized/TappinQueen.webp"
        }
      ],
      "image": {
        "src": "./pictures/optimized/TappinQueen.webp",
        "alt": "The Tappin Queen team presenting their physical prototype",
        "width": 960,
        "height": 639
      },
      "brief": {
        "role": "Team project · physical prototype",
        "features": [
          "Physical prototype",
          "Team exhibition presentation"
        ]
      }
    },
    {
      "id": "sutdoki",
      "title": "SutDoki",
      "category": "SUTD · Python visual novel",
      "description": "A team-built desktop visual novel set around university life. The player enters a name, chooses one of four character routes and makes dialogue decisions that shape relationships and branching scenes. Illustrated settings, character artwork, timed text and sound effects bring the stories into a single Tkinter application.",
      "technologies": [
        "Python",
        "Scene data",
        "Character routes",
        "Tkinter",
        "Object-oriented Python",
        "Branching dialogue",
        "Affection state",
        "PhotoImage",
        "after callbacks",
        "winsound",
        "WAV audio"
      ],
      "technologyGroups": [
        {
          "title": "Story structure",
          "description": "A shared scene format stores dialogue text, an image path, speaker, sound, navigation options, affection checks and a final-scene flag. Route modules supply their own scene lists, while main.py renders them through the same createScenes function. This lets new story content reuse the existing interface.",
          "technologies": [
            "Python",
            "Scene data",
            "Character routes",
            "Tkinter"
          ]
        },
        {
          "title": "Choices and character state",
          "description": "The Protagonist and NPC classes hold the player name and character information. NPC objects track affection with increase, decrease, read and reset methods. Choice records specify a destination scene and an affection change; scene records can also define thresholds for alternate paths. These are prototype mechanics, not a claim that every route and ending has been fully tested.",
          "technologies": [
            "Object-oriented Python",
            "Branching dialogue",
            "Affection state"
          ]
        },
        {
          "title": "Desktop interface and media",
          "description": "Tkinter frames combine a scene image, speaker label, dialogue panel and choice or continue buttons. Scheduled after callbacks reveal dialogue character by character at 20 ms intervals. The cleanup routine cancels pending callbacks, stops sound and removes old widgets between scenes; winsound plays WAV assets asynchronously.",
          "technologies": [
            "Tkinter",
            "PhotoImage",
            "after callbacks",
            "winsound",
            "WAV audio"
          ]
        }
      ],
      "previewNote": "The original project image appears first. The following curated scene previews are rendered from the Python story data and bundled artwork, following the Tkinter interface. Alex is a sample player name; these curated images are reconstructions rather than desktop captures.",
      "screenshots": [
        {
          "src": "./pictures/optimized/SutDoki.webp",
          "alt": "SutDoki game screen with characters, dialogue, and multiple conversation choices",
          "width": 960,
          "height": 540,
          "thumbnail": "./pictures/optimized/SutDoki-480.webp",
          "title": "Original project image",
          "caption": "The existing SutDoki project image, retained ahead of the curated scene walkthrough."
        },
        {
          "src": "./pictures/sutdoki/01-start.webp",
          "thumbnail": "./pictures/sutdoki/01-start-480.webp",
          "width": 1280,
          "height": 800,
          "title": "Start a story",
          "caption": "The start menu introduces the game and lets the player enter a name.",
          "alt": "Start a story — The start menu introduces the game and lets the player enter a name."
        },
        {
          "src": "./pictures/sutdoki/02-adam.webp",
          "thumbnail": "./pictures/sutdoki/02-adam-480.webp",
          "width": 1280,
          "height": 800,
          "title": "Character dialogue",
          "caption": "Adam Cmith’s route pairs character dialogue with an illustrated coffee-shop scene.",
          "alt": "Character dialogue — Adam Cmith’s route pairs character dialogue with an illustrated coffee-shop scene."
        },
        {
          "src": "./pictures/sutdoki/03-adam-choice.webp",
          "thumbnail": "./pictures/sutdoki/03-adam-choice-480.webp",
          "width": 1280,
          "height": 800,
          "title": "Make a decision",
          "caption": "Three responses offer supportive, neutral and teasing ways to approach the encounter. The source choices link to different scene indices and affection changes.",
          "alt": "Make a decision — Three responses offer supportive, neutral and teasing ways to approach the encounter. The source choices link to different scene indices and affection changes."
        },
        {
          "src": "./pictures/sutdoki/04-jungcook.webp",
          "thumbnail": "./pictures/sutdoki/04-jungcook-480.webp",
          "width": 1280,
          "height": 800,
          "title": "JungCook route",
          "caption": "A separate character route introduces its own university-life scenes and dialogue.",
          "alt": "JungCook route — A separate character route introduces its own university-life scenes and dialogue."
        },
        {
          "src": "./pictures/sutdoki/05-xiaoming.webp",
          "thumbnail": "./pictures/sutdoki/05-xiaoming-480.webp",
          "width": 1280,
          "height": 800,
          "title": "Xiao Ming route",
          "caption": "The classroom opening starts Xiao Ming’s route, which explores his reserved personality and school life.",
          "alt": "Xiao Ming route — The classroom opening starts Xiao Ming’s route, which explores his reserved personality and school life."
        }
      ],
      "links": [
        {
          "label": "Source code",
          "href": "https://github.com/how2fps/SUTDVisualNovel"
        }
      ],
      "image": {
        "src": "./pictures/optimized/SutDoki.webp",
        "alt": "SutDoki game screen with characters, dialogue, and multiple conversation choices",
        "width": 960,
        "height": 540
      },
      "galleryTitle": "Explore the story",
      "brief": {
        "role": "Team project · Python visual novel",
        "features": [
          "Four character routes",
          "Branching dialogue choices",
          "Character affection state"
        ]
      }
    },
    {
      "id": "bunnycov",
      "title": "BunnyCov",
      "category": "Coverage-guided fuzzing · Python experimentation framework",
      "description": "An AFL-style fuzzing harness for exploring how parsers behave under unexpected input. BunnyCov connects a seed corpus, pluggable schedulers, grammar-aware and byte-level mutations, target execution and feedback scoring. A live terminal dashboard makes each experiment visible, while SQLite records the inputs and outcomes for later analysis.",
      "technologies": [
        "Python",
        "Rich",
        "SQLite",
        "coverage.py",
        "QEMU",
        "Grammar-based fuzzing",
        "UCB1",
        "Thompson sampling",
        "Pandas",
        "Matplotlib"
      ],
      "galleryTitle": "Inside the terminal",
      "previewNote": "Rendered with the repository’s original Rich UI code. Settings and counters are illustrative preview data, not measured performance or verified bug findings. No target fuzzing or external model calls were performed for these previews.",
      "screenshots": [
        {
          "src": "./pictures/fuzzer/fuzzer-dashboard.webp",
          "thumbnail": "./pictures/fuzzer/fuzzer-dashboard-480.webp",
          "width": 2214,
          "height": 489,
          "title": "Live fuzzing dashboard",
          "caption": "The original terminal renderer shows execution rate, coverage, workers, pending jobs and the latest mutated input. All counters here are sample values.",
          "alt": "Live fuzzing dashboard: The original terminal renderer shows execution rate, coverage, workers, pending jobs and the latest mutated input. All counters here are sample values."
        },
        {
          "src": "./pictures/fuzzer/fuzzer-config.webp",
          "thumbnail": "./pictures/fuzzer/fuzzer-config-480.webp",
          "width": 1482,
          "height": 514,
          "title": "Experiment configuration",
          "caption": "Target, seed scheduler, mutation mode, workers, timeout, iteration budget and module versions are visible before a run. These are illustrative settings.",
          "alt": "Experiment configuration: Target, seed scheduler, mutation mode, workers, timeout, iteration budget and module versions are visible before a run. These are illustrative settings."
        }
      ],
      "links": [
        {
          "label": "Source code",
          "href": "https://github.com/how2fps/fuzzer"
        }
      ],
      "brief": {
        "features": [
          "Coverage and differential feedback",
          "Pluggable seed and power schedulers",
          "SQLite results and batch reports"
        ]
      },
      "technologyGroups": [
        {
          "title": "Start with a reproducible experiment",
          "description": "A run begins with a target and an initial seed corpus. Command-line options or JSON configurations select the scheduler, mutator and parser versions, execution budget, worker count, timeout and optional random seed. The harness supports JSON, IPv4, IPv6 and CIDR-related targets. Saving the resolved configuration alongside the output makes runs easier to repeat and compare.",
          "technologies": [
            "Python",
            "JSON configuration"
          ]
        },
        {
          "title": "Choose a seed, then mutate it",
          "description": "The seed scheduler chooses which existing input to explore next. Implementations include queue and heap schedulers, Thompson sampling and a UCB tree that groups seeds by coverage and bug/output signals. A separate power scheduler controls mutation energy. Mutation implementations range from byte havoc to grammar/AST-aware changes and adaptive operator selection, balancing malformed input with inputs that can reach deeper parser logic.",
          "technologies": [
            "UCB1",
            "Thompson sampling",
            "Grammar-based fuzzing"
          ]
        },
        {
          "title": "Execute, observe and feed back",
          "description": "Workers run mutated inputs through target adapters and collect status, exceptions, output and coverage. The project supports coverage.py-based tracking and a QEMU showmap adapter for binary targets. Interestingness combines signals such as new covered arcs, crashes, timeouts, rare bugs and disagreement with an open/reference implementation. Retaining useful inputs lets later iterations build on earlier discoveries; a differing result is a signal to investigate, rather than proof of a vulnerability.",
          "technologies": [
            "coverage.py",
            "QEMU",
            "Multiprocessing"
          ]
        },
        {
          "title": "Keep the experiment inspectable",
          "description": "Rich panels show execution progress, worker activity, coverage and the latest mutation. SQLite retains per-iteration inputs, results and scores; exports include CSV results and representative exception/line pairs. Batch runs repeat configurations and generate an HTML report with aggregated charts and tables, so scheduler or mutator variants can be examined across runs instead of relying on a single terminal snapshot.",
          "technologies": [
            "Rich",
            "SQLite",
            "Pandas",
            "Matplotlib"
          ]
        },
        {
          "title": "Explore alternative strategies",
          "description": "Versioned modules provide a way to swap one part of the pipeline for controlled comparisons. The repository also includes grammar-based corpus refill, optional LLM seed fallback, run-validity analysis scripts and tests for the Thompson and UCB tree schedulers. These support experimentation; the portfolio previews do not claim a benchmark win or a particular number of real bugs found.",
          "technologies": [
            "Ablation studies",
            "Seed generation"
          ]
        }
      ]
    },
    {
      "id": "spacefartz",
      "title": "SpaceFartz",
      "category": "Game jam · 2nd place · Godot arcade shooter",
      "description": "A vertical arcade space shooter made with my group for a game jam, where we won second place. Dodge incoming fire, shoot through waves of enemies and collect upgrades before facing a boss. Built in Godot with GDScript, the project combines a deliberately playful identity with a short, escalating survival loop.",
      "technologies": [
        "Godot 4",
        "GDScript",
        "2D physics",
        "Scene composition"
      ],
      "galleryTitle": "A look at the game",
      "previewNote": "Curated scene reconstructions using the repository’s original sprites and background. Positions and scores are illustrative; these are not captured gameplay frames. Second-place game-jam result supplied by Finn.",
      "screenshots": [
        {
          "src": "./pictures/spacefartz/01-waves.webp",
          "thumbnail": "./pictures/spacefartz/01-waves-480.webp",
          "width": 1100,
          "height": 1000,
          "title": "Enemy waves",
          "caption": "Original player, enemy, projectile and upgrade artwork arranged to illustrate the vertical shooter loop.",
          "alt": "Enemy waves: Original player, enemy, projectile and upgrade artwork arranged to illustrate the vertical shooter loop."
        },
        {
          "src": "./pictures/spacefartz/02-boss.webp",
          "thumbnail": "./pictures/spacefartz/02-boss-480.webp",
          "width": 1100,
          "height": 1000,
          "title": "Boss encounter",
          "caption": "The original purple boss sprite in a curated encounter preview; score and projectile positions are sample content.",
          "alt": "Boss encounter: The original purple boss sprite in a curated encounter preview; score and projectile positions are sample content."
        }
      ],
      "links": [
        {
          "label": "Source code",
          "href": "https://github.com/how2fps/SpaceFartz"
        }
      ],
      "brief": {
        "features": [
          "2nd place in a group game jam",
          "Escalating waves and boss encounters",
          "Collectible weapon and movement upgrades"
        ]
      },
      "technologyGroups": [
        {
          "title": "Build a compact arcade loop",
          "description": "The project starts from a menu and instantiates the player into a 540 × 960 playfield. Directional input controls movement and the accept action fires the weapon. CharacterBody2D movement, viewport clamping and collision groups connect the player, enemies and bullets. Score updates and a return to the menu close the loop when the player runs out of lives.",
          "technologies": [
            "Godot 4",
            "GDScript",
            "2D physics"
          ]
        },
        {
          "title": "Escalate the encounter",
          "description": "The main scene spawns enemies on a one-second interval. A twenty-second timer raises enemy health and background scroll speed; a boss event is scheduled after forty-one seconds. Three enemy variants use different health, movement and firing parameters. On a boss event, regular enemies are cleared and spawning pauses, giving the encounter a different rhythm.",
          "technologies": [
            "Timers",
            "Signals",
            "PackedScene"
          ]
        },
        {
          "title": "Reward survival with upgrades",
          "description": "Defeated enemies can drop fire-rate, movement-speed, health or bullet-count upgrades. Player property setters pass weapon changes into the weapon node. Damage triggers temporary invulnerability and flashing feedback; dedicated sounds accompany shots, explosions, upgrades and boss encounters. The global high score is retained between scenes during a session.",
          "technologies": [
            "GDScript",
            "Audio",
            "Scene composition"
          ]
        },
        {
          "title": "Work within a game jam",
          "description": "This was a group jam entry, with the team earning second place. The code is organised into small reusable scenes for weapons, bullets, enemies, bosses and pickups, which makes it practical to assemble and tune the arcade loop. The gallery highlights that loop using the original artwork.",
          "technologies": [
            "Team project",
            "Game jam"
          ]
        }
      ]
    },
    {
      "id": "just-mbap",
      "title": "Just",
      "category": "Temasek Polytechnic · Mobile task and focus app",
      "description": "A Polytechnic mobile-development project built with Ionic and Angular. Just combines a calendar-based task list with a focused countdown timer, completion streaks and friends. Tasks can be private or visible to friends, adding a social layer to a personal productivity workflow.",
      "technologies": [
        "Ionic 5",
        "Angular 12",
        "TypeScript",
        "RxJS",
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Storage",
        "Cordova"
      ],
      "previewNote": "Source-based reconstructions of the Ionic screen templates using fictional tasks, profile details and timer values. These are curated previews, not emulator captures; no Firebase accounts or live user data are accessed.",
      "screenshots": [
        {
          "src": "./pictures/just-mbap/tasks.webp",
          "thumbnail": "./pictures/just-mbap/tasks-480.webp",
          "width": 1000,
          "height": 1000,
          "title": "Calendar and task list",
          "caption": "The month view, task actions and selected-day list reconstructed from the All Tasks template with fictional tasks.",
          "alt": "Calendar and task list: The month view, task actions and selected-day list reconstructed from the All Tasks template with fictional tasks."
        },
        {
          "src": "./pictures/just-mbap/focus.webp",
          "thumbnail": "./pictures/just-mbap/focus-480.webp",
          "width": 1000,
          "height": 1000,
          "title": "Current task timer",
          "caption": "A source-based preview of task details, visibility, remaining time and pause/complete controls.",
          "alt": "Current task timer: A source-based preview of task details, visibility, remaining time and pause/complete controls."
        },
        {
          "src": "./pictures/just-mbap/profile.webp",
          "thumbnail": "./pictures/just-mbap/profile-480.webp",
          "width": 1000,
          "height": 1000,
          "title": "Profile and streaks",
          "caption": "A fictional profile illustrating the original template’s status, current and highest streaks, friend ID and account actions.",
          "alt": "Profile and streaks: A fictional profile illustrating the original template’s status, current and highest streaks, friend ID and account actions."
        }
      ],
      "links": [
        {
          "label": "Source code",
          "href": "https://github.com/how2fps/Just-mbap"
        }
      ],
      "brief": {
        "features": [
          "Calendar tasks and focus countdown",
          "Friends and task visibility",
          "Completion streaks and profile editing"
        ]
      },
      "technologyGroups": [
        {
          "title": "Plan a task, then focus on it",
          "description": "The calendar selects a date and the task service queries the signed-in user’s Firestore tasks for that day, with an option to show all tasks. Forms support creating and editing tasks, allocating time and choosing whether friends can see them. Sliding list actions expose edit and delete, while selecting a task can make it the current focus.",
          "technologies": [
            "Ionic 5",
            "Angular 12",
            "Cloud Firestore"
          ]
        },
        {
          "title": "Keep track of time across visits",
          "description": "The current-task page uses an RxJS timer with a stop signal to drive the countdown. Pausing writes the remaining time to Firestore. Before the page unloads, local storage records the task ID, remaining time, running state and departure timestamp; returning to the same task subtracts elapsed time when the timer had been running. A route guard also supports saving time when leaving the page.",
          "technologies": [
            "RxJS",
            "Local storage",
            "Angular routing"
          ]
        },
        {
          "title": "Make progress social",
          "description": "Completing a task updates the current and highest streak using the task date, removes the task document and opens a completion view. Friend IDs support finding people, sending and accepting requests, and viewing a friend’s shared tasks. Profiles surface a status and streaks; profile editing and image upload connect identity with the task workflow.",
          "technologies": [
            "Cloud Firestore",
            "Firebase Storage"
          ]
        },
        {
          "title": "Connect the mobile interface to services",
          "description": "AngularFire connects authentication and Firestore data to Angular services. RxJS operators compose user-dependent queries and live document updates. Ionic supplies mobile navigation and form components, while Cordova configuration targets native packaging and includes camera integration. This was built during my time at Temasek Polytechnic.",
          "technologies": [
            "TypeScript",
            "Firebase Authentication",
            "Cordova"
          ]
        }
      ]
    },
    {
      "id": "food-times",
      "title": "Food Times",
      "category": "My first development project · Restaurant discovery and reviews",
      "description": "My first development project: a restaurant discovery and review website. Food Times lets visitors browse restaurants, search by name and filter by cuisine, then open restaurant details and read reviews. Account features connect the browsing experience to writing reviews and managing a profile. It marks the beginning of my journey from learning web development to building a full application.",
      "technologies": [
        "JavaScript",
        "Node.js",
        "Express",
        "EJS",
        "MySQL",
        "SCSS",
        "Express sessions",
        "Multer"
      ],
      "previewNote": "Offline screenshots of the original EJS templates, CSS hover effects and login/sign-up interactions, using fictional data. Bundled imagery stands in for restaurant photos; the remote logo and icons use text equivalents and external fonts are unavailable. Account forms are shown without submitting them or connecting to a database or email service.",
      "screenshots": [
        {
          "src": "./pictures/food-times/01-home.webp",
          "thumbnail": "./pictures/food-times/01-home-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Food Times homepage",
          "caption": "The original orange-and-dark homepage, cuisine selector and restaurant cards, rendered with fictional sample listings.",
          "alt": "Food Times homepage: The original orange-and-dark homepage, cuisine selector and restaurant cards, rendered with fictional sample listings."
        },
        {
          "src": "./pictures/food-times/04-card-hover.webp",
          "thumbnail": "./pictures/food-times/04-card-hover-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Restaurant card hover",
          "caption": "The original CSS lifts the card front and expands the dark panel behind it, revealing the rating and review action.",
          "alt": "Restaurant card hover: The original CSS lifts the card front and expands the dark panel behind it, revealing the rating and review action."
        },
        {
          "src": "./pictures/food-times/05-login.webp",
          "thumbnail": "./pictures/food-times/05-login-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Login",
          "caption": "The original login modal opened through the navigation button, with username/password fields and a forgot-password action.",
          "alt": "Login: The original login modal opened through the navigation button, with username/password fields and a forgot-password action."
        },
        {
          "src": "./pictures/food-times/06-signup.webp",
          "thumbnail": "./pictures/food-times/06-signup-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Sign up",
          "caption": "The original sliding overlay switches to registration, showing name, email, username, password and contact fields. Names are fictional.",
          "alt": "Sign up: The original sliding overlay switches to registration, showing name, email, username, password and contact fields. Names are fictional."
        },
        {
          "src": "./pictures/food-times/07-password-reset.webp",
          "thumbnail": "./pictures/food-times/07-password-reset-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Forgot password",
          "caption": "The original login modal switches to a username-based reset-link request. No request is submitted.",
          "alt": "Forgot password: The original login modal switches to a username-based reset-link request. No request is submitted."
        },
        {
          "src": "./pictures/food-times/03-details.webp",
          "thumbnail": "./pictures/food-times/03-details-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Restaurant details",
          "caption": "The original detail template shows location, contact information and review actions. Sample restaurant data and an empty review state are used.",
          "alt": "Restaurant details: The original detail template shows location, contact information and review actions. Sample restaurant data and an empty review state are used."
        },
        {
          "src": "./pictures/food-times/08-write-review.webp",
          "thumbnail": "./pictures/food-times/08-write-review-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Write a review",
          "caption": "The original review form includes a rating selector, title and review text. The example review is fictional and is not submitted.",
          "alt": "Write a review: The original review form includes a rating selector, title and review text. The example review is fictional and is not submitted."
        },
        {
          "src": "./pictures/food-times/09-account.webp",
          "thumbnail": "./pictures/food-times/09-account-480.webp",
          "width": 1440,
          "height": 1050,
          "title": "Account settings",
          "caption": "The original account-editing page with profile-picture upload and editable personal details, populated with fictional information.",
          "alt": "Account settings: The original account-editing page with profile-picture upload and editable personal details, populated with fictional information."
        }
      ],
      "links": [
        {
          "label": "Source code",
          "href": "https://github.com/how2fps/restaurant-project"
        }
      ],
      "brief": {
        "features": [
          "My first development project",
          "Restaurant and cuisine search",
          "Accounts, profiles and restaurant reviews"
        ]
      },
      "technologyGroups": [
        {
          "title": "Turn browsing into a complete flow",
          "description": "The homepage introduces restaurants through a cuisine picker and cards. On desktop, hovering lifts and scales the card front while expanding a dark panel behind it to reveal the rating and review action. A separate listing view supports restaurant-name and cuisine filtering. Opening a restaurant brings together its location, contact details, website, average rating and reviews. EJS templates generate the pages on the server; SCSS and compiled CSS provide the responsive orange-and-dark visual design.",
          "technologies": [
            "EJS",
            "SCSS",
            "JavaScript"
          ]
        },
        {
          "title": "Connect pages, controllers and a database",
          "description": "Express routes separate restaurants, cuisines, users and reviews. Controllers request data from model classes, then render templates or return responses. MySQL queries join restaurants with cuisine relationships and reviews, calculate average ratings and bind query parameters for lookups. This structure connected the interface work to persistent application data.",
          "technologies": [
            "Node.js",
            "Express",
            "MySQL"
          ]
        },
        {
          "title": "Add accounts and user contributions",
          "description": "The project includes registration, login, account editing, profile pictures and review creation, editing and deletion. Session middleware stores sessions in MySQL, authentication middleware protects contribution routes and the server includes CSRF middleware. Multer handles profile-picture uploads.",
          "technologies": [
            "Express sessions",
            "Multer",
            "EJS"
          ]
        },
        {
          "title": "Where my development journey started",
          "description": "Food Times was my first development project. Building a connected browsing, account and review flow meant working across HTML templates, responsive styling, browser JavaScript, server routes and SQL models. Keeping it in this portfolio shows the starting point alongside my later mobile, game and full-stack projects. The previews preserve the original templates rather than redesigning this early work.",
          "technologies": [
            "First project",
            "Full-stack fundamentals"
          ]
        }
      ]
    }
  ],
  "biography": [
    "My path into development started at Temasek Polytechnic in 2020, when I began learning web development independently, and continued at SUTD.",
    "Small everyday frustrations got me interested in building better interfaces. I like making things feel clear, useful, and easy to get around.",
    "Away from the keyboard: Teamfight Tactics and time at the gym."
  ]
};
