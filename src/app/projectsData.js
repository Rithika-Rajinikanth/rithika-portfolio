
export const projectsData = [
    {
        "id": 1,
        "name": "CarParking Seeker",
        "slug": "carparking-seeker",
        "description": "Track the CarParking area and also some features like payment for fasttrack,etc.",
        "date": "2024-02-05",
        "demoLink": "https://ecotracker.example.com",
        "details": {
            "explanation": "<div style=\"border: 2px solid #87CEEB; background-color: rgba(0, 0, 0, 0.7); box-shadow: 5px 5px 10px #87CEEB; padding: 15px; color: white;\">\n  This Flask-based car parking management system provides a comprehensive solution for tracking vehicle occupancy and managing payments, including a dedicated Fastrack payment option. The core of the application revolves around a database that stores real-time information about each parking slot, including its availability status. When a vehicle enters, a unique identifier (e.g., license plate, entry time) is recorded and associated with an available slot. The system offers a user-friendly web interface built with Flask's routing and templating capabilities, allowing administrators to view the layout of the parking area, identify occupied and vacant spots visually, and search for specific vehicles. For payment processing, the system integrates a secure payment gateway. A key feature is the \"Fastrack\" payment option, designed for users with pre-registered vehicles or accounts. This functionality could involve storing user payment details and automatically deducting parking fees upon exit, streamlining the process and reducing wait times. Flask's flexibility allows for the implementation of APIs that could interact with external Fastrack payment providers or internal user account systems. Furthermore, the system can generate reports on parking utilization, revenue generated, and Fastrack usage, providing valuable insights for management. The modular nature of Flask facilitates the addition of future features, such as automated entry/exit systems using license plate recognition or integration with parking guidance displays.\n  <br>\n  <strong style=\"color: #87CEEB;\">Key Features and Potential Implementation with Flask:</strong>\n  <ul>\n    <li style=\"margin-bottom: 5px;\"><strong style=\"color: #87CEEB;\">Real-time Parking Slot Tracking:</strong>\n      <ul>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">Database:</strong> A database (like SQLite, PostgreSQL, MySQL) to store parking slot information (ID, status - occupied/vacant, vehicle ID/details).</li>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">Flask Routes:</strong> Routes to display the parking layout, potentially using HTML tables or a visual grid updated dynamically.</li>\n        <li><strong style=\"color: #87CEEB;\">Logic:</strong> Functions to update the status of a slot when a vehicle enters or exits.</li>\n      </ul>\n    </li>\n    <li style=\"margin-bottom: 5px;\"><strong style=\"color: #87CEEB;\">Vehicle Entry/Exit Management:</strong>\n      <ul>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">Forms:</strong> Flask-WTF for creating forms to record vehicle details upon entry and exit.</li>\n        <li><strong style=\"color: #87CEEB;\">Database Interaction:</strong> Functions to add new vehicle entries and update slot status.</li>\n      </ul>\n    </li>\n    <li style=\"margin-bottom: 5px;\"><strong style=\"color: #87CEEB;\">Payment Processing:</strong>\n      <ul>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">Integration:</strong> Libraries like `stripe` or `paypalrestsdk` can be used to integrate with payment gateways.</li>\n        <li><strong style=\"color: #87CEEB;\">Flask Routes:</strong> Routes to handle payment initiation and confirmation.</li>\n      </ul>\n    </li>\n    <li style=\"margin-bottom: 5px;\"><strong style=\"color: #87CEEB;\">Fastrack Payment:</strong>\n      <ul>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">User Accounts (Optional):</strong> A system to manage user accounts with pre-saved payment information.</li>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">Vehicle Registration:</strong> Ability to register vehicles for Fastrack.</li>\n        <li><strong style=\"color: #87CEEB;\">Automated Deduction:</strong> Logic to automatically calculate and deduct parking fees based on entry/exit times for Fastrack users. This could involve API calls to a Fastrack service or internal balance management.</li>\n      </ul>\n    </li>\n    <li><strong style=\"color: #87CEEB;\">Reporting:</strong>\n      <ul>\n        <li style=\"margin-bottom: 0;\"><strong style=\"color: #87CEEB;\">Database Queries:</strong> Functions to retrieve data for generating reports (e.g., occupied slots, revenue).</li>\n        <li><strong style=\"color: #87CEEB;\">Templating:</strong> Flask's Jinja2 templating engine to display reports in a user-friendly format.</li>\n      </ul>\n    </li>\n  </ul>\n</div>",
            "glbObjectUrl": "/models/carparking.glb",
            "liveLink": "https://carparking-seeker.live"
        }
    },
    {
        "id": 2,
        "name": "Annam",
        "slug": "annam",
        "description": "Annam is canteen based project where I collide with the bigbucks innovation team and My role on the project is UX designer & frontend developer",
        "date": "2024-06-26",
        "demoLink": "https://artgalleryonline.example.com",
        "details": {
            "explanation": "<div style=\"border: 2px solid #87CEEB; background-color: rgba(0, 0, 0, 0.7); box-shadow: 5px 5px 10px #87CEEB; padding: 15px; color: white;\">\n  Annam, a project aimed at revolutionizing the canteen experience, was a significant undertaking that I contributed to as both a UX designer and a frontend developer, collaborating closely with the Bigbucks Innovation team. In my UX capacity, I focused on understanding the pain points and needs of canteen users – whether they were students, employees, or administrators. This user-centric approach guided the creation of intuitive navigation, streamlined ordering processes, and accessible information architecture. Through wireframing and prototyping, I iteratively refined the user interface to ensure maximum usability and satisfaction. My role then extended to frontend development, where I translated these carefully crafted designs into a functional and engaging web application. Utilizing my skills in [mention specific technologies], I built interactive components, implemented dynamic content loading, and ensured a responsive design that adapted seamlessly to various devices. The synergy with the Bigbucks Innovation team was paramount, allowing for a continuous feedback loop and the integration of innovative ideas to create a comprehensive and impactful solution that met the specific requirements of the canteen environment.\n</div>",
            "glbObjectUrl": "/models/annam.glb",
            "liveLink": "https://annam-canteen.app"
        }
    },
    {
        "id": 3,
        "name": "AI Agent based Email Generator",
        "slug": "ai-email-generator",
        "description": "It's motivate is when upload a doc which contain the info about the customer email id's and decribe you product and product details. The AI Agent will generate a content and send a email to specific customers.",
        "date": "2025-01-08",
        "demoLink": "https://budgetplanner.example.com",
        "details": {
            "explanation": "<div style=\"border: 2px solid #87CEEB; background-color: rgba(0, 0, 0, 0.7); box-shadow: 5px 5px 10px #87CEEB; padding: 15px; color: white;\">\n  The \"AI Agent based Email Generator\" is a Next.js powered application designed to revolutionize targeted email marketing through automation and intelligent content generation. The platform features a user-friendly document uploading mechanism, allowing users to input customer email lists in common formats. Once a document is uploaded, users can articulate their product and its specific attributes. The core of the application lies in its AI Agent, which employs sophisticated NLP algorithms to process the product description and generate engaging email content optimized for customer communication. To handle the critical task of email delivery, the application integrates seamlessly with EmailJS. This client-side email sending service simplifies the process, allowing the generated emails to be dispatched directly to the intended recipients, as defined in the uploaded document, without complex backend email configurations. The choice of Next.js ensures optimal performance and SEO-friendliness, while the integration of document uploading and EmailJS provides a complete, efficient, and technically sound solution for targeted email campaigns.\n</div>",
            "glbObjectUrl": "/models/ai-email.glb",
            "liveLink": null
        }
    },
    {
        "id": 4,
        "name": "Verdixia",
        "slug": "verdixia",
        "description": "Mobile Application it based on real-time monitoring of agricultural app which determine the humidity,temperature,etc and also identified if any animals and other part is dealers contract and stock page",
        "date": "2024-05-15",
        "demoLink": "https://healthbeat.example.com",
        "details": {
            "explanation": "<div style=\"border: 2px solid #87CEEB; background-color: rgba(0, 0, 0, 0.7); box-shadow: 5px 5px 10px #87CEEB; padding: 15px; color: white;\">\n  Verdixia is a cutting-edge mobile application designed for real-time agricultural monitoring and intelligent agricultural commerce. The application leverages device sensors and potentially external integrations to continuously track crucial environmental parameters such as humidity and temperature. Furthermore, it incorporates advanced object detection capabilities to identify instances of animal intrusion in the monitored fields, promptly alerting the user to potential threats. Beyond monitoring, Verdixia integrates a robust marketplace where farmers can post their bulk agricultural products. An integrated AI analyzes these postings and dynamically calculates an initial price estimate. If the farmer adjusts the quantity, the AI intelligently recalculates the price, providing a maximum limit to guide the farmer. The platform also facilitates direct negotiation between farmers and dealers. If a negotiated price is agreed upon, a deal can be finalized. To empower dealers, the AI analyzes potential trading partners, not only identifying those offering the highest price but also factoring in critical aspects like the company's ratings, years of experience in the agricultural sector, trust metrics, and daily customer volume, providing a comprehensive analytical result. As an added benefit for app users, Verdixia also delivers timely alerts from local merchant shops regarding the availability of fresh vegetable and fruit stock, creating a connected ecosystem for both producers and consumers.\n</div>",
            "glbObjectUrl": "/models/verdixia.glb",
            "liveLink": null
        }
    },
    {
        "id": 5,
        "name": "AI Mental Healthcare Agent",
        "slug": "ai-mental-healthcare",
        "description": "Discover the user stress level by detecting their voice and text. In accordance of the stress level, the ai agent suggest the music recommendation, otherwise some therapy,etc.",
        "date": "2025-02-04",
        "demoLink": "https://recipefinder.example.com",
        "details": {
            "explanation": "<div style=\"border: 2px solid #87CEEB; background-color: rgba(0, 0, 0, 0.7); box-shadow: 5px 5px 10px #87CEEB; padding: 15px; color: white;\">\n  The AI Mental Healthcare Agent offers a novel approach to early stress detection and intervention. By continuously monitoring and analyzing a user's voice patterns (intonation, speech rate, etc.) and the emotional content of their text input, the agent can accurately gauge their current stress level. This dual-modal analysis provides a more comprehensive understanding of the user's emotional state. Once the stress level is determined, the AI responds with appropriate and timely support. For users exhibiting lower levels of stress, the agent can recommend curated music selections designed to promote relaxation and well-being. However, if the analysis indicates a higher level of stress, the agent pivots to offer more direct assistance, such as suggesting guided therapy sessions, providing access to stress-reduction exercises, or offering information on how to connect with mental health professionals and support networks.\n</div>",
            "glbObjectUrl": "/models/ai-mental.glb",
            "liveLink": null
        },
    },
    {
        "id": 6,
        "name": "AI Real Estate Assistant",
        "slug": "ai-real-estate-assistant",
        "description": "An intelligent assistant that helps users explore house designs, customize layouts, and get real-time property recommendations using natural language and generative AI.",
        "date": "2025-04-26",
        "demoLink": "https://realestateassistant.example.com",
        "details": {
            "explanation": "<div style=\"border: 2px solid #87CEEB; background-color: rgba(0, 0, 0, 0.7); box-shadow: 5px 5px 10px #87CEEB; padding: 15px; color: white;\">\n  The <strong class='text-sky-300'>AI Real Estate Assistant</strong> redefines how users interact with property exploration. This intelligent system allows users to input ground dimensions or square footage, then generates multiple curated house designs using generative AI. Users can select any design and request real-time modifications using natural language, creating a highly personalized and interactive design process. Powered by <strong class='text-sky-300'>Groq’s LLM API</strong>, the assistant responds instantly with suggestions tailored to user preferences. The system supports <strong class='text-sky-300'>light/dark themes</strong>, displays house samples in a visual gallery, and offers an intuitive interface for filtering properties. Whether it’s helping users explore modern minimalistic houses or luxury villa layouts, this agent simplifies decision-making and enhances creativity in home planning.\n</div>",
            "glbObjectUrl": "/models/ai-realestate.glb",
            "liveLink": null
        }
    },
];
