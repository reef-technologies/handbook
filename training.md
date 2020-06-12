# What is this about?

When you join the company, we need to bring you up to our level, or maybe you need to bring us to your level. ;) We believe that the best way to make sure we're on the same page is to show you some videos and articles, so here they are. Bill the time spent doing this to `RT / training`. Please put the title of the video or article into the work subject note.

You don't need to see all of it in one go. You're free to adjust your pace to the speed of your initial transition into the project. If the transition is quick (you do lots of coding on your first day), slow it down and watch some training material every day. If the transition is slow due to questions, timezones, environment issues, and other blocking problems, then report those and watch some training material.

You are expected to watch or read everything that matches your position within two weeks from starting the work with the company.


# All staff

 - https://www.youtube.com/watch?v=n7wH2XdOWpM - AgileByExample 2016: Henrik Kniberg - Keynote - Focus (or Stop Starting, Start Finishing);
 - https://hbr.org/1999/11/management-time-whos-got-the-monkey - "Management Time: Who’s Got the Monkey?" by William Oncken, Jr.Donald L. Wass (1974);
 - http://randsinrepose.com/archives/be-unfailingly-kind/ - a 100% effective guide on how to work efficiently with people when you have no power over them;
 - https://youtu.be/eYMz-VOw4r8 - James Priest - Agile, decentralized Learning Organizations With Sociocracy 3.0;
 - https://www.linkedin.com/pulse/77-elements-sociocracy-30-ewa-koprowska/ - Ewa Koprowska - 77 Elements of Sociocracy 3.0;
 - https://www.ted.com/talks/derek_sivers_how_to_start_a_movement?language=en - Derek Sivers - How to start a movement;
 - https://www.ted.com/talks/amy_cuddy_your_body_language_shapes_who_you_are - this explains what cortisol is;
 - https://risk-engineering.org/concept/Rasmussen-practical-drift - this explains a fairly critical viewpoint on the erosion of procedures;
 
# All staff that has anything to do with software development

 - https://hackernoon.com/why-isnt-agile-working-d7127af1c552 - Why Isn’t Agile Working?;
 - https://www.youtube.com/watch?v=IyNPeTn8fpo - "Scrum et al." - the legendary talk at Google Campus by Ken Schwaber, the father of Scrum;
 - https://techblog.bozho.net/gdpr-practical-guide-developers/ - GDPR - A Practical Guide For Developers;
 - https://people.neilon.software/ - Neil Green - How to Deal with Difficult People on Software Projects;
 - http://alexthunder.livejournal.com/309815.html - "DON'T WAKE UP THE PROGRAMMER!";
 - http://chrisaitchison.com/2011/05/03/you-are-not-a-software-engineer/ - You are NOT a Software Engineer! (you are a software gardener);
 - https://www.youtube.com/watch?v=502ILHjX9EE - Henrik Kniberg - Agile Product Ownership in a Nutshell;

## Business travel

For now, you can skip it, but read it before you go on your first business trip: [travel.md](travel.md).

# Technical staff
(coders, sysops, devops etc - people who primarily work with machines)

 - http://http.jameshfisher.com/2019/05/26/i-can-see-your-local-web-servers/ - on "localhost" servers;
 - how to convert a putty key from a customer to id_rsa: https://askubuntu.com/a/584631 (you don't need to read it - just know it is here if you ever have to use it);

## Developers
This section is divided into sort filters, sort of. See each section and find out if it applies to you. If it does, watch it all.

### all developers

 - https://touk.pl/blog/2012/09/16/test-driven-traps-part-1/ - what "test hell" is;
 - http://nvie.com/posts/a-successful-git-branching-model/ - a well known git branching model. I think this one is actually bad, but it gets you thinking in the right direction;
 - https://chris.beams.io/posts/git-commit/ - How to Write a Git Commit Message. Painfully long, but sets the standard for everyone to follow;
 - http://www.agitar.com/downloads/TheWayOfTestivus.pdf - The Way of Testivus;
 - https://www.artima.com/weblogs/viewpost.jsp?thread=204677 - How Much Unit Test Coverage Do You Need? - The Testivus Answer;
 - http://www.leanessays.com/2019/04/what-if-your-team-wrote-code-for-737.html?m=1 - on the difference between coders/programmers and developers/engineers

