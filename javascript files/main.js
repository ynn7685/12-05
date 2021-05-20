var navbar = '<div class="navbar"><a href="index.html">Home page</a><a href="topic.html">Technology/Topic</a><a href="opportunities.html">Opportunities</a><a href="risks.html">Risks</a><a href="choices.html">Choices</a><a href="ethics.html">Ethical Reflections</a><a href="references.html">References</a><div class="dropdown"><button class="dropbtn">Process Support<i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="process.html">Process Support</a><a href="../index.html">Home page</a><a href="#">Link 3</a><a href="team-formation.html">Team Formation</a><a href="proposal.html">Topic Proposal</a><a href="evaluation.html">Peer Evaluation</a><a href="meetings.html">Meeting Minutes</a><a href="portfolio.html">Project Portfolio</a><a href="rubric.html">Assessment Rubric</a><a href="guidelines.html">Guideline Conformance</a></div></div></div>'

var div = document.getElementById('navbar');

div.insertAdjacentHTML('afterbegin', navbar)
