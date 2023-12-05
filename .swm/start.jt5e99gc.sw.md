---
id: jt5e99gc
title: "Start "
file_version: 1.1.3
app_version: 1.18.37
---

<!--MERMAID {width:100}-->
```mermaid
graph LR
subgraph Parts of Nest
direction TB
Controllers
Services
Modules
Pipes
Filters
Guards
Interceptors
Repositories
end
Controllers-->r1["Handles incoming request"]
Services-->r2["Handles data access and
business logic"]
Modules-->r3[Groups together code]
Pipes-->r4[Validate incoing data]
Filters-->r5["Handles errors that occur
during request handling"]
Guards-->r6[Handles authentication]
Interceptors-->r7[Adds extra logic to incoming
requests or outgoing responses]
Repositories-->r8[Handles data stored in a DB]
```
<!--MCONTENT {content: "graph LR<br/>\nsubgraph Parts of Nest<br/>\ndirection TB<br/>\nControllers<br/>\nServices<br/>\nModules<br/>\nPipes<br/>\nFilters<br/>\nGuards<br/>\nInterceptors<br/>\nRepositories<br/>\nend<br/>\nControllers\\-\\-\\>r1\\[\"Handles incoming request\"\\]<br/>\nServices\\-\\-\\>r2\\[\"Handles data access and<br/>\nbusiness logic\"\\]<br/>\nModules\\-\\-\\>r3\\[Groups together code\\]<br/>\nPipes\\-\\-\\>r4\\[Validate incoing data\\]<br/>\nFilters\\-\\-\\>r5\\[\"Handles errors that occur<br/>\nduring request handling\"\\]<br/>\nGuards\\-\\-\\>r6\\[Handles authentication\\]<br/>\nInterceptors\\-\\-\\>r7\\[Adds extra logic to incoming<br/>\nrequests or outgoing responses\\]<br/>\nRepositories\\-\\-\\>r8\\[Handles data stored in a DB\\]<br/>"} --->

<br/>

## Create a Nest Module and a Controller

So in just about every Http server you're ever going to create, you're going to have what is referred to as a request response cycle

<br/>

<br/>

<!--MERMAID {width:50}-->
```mermaid
flowchart TB

subgraph Client

direction TB

Request

Response

end
Request-->Code["Code to process the

request in some way,

then respond to it"]-->Response

subgraph Server

Code

end
```
<!--MCONTENT {content: "flowchart TB\n\nsubgraph Client\n\ndirection TB\n\nRequest\n\nResponse\n\nend<br/>\nRequest\\-\\-\\>Code\\[\"Code to process the\n\nrequest in some way,\n\nthen respond to it\"\\]\\-\\-\\>Response\n\nsubgraph Server\n\nCode\n\nend"} --->

<br/>

You're going to have some amount of code that's going to process that request, you might validate some data inside the request, you might handle the request differently depending upon what route it is addressed to, and then, eventually you're going to formulate a response and send it back to whoever made the request.

<br/>

<br/>

<!--MERMAID {width:100}-->
```mermaid
graph

subgraph Client

Request

Response

end

subgraph Server

s1["Validate data

contained in

the request"]-->s2["Make sure

the user is

authenticated"]-->s3["Route the

request to a

particular function"]-->a4["Run some

business logic"]-->a5["Access a

database"]

end



Request-->Server

Server-->Response
```
<!--MCONTENT {content: "graph\n\nsubgraph Client\n\nRequest\n\nResponse\n\nend\n\nsubgraph Server\n\ns1\\[\"Validate data\n\ncontained in\n\nthe request\"\\]\\-\\-\\>s2\\[\"Make sure\n\nthe user is\n\nauthenticated\"\\]\\-\\-\\>s3\\[\"Route the\n\nrequest to a\n\nparticular function\"\\]\\-\\-\\>a4\\[\"Run some\n\nbusiness logic\"\\]\\-\\-\\>a5\\[\"Access a\n\ndatabase\"\\]\n\nend\n\n<br/>\n\nRequest\\-\\-\\>Server\n\nServer\\-\\-\\>Response"} --->

<br/>

Doesn't really matter what language framework, anything that you're using, just about every server is going to have the same series of steps.

So in Nest we have tools to help us create something called:

*   **Pipe**: Help us validate data on incoming request;

*   **Guards**: Make sure that incoming request are coming from users who are authenticated or authorized to use our application;

*   **Controllers**: Controllers contain routing logic;

*   **Service**: Where contain business logic;

*   **Repository**: Logic to access the database.

<br/>

<!--MERMAID {width:100}-->
```mermaid
graph

subgraph Client

Request

Response

end

subgraph Server

s1[Pipe]-->s2[Guard]

s2-->s3[Controller]

s3-->s4[Service]

s4-->a5[Repository]

end



Request-->Server

Server-->Response
```
<!--MCONTENT {content: "graph\n\nsubgraph Client\n\nRequest\n\nResponse\n\nend\n\nsubgraph Server\n\ns1\\[Pipe\\]\\-\\-\\>s2\\[Guard\\]\n\ns2\\-\\-\\>s3\\[Controller\\]\n\ns3\\-\\-\\>s4\\[Service\\]\n\ns4\\-\\-\\>a5\\[Repository\\]\n\nend\n\n<br/>\n\nRequest\\-\\-\\>Server\n\nServer\\-\\-\\>Response"} --->

<br/>

Others tools of Nest:

<br/>

<!--MERMAID {width:100}-->
```mermaid
graph LR
subgraph Parts of Nest
direction TB
Controllers
Services
Modules
Pipes
Filters
Guards
Interceptors
Repositories
end
Controllers-->r1["Handles incoming request"]
Services-->r2["Handles data access and
business logic"]
Modules-->r3["Groups together code"]
Pipes-->r4["Validate incoing data"]
Filters-->r5["Handles errors that occur
during request handling"]
Guards-->r6["Handles authentication"]
Interceptors-->r7["Adds extra logic to incoming
requests or outgoing responses"]
Repositories-->r8["Handles data stored in a DB"]
```
<!--MCONTENT {content: "graph LR<br/>\nsubgraph Parts of Nest<br/>\ndirection TB<br/>\nControllers<br/>\nServices<br/>\nModules<br/>\nPipes<br/>\nFilters<br/>\nGuards<br/>\nInterceptors<br/>\nRepositories<br/>\nend<br/>\nControllers\\-\\-\\>r1\\[\"Handles incoming request\"\\]<br/>\nServices\\-\\-\\>r2\\[\"Handles data access and<br/>\nbusiness logic\"\\]<br/>\nModules\\-\\-\\>r3\\[\"Groups together code\"\\]<br/>\nPipes\\-\\-\\>r4\\[\"Validate incoing data\"\\]<br/>\nFilters\\-\\-\\>r5\\[\"Handles errors that occur<br/>\nduring request handling\"\\]<br/>\nGuards\\-\\-\\>r6\\[\"Handles authentication\"\\]<br/>\nInterceptors\\-\\-\\>r7\\[\"Adds extra logic to incoming<br/>\nrequests or outgoing responses\"\\]<br/>\nRepositories\\-\\-\\>r8\\[\"Handles data stored in a DB\"\\]<br/>"} --->

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBbmVzdGpzLWNvdXJzZSUzQSUzQUFNYXJjb3NDYXN0ZWxv/docs/jt5e99gc).
