# Authentic Marketplace
Authentic Marketplace is an internet store and shopping marketplace  for quality products from a diverse selection of small and independent brands. For more information on the store, visit the landing page - [authentic.shop](https://www.authentic.shop/)

# Shop-CX-Amplify-Service
This repo contains code for the customer experience platform. The project is currently a work in progress and some features on the site may be incomplete.

# Demo
[Link](https://dev.authentic.shop)

# File Structure
To better optimize development as components and routes grow, I began following [this file structure](https://charles-stover.medium.com/optimal-file-structure-for-react-applications-f3e35ad0a145) for the application. It allows for easy separation of route-specific file development and component specific file development, and allows for component-related code to remain grouped together. Each folder in the `routes` folder corresponds to a route that displays that route's page in the application. Each folder in the `components` folder represents a reusable react component. To make it easier to follow the `container component / presentaional component` way of developing react components, each route and component contains an `index.js` file that only contains an export statement. More on this topic is discussed in the file structure topic in the link above.

# Built With
- [Styled Components](https://github.com/styled-components/styled-components) for styling
- [React Slick](https://github.com/akiran/react-slick) for slider implementation
- [React Scroll](https://github.com/fisshy/react-scroll) for scroll to top functionality
- [React Spring](https://github.com/pmndrs/react-spring) for animation
- [Use Shopping Cart](https://github.com/dayhaysoos/use-shopping-cart) for shopping cart logic

# AWS Amplify
This application utilizes AWS Amplify for rapid backend development. The Amplify framework provides easy-to-use GraphQL API, User Authentication, CI/CD, and more. [More on AWS Amplify](https://aws.amazon.com/amplify/?nc=sn&loc=0)