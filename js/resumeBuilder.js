/*
This is empty on purpose! Your code to build the resume will go here.
 */

var education = {
    "schools": [{
        "name": "Bowie State University",
        "city": "Bowie, MD",
        "majors": ["Biology"],
        "dates": "2012-2014--- ",
        "url": "www.umd.edu"
    }, {
        "name": "University of Maryland",
        "city": "College Park, MD",
        "majors": ["Anthropology"],
        "dates": "2014-2016---: ",
        "url": "www.bowiestate.edu"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "date": "2016",
        "url": "https://classroom.udacity.com/courses/ud304/lessons/2617868617/concepts/27713785570923"
    }, {
        "title": "Programming Foundations with Python",
        "school": "Udacity",
        "date": "2016",
        "url": "https://classroom.udacity.com/courses/ud036/lessons/990110642/concepts/10079185740923"
    }, {
        "title": "Javascript Basics",
        "school": "Udacity",
        "date": "2016",
        "url": "https://classroom.udacity.com/courses/ud804/lessons/1946788554/concepts/25505685350923#"
    }
    ]
};

var work = {
    "jobs": [{
        "employer": "Lyft",
        "title": "Driver",
        "location": "Washington, D.C.",
        "dates": "2015-Present",
        "description": "I am responible for picking up passengers and taking them to their desired destination. I maintained a 4.87 approval rating.",
        "url": "www.Lyft.com"
    }, {
        "employer": "Uber",
        "title": "Driver",
        "location": "Washington, D.C.",
        "dates": "2015-Present",
        "description": "I am responible for picking up passengers and taking them to their desired destination. I maintained a 4.9 approval rating.",
        "url": "www.Uber.com"
    }, {
        "employer": "Farmers Fishers Bakers",
        "title": "Bartender and Waiter",
        "location": "Washington, D.C.",
        "dates": "2012-2014",
        "description": "I am responible for taking care  of the bar and its customers. Duties also include preparing all mixes, juices, syrups, beers, craft cocktails and stocking the inventory.",
        "url": "www.FarmersFishersBakers.com"
    }]
};

var bio = {
    "name": "Robert Lowe",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Meet the REAL Rob Lowe, Front-end Ninja",
    "biopic": "images/bioPic.jpg",
    "contacts": {
        "mobile": "301-213-1125",
        "email": "RobLowe1992@yahoo.com",
        "github": "https://github.com/RobLowe1992",
        "location": "Washington, D.C."
    },
    "skills": ["HTML5", "CSS3", "Javascript", "jQuery", "JSON", "Basic Photoshop", "Bootstrap", "Github"]
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "January, 2017",
        "description": "Welcome to my portfolio site. This entire site was created using a combination of all the skills i have aquired up to this point. As I complete more projects they will be added to the site. Feel free to browse the site.",
        "images": ""
    }]
};

var formatedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formatedRole);

var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formatedName);

var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formatedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

function displaySkills() {
      if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i=0; i < bio.skills.length; i++) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
          }
        }
    };
displaySkills();
document.getElementById('skills').style.display="inline";

function displayWork() {
      for (index = 0; index < work.jobs.length; index++) {
          $("#workExperience").append(HTMLworkStart);

          var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
          var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;
          $(".work-entry:last").append(formattedEmployerTitle);

          var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
          $(".work-entry:last").append(formattedLocation);

          var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
          $(".work-entry:last").append(formattedDates);

          var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
          $(".work-entry:last").append(formattedDescription);
        }
      };
    displayWork();
    $(document).click(function(loc) {
      var x = loc.pageX;
      var y = loc.pageY;

      logClicks(x,y);
    });

    function inName(name) {
      var nameSplit = name.split(" ");
      nameSplit[1] = nameSplit[1].toUpperCase();
      nameSplit[0] = nameSplit[0].slice(0,1).toUpperCase() + nameSplit[0].slice(1).toLowerCase();
      return nameSplit[0] + " " + nameSplit[1];
    };
    $("#main").append(internationalizeButton);
    document.getElementById("iBtn").style.display="none";

projects.display = function() {
      for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
          for (i = 0; i < projects.projects.length; i++) {
            var formattedImage = HTMLprojectImages.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    };
projects.display();

function displayEducation() {
    $("#education").append(HTMLschoolStart);

    for (i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%","");
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
        $(".education-entry:last").append(formattedSchoolLocation);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineTitleSchool = formattedOnlineTitle  +formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", "Go to Course").replace("#", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }

};
displayEducation();

function displayMap() {
    $("#map").append(googleMap);


}