#### all junior developers

 - https://git-scm.com/book/ - how to git;
 - https://semver.org - a version number convention;
 - https://www.cs.usfca.edu/~galles/visualization/Algorithms.html - Data Structure Visualizations (you don't need to see them all, just know it is there if you need it one day);
 - https://youtu.be/yIPbE7BssOs - Randall Koutnik: Rethinking the Developer Career Path (the guy in a crooked viking hat);

### all frontend developers

#### junior frontend developers

 - https://www.vrk.dev/2019/07/11/why-is-modern-web-development-so-complicated-a-long-yet-hasty-explanation-part-1/ - Why is modern web development so complicated?

#### intermediate frontend developers

 - https://github.com/joshbuchea/HEAD - A list of everything that could go in the head of your document;

### all backend developers

 - https://www.youtube.com/watch?v=H0Ji7bsEoUo - on some modern hw/sw problems for backend systems in 2017, and on types of storage devices and how they work, what are the problems with them, etc.;
 - https://thehftguy.com/2016/11/01/docker-in-production-an-history-of-failure/ and https://thehftguy.com/2017/02/23/docker-in-production-an-update/ - on the current state of Docker;
 - http://cryto.net/~joepie91/blog/2015/07/19/why-you-should-never-ever-ever-use-mongodb/ - why you should never, ever, ever use MongoDB. NOTE: read that until you are sure you will never use it. If you are still not convinced after reading it, read [this](https://blog.scrapinghub.com/2013/05/13/mongo-bad-for-scraped-data/), if you are still not convinced, try [this](http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/comment-page-1/) and if you still are not entirely sure, you might want to know that their "atomic" property actually makes it so that if you have a collection with some objects and you'll query to get 1000 objects based on some criteria during an update operation, you will sometimes get 999 back. And that is by design, they closed the bug as "won't fix". So if you ask mongodb for something, you have to check if it returned what you asked for, because if it didn't, then you need to retry and *if you are lucky* then eventually you'll get what you asked for. Not everyone likes to write code like that and most people want to have access to their data always, not just when it's their lucky day. And also [this](https://www.infoq.com/news/2014/04/bitcoin-banking-mongodb/). If the largest cryptomarkets couldn't use it properly, are you sure you will be able to? :) Anyway, if you are still not sure whether you can use it or not, speak up on `#default`, someone will help you;
 - https://www.jasondavies.com/bloomfilter/ - a data structure used for lookup speedups,  among other uses, in databases;
 - http://thesecretlivesofdata.com/raft/ - a demo of RAFT, a consensus algorithm;
 - https://arp242.net/weblog/yaml_probably_not_so_great_after_all.html - YAML: probably not so great after all;
 - https://rock-it.pl/how-to-write-excellent-dockerfiles/ - (somewhat outdated) information about good dockerfile creation (reducing amount of layers by multi-stage build was added after this guide had been written);
 - https://wingolog.org/archives/2018/05/21/correct-or-inotify-pick-one - if you are tempted to use `inotify` in production. See [fatrace](http://manpages.ubuntu.com/manpages/trusty/man1/fatrace.1.html) or [python-fanotify](https://github.com/google/python-fanotify) instead;

#### senior backend developers

 - https://www.twilio.com/blog/a-http-headers-for-the-responsible-developer - about modern http headers and what they do;
 - https://datatracker.ietf.org/meeting/97/materials/slides-97-iccrg-bbr-congestion-control - about new TCP congestion control;
 - https://danluu.com/deconstruct-files/ - why writing to files is hard and you should probably not do it;
 - http://morningcoffee.io/killing-a-process-and-all-of-its-descendants.html - killing a process and all of its descendants;
 - http://sven.stormbind.net/blog/posts/docker_from_30_to_230/ - (read if ever needed) on running many docker containers on the same host;
 - https://dzone.com/articles/understanding-recursive-queries-in-postgres - recursive queries in postgres (to find the topmost parent, for example);
 - https://txt.black/~jack/cloud.txt - an opinion about cloud performance (or the lack thereof) and alternative solutions;
 
