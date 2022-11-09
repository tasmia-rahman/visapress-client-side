import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <Container>
            <h2 className='text-center my-5 blue-color'>Blog</h2>
            <div className='blog'>
                <h4 className='blue-color'>What is cors?</h4>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. <br />For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                </p>
            </div>
            <div className='blog'>
                <h4 className='blue-color'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.All of these can save you a significant amount of development cost, as you don't need to pay as high as developing from scratch. Firebase pricing is equally flexible. Although there are pay-as-you-go services, you can start on a free plan and use primary features if your app is still at its prime. Firebase is a good choice if you want to deploy a working product on the cloud rapidly.Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.<br />Here is the list of the various ways through which we can achieve authentication,
                    <ul>
                        <li>Cookie-Based authentication</li>
                        <li>Token-Based authentication</li>
                        <li>Third party access(OAuth, API-token)</li>
                        <li>OpenId</li>
                        <li>SAML</li>
                    </ul>
                </p>
            </div>
            <div className='blog'>
                <h4 className='blue-color'>How does the private route work?</h4>
                <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.</p>
            </div>
            <div className='blog mb-5'>
                <h4 className='blue-color'>What is Node? How does Node work?</h4>
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </Container>
    );
};

export default Blog;