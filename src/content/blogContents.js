import angular from "../assets/img/angular_img.jpeg";
import server from "../assets/img/server.jpeg";

const blogs = [
  {
    title: "Server Side Rendering with Angular Universal",
    description:
      "Making a simple server side rendered app using Angular Universal and utilising TransferState class to send data from the server to the client",
    img: angular,
    link: "https://blog.rishabhjairath.in/posts/server-side-rendering-angular",
  },
  {
    title: "Building a static web server with Express",
    description:
      "Here we build a static web server using plain NodeJS first, and then the same using Express. Express is faster and a lot more convenient",
    img: server,
    link: "https://blog.rishabhjairath.in/posts/static-web-server-express",
  },
];

export { blogs };
