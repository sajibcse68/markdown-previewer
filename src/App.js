import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: `
# Hi, I'm Sajib Khan
(\*\*Senior Software Engineer\*\*)

___

## My Profiles:
  - [Stackoverflow](https://stackoverflow.com/users/4133798/sajib-khan?tab=topactivity) - More than \`12k\` Reputations
  - [GitHub](https://github.com/sajibcse68) - [MyDailyLearn](https://github.com/sajibcse68/MyDailyLearn)
  - [LinkedIn](https://www.linkedin.com/in/sajibkhan/)

![StackOverflow](https://stackexchange.com/users/flair/5162659.png)

___

- I want to work with:
  - \`JavaScript\`
  - \`Vue.js / vuejs2\`
  - \`React\`
  - \`Git\`

___

a   
<br\>br  
    
b


Here are some techs I've worked on:

1. Developed Kubernetes Dashboard for AppsCode using Vue.js 2, Vuex, JavaScript, Axios. Designed & developed about thousands of Vue Components from scratch, reuse the components, made the state reactive using Vuex, async API calls, used also Vue Plugins, Filtering, Mixins, etc. 
2. Added e2e testing for whole websites using Puppeteer, Mocha, Chai.
3. Serverless & FaaS: Developed a project using AWS Lamda, API-gateway, create & deploy APIs, resource, policy, roles, body mapping templates, etc. Validate Data with Model mapping, json schema. Use DynamoDB as data storage.
4. Developed another website using GraphQL, Vue.js 2, VueX Apollo, in client-side and Node.js server, Prisma in Backend. 
5. Strong knowledge of JavaScript, Vue.js, Vue.js 2, Git. Write codes, Build, Deploy the codes. Experienced with Firebase, AWS, Kubernetes, Docker, GitHub.

___

\`\`\`
Additional Skills:
------------------
- 4+ years professional front end development experience
- Strong hand-coding ability with latest JavaScript (ES6+)
- 
- Strong Experience with Git source control, command line tools
- Lead the frontend team currently
- Strong understanding of JavaScript Asynchronous programming, Scoping, Hoisting, Closure, Prototype/Inheritance.
- Experience mentoring freshers (Youtube: https://goo.gl/xGU6aJ)
- Experience with implementing & maintaining e2e testing using framework like Puppeteer, Mocha, Chai, etc.
- Experience with Backend technology (Node.js)
- Fluent knowledge of latest HTML5/CSS3/SaaS/Bootstrap/Bulma standards and best practices
- Familiar with GraphQL, Apollo Client, Prisma, MDN web (material design), WebSockets, RESTFul & RPC Based APIs.
- Familiar with AWS cloud Architecture and Serverless (FaaS, Lamda, API-gateway, Resource, Policy, Roles, DynamoDB)

- Strong competitive programming background - Former participants in ICPC, NCPC, Regional various programming contests
- Experience working with developers of open source projects to resolve bugs or make improvements

- Love & passionate about learning new technologies and skills daily
- Regular using Slack/Zoom like software
\`\`\`

___

I believe:

> Only I can change my life. No one can do it for me




`
    }
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  ContentToMarkup(content) {
    const markup = global.marked(content, { breaks: true, sanitize: true });
    return { __html: markup };
  }
  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <div className="columns">
          <div className="column is-offset-1 is-5">
            <textarea
              id="editor"
              className="textarea"
              rows="20"
              cols="10"
              onChange={this.handleContentChange}
              value={this.state.content}
            >
            </textarea>
          </div>
          <div className="column is-offset-1 is-5">
            <div id="viewer">
              <div
                  id="preview"
                  dangerouslySetInnerHTML={this.ContentToMarkup(this.state.content)}>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
