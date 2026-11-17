// Website
// https://example-next.com

/**
 *  3 Part of a url
 * 1. Protocal (Rules and regulations) -->  url protocal
 * 1.1  HTTP --> Hyper Text Transfer Protocal
 * 1.2 https --> Hyper Text Transfer Protocal Secure
 * 
 * 2. Domain name --> example-next.com
 *
 * 3. Resouce --(what data see you)
 *
 * */

// DNS --> Domain name server

// Real address of website is IP address -->139.89.192.134:443 (port:443, after colon )

// Client to Server --> TCP/IP Socket Connection

//TCP --> Trnsmission Contron Protocol

/**
 * Varition of  Method
 * 1. GET
 * 2. POST
 * 3. PUT
 * 4.PATCH
 * 5. DELETE
 * */

/***
 * 1. Request HEADER --> Where host the website
 * 2. Request Header --> How format data accept (HTML,JSON,GZIP)
 * 3. Request body -->
 *
 */

/**
 * Two part of Website
 * 1. Frontend (HTML,SCC, JS,React, next, angular)
 * 2. Backend: Backend handle Business logic, Security, Data management (node.js, express.js,)
 *
 *
 * */

/**
 * Website
 * 1. Static website
 * 2. Dynamic website (2 type. 1. Template based ,2. API based )
 * 2.1 Template based: Tamplate Engine (HBS, PUG, EJS) Server side renderaing
 * 2.2 API Based : (Client side rendering )
 *
 */

// Node.js is a JavaScript run time Environment (create by C++)

/* OS --> Operating System module
// FS --> File System Module
// Path Module
// HTTP Module
// URL Module
// UTIL Module
/*/

// Dependency of Node.js 1. V8 Engine. (Convert machine laguage) 2. LIBUV(Open sourse library. main work --> handle Asynchronous input output.

// LIBUV : Give access by Node.js 1. Operating System. 2. File Read-Write. 3. Compression 4. Networking )

/* Two part of LIBUV by node.js
 *1. Event Loop -->
 *.2 THREAD Pool -->
 */

//  Node.js Follows Event Driven Architecture
// Event loop : It is the heart of Node js which makes the asynchononus programming possible in node.js

/** Event Loop
 * 1. Most of the tasks of node js happens in event loop
 * 2. Recieved events and execute callback associated with each callback function
 * 3. Offloads the CPU intensive to Treead Pool
 */

// Single Threaded Server vs Multi Threaded Server

/*** Single Threaded Server
 *  I/O Intensive Task
 * CPU Intensive Tasks
 *
 *
 *
 */

/*** Multi Threaded Server
 * I/O Operation
 * CPU Operation
 */

/** Scaling
 * 1. Horizontal Scaling 2. Vertical scaling
 */

// Node.js single Threaded and Non blocking I/O
// ** Limitation of Node.js --> Is not suitable for heavy CPU intensive tasks.

/**  ----- How Event loop work ---
 * Start --> Expired Timer Callbacks --> I/O Pollong & Callbacks (file read, write, comparsiom) --> setImmidate Callbacks --> Close Callbacks
 *
 * Another callback queue work here 1. process.nextTick() Queue 2. Other Microstask Queue
 *
 */

// **** Phases Of Event Loop (Event loop has 4 most important phases)

/**
 * 1. Handle callback functions of expired timers (eg: setTimeOut())
 * 2. Handles calllback functions of I/O polling and I/O exucting (eg: Networking, file accesing ) 99% or out code get exexuted here
 * 3. Handle callback function of setImmediate timer
 * 4. Close callbcak after all execution
 */

// *****  Streams , Buffers & Modular Systems

/**
 * Streams is little pices
 * -- Different types of Streams
 * 1. Readable Stream - A stream where we can read data (eg: http request, fs.readStream)
 * 2. WritABLE Stream - a Stream where we can write data(eg: http request, responce, fs.writeStream)
 * 3. Duplex Stream - a Stream for both write and read
 * 4. Transfrom stream -  a Stream where can we reshape data
 *
 *
 * Buffer --> It is used to process a data piece by piece which is called buffer
 * Benefit of Stream and buffer : 1. It is better in terms of user experience  2. Needs short memory storage as it do not complete whole process at once
 *
 *
 * Modular system --> Two types. 1.  commonjs 2. esm module
 *
 */

// ---- Harnessing IIFE As The Ultimate module

/***
 * IIFE --> Immediately Invoked Function Expression
 */
