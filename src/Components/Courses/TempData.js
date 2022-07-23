const CourseData = [
     {
       id: 1,
       name: "Frontend Development",
       info: "HTML /CSS / Js complete roadmap",
       path: "courseDetail",
       data: [
         {
           id: 1,
           name: "Docs",
           info: [
             {
               head: "How to start ?",
               para: [
                  "So if you are a beginner and you want to learn Frontend development then Congrats 🥳 You are on the right platform",
                  "if You are ready to give 3-4 hours daily you will learn Frontend within 3 months",
                  "Start with HTML : finish it within 3-4 days maximum!",
                  "Project Time 🥳",
                  "Then go for CSS finish it within 15-20 days ( vo sab to thik hai par krna kaha se hai ? ) yhi soch rahe ho na 😂 ruko zara sabr kro ",
                  "Project Time 🥳",
                  "For js you have to give 45 days ( if you are new to programming language ) otherwise if you already know a language then you can finish it early according to your capacity ",
                  "Project Time 🥳",
                  "This all you have to do in Fronend . after completing this if you want to explore more you can go for advanced topics "
               ],
             },
           ],
         },
         {
           id: 2,
           name: "Websites",
           info: [
             {
               head: "Which websites you have to take reference ?",
               para: [
                  "https://www.w3schools.com/",
                  "https://www.digitalocean.com/community/tags/javascript",
                  "https://developer.mozilla.org/en-US/  ( don't try to read all the documentation you will get confused )",
                
               ],
             },
           ],
         },
         {
           id: 3,
           name: "You Tube",
           info: [
             {
               head: "Which You tube channel is good ?",
               para: [
                 "[ code with harry ] => https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
                 "[ Apni kaksha ] => https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n",
                 "[ Thappa technical ( good for js ) ] => https://www.youtube.com/watch?v=uGRZ2CzkFUo&list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0"
   
               ],
             },
           ],
         },
         {
           id: 4,
           name: "Courses",
           info: [
             {
               head: "Which courses are good ?",
               para: [
                 "Complete Web Dev by Angela Yu ( Paid )",
                 "Free Code Camp course ( free )"
               ],
             },
           ],
         },
         {
           id: 5,
           name: "Project",
           info: [
             {
               head: "Which projects should you build ?",
               para: [
                 "HTML => try to make form ( scholarship form bank account form etc... )",
                 "CSS => Hotel booking Website Clone ( https://colorlib.com/wp/cat/hotel/ ) , Sign up Form of Insta , Facebook etc.. E-Commerce Website Clone",
                 "js => Free code Camp 40 Porject to Master Js ( https://www.freecodecamp.org/news/javascript-projects-for-beginners/ )"
               ],
             },
           ],
         },
       ],
       img: "data:image/jpeg;base64,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",
     },
   // -----  BACKEND DATA ----------//
     {
       id: 2,
       name: "Backend Development",
       info: "Php / database managment / Api handling complete guide",
       path: "courseDetail",
       data: [
         {
           id: 1,
           name: "Docs",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 2,
           name: "Websites",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 3,
           name: "You Tube",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 4,
           name: "Courses",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 5,
           name: "projects",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
       ],
       img: "data:image/jpeg;base64,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",
     },
   //--------- APP DEVELOPMENT DATA ----------------//
     {
       id: 3,
       name: "App Development",
       info: "What topics to learn / which platform is to be used",
       path: "courseDetail",
       data: [
         {
           id: 1,
           name: "Docs",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 2,
           name: "Websites",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 3,
           name: "You Tube",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 4,
           name: "Courses",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 5,
           name: "Projects",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
       ],
       img: "data:image/jpeg;base64,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",
     },
   // -------------- MACHINE LEARNING DATA -----------------//
     {
       id: 4,
       name: "Machine Learning",
       info: "Learn machine learning from scratch / Minnmum time required to get a basic understanding",
       path: "courseDetail",
       data: [
         {
           id: 1,
           name: "Docs",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 2,
           name: "Websites",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 3,
           name: "You Tube",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 4,
           name: "Courses",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 5,
           name: "Projects",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
       ],
       img: "data:image/jpeg;base64,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",
     },
   //-------------- GRAPHIC DESIGINING DATA ---------------//
     {
       id: 5,
       name: "Graphic Designing",
       info: "how to get into the world where imagination play a vital role",
       path: "courseDetail",
       data: [
         {
           id: 1,
           name: "Docs",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 2,
           name: "Websites",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 3,
           name: "You Tube",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 4,
           name: "Courses",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
             id: 5,
             name: "Projects",
             info: [
               {
                    head:"",
                    para:[""]
               }
             ]
           },
       ],
       img: "data:image/jpeg;base64,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",
     },
   //---------------- PROGRAMMING LANGUAGE DATA -----------------//
     {
       id: 6,
       name: "Programming languages",
       info: "what language is to be learnt first for begineer point of view",
       path: "courseDetail",
       data: [
         {
           id: 1,
           name: "Docs",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 2,
           name: "Websites",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 3,
           name: "You Tube",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
           id: 4,
           name: "Courses",
           info: [
             {
                  head:"",
                  para:[""]
             }
           ]
         },
         {
             id: 5,
             name: "Projects",
             info: [
               {
                    head:"",
                    para:[""]
               }
             ]
           },
       ],
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn2FJsQwjfYeStH7qpNPxabcJRNHsmRcQ4w&usqp=CAU",
     },
   ];
   
   export default CourseData;
   