### all python developers

 - https://docs.python.org/3/library/typing.html#typing.NamedTuple - how to typing.NamedTuple
 - https://www.python.org/dev/peps/pep-0498/ - Python 3.6 string formatting
 - https://www.youtube.com/watch?v=hk85RUtQsBI - presentation of python 3.6 goodies
 - https://datawhatnow.com/things-you-are-probably-not-using-in-python-3-but-should/ - Things you’re probably not using in Python 3 - but should
 - https://www.youtube.com/watch?v=wf-BqAjZb8M - Raymond Hettinger - Beyond PEP 8
 - https://www.youtube.com/watch?v=p33CVV29OG8 - Modern Dictionaries by Raymond Hettinger
 - http://www.laurentluce.com/posts/python-dictionary-implementation/ - how are the python (pre-3.6?) dictionaries implemented and why is it necessary to add an item to a python dictionary that was emptied, to reduce the memory usage.
 - https://www.youtube.com/watch?v=EiOglTERPEo - Raymond Hettinger - `super()` considered super!
 - https://pypi.org/project/indexed.py/ - A dictionary that is indexed by insertion order
 - https://more-itertools.readthedocs.io/en/latest/ - a library of rarely useful itertools functions. It's better to use this than to write it yourself
 - https://medium.com/zendesk-engineering/hunting-for-memory-leaks-in-python-applications-6824d0518774 - if you ever need to track memory leaks, see here first
 - https://benbernardblog.com/tracking-down-a-freaky-python-memory-leak/ - if it's a more demanding memory leak, here's even more tools
 - https://medium.com/@dwdraju/python-function-on-aws-lambda-with-api-gateway-endpoint-288eae7617cb - how to do a simple serverless application on AWS Lambda and publish it
 - https://golang-for-python-programmers.readthedocs.io/en/latest/ - to read one day if/when we need golang
 - https://blog.heroku.com/python37-dataclasses-async-await - well written summary of what's new in python-3.7

Why pathlib is fun:

```py
Python 3.6.7 (default, Oct 22 2018, 11:32:17) 
[GCC 8.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from pathlib import Path
>>> base_path = Path('/usr')
>>> lib = base_path / 'lib'
>>> lib
PosixPath('/usr/lib')
>>> 
```

```
Python 3.6.0 (v3.6.0:41df79263a11, Dec 23 2016, 08:06:12) [MSC v.1900 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> from pathlib import Path
>>> base_path = Path('C:\Windows')
>>> system = base_path / 'system'
>>> system
WindowsPath('C:/Windows/system')
>>>
```


### junior python developer

 - https://github.com/reef-technologies/python-review-zoo/ - here we collect common/interesting review findings
 - https://treyhunner.com/2019/05/python-builtins-worth-learning/ - a friendly description of python builtin functions
 - https://write.as/chobeat/python-project-tooling-explained - a list of tools commonly used in development of python-based projects

### intermediate python developer

 - https://www.youtube.com/watch?v=cKPlPJyQrt4 - some advanced python patterns
 - https://www.youtube.com/watch?v=Bv25Dwe84g0 - Raymond Hettinger: Thinking about Concurrency
 - https://hackernoon.com/asynchronous-python-45df84b82434 - Asynchronous Python
 - https://hackernoon.com/async-through-the-looking-glass-d69a0a88b661 - Async Through the Looking Glass
 - https://www.dabapps.com/blog/api-performance-profiling-django-rest-framework/ - on where the time is spent in DRF-based APIs and what to do with it
 - https://medium.com/zendesk-engineering/hunting-for-memory-leaks-in-python-applications-6824d0518774 - Hunting for Memory Leaks in Python applications
 - https://dev.to/methane/how-to-speed-up-python-application-startup-time-nkf - how to use 3.7's `-X importtime` import time tracer
 - https://vsupalov.com/favorite-django-packages-2019/ - list of modern useful Django packages. All nice stuff, except DRF - see TastyPie below instead
 - https://django-tastypie.readthedocs.io/ - how to API in django
 - https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make - an explanation for a few uncommon errors which shouldn't really happen in the first place as good practices will prevent you from running into those... but still it might be interesting to see a few of those
 - https://nedbatchelder.com//blog/201908/why_your_mock_doesnt_work.html - on mocking right, or, why dependency injection might be a good idea
 - https://books.agiliq.com/projects/django-admin-cookbook/ - many recipes for django admin customization
 - https://stevedower.id.au/blog/most-critical-python-metric - article about an interesting code metric, testability and side effects
 
