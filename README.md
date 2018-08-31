# myMIM (WIP)
----
## Background
myMIM is a web platform for administering a student organization. I currently run an org at UCLA, Message in a Melody, which seeks to raise awareness and funding for the fight against pediatric cancer and consists of 50+ members. Club logistics such as recruitment, payment of dues, and communication have always been strewn across numerous Google Docs, spreadsheets, Venmo, etc., so I sought to build a platform that would consolidate these operations and increase the efficiency of our day-to-day administration.

## Design
The application is built on [KeystoneJS](https://keystonejs.com/), a Node.js framework for building object-oriented applications. There are four main components to be implemented (in descending order of priority):
- CMS for Public-Facing Pages
- Communication and Action Items (such as dues invoices)
- Membership Applications
- Personal Fundraising Pages

The basic model of the application is below. Note that 'Admin' Member Group is equivalent to the 'isAdmin' distinction in KeystoneJS.

![model](https://i.imgur.com/uLvF2To.png)

## Timeline
Components #1-3 are planned to be finished by the beginning of the Fall 2018 quarter (End of September). Currently working on:
- Dockerizing deployment to AWS
- Front-end integration with CMS

# License
MIT License
Copyright (c) 2018 myMIM
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
