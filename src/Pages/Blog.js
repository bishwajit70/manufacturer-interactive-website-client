import React from 'react';

const Blog = () => {
    return (
        <div className='pb-10'>
            <h2 className='text-center font-bold text-4xl text-orange-500 pt-10 pb-5'>Question Answers</h2>
            <div className='px-2 text-slate-500 lg:w-7/12 mx-auto'>
                <h2 className='text-3xl text-slate-600 pb-3 font-bold'> 1. How will you improve the performance of a React Application?</h2>
                <h3 className='text-2xl pb-3 font-bold'>Answer:</h3>
                <p className='text-xl'>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where we can still speed up our React application.</p>
                <h4 className='text-xl font-bold pt-4'>Using Immutable Data Structures</h4>
                <p className='text-xl pt-3'>Data immutability, which comes from the functional programming world, can be applied to the design of front-end apps. It can have many benefits, such as: Zero side-effects; Immutable data objects are simpler to create, test, and use; Helps prevent temporal coupling; Easier to track changes.</p>

                <h4 className='text-xl font-bold pt-4'>Dependency optimization</h4>
                <p className='text-xl pt-3'>When considering optimizing the application bundle size, it’s worth checking how much code you are actually utilizing from dependencies.</p>
                <h4 className='text-xl font-bold pt-4'>Avoid using Index as Key for map</h4>
                <p className='text-xl pt-3'>Using the key as the index can show app incorrect data as it is being used to identify DOM elements. When we push or remove an item from the list, if the key is the same as before, React assumes that the DOM element represents the same component.</p>
                <h4 className='text-xl font-bold pt-4'>Avoiding Props in Initial States</h4>
                <p className='text-xl pt-3'>We often need to pass initial data with props to the React component to set the initial state value. It should be avoided.</p>
                <h4 className='text-xl font-bold pt-4'>Spreading props on DOM elements</h4>
                <p className='text-xl pt-3'>We should avoid spreading properties into a DOM element as it adds unknown HTML attribute, which is unnecessary and a bad practice.</p>
            </div>
            <div className='px-2 pt-20 text-slate-500 lg:w-7/12 mx-auto'>
                <h2 className='text-3xl text-slate-600 pb-3 font-bold'>2. What are the different ways to manage a state in a React application?</h2>
                <h3 className='text-2xl pb-3 font-bold'>Answer:</h3>
                <p className='text-xl'>Tehre are Four Kinds of React State to Manage. Local state, Global state, Server state, URL state.</p>
                <h4 className='text-xl font-bold pt-4'>Local State: </h4>
                <p className='text-xl pt-3'>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</p>

                <h4 className='text-xl font-bold pt-4'>Global (UI) state </h4>
                <p className='text-xl pt-3'>Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>

                <h4 className='text-xl font-bold pt-4'>Server state</h4>
                <p className='text-xl pt-3'>Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                <h4 className='text-xl font-bold pt-4'>URL state </h4>
                <p className='text-xl pt-3'>Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            </div>

            <div className='px-2 pt-20 text-slate-500 lg:w-7/12 mx-auto'>
                <h2 className='text-3xl text-slate-600 pb-3 font-bold'>3. How does prototypical inheritance work?</h2>
                <h3 className='text-2xl pb-3 font-bold'>Answer:</h3>
                <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. Like JavaScript itself, prototypical inheritance is an invaluable tool in the world of website development and server management. Specifically, prototypes and prototypical inheritance are commonly used in many web application frameworks, such as AngularJS, to allow sharing of common behavior and state among similar components.</p>
            </div>

            <div className='px-2 pt-20 text-slate-500 lg:w-7/12 mx-auto'>
                <h2 className='text-3xl text-slate-600 pb-3 font-bold'>4. Why you do not set the state directly in React?</h2>
                <h3 className='text-2xl pb-3 font-bold'>Answer:</h3>
                <p className='text-xl'>One should never update the state directly because of the following reasons: If we update it directly, calling the setState() afterward may just replace the update we made. When we directly update the state, it does not change this.
                    When we use such a high level framework, like React, they don't bother explaining to such detail why because it's far too complicated for a simple article. Understanding why would require a deep understanding of React and how the vanilla JavaScript works under the hood. React keeps a copy of the previous state of the page. It uses it as a reference point when it decides on what should be repainted and what shouldn't. When we click on a button, the entire page doesn't need to repaint the entire DOM to values that are completely identical. Making a new copy of the array retains all the pointers to the values, but it is its own distinct entity in our hardware's memory. Now they are different. When React traverses its virtual DOM, it now has the ability to register that we inserted 10 into your array and want that to be reflected in the next iteration of the DOM. A rerender is not a complete repainting of the DOM. It is triggering a repaint of the particular element we are passing in when it finds a difference. That is why we do not set the state directly in React.
                </p>
            </div>
            <div className='px-2 pt-20 text-slate-500 lg:w-7/12 mx-auto'>
                <h2 className='text-3xl text-slate-600 pb-3 font-bold'>5. What is a unit test? Why should write unit tests?</h2>
                <h3 className='text-2xl pb-3 font-bold'>Answer:</h3>
                <p className='text-xl'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application known as the unit, meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                </p>
                <p className='text-xl pt-5'>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
                <p className='text-xl pt-5'>The main objective of unit testing is to ensure that each individual part is working well and as it’s supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves. Sometimes, independent software testers also perform these tests.</p>
                <p className='text-xl pt-5'>There are two main types of unit testing: manual and automated. The automated method is the most preferred as it is faster and more accurate, but performing this task manually is also an option. The manual approach has a step by step instructional procedure that helps testers perform this task efficiently. The automated unit testing usually involves the developer first writing a section of the code in the application so that the function can be tested.</p>
                <p className='text-xl pt-5'>After that, when the application is deployed, they remove the test code. They can also isolate the function to test it in a more thorough way. This helps with identifying any dependency that might be there between the tested code and the other data spaces. These dependencies can then be eliminated.</p>
            </div>
        </div>
    );
};

export default Blog;