### senior python developer

 - https://realpython.com/modeling-polymorphism-django-python/ - Modeling Polymorphism in Django With Python
 - https://julien.danjou.info/high-performance-in-python-with-zero-copy-and-the-buffer-protocol/ - High-Performance in Python with Zero-Copy and the Buffer Protocol
 - https://robert-mcdermott.gitlab.io/posts/speeding-up-python-with-nim/ - Speeding Up Python with Nim(py)
 - https://pydist.com/blog/distributions-vs-releases - on troubles with consistent installations of python packages
 - https://books.agiliq.com/projects/django-multi-tenant/ - on various ways to make django apps multitenant
 
# Non-technical staff
(leaders, managers, salesmen, testers etc - people who primarily work with people and products)

## Sales

 - https://www.youtube.com/watch?v=llKvV8_T95M - Simon Sinek: If You Don't Understand People, You Don't Understand Business
 - https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action - Simon Sinek: How great leaders inspire action


## Leaders
 - https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action - Simon Sinek about why people do what they do
 - https://www.youtube.com/watch?v=RyTQ5-SQYTo - Simon Sinek about millenials, and about the why it is not people that matter but the leaders
 - https://www.youtube.com/watch?v=ReRcHdeUG9Y - Simon Sinek: Why Leaders Eat Last
 - https://www.youtube.com/watch?v=_mG-hhWL_ug - Dan Pink - Drive: The surprising truth about what motivates us

## Scrum masters

 - https://www.youtube.com/watch?v=lvs7VEsQzKY - Dan North: Patterns of Effective Teams

## Managers

 - https://www.youtube.com/watch?v=yIPbE7BssOs - Randall Koutnik: Rethinking the Developer Career Path
 - https://medium.com/better-programming/the-differences-between-a-junior-mid-level-and-senior-developer-bb2cb2eb000d - a perspective on junior vs senior developer level
 - https://dev9.com/blog-posts/2015/1/the-myth-of-developer-productivity - comprehensive look on the subject of measuring developer productivity
 - www.crisp.se/henrik.kniberg/How-we-got-rid-of-time-reports.pdf - inspiring story of Henrik Kniberg fighting bureaucracy with success
 - https://www.youtube.com/watch?v=N8KXxfF4dtg - Jurgen Appelo - Keynote: Managing for Happiness
 - https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884270610 - about theory of constraints. Beware, The Goal is written (very much like a good story|using NLP), so you won't even feel that you are learning, but you will be smarter after you finish it.
 - https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959 - Frederick P. Brooks Jr: The Mythical Man-Month
 - https://www.amazon.com/Managing-Humans-Humorous-Software-Engineering/dp/1430243147 - Michael Lopp: Managing Humans: Biting and Humorous Tales of a Software Engineering Manager
 - https://www.amazon.com/Management-3-0-Developers-Developing-Addison-Wesley/dp/0321712471 - Jurgen Appelo: Management 3.0: Leading Agile Developers, Developing Agile Leaders
 - https://www.amazon.com/Minute-Manager-Kenneth-Blanchard-Ph-D/dp/074350917X - Kenneth Blanchard Ph.D., Spencer Johnson M.D.: The One Minute Manager
 - https://youtu.be/u0LDhtoWiGg?t=2437 - Angel Medinilla - a snippet of a presentation which explains how personal goals end up working on teams
 - http://randsinrepose.com/archives/technicality/ - Michael Lopp - Technicality
 
## Lean project managers

 - https://www.youtube.com/watch?v=rHdS_4GsKmg - Clayton Christensen: Where does Growth come from? (video about Jobs To Be Done (JTBD))
 - https://klientboost.com/cro/multi-step-landing-pages/ - Johnathan Dane: How Multi Step Landing Pages Will Explode Your Conversion Rates
 - https://martinfowler.com/articles/is-quality-worth-cost.html - Is High Quality Software Worth the Cost?

# bonus material
 - https://docs.google.com/a/reef.pl/document/d/1IkixAHnuAFWPlDDPIcRg2RIYsQTVOpq26TqwZPgPSCo/edit?usp=sharing - Document with Reef employees' skills (I can help you with) and wishes (I would (not) like to work with). This information in taken into account while selecting the project process
 - https://www.youtube.com/watch?v=4u5N00ApR_k - if you are wondering how agile in corporations might look like
 - https://hbr.org/2018/11/how-our-careers-affect-our-children - if you are worried working long hours may affect your kinds. Turns out, the problem is not in the hours at all.

```
WIP:
https://www.joelonsoftware.com/
